import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
//components
import MintBtnGroup from '../components/common/MintBtnGroup'
import MintPageTemplate from '../components/common/MintPageTemplate'
import MintConcertAreaContents from '../components/concert/MintConcertAreaContents'
import MintConcertAreaList from '../components/concert/MintConcertAreaList'
import MintSeatForm from '../components/concert/MintSeatForm'
import tempArea from '../images/concert_area.png'

function MintConcertArea(props) {
  const [showSection, setShowSection] = useState('구역을 선택해 주세요.')
  const Header = () => {
    return (
      <>
        <Box sx={header}>
          구역 내 상단이 무대와 가까운 쪽이며, 예매시 같은 열/연번을 선택하셔야 옆좌석 예매가 가능합니다.
        </Box>
        <Box sx={area}>구역그림</Box>
        <Box sx={seatFromContainer}>
          <MintSeatForm title="좌석등급/가격" section={showSection} />
        </Box>
      </>
    )
  }
  const Contents = () => {
    const [isSelected, setIsSelected] = useState(false)
    const [selectedId, setSelectedId] = useState(0)
    const [sections, setSections] = useState(tempSection)
    const pickArea = (area, idx) => {
      setShowSection(area)
      setIsSelected(true)
      setSelectedId(idx)
      console.log(area, idx, 'pickArea')
    }
    return (
      <Box>
        <Typography sx={{ position: 'sticky', top: '0', backgroundColor: '#cacaca' }}>지정석</Typography>
        {sections.map((section, idx) => (
          <MintConcertAreaList
            key={section.name}
            section={section.name}
            leftover={section.seats}
            idx={idx}
            pick={pickArea}
            selected={isSelected && idx === selectedId}
          />
        ))}
      </Box>
    )
  }
  const Footer = () => <MintBtnGroup prev="concert/date" />
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
  display: 'table-cell',
  verticalAlign: 'middle',
  height: '62px',
  paddingLeft: '30px',
  paddingRight: '30px',
  fontSize: '14px',
  textAlign: 'center',
  lineHeight: '1.3',
  color: 'text.primary',
}
const area = {
  height: '220px',
  backgroundImage: `url("${tempArea}")`,
}
const seatFromContainer = { height: '100px' }

export default MintConcertArea
