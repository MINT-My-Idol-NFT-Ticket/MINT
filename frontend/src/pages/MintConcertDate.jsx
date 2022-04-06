import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { BASE_URL, getRequest } from '../api/requests'
import { Box, Typography } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import CalendarPicker from '@mui/lab/CalendarPicker'

import { confirmMessageNoBtn } from '../functions/alert/alertFunctions'
import useBrightness from '../hooks/useBrightness'

import MintPageTemplate from '../components/common/MintPageTemplate'
import MintConcertTimes from '../components/concert/MintConcertTimes'
import '../styles/MintConcertProcess.css'
import MintBtnGroup from '../components/common/MintBtnGroup'

function MintConcertDate() {
  document.title = 'MINT - 날짜 선택'

  const location = useLocation()
  const params = useParams()
  const navigate = useNavigate()
  const state = location.state

  const [bright, _] = useBrightness()
  const [concertData, setConcertData] = useState([])
  const [dayConcertData, setDayConcertData] = useState([])
  const [dates, setDates] = useState({})
  const [date, setDate] = useState(dates.min)
  const [time, setTime] = useState('')
  const [isSelected, setIsSelected] = useState(false)
  const [selectedId, setSelectedId] = useState(0)

  const pickTime = (time, idx) => {
    setTime(time)
    setIsSelected(true)
    setSelectedId(idx)
  }

  const getConcertDate = async () => {
    try {
      const response = await getRequest(`/api/ticket/concert/${params.id}`)
      setConcertData(response.data) // 모든 콘서트 데이터
      const firstDate = new Date(response.data[0].date) // 첫번째 날
      setDate(firstDate)

      const res = response.data.filter(concert => new Date(concert.date).getDate() === firstDate.getDate()) // 첫날 값 filter
      setDayConcertData(res)
      setDates({ min: response.data[0].date, max: response.data[response.data.length - 1].date })
    } catch {
      navigate('/error404')
    }
  }

  const changeConcertByDate = newDate => {
    const res = concertData.filter(concert => new Date(concert.date).getDate() === newDate.getDate())
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
          paddingBottom: '20px',
          textAlign: 'center',
          color: '#FFF',
          backgroundColor: '#000',
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
            backgroundPosition: 'center center',
            opacity: '0.5',
            overflow: 'hidden',
          }}></Box>
        <Typography
          variant="h6"
          sx={{
            padding: '20px 31px 0 31px',
            position: 'relative',
            zIndex: '100',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
          {state.title}
        </Typography>

        <Box
          sx={{
            width: '320px',
            minHeight: '305px',
            backgroundColor: '#FFF',
            margin: '30px 10px 0 20px',
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
    const nextWithoutTime = () => confirmMessageNoBtn('날짜와 시간을 선택하세요', null, bright)

    return (
      <Box sx={{ padding: '20px 31px' }}>
        <MintBtnGroup
          prev={{ url: `/concert/detail/${params.id}`, content: '이전', color: 'secondary' }}
          next={{
            url: `/concert/area/${params.id}`,
            content: '다음',
            handleClick: time === '' ? nextWithoutTime : null,
          }}
          passData={{ ...location.state, time: time, timeId: selectedId }}
        />
      </Box>
    )
  }

  return <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
}

export default MintConcertDate
