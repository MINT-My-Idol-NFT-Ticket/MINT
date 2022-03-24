import { Card, CardActions, CardMedia, Typography } from '@mui/material'

import '../../styles/MintTradeCard.css'

export default function MintTradeCard({ cardData }) {
  return (
    <div className={`MintTradeCard`}>
      <Card sx={{ border: '1px solid grey' }}>
        <CardMedia component="img" image={cardData.img} alt="nft사진" sx={{ height: '175px' }} />
        <CardActions sx={{ padding: '1px', height: '30px' }}>
          <CardMedia component="img" image={etherIcon} sx={{ width: '10px', ml: '3px', mr: '5px' }} />
          <Typography>{cardData.price}</Typography>
        </CardActions>
      </Card>
    </div>
  )
}

const etherIcon = 'https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg'
