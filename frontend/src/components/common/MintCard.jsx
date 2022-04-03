//modules
import { Card, CardMedia, CardActions, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function MintCard({ cardData, type }) {
  const navigate = useNavigate()

  /**
   * 박창현
   * type props에 따라 가격 표시 여부를 구분하여 출력하기 위해 구현했습니다.
   */
  const setType =
    type === 'trade' ? (
      <CardActions sx={{ padding: '1px', height: '30px' }}>
        <CardMedia component="img" image={etherIcon} sx={{ width: '15px', ml: '3px', mr: '5px' }} />
        <Typography>{cardData.price}</Typography>
      </CardActions>
    ) : (
      ''
    )

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
      <Card sx={{ border: '1px solid grey' }}>
        <CardMedia component="img" image={cardData.imgUrl} alt="nft사진" sx={{ height: '175px' }} />
        {setType}
      </Card>
    </Box>
  )
}

//etherium 아이콘 이미지
const etherIcon = 'currency.png'
