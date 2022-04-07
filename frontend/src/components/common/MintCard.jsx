import { Card, CardMedia, CardActions, Typography, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import MintCollectionSingleSkeletion from '../skeleton/MintCollectionSingleSkeletion'

export default function MintCard2({ tokenURI }) {
  const navigate = useNavigate()
  console.log(tokenURI)
  const showTicket = () => {
    navigate(`/trade/ticket`, { state: { ...tokenURI.data } })
  }

  return (
    <Box onClick={showTicket}>
      {tokenURI === undefined ? (
        <MintCollectionSingleSkeletion />
      ) : (
        <>
          <Card sx={{ height: '400px' }}>
            {tokenURI === {} ? (
              <></>
            ) : (
              <CardMedia component="img" image={JSON.parse(tokenURI.img).gif} alt="nft사진" sx={{ height: '175px' }} />
            )}
          </Card>
          <Typography>가격</Typography>
        </>
      )}
    </Box>
  )
}
