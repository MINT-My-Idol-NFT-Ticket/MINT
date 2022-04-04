import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useLocation, useParams } from 'react-router-dom'

import { getRequest } from '../api/requests'
import { confirmMessageNoBtn } from '../functions/alert/alertFunctions'
import useBrightness from '../hooks/useBrightness'

import MintPageTemplate from '../components/common/MintPageTemplate'
import MintBtnGroup from '../components/common/MintBtnGroup'
import MintSeatForm from '../components/concert/MintSeatForm'
import MintConcertSeatSelect from '../components/concert/MintConcertSeatSelect'

function MintConcertSeat() {
  const concertId = useParams().id
  const location = useLocation()
  const [bright, _] = useBrightness()

  const [section, setSection] = useState(location.state.area.area)
  const [seatLayout, setSeatLayout] = useState([])
  const [seat, setSeat] = useState('아직 선택한 좌석이 없습니다.')

  const handleSelect = seat => {
    const tmp = seat.name.split('-')
    setSeat(tmp[tmp.length - 1])
  }

  const getSeatAvailable = async () => {
    const response = await getRequest(`api/ticket/section/${location.state.area.id}`)
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
          <MintSeatForm title="좌석등급/가격" section={`${location.state.area.area} 구역`} />
        </Box>
        <Box sx={seatFromContainer}>
          <MintSeatForm title="선택한 좌석" seat={`${seat}`} />
        </Box>
      </>
    )
  }
  const Footer = () => {
    const nextWithoutSeat = () => confirmMessageNoBtn('좌석을 선택하세요', null, bright)

    return (
      <Box sx={{ padding: '20px 31px' }}>
        <MintBtnGroup
          prev={{ url: `/concert/area/${concertId}`, content: '이전', color: 'secondary' }}
          next={{
            url: `/concert/payment/${concertId}`,
            content: '다음',
            handleClick: seat.length > 5 ? nextWithoutSeat : null,
          }}
          passData={{ ...location.state, seat: seat }}
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
