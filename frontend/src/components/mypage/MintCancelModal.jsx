import { Modal, Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getRequest } from '../../api/requests'
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
    const response = await burnTicket(address, userPK, id)
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
      <Box sx={{ ...style, minWidth: '340px', maxWidth: '414px', zIndex: '-1' }}>
        <Typography variant="h6" sx={{ marginBottom: '20px', textAlign: 'center' }}>
          {tokenDatas === [] ? (
            <></>
          ) : (
            tokenDatas.map((data, idx) => (
              <Box key={`${tokenDatas.tokenId}-${tokenDatas.contractAddress}`}>
                <p
                  onClick={() => {
                    setTarget(idx)
                  }}>
                  {JSON.stringify(data)}
                </p>
              </Box>
            ))
          )}
          <input type="text" value={userPK} onChange={inputUserPK} />
          <button onClick={cancel}>취소</button>
        </Typography>
      </Box>
    </Modal>
  )
}
