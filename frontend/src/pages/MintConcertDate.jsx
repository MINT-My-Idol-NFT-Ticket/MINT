import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { BASE_URL, getRequest } from '../api/Request'
import { Box, Typography } from '@mui/material'
import tempBg from '../images/concert_bg.png'
// components
import MintPageTemplate from '../components/common/MintPageTemplate'
import MintConcertTimes from '../components/concert/MintConcertTimes'
import MintBtnGroup from '../components/common/MintBtnGroup'
// calanders
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import CalendarPicker from '@mui/lab/CalendarPicker'
// import isWeekend from 'date-fns/isWeekend'
// css
import '../styles/MintConcertProcess.css'

function MintConcertDate() {
  const location = useLocation()
  const [poster, setPoster] = useState(location.state.poster)
  const [concertData, setConcertData] = useState([])
  const [dates, setDates] = useState([])
  const concertId = useParams().id

  const getConcertDate = async () => {
    const response = await getRequest(`/api/ticket/concert/${concertId}`)
    setConcertData(response.data)
    console.log(response.data)
    setDates(response.data.map(({ date }) => date))
  }

  useEffect(() => {
    getConcertDate()
  }, [])

  // console.log(dates, '날짜')
  // console.log(dates[0].slice(0, 8).replace(/\D/g, '-'))

  const Header = () => {
    return (
      <Box
        className="date__Header"
        sx={{
          minHeight: '440px',
          textAlign: 'center',
          color: '#FFF',
          backgroundImage: `url("${tempBg}")`,
          position: 'relative',
        }}>
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            bottom: '0',
            backgroundImage: `url("${BASE_URL}${poster}")`,
            opacity: '0.5',
          }}></Box>
        <Typography variant="h6" sx={{ paddingTop: '20px', position: 'relative', zIndex: '100' }}>
          {tourName}
        </Typography>
        <Typography sx={{ position: 'relative', zIndex: '100' }}>{concertName}</Typography>

        <Box
          sx={{
            width: '320px',
            height: '305px',
            backgroundColor: '#FFF',
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
              // minDate={new Date(`20${dates[0].slice(0, 8).replace(/\D/g, '-')}`)}
              minDate={new Date('2022-04-01')}
              maxDate={new Date('2022-04-04')}
              // shouldDisableDate={isWeekend}
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
        {concertData.map(({ id, date, sections }) => (
          <MintConcertTimes
            key={id + date}
            times={date}
            pick={pickTime}
            idx={id}
            selected={isSelected && id === selectedId}
          />
        ))}
      </Box>
    )
  }
  const Footer = () => {
    return (
      <Box sx={{ padding: '20px 31px' }}>
        <MintBtnGroup
          prev={`concert/detail/${concertId}`}
          next={`${concertId}/concert/area`}
          passData={{ date: date, time: time }}
        />
      </Box>
    )
  }

  const [tourName, settourName] = useState('BTS WORLD TOUR')
  const [concertName, setConcertName] = useState("LOVE YOL'RSELF")
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState('')
  const [isSelected, setIsSelected] = useState(false)
  const [selectedId, setSelectedId] = useState(0)

  const pickTime = (time, idx) => {
    console.log(date.getDate(), time, '넘겨줄콘서트날짜/시간')
    setTime(time)
    setIsSelected(true)
    setSelectedId(idx)
  }
  return <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
}

export default MintConcertDate
