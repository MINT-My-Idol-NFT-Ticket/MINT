import { Card, CardMedia, Box, Button, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getTokenURI } from '../../functions/erc/ERCfunctions'
import { getRequest } from '../../api/requests'

import MintCollectionSingleSkeletion from '../skeleton/MintCollectionSingleSkeletion'

export default function MintCard2({ tokenId }) {
  const [tokenURI, setTokenURI] = useState(null)
  const navigate = useNavigate()
  const showTicket = () => {
    navigate(`/mypage/ticket`, { state: { ...tokenURI.data, tokenId } })
  }
  const getURI = async () => {
    try {
      const uri = await getTokenURI(tokenId.contractAddress, tokenId.tokenId)
      let response = ''
      if (uri) response = await getRequest(`api/ticket/uriData/${uri}`)
      setTokenURI(response)
    } catch {
      navigate('/error404')
    }
  }

  useEffect(() => {
    getURI()
  }, [])

  return (
    <Box onClick={showTicket}>
      {tokenURI == null || !tokenURI ? (
        <MintCollectionSingleSkeletion />
      ) : (
        <Card style={{ cursor: 'pointer' }}>
          {tokenURI === '' ? (
            <></>
          ) : (
            <>
              <CardMedia
                component="img"
                image={JSON.parse(tokenURI.data.img).gif}
                alt="nft사진"
                sx={{ height: '175px' }}
              />
              <Typography sx={{ fontSize: '10px', wordBreak: 'break-all', marginTop: '2px', color: 'gray' }}>
                <marquee scrolldelay="100">
                  {tokenURI.data.title} on {tokenURI.data.date}
                </marquee>
              </Typography>
            </>
          )}
        </Card>
      )}
    </Box>
  )
}
