import { Card, CardMedia, CardActions, Typography, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getTokenURI } from '../../functions/erc/ERCfunctions'
import { getRequest } from '../../api/requests'

export default function MintCard2({ cardData, type, tokenId }) {
  const [tokenURI, setTokenURI] = useState('')
  const navigate = useNavigate()
  const showTicket = () => {
    navigate(`/mypage/ticket`, { state: { tokenURI } })
  }
  const getURI = async () => {
    const uri = await getTokenURI(tokenId.contractAddress, tokenId.tokenId)
    let response = 'dfaqs'
    if (uri) response = await getRequest(uri)
    console.log(response)
    setTokenURI(response)
  }

  useEffect(() => {
    getURI()
  }, [])

  return (
    <Box
      sx={{
        width: '50%',
        margin: '10px 0',
        padding: '0 10px',
        boxSizing: 'border-box',
      }}
      onClick={showTicket}>
      <Card sx={{ border: '1px solid grey' }}>
        {tokenURI === '' ? (
          <></>
        ) : (
          <CardMedia component="image" image={tokenURI.data.img.gif} alt="nft사진" sx={{ height: '175px' }} />
        )}
      </Card>
    </Box>
  )
}

//etherium 아이콘 이미지
const etherIcon = 'https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg'
