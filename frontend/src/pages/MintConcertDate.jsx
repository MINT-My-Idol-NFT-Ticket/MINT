import React, { useState } from 'react'
import tempBg from '../images/concert_bg.png'
import { Box, Button, Typography } from '@mui/material'
import MintPageTemplate from '../components/common/MintPageTemplate'
import MintConcertTimes from '../components/concert/MintConcertTimes'
import MintBtnGroup from '../components/common/MintBtnGroup'

function MintConcertDate() {
  const Header = () => {
    return (
      <Box
        sx={{
          textAlign: 'center',
          height: '400px',
          color: '#EEEEEE',
          backgroundImage: `url("${tempBg}")`,
        }}>
        <Typography variant="h6" sx={{ paddingTop: '20px' }}>
          {tourName}
        </Typography>
        <Typography>{concertName}</Typography>
      </Box>
    )
  }
  const Contents = () => {
    return (
      <Box>
        {concertInfo.times.map((time, idx) => (
          <MintConcertTimes
            key={time + idx}
            times={time}
            pick={pickTime}
            idx={idx}
            selected={isSelected && idx === selectedId}
          />
        ))}
      </Box>
    )
  }
  const Footer = () => {
    return <MintBtnGroup next="concert/area" />
  }
  const [tourName, settourName] = useState('BTS WORLD TOUR')
  const [concertName, setConcertName] = useState("LOVE YOL'RSELF")
  const [concertInfo, setConcertInfo] = useState(tempdatas)
  const [isSelected, setIsSelected] = useState(false)
  const [selectedId, setSelectedId] = useState(0)

  const pickTime = (time, idx) => {
    setIsSelected(true)
    setSelectedId(idx)
  }
  return <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
}

const tempdatas = {
  status: 'true',
  code: 'number',
  title: 'string',
  artist: 'string',
  place: 'string',
  times: [{ date: '12:00' }, { date: '15:00' }, { date: '18:00' }, { date: '20:00' }],
}

export default MintConcertDate
