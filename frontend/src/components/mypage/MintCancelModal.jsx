import { Modal, Box, Typography, Card, Button, Input, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { getRequest, putRequest } from '../../api/requests'
import { getTicketList, getTokenURI, burnTicket } from '../../functions/erc/ERCfunctions'

import { checkMessage, errorMessage, timerMessage } from '../../functions/alert/alertFunctions'
import useBrightness from '../../hooks/useBrightness'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  pt: 2,
  px: 2,
  pb: 3,
}

export default function MintCancelModal({ open, handleClose, targetConcertId }) {
  const userAddress = sessionStorage.getItem('address')
  const [tokenDatas, setTokenDatas] = useState([1])
  const [cancelTarget, setCancelTarget] = useState({})
  const [userPK, setUserPK] = useState('')
  const [bright, _] = useBrightness()
  const [selected, setSelected] = useState(false)

  const getContractAddress = async () => {
    const concertData = await getRequest(`api/concert/${targetConcertId}`)
    const tokenList = await getTicketList(concertData.data.contractAddress, userAddress)
    const metaDatas = []
    for (let tokenId of tokenList) {
      const uri = await getTokenURI(concertData.data.contractAddress, tokenId.tokenId)
      const tokenMetaData = await getRequest(`api/ticket/uriData/${uri}`)
      metaDatas.push({
        ...tokenMetaData.data,
        tokenId: tokenId.tokenId,
        contractAddress: concertData.data.contractAddress,
      })
    }
    setTokenDatas(metaDatas)
  }

  const setTarget = idx => {
    setCancelTarget(idx)
  }

  const inputUserPK = e => setUserPK(e.target.value)

  const cancelTicketing = async () => {
    try {
      const address = tokenDatas[cancelTarget].contractAddress
      const id = tokenDatas[cancelTarget].tokenId
      const seatId = JSON.parse(tokenDatas[cancelTarget].seat).id
      await burnTicket(address, userPK, id)
      checkMessage(
        '예매가 취소되었습니다',
        () => {
          window.location.reload()
        },
        bright,
      )
      putRequest(`api/${seatId}/cancel`)
    } catch {
      errorMessage('예매 취소에 실패했습니다', () => {}, bright)
    }
  }

  const cancel = () => {
    timerMessage('잠시 기다려주세요', '취소를 처리 중입니다', cancelTicketing, bright)
  }

  useEffect(() => {
    setSelected(false)
    if (targetConcertId) {
      getContractAddress()
    }
    return
  }, [targetConcertId])

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description">
      <Box sx={{ ...style, minWidth: '300px', maxWidth: '340px' }}>
        <Typography
          sx={{
            fontSize: 20,
            marginBottom: 3,
          }}>
          취소하실 콘서트를 선택해주세요
        </Typography>
        <Card
          sx={{
            marginBottom: 1,
            padding: '0 4px',
            border: `2px solid ${selected ? '#8811dd' : 'transparent'}`,
            cursor: 'pointer',
          }}
          onClick={() => {
            setSelected(!selected)
          }}>
          {tokenDatas === [] ? (
            <></>
          ) : (
            tokenDatas.map((data, idx) => (
              <Box
                key={`${tokenDatas.tokenId}-${tokenDatas.contractAddress}`}
                onClick={() => {
                  setTarget(idx)
                }}>
                <Typography
                  sx={{
                    fontSize: 18,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    marginBottom: 1,
                    fontWeight: 'bold',
                  }}>
                  {data.title}
                </Typography>
                <Typography sx={{ float: 'right' }}>
                  {data.date} {data.time}
                </Typography>
              </Box>
            ))
          )}
        </Card>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '16px 0' }}>
          <TextField
            size="small"
            label="개인키를 입력해주세요."
            placeholder="0xabcd1234abcd1234abcd1234abcd1234abcd1234"
            value={userPK}
            onChange={inputUserPK}
            sx={{ width: '75%' }}
          />
          <Button variant="contained" onClick={cancel} sx={{ width: '20%', marginLeft: 2 }}>
            취소
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}
