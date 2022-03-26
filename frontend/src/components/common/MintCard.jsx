//modules
import '../../styles/MintCard.css'
//components
import { Card, CardMedia, CardActions, Typography } from '@mui/material'

export default function MintCard({ cardData, type }) {
  /**
   * 박창현
   * type props에 따라 가격 표시 여부를 구분하여 출력하기 위해 구현했습니다.
   */
  const setType =
    type === 'trade' ? (
      <CardActions sx={{ padding: '1px', height: '30px' }}>
        <CardMedia component="img" image={etherIcon} sx={{ width: '10px', ml: '3px', mr: '5px' }} />
        <Typography>{cardData.price}</Typography>
      </CardActions>
    ) : (
      ''
    )

  return (
    <div className={`MintCard`}>
      <Card sx={{ border: '1px solid grey' }}>
        <CardMedia component="img" image={cardData.imgUrl} alt="nft사진" sx={{ height: '175px' }} />
        {setType}
      </Card>
    </div>
  )
}

//etherium 아이콘 이미지
const etherIcon = 'https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg'
