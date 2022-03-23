import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
//components
import MintBtnGroup from '../components/common/MintBtnGroup'
import MintSeatForm from '../components/concert/MintSeatForm'

function MintConcertSeat(props) {
  const [section, setSection] = useState('07')
  return (
    <Box sx={{ color: 'text.primary' }}>
      <Box sx={header}>{section}구역 좌석 배치도입니다.</Box>
      <Box sx={seat}>시트</Box>
      <Box sx={seatFromContainer}>
        <MintSeatForm title="좌석등급/가격" />
      </Box>
      <Box sx={seatFromContainer}>
        <MintSeatForm title="선택한 좌석" />
      </Box>
      <MintBtnGroup position="absolute" />
    </Box>
  )
}

// styles
const header = {
  height: '62px',
  maxHeight: '72px',
  paddingLeft: '30px',
  paddingRight: '30px',
  fontSize: '14px',
  textAlign: 'center',
  lineHeight: '1.3',
  display: 'table-cell',
  verticalAlign: 'middle',
}
const seat = { height: '220px', backgroundColor: 'yellow' }
const seatFromContainer = { marginTop: '16px', height: '100px' }

export default MintConcertSeat
