import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { BASE_URL, getRequest } from '../api/requests'
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
// css
import '../styles/MintConcertProcess.css'

function MintConcertDate() {
  const location = useLocation()
  // console.log(location.state, '디테일->데이트')
  const [state, setState] = useState(location.state)
  const [concertData, setConcertData] = useState([])
  const [dayConcertData, setDayConcertData] = useState([])
  const [dates, setDates] = useState({})
  const concertId = useParams().id

  const getConcertDate = async () => {
    const response = await getRequest(`/api/ticket/concert/${concertId}`)
    setConcertData(response.data)
    setDayConcertData(response.data)
    // console.log(response.data, '콘서트 데이터 리퀘')
    setDate(new Date(`20${response.data[0].date}`))
    setDates({ min: `20${response.data[0].date}`, max: `20${response.data[response.data.length - 1].date}` })
  }

  const changeConcertByDate = newDate => {
    const res = concertData.filter(concert => new Date(`22${concert.date}`).getDate() === newDate.getDate())
    setDayConcertData(res)
  }

  useEffect(() => {
    getConcertDate()
  }, [])

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
            backgroundImage: `url("${BASE_URL}${state.poster}")`,
            opacity: '0.5',
          }}></Box>
        <Typography variant="h6" sx={{ paddingTop: '20px', position: 'relative', zIndex: '100' }}>
          {state.title}
        </Typography>
        <Typography sx={{ position: 'relative', zIndex: '100' }}>{state.artists.map(a => a.name)}</Typography>

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
              minDate={new Date(dates.min)}
              maxDate={new Date(dates.max)}
              onChange={newDate => {
                setDate(newDate)
                changeConcertByDate(newDate)
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
        {dayConcertData.map(({ id, date, time }) => (
          <MintConcertTimes
            key={id}
            info={{ title: state.title, place: state.place }}
            times={{ date: date, time: time }}
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
          prev={{ url: `concert/detail/${concertId}`, content: '이전' }}
          next={{ url: `${concertId}/concert/area`, content: '다음' }}
          passData={{ date: dates, time: time, timeId: selectedId }}
        />
      </Box>
    )
  }

  const [date, setDate] = useState(dates.min)
  const [time, setTime] = useState('')
  const [isSelected, setIsSelected] = useState(false)
  const [selectedId, setSelectedId] = useState(0)

  const pickTime = (time, idx) => {
    // console.log(time, idx, '넘겨줄콘서트날짜/시간')
    setTime(time)
    setIsSelected(true)
    setSelectedId(idx)
  }
  return <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
}

export default MintConcertDate
