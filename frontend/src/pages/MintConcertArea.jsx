import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useLocation, useParams } from 'react-router-dom'
import { BASE_URL, getRequest, postRequest } from '../api/requests'
// components
import MintBtnGroup from '../components/common/MintBtnGroup'
import MintPageTemplate from '../components/common/MintPageTemplate'
import MintConcertAreaList from '../components/concert/MintConcertAreaList'
import MintSeatForm from '../components/concert/MintSeatForm'
import tempArea from '../images/concert_area.png'

function MintConcertArea(props) {
  const concertId = useParams().id
  const location = useLocation()
  // console.log(location.state, '데이트->구역')

  const [showSection, setShowSection] = useState({ area: '구역을 선택해 주세요.' })
  const [selected, setSelected] = useState([0, false])
  const [sections, setSections] = useState([])
  const pickArea = (area, idx) => {
    setSelected([idx, true])
    console.log(area, idx, 'area')
    setShowSection({ id: idx, area: area })
  }

  const getConcertArea = async () => {
    const response = await getRequest(`/api/ticket/extraSeat/${location.state.timeId}`)
    setSections(response.data)
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
        <Box>
          <img src={`${BASE_URL}${location.state.concertInfo.section}`} style={{ width: '100%' }} />
        </Box>
        <Box sx={seatFromContainer}>
          <MintSeatForm title="선택된 구역" section={showSection} />
        </Box>
      </>
    )
  }
  const Contents = () => {
    return (
      <>
        {sections.map(section => (
          <MintConcertAreaList
            key={section.id + section.name}
            section={section.name}
            leftover={section.extraSeat}
            idx={section.id}
            pick={pickArea}
            selected={selected[1] && selected[0] === section.id}
          />
        ))}
      </>
    )
  }
  const Footer = () => (
    <Box sx={{ padding: '20px 31px' }}>
      <MintBtnGroup
        prev={{ url: `${concertId}/concert/date`, content: '이전', color: 'secondary' }}
        next={{ url: `${concertId}/concert/seat`, content: '다음' }}
        passData={{ area: showSection }}
      />
    </Box>
  )

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
const seatFromContainer = { height: '100px' }

export default MintConcertArea
