import { Modal, Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
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
  const [tokenDatas, setTokenDatas] = useState([])

  const getContractAddress = async () => {
    const concertData = await getRequest(`api/concert/${targetConcertId}`)
    const tokenList = await getTicketList(concertData.data.contractAddress, userAddress)
    const metaDatas = []
    for (let tokenId of tokenList) {
      const uri = await getTokenURI(concertData.data.contractAddress, tokenId.tokenId)
      const tokenMetaData = await getRequest(uri)
      metaDatas.push({
        ...tokenMetaData.data,
        tokenId: tokenId.tokenId,
        contractAddress: concertData.data.contractAddress,
      })
    }
    setTokenDatas(metaDatas)
  }

  const cancel = async (contractAddress, tokenId) => {
    const response = await burnTicket(contractAddress, tokenId)
    console.log(response)
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
            tokenDatas.map(data => (
              <Box key={`${tokenDatas.tokenId}-${tokenDatas.contractAddress}`}>
                <p>{JSON.stringify(data)}</p>
                <button
                  onClick={() => {
                    cancel(tokenDatas.contractAddress, tokenDatas.tokenId)
                  }}>
                  취소
                </button>
              </Box>
            ))
          )}
        </Typography>
      </Box>
    </Modal>
  )
}
