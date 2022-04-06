import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { BASE_URL, getRequest } from '../api/requests'

import { confirmMessageNoBtn } from '../functions/alert/alertFunctions'
import useBrightness from '../hooks/useBrightness'

import MintBtnGroup from '../components/common/MintBtnGroup'
import MintPageTemplate from '../components/common/MintPageTemplate'
import MintConcertAreaList from '../components/concert/MintConcertAreaList'
import MintSeatForm from '../components/concert/MintSeatForm'

function MintConcertArea() {
  document.title = 'MINT - 구역 선택'

  const concertId = useParams().id
  const location = useLocation()
  const navigate = useNavigate()

  const [bright, _] = useBrightness()
  const [showSection, setShowSection] = useState({ area: '구역을 선택해 주세요.' })
  const [selected, setSelected] = useState([0, false])
  const [sections, setSections] = useState([])

  const pickArea = (area, idx) => {
    setSelected([idx, true])
    setShowSection({ id: idx, area: area })
  }

  const getConcertArea = async () => {
    try {
      const response = await getRequest(`/api/ticket/extraSeat/${location.state.timeId}`)
      setSections(response.data)
    } catch {
      navigate('/error404')
    }
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
          <img src={`${BASE_URL}${location.state.section}`} style={{ width: '100%' }} />
        </Box>
        <Box sx={seatFromContainer}>
          <MintSeatForm title="선택된 구역" section={showSection.area} />
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
  const Footer = () => {
    const nextWithoutSection = () => confirmMessageNoBtn('관람 구역을 선택해주세요', null, bright)

    return (
      <Box sx={{ padding: '20px 31px' }}>
        <MintBtnGroup
          prev={{ url: `/concert/date/${concertId}`, content: '이전', color: 'secondary' }}
          next={{
            url: `/concert/seat/${concertId}`,
            content: '다음',
            handleClick: selected[1] === false ? nextWithoutSection : null,
          }}
          passData={{ ...location.state, area: showSection }}
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
const seatFromContainer = { height: '100px' }

export default MintConcertArea
