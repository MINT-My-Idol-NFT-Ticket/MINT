import React, { useState } from 'react'
import tempBg from '../images/concert_bg.png'
import { Box, Button, Typography } from '@mui/material'
import MintPageTemplate from '../components/common/MintPageTemplate'
import MintConcertTimes from '../components/concert/MintConcertTimes'
import MintBtnGroup from '../components/common/MintBtnGroup'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import CalendarPicker from '@mui/lab/CalendarPicker'
import '../styles/MintConcertProcess.css'

function MintConcertDate() {
  const Header = () => {
    const [date, setDate] = useState(new Date())
    return (
      <Box
        sx={{
          minHeight: '500px',
          textAlign: 'center',
          color: '#EEEEEE',
          backgroundImage: `url("${tempBg}")`,
          position: 'relative',
        }}>
        <Typography variant="h6" sx={{ paddingTop: '20px' }}>
          {tourName}
        </Typography>
        <Typography>{concertName}</Typography>

        <Box
          sx={{
            width: '320px',
            backgroundColor: '#eeeeee',
            margin: '28px 20px 0 20px',
            display: 'inlineBlock',
            textAlign: 'center',
            borderRadius: '8px',
            position: 'absolute',
            top: '50%',
            left: '45%',
            transform: 'translate(-50%, -50%)',
          }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CalendarPicker
              date={date}
              onChange={newDate => {
                setDate(newDate)
              }}
              views={['day', 'month']}
              // shouldDisableDate={date => {
              //   const dayDiff = diffDay(date)
              //   return dayDiff < 0 || dayDiff > 15
              // }}
            />
          </LocalizationProvider>
        </Box>
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
    console.log(time, '넘겨줄콘서트시간')
    setIsSelected(true)
    setSelectedId(idx)
  }
  return <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
}

// test data
const tempdatas = {
  status: 'true',
  code: 'number',
  title: 'string',
  artist: 'string',
  place: 'string',
  times: [{ date: '12:00' }, { date: '15:00' }, { date: '18:00' }, { date: '20:00' }],
}

export default MintConcertDate
