import { Card, CardMedia, CardActions, Typography, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getTokenURI } from '../../functions/erc/ERCfunctions'
import { getRequest } from '../../api/requests'

import MintCollectionSingleSkeletion from '../skeleton/MintCollectionSingleSkeletion'

export default function MintCard2({ tokenId }) {
  const [tokenURI, setTokenURI] = useState(null)
  const navigate = useNavigate()
  const showTicket = () => {
    navigate(`/mypage/ticket`, { state: { ...tokenURI.data } })
  }
  const getURI = async () => {
    const uri = await getTokenURI(tokenId.contractAddress, tokenId.tokenId)
    let response = 'dfaqs'
    if (uri) response = await getRequest(uri)
    setTokenURI(response)
  }

  useEffect(() => {
    getURI()
  }, [])

  return (
    <Box onClick={showTicket}>
      {tokenURI === null ? (
        <MintCollectionSingleSkeletion />
      ) : (
        <Card>
          {tokenURI === '' ? (
            <></>
          ) : (
            <CardMedia component="img" image={tokenURI.data.img.gif} alt="nft사진" sx={{ height: '175px' }} />
          )}
        </Card>
      )}
    </Box>
  )
}

//etherium 아이콘 이미지
const etherIcon = 'https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg'
