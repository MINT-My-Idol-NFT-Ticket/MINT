import { Card, CardMedia, CardActions, Typography, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getSaleTicketPrice } from '../../functions/erc/ERCfunctions'

import MintCollectionSingleSkeletion from '../skeleton/MintCollectionSingleSkeletion'

export default function MintCard({ tokenURI }) {
  console.log(tokenURI)
  const navigate = useNavigate()
  const showTicket = () => {
    navigate(`/trade/ticket`, { state: { tokenURI } })
  }

  return (
    <Box onClick={showTicket}>
      {tokenURI === undefined ? (
        <MintCollectionSingleSkeletion />
      ) : (
        <>
          <Card>
            {tokenURI === {} ? (
              <></>
            ) : (
              <>
                <CardMedia
                  component="img"
                  image={JSON.parse(tokenURI.img).gif}
                  alt="nft사진"
                  sx={{ height: '175px' }}
                />
                <Typography>t</Typography>
              </>
            )}
          </Card>
        </>
      )}
    </Box>
  )
}
