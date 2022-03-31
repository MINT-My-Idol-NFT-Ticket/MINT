import React from 'react'
import { Box, Divider } from '@mui/material'
// components
import MintBtnGroup from '../components/common/MintBtnGroup'
import MintPayConcertInfo from '../components/concert/MintPayConcertInfo'
import MintPayPrice from '../components/concert/MintPayPrice'
import MintConcertAgree from '../components/concert/MintConcertAgree'

function MintConcertPayment(props) {
  return (
    <Box sx={container}>
      <MintPayConcertInfo />
      <MintPayPrice />
      <Divider />
      <MintConcertAgree />
      <MintBtnGroup prev="concert/area" next="mypage" />
    </Box>
  )
}

// styles
const container = { height: '100%', display: 'flex', flexDirection: 'column' }

export default MintConcertPayment
