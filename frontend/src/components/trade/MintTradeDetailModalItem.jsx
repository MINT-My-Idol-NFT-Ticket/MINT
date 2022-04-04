import { Box, Card, Typography, CardMedia } from '@mui/material'

export default function MintTradeDetailModalItem({ state }) {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        margin: '20px auto',
      }}>
      <Box sx={{ display: 'flex' }}>
        <Card sx={{ width: '70px' }}>
          <CardMedia component="img" image={state.imgUrl} alt="nft사진" />
        </Card>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', ml: '5px' }}>
          <Typography
            sx={
              ({
                fontSize: '7px',
                color: 'rgb(32, 129, 226)',
              },
              text)
            }>
            {state.ownerAccount}
          </Typography>
          <Typography
            sx={
              ({
                fontSize: '9px',
              },
              text)
            }>
            {state.title}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ margin: 'auto 0' }}>
        <Typography sx={{ fontSize: '15px' }}> {state.price} SSF</Typography>
      </Box>
    </Box>
  )
}

//styles
const text = { boxSizing: 'border-box', padding: '3px' }
