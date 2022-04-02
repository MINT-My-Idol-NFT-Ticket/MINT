import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'

import MintPageTemplate from '../components/common/MintPageTemplate'
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
  const Header = () => {
    return (
      <Box sx={header}>
        <Typography sx={headerText}>{section}구역 좌석 배치도입니다.</Typography>
      </Box>
    )
  }
  const Contents = () => {
    return (
      <>
        <Box sx={seatContainer}>
          <MintConcertSeatSelect data={tempSeatLayout} handleSelect={handleSelect} />
        </Box>
        <Box sx={seatFromContainer}>
          <MintSeatForm title="좌석등급/가격" />
        </Box>
        <Box sx={seatFromContainer}>
          <MintSeatForm title="선택한 좌석" seat={seat} />
        </Box>
      </>
    )
  }
  const Footer = () => {
    return (
      <Box sx={{ padding: '20px 31px' }}>
        <MintBtnGroup prev="concert/area" next="concert/payment" />
      </Box>
    )
  }
  return <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
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
  boxSizing: 'border-box',
  height: '62px',
  maxHeight: '72px',
  padding: '10px 30px',
  textAlign: 'center',
}
const headerText = {
  fontSize: '14px',
  position: 'relative',
  top: '50%',
  transform: 'translateY(-50%)',
}
const seatContainer = { padding: '0 10px', height: '220px' }
const seatFromContainer = { marginTop: '16px', height: '100px' }

export default MintConcertSeat
