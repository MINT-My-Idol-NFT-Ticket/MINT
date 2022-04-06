import { Modal, Box, Typography, Card, Button, Input, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getRequest, putRequest } from '../../api/requests'
import { getTicketList, getTokenURI, burnTicket } from '../../functions/erc/ERCfunctions'

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
  const navigate = useNavigate()

  const [tokenDatas, setTokenDatas] = useState([1])
  const [cancelTarget, setCancelTarget] = useState({})
  const [userPK, setUserPK] = useState('')

  const getContractAddress = async () => {
    const concertData = await getRequest(`api/concert/${targetConcertId}`)
    const tokenList = await getTicketList(concertData.data.contractAddress, userAddress)
    const metaDatas = []
    for (let tokenId of tokenList) {
      const uri = await getTokenURI(concertData.data.contractAddress, tokenId.tokenId)
      const tokenMetaData = await getRequest(uri)
      console.log(tokenMetaData)
      metaDatas.push({
        ...tokenMetaData.data,
        tokenId: tokenId.tokenId,
        contractAddress: concertData.data.contractAddress,
      })
    }
    setTokenDatas(metaDatas)
  }

  const setTarget = idx => {
    console.log(idx)
    setCancelTarget(idx)
  }

  const inputUserPK = e => setUserPK(e.target.value)

  const cancel = async () => {
    const address = tokenDatas[cancelTarget].contractAddress
    const id = tokenDatas[cancelTarget].tokenId
    const seatId = tokenDatas[cancelTarget].seat.id
    await burnTicket(address, userPK, id)
    putRequest('api/ticket', { seatId })
    navigate('/home')
  }

  useEffect(() => {
    if (targetConcertId) {
      getContractAddress()
    }
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
        <Card sx={{ marginBottom: 1, padding: '0 4px' }}>
          {tokenDatas === [] ? (
            <></>
          ) : (
            tokenDatas.map((data, idx) => (
              <Box
                key={`${tokenDatas.tokenId}-${tokenDatas.contractAddress}`}
                onClick={() => {
                  setTarget(idx)
                }}>
                {/* <Typography>{data.title}</Typography>
                <Typography>
                  {data.date} {data.time}
                </Typography>
                <Typography>
                  좌석 정보: {data.area}-{data.seat.seat}
                </Typography> */}
                <Typography
                  sx={{
                    fontSize: 18,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    marginBottom: 1,
                  }}>
                  테스트테스트테스트테스트테스트테스트테스트테스트
                </Typography>
                <Typography>0000-00-00 00:00</Typography>
                <Typography>좌석 정보: 좌석 좌석</Typography>
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
