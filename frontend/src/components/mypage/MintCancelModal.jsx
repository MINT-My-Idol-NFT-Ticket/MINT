import { Modal, Box, Typography, Card } from '@mui/material'
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

  const [tokenDatas, setTokenDatas] = useState([])
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
        <Typography>취소하실 콘서트를 선택해주세요</Typography>
        <Card>
          {tokenDatas === [] ? (
            <></>
          ) : (
            tokenDatas.map((data, idx) => (
              <Box
                key={`${tokenDatas.tokenId}-${tokenDatas.contractAddress}`}
                onClick={() => {
                  setTarget(idx)
                }}>
                <Typography>{data.title}</Typography>
                <Typography>
                  {data.date}-{data.time}
                </Typography>
                <Typography>
                  좌석 정보: {data.area}-{data.seat.seat}
                </Typography>
              </Box>
            ))
          )}
        </Card>
        <input type="text" value={userPK} onChange={inputUserPK} />
        <button onClick={cancel}>취소</button>
      </Box>
    </Modal>
  )
}
