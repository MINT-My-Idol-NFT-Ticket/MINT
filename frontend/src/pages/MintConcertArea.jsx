import { Box } from '@mui/material'
import React from 'react'
import MintBtnGroup from '../components/MintBtnGroup'

function MintConcertArea(props) {
  return (
    <Box>
      <Box
        sx={{
          height: '72px',
          backgroundColor: '#00e9e9',
        }}>
        구역예매상단공지
      </Box>
      <Box>좌석등급/가격</Box>
      <Box>지정석스탠딩</Box>
      <MintBtnGroup />
    </Box>
  )
}

export default MintConcertArea
