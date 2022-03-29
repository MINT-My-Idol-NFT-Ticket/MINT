import { Card, CardMedia, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import '../../styles/MintTradeDetailContents.css'

function MintTradeDetailContents() {
  const location = useLocation()

  return (
    <div className="MintTradeDetailContents">
      <Typography className="MintTradeDetailContents__data">
        Owner Account : {location.state.title}
        <br />
        tokenID : {location.state.tokenId}
        <br />
        Price : {location.state.price}
      </Typography>
      <Card className="MintTradeDetailContents__image">
        <CardMedia component="img" image={location.state.imgUrl} alt="nft사진" />
      </Card>
    </div>
  )
}

export default MintTradeDetailContents
