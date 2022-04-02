import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useLocation, useParams } from 'react-router-dom'
import { getRequest, postRequest } from '../api/requests'
// components
import MintBtnGroup from '../components/common/MintBtnGroup'
import MintPageTemplate from '../components/common/MintPageTemplate'
import MintConcertAreaList from '../components/concert/MintConcertAreaList'
import MintSeatForm from '../components/concert/MintSeatForm'
import tempArea from '../images/concert_area.png'

function MintConcertArea(props) {
  const concertId = useParams().id
  const location = useLocation()
  console.log(location.state, 'location state from date')

  const [showSection, setShowSection] = useState('구역을 선택해 주세요.')
  const [selected, setSelected] = useState([0, false])
  const [sections, setSections] = useState(tempSection)
  const pickArea = (area, idx) => {
    setSelected([idx, true])
    setShowSection(area)
  }

  const timesId = 3
  const getConcertArea = async () => {
    const response = await getRequest(`/api/ticket/times/${timesId}`)
    console.log(response.data, 'available Seats by time')
  }

  useEffect(() => {
    getConcertArea()
  }, [])

  const Header = () => {
    return (
      <>
        <Box sx={header}>
          <Typography sx={headerText}>
            구역 내 상단이 무대와 가까운 쪽이며, 예매시 같은 열/연번을 선택하셔야 옆좌석 예매가 가능합니다.
          </Typography>
        </Box>
        <Box sx={area}>구역그림</Box>
        <Box sx={seatFromContainer}>
          <MintSeatForm title="좌석등급/가격" section={showSection} />
        </Box>
        <Typography sx={{ padding: '0 18px' }}>
          <span>지정석</span>
          <span>/</span>
          <span>스탠딩</span>
        </Typography>
      </>
    )
  }
  const Contents = () => {
    return (
      <>
        {sections.map((section, idx) => (
          <MintConcertAreaList
            key={section.name}
            section={section.name}
            leftover={section.seats}
            idx={idx}
            pick={pickArea}
            selected={selected[1] && selected[0] === idx}
          />
        ))}
      </>
    )
  }
  const Footer = () => (
    <Box sx={{ padding: '20px 31px' }}>
      <MintBtnGroup prev={`${concertId}/concert/date`} next={`${concertId}/concert/seat`} />
    </Box>
  )
  return <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
}

// temp data
const tempSection = [
  {
    name: 'A',
    seats: 150,
  },
  {
    name: 'B',
    seats: 100,
  },
  {
    name: 'C',
    seats: 200,
  },
]

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
const area = {
  height: '220px',
  backgroundImage: `url("${tempArea}")`,
}
const seatFromContainer = { height: '100px' }

export default MintConcertArea
