import { Card, CardMedia, CardActions, Typography, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getTokenURI } from '../../functions/erc/ERCfunctions'
import { getRequest } from '../../api/requests'

export default function MintCard2({ cardData, type, tokenId }) {
  const [tokenURI, setTokenURI] = useState('')

  const getURI = async () => {
    const uri = await getTokenURI(tokenId.contractAddress, tokenId.tokenIds)
    let response = ''
    if (uri) response = await getRequest(uri)
    console.log(response)
    setTokenURI(response)
  }

  useEffect(() => {
    getURI()
  }, [])

  // const handleDetail = () => {
  //   type === 'trade'
  //     ? navigate(`/trade/ticket/${cardData.number}`, { state: cardData })
  //     : alert('잘못된 페이지 접근 MintCard.jsx의 handleDetail()')
  // }

  return (
    <Box
      sx={{
        width: '50%',
        margin: '10px 0',
        padding: '0 10px',
        boxSizing: 'border-box',
      }}>
      <Card sx={{ border: '1px solid grey' }}>
        {tokenURI === '' ? (
          <></>
        ) : (
          <CardMedia component="video" image={tokenURI.data.img} alt="nft사진" sx={{ height: '175px' }} />
        )}
      </Card>
    </Box>
  )
}

//etherium 아이콘 이미지
const etherIcon = 'https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg'
