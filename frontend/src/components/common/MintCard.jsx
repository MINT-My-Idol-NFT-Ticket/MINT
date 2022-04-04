//modules
import { Card, CardMedia, CardActions, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import '../../styles/MintTradeContents.css'

export default function MintCard({ cardData, type }) {
  const navigate = useNavigate()

  const handleDetail = () => {
    type === 'trade'
      ? navigate(`/trade/ticket/${cardData.number}`, { state: cardData })
      : alert('잘못된 페이지 접근 MintCard.jsx의 handleDetail()')
  }

  return (
    <Box
      sx={{
        width: '50%',
        margin: '10px 0',
        padding: '0 10px',
        boxSizing: 'border-box',
      }}
      onClick={handleDetail}>
      <Card
        className="tradeCard__container"
        sx={{ border: '1px solid rgba(0, 0, 0, 0.2)', boxShadow: '0', cursor: 'pointer' }}>
        <CardMedia component="img" image={cardData.imgUrl} alt="nft사진" sx={{ height: '175px' }} />
        {type === 'trade' ? (
          <CardActions sx={{ padding: '1px', height: '30px' }}>
            <CardMedia component="img" image={etherIcon} sx={{ width: '10px', ml: '3px', mr: '5px' }} />
            <Typography>{cardData.price}</Typography>
          </CardActions>
        ) : (
          ''
        )}
      </Card>
    </Box>
  )
}

//etherium 아이콘 이미지
const etherIcon = 'currency.png'
