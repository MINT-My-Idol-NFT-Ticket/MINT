//packages
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { width } from '@mui/system'
import { useLocation } from 'react-router-dom'
//components
import MintBtn from '../common/MintBtn'

export default function MintTradeDetailContents() {
  const location = useLocation()

  return (
    <Box sx={{ width: '100%' }}>
      <Typography
        sx={{
          color: 'rgb(32, 129, 226)',
          fontSize: '16px',
          boxSizing: 'border-box',
          padding: '15px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          lineHeight: 'normal',
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
          <Typography sx={{ boxSizing: 'border-box', textAlign: 'center' }}>owner By</Typography>
          <Typography sx={{ boxSizing: 'border-box', textAlign: 'center' }}>{location.state.ownerAccount}</Typography>
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
        <Typography
          sx={{
            boxSizing: 'border-box',
            padding: '0 20px 15px 20px',
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: '600',
          }}>
          Price
        </Typography>
        <Typography
          sx={{
            boxSizing: 'border-box',
            padding: '0 20px 15px 20px',
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: '600',
          }}>
          {location.state.price}
        </Typography>
      </Box>
      <MintBtn name="결제하기"></MintBtn>
    </Box>
  )
}
