import React, { useState } from 'react'
import tempBg from '../images/concert_bg.png'
import { Box, Button, Typography } from '@mui/material'
import MintConcertTimes from '../components/MintConcertTimes'
import MintBtnGroup from '../components/MintBtnGroup'

function MintConcertDate() {
  const [tourName, settourName] = useState('BTS WORLD TOUR')
  const [concertName, setConcertName] = useState("LOVE YOL'RSELF")
  const [concertInfo, setConcertInfo] = useState({
    status: 'true',
    code: 'number',
    title: 'string',
    artist: 'string',
    place: 'string',
    times: [{ date: '12:00' }, { date: '15:00' }, { date: '18:00' }, { date: '20:00' }],
  })
  const [isSelected, setIsSelected] = useState(false)
  const [selectedId, setSelectedId] = useState(0)

  const pickTime = (time, idx) => {
    // console.log(time, idx)
    setIsSelected(true)
    setSelectedId(idx)
  }

  return (
    <Box>
      <Box
        sx={{
          textAlign: 'center',
          border: '1px solid red',
          height: '400px',
          backgroundImage: `url("${tempBg}")`,
        }}>
        <Typography variant="h6" sx={{ paddingTop: '20px' }}>
          {tourName}
        </Typography>
        <Typography>{concertName}</Typography>
      </Box>
      <Box sx={{ maxHeight: '180px', overflow: 'scroll' }}>
        {concertInfo.times.map((time, idx) => (
          <MintConcertTimes
            key={time + idx}
            times={time}
            myTime={pickTime}
            idx={idx}
            selected={isSelected && idx === selectedId}
          />
        ))}
      </Box>
      <MintBtnGroup />
    </Box>
  )
}

export default MintConcertDate
