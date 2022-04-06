import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import MintHorizontalCard from '../common/MintHorizontalCard'
import MintHorizontalSkeleton from '../skeleton/MintHorizontalSkeleton'
import MintCancelModal from './MintCancelModal'

export default function MintBuyList({ contractList, loading }) {
  const navigate = useNavigate()

  const [payOpen, setPayOpen] = useState(false)
  const [targetConcertId, setTargetConcertId] = useState(null)

  const handleNavigation = id => {
    navigate(`/concert/detail/${id}`)
  }

  const handlePayOpen = id => {
    setPayOpen(true)
    // setTargetConcertId(id)
  }
  const handlePayClose = () => {
    setPayOpen(false)
    setTargetConcertId(null)
  }

  return (
    <Box>
      {loading ? (
        [0, 0, 0, 0, 0].map((v, i) => <MintHorizontalSkeleton key={i} notOpen={false} />)
      ) : (
        <>
          {contractList.length === 0 ? (
            <Typography
              sx={{
                color: 'text.primary',
                opacity: '.5',
                position: 'absolute',
                top: '55%',
                left: '50%',
                transform: 'translate(-50%)',
              }}>
              구매 내역이 없습니다
            </Typography>
          ) : (
            contractList.map((concert, index) => (
              <MintHorizontalCard
                key={`${concert.id}-${concert.startDate}-${index}`}
                concertData={concert}
                passDetail={handleNavigation}>
                <Button variant="outlined" size="small" sx={{ width: '45%' }} onClick={() => handlePayOpen(concert.id)}>
                  예매 취소
                </Button>
              </MintHorizontalCard>
            ))
          )}
        </>
      )}
      <button onClick={handlePayOpen}>adfasfasdfasdfasd</button>
      <MintCancelModal open={payOpen} handleClose={handlePayClose} targetConcertId={targetConcertId} />
    </Box>
  )
}
