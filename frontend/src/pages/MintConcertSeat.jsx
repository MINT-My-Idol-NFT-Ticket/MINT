import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useLocation, useParams } from 'react-router-dom'
import { getRequest } from '../api/requests'
// components
import MintPageTemplate from '../components/common/MintPageTemplate'
import MintBtnGroup from '../components/common/MintBtnGroup'
import MintSeatForm from '../components/concert/MintSeatForm'
import MintConcertSeatSelect from '../components/concert/MintConcertSeatSelect'

function MintConcertSeat(props) {
  const concertId = useParams().id
  const location = useLocation()
  console.log(concertId, location.state, '/ passed data from area to seat')
  const [section, setSection] = useState(location.state.area.area)
  const [seatLayout, setSeatLayout] = useState([])
  const [seat, setSeat] = useState('좌석을 선택해주세요.')

  const handleSelect = seat => {
    console.log(seat.name, '최상단')
    setSeat(seat.name)
  }

  const getSeatAvailable = async () => {
    const response = await getRequest(`api/ticket/section/${location.state.area.id}`)
    console.log(response.data, 'seatLayout')
    setSeatLayout(response.data)
  }

  useEffect(() => {
    getSeatAvailable()
  }, [])
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
          <MintConcertSeatSelect data={seatLayout} handleSelect={handleSelect} />
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
        <MintBtnGroup
          prev={{ url: `${concertId}/concert/area`, content: '이전', color: 'secondary' }}
          next={{ url: `${concertId}/concert/payment`, content: '다음' }}
        />
      </Box>
    )
  }
  return <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
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
