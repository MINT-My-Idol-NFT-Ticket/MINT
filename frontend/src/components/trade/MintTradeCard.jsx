import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

import '../../styles/MintTradeCard.css'

export default function MintTradeCard({ cardData }) {
  return (
    <div className={`MintTradeCard`}>
      <Card sx={{ border: '1px solid grey' }}>
        <CardMedia component="img" image={cardData.img} alt="nft사진"></CardMedia>
        <CardContent>
          <Typography variant="h6" sx={{ fontSize: '15px' }}>
            {cardData.owner}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '13px' }}>
            {cardData.title}
          </Typography>
        </CardContent>
        <CardActions>
          <CardMedia
            component="img"
            image="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
            sx={{ width: '10px', marginRight: '10px' }}></CardMedia>
          <Typography>{cardData.price}</Typography>
          <IconButton>
            <FavoriteIcon sx={{ width: '15px', align: 'right' }} />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}
