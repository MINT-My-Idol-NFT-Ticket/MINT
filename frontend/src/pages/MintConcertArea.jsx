import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MintBtnGroup from '../components/common/MintBtnGroup'
import MintPageTemplate from '../components/common/MintPageTemplate'
import MintConcertAreaList from '../components/concert/MintConcertAreaList'
import MintSeatForm from '../components/concert/MintSeatForm'
import tempArea from '../images/concert_area.png'

function MintConcertArea(props) {
  const Header = () => {
    return (
      <>
        <Box
          sx={{
            height: '72px',
            maxHeight: '72px',
            paddingTop: '20px',
            paddingLeft: '30px',
            paddingRight: '30px',
            fontSize: '14px',
            textAlign: 'center',
            lineHeight: '1.3',
            color: 'text.primary',
          }}>
          구역 내 상단이 무대와 가까운 쪽이며, 예매시 같은 열/연번을 선택하셔야 옆좌석 예매가 가능합니다.
        </Box>
        <Box
          sx={{
            height: '220px',
            backgroundImage: `url("${tempArea}")`,
          }}></Box>
        <Box sx={{ height: '100px' }}>
          <MintSeatForm />
        </Box>
      </>
    )
  }
  const Contents = () => {
    const [isSelected, setIsSelected] = useState(false)
    const [selectedId, setSelectedId] = useState(0)
    const pickTime = (time, idx) => {
      setIsSelected(true)
      setSelectedId(idx)
    }

    const [sections, setSections] = useState([
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
    ])
    return (
      <Box>
        <Typography sx={{ position: 'sticky', top: '0', backgroundColor: '#cacaca' }}>지정석</Typography>
        {sections.map((section, idx) => (
          <MintConcertAreaList
            key={section.name}
            section={section.name}
            leftover={section.seats}
            idx={idx}
            pick={pickTime}
            selected={isSelected && idx === selectedId}
          />
        ))}
      </Box>
    )
  }
  const Footer = () => <MintBtnGroup />
  return <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
}

export default MintConcertArea
