import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
//components
import MintBtnGroup from '../components/common/MintBtnGroup'
import MintSeatForm from '../components/concert/MintSeatForm'
import MintConcertSeatSelect from '../components/concert/MintConcertSeatSelect'

function MintConcertSeat(props) {
  const [section, setSection] = useState('07')
  /*
   * 김정빈
   * 이후 routing에 따라 props를 받아 사용할
   * seat select layout state
   */
  const [seatLayout, setSeatLayout] = useState({})
  const [seat, setSeat] = useState('좌석을 선택해주세요.')
  const handleSelect = seat => {
    console.log(seat.name, '최상단')
    setSeat(seat.name)
  }
  return (
    <Box sx={{ color: 'text.primary' }}>
      <Box sx={header}>{section}구역 좌석 배치도입니다.</Box>
      <Box sx={seatContainer}>
        시트
        <MintConcertSeatSelect data={tempSeatLayout} handleSelect={handleSelect} />
      </Box>
      <Box sx={seatFromContainer}>
        <MintSeatForm title="좌석등급/가격" />
      </Box>
      <Box sx={seatFromContainer}>
        <MintSeatForm title="선택한 좌석" seat={seat} />
      </Box>
      <MintBtnGroup position="absolute" />
    </Box>
  )
}

// temp datas
const tempSeatLayout = {
  status: true,
  code: 200,
  seats: [
    {
      name: 'A1',
      status: 0, // 0 예매 가능, 1 예매 불가능
      date: '??',
    },
    {
      name: 'A2',
      status: 1,
      date: '??',
    },
    {
      name: 'A3',
      status: 0,
      date: '??',
    },
    {
      name: 'A4',
      status: 1,
      date: '??',
    },
  ],
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
const seatContainer = { height: '220px', backgroundColor: 'yellow' }
const seatFromContainer = { marginTop: '16px', height: '100px' }

export default MintConcertSeat
