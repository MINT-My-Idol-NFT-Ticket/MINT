import React, { useState } from 'react'
import tempBg from '../images/concert_bg.png'
import { Box, Typography } from '@mui/material'
import MintPageTemplate from '../components/common/MintPageTemplate'
import MintConcertTimes from '../components/concert/MintConcertTimes'
import MintBtnGroup from '../components/common/MintBtnGroup'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import CalendarPicker from '@mui/lab/CalendarPicker'
import isWeekend from 'date-fns/isWeekend'
import '../styles/MintConcertProcess.css'

function MintConcertDate() {
  const Header = () => {
    return (
      <Box
        sx={{
          minHeight: '440px',
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
            height: '305px',
            backgroundColor: '#eeeeee',
            margin: '24px 10px 0 20px',
            display: 'inlineBlock',
            textAlign: 'center',
            borderRadius: '8px',
            position: 'absolute',
            top: '50%',
            left: '44.4%',
            transform: 'translate(-50%, -50%)',
          }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CalendarPicker
              date={date}
              shouldDisableDate={isWeekend}
              onChange={newDate => {
                setDate(newDate)
              }}
              views={['day', 'month']}
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
    return <MintBtnGroup prev="concert/detail" next="concert/area" concertData={time} />
  }

  const [tourName, settourName] = useState('BTS WORLD TOUR')
  const [concertName, setConcertName] = useState("LOVE YOL'RSELF")
  const [concertInfo, setConcertInfo] = useState(tempdatas)
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState('')
  const [isSelected, setIsSelected] = useState(false)
  const [selectedId, setSelectedId] = useState(0)

  const pickTime = (time, idx) => {
    console.log(date, time, '넘겨줄콘서트날짜/시간')
    setTime(time)
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
