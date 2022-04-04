//packages
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
//components
import MintBtn from '../common/MintBtn'
import MintTradeDetailModal from './MintTradeDetailModal'

export default function MintTradeDetailContents() {
  const location = useLocation()
  const [payOpen, setPayOpen] = useState(false)
  const handlePayOpen = () => setPayOpen(true)
  const handlePayClose = () => setPayOpen(false)

  const ticketInfo = {
    img: location.state.imgUrl,
    title: location.state.title,
    price: location.state.price,
    owner: location.state.ownerAccount,
    tokenId: location.state.tokenId,
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Typography
        sx={{
          color: 'rgb(32, 129, 226)',
          fontSize: '16px',
          boxSizing: 'border-box',
          padding: '15px',
          overflow: 'hidden',
        }}>
        {location.state.concert}
      </Typography>
      <Typography
        sx={{
          fontSize: '30px',
          fontWeight: '600',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          lineHeight: 'normal',
          boxSizing: 'border-box',
          padding: '0 0 15px 15px',
        }}>
        {location.state.title}
      </Typography>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '10px',
        }}>
        <CardMedia component="img" image={location.state.imgUrl} alt="nft사진" />
        <CardContent
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            mb: '-10px',
          }}>
          <Typography sx={owner}>owner By</Typography>
          <Typography sx={owner}>{location.state.ownerAccount}</Typography>
        </CardContent>
      </Card>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '30px 0',
          boxSizing: 'border-box',
        }}>
        <Typography sx={price}>Price</Typography>
        <Typography sx={price}>{location.state.price}</Typography>
      </Box>
      <Box>
        <MintTradeDetailModal open={payOpen} handleClose={handlePayClose} ticketInfo={ticketInfo} />
        <MintBtn name="결제하기" link={{ handleClick: handlePayOpen }} passData={location.state} />
      </Box>
    </Box>
  )
}

//styles
const price = {
  boxSizing: 'border-box',
  padding: '0 20px 15px 20px',
  textAlign: 'center',
  fontSize: '24px',
  fontWeight: '600',
}

const owner = { boxSizing: 'border-box', textAlign: 'center' }
