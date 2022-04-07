import { Card, CardMedia, CardActions, Typography, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getSaleTicketPrice } from '../../functions/erc/ERCfunctions'

import MintCollectionSingleSkeletion from '../skeleton/MintCollectionSingleSkeletion'

export default function MintCard2({ tokenURI }) {
  const navigate = useNavigate()
  const [price, setPrice] = useState(null)
  console.log(tokenURI)
  const showTicket = () => {
    navigate(`/trade/ticket`, { state: { ...tokenURI.data } })
  }
  const getPrice = async () => {
    console.log(tokenURI.saleContract, tokenURI.tokenId)
    const response = await getSaleTicketPrice(tokenURI.saleContract, tokenURI.tokenId)
    console.log(response)
  }

  useEffect(() => {
    getPrice()
  }, [])

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
