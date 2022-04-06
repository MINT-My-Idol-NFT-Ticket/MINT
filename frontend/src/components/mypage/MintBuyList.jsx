import { Box, Button } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { burnTicket } from '../../functions/erc/ERCfunctions'

import MintHorizontalCard from '../common/MintHorizontalCard'
import MintHorizontalSkeleton from '../skeleton/MintHorizontalSkeleton'
import MintCancelModal from './MintCancelModal'

export default function MintBuyList({ contractList }) {
  const navigate = useNavigate()

  const [payOpen, setPayOpen] = useState(false)
  const [targetConcertId, setTargetConcertId] = useState(null)

  const handleNavigation = id => {
    navigate(`/concert/detail/${id}`)
  }

  const handlePayOpen = id => {
    setPayOpen(true)
    setTargetConcertId(id)
  }
  const handlePayClose = () => {
    setPayOpen(false)
    setTargetConcertId(null)
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
              <Button variant="outlined" size="small" sx={{ width: '45%' }} onClick={() => handlePayOpen(concert.id)}>
                예매 취소
              </Button>
            </MintHorizontalCard>
          ))}
      <MintCancelModal open={payOpen} handleClose={handlePayClose} targetConcertId={targetConcertId} />
    </Box>
  )
}
