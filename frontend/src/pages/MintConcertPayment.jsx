import React from 'react'
import { Box, Divider } from '@mui/material'
// components
import MintBtnGroup from '../components/common/MintBtnGroup'
import MintPayConcertInfo from '../components/concert/MintPayConcertInfo'
import MintPayPrice from '../components/concert/MintPayPrice'
import MintConcertAgree from '../components/concert/MintConcertAgree'
import { useParams } from 'react-router-dom'

function MintConcertPayment() {
  const concertId = useParams().id
  return (
    <Box sx={container}>
      <MintPayConcertInfo />
      <MintPayPrice />
      <Divider />
      <MintConcertAgree />
      <Box sx={{ padding: '20px 31px' }}>
        <MintBtnGroup prev={`${concertId}/concert/seat`} next="mypage" />
      </Box>
    </Box>
  )
}

// styles
const container = { height: '100%', display: 'flex', flexDirection: 'column' }

export default MintConcertPayment
