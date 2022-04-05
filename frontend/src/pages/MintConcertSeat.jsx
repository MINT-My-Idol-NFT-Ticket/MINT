import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

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
  const navigate = useNavigate()

  const [bright, _] = useBrightness()
  const [isSelected, setSelected] = useState(-1)
  const [section, setSection] = useState(location.state.area.area)
  const [seatLayout, setSeatLayout] = useState([])
  const [seat, setSeat] = useState({ id: null, seat: '아직 선택한 좌석이 없습니다', status: null })

  const handleSelect = idx => {
    const seatData = seatLayout[idx]
    console.log(seatData)

    const tmp = seatData.name.split('-')
    const seatNum = tmp[tmp.length - 1]

    setSelected(idx)
    setSeat({ id: seatData.id, seat: seatNum, status: seatData.status }) // 좌석 set
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
          <MintConcertSeatSelect
            data={seatLayout}
            handleSelect={handleSelect}
            selected={isSelected}
            handleSeat={setSeat}
          />
        </Box>
        <Box sx={seatFromContainer}>
          <MintSeatForm title="좌석등급/가격" section={`${location.state.area.area} 구역`} />
        </Box>
        <Box sx={seatFromContainer}>
          <MintSeatForm title="선택한 좌석" seat={`${seat.seat}`} />
        </Box>
      </>
    )
  }
  const Footer = () => {
    const handleClick = () => {
      const updateSeatStatus = id => {
        const tmp = JSON.parse(JSON.stringify(seatLayout))
        const idx = id - tmp[0].id
        tmp[idx].status = 1
        setSeatLayout(tmp)
        setSeat({ id: null, seat: '다른 좌석을 선택해주세요', status: null })
        setSelected(-1)
      }

      const checkSeat = async () => {
        const response = await getRequest(`api/ticket/seat/${seat.id}`)
        if (response.data.status === 0) {
          const url = `/concert/payment/${concertId}`
          navigate(url, { state: { ...location.state, seat: seat } })
        } else {
          confirmMessageNoBtn('이미 선택된 좌석입니다', () => updateSeatStatus(seat.id), bright)
        }
      }

      if (seat.id === null) confirmMessageNoBtn('좌석을 선택하세요', null, bright)
      else {
        checkSeat()
      }
    }

    return (
      <Box sx={{ padding: '20px 31px' }}>
        <MintBtnGroup
          prev={{ url: `/concert/area/${concertId}`, content: '이전', color: 'secondary' }}
          next={{
            content: '다음',
            handleClick,
          }}
          passData={{ ...location.state, seat }}
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
const seatContainer = { padding: '0 10px', minHeight: '220px' }
const seatFromContainer = { marginTop: '16px', height: '100px' }

export default MintConcertSeat
