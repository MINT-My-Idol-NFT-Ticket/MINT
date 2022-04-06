import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import MintHorizontalCard from '../common/MintHorizontalCard'
import MintHorizontalSkeleton from '../skeleton/MintHorizontalSkeleton'

export default function MintBuyList({ contractList }) {
  const navigate = useNavigate()
  console.log(contractList)
  const handleNavigation = id => {
    navigate(`/concert/detail/${id}`)
  }

  return (
    <Box>
      {contractList.length === 0
        ? [0, 0, 0, 0, 0].map((v, i) => <MintHorizontalSkeleton key={i} notOpen={false} />)
        : contractList &&
          contractList.map((concert, index) => (
            <MintHorizontalCard
              key={`${concert.id}-${concert.startDate}-${index}`}
              concertData={concert}
              passDetail={handleNavigation}>
              <Button variant="contained" disabled size="small" sx={{ width: '45%' }}>
                예매하기
              </Button>
            </MintHorizontalCard>
          ))}
    </Box>
  )
}
