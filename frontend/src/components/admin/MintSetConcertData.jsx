import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import { useState } from 'react'

export default function MintSetConcertData({ requestData, setRequestData }) {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('')
  const [price, setPrice] = useState('')
  const [place, setPlace] = useState('')
  const [singer, setSinger] = useState('')
  const concertData = [
    {
      label: '제목',
      value: title,
      callback: e => setTitle(e.target.value),
    },
    {
      label: '상태 (0: 오픈 예정, 1: 진행중, 2: 종료)',
      value: status,
      callback: e => setStatus(e.target.value),
    },
    {
      label: '가격',
      value: price,
      callback: e => setPrice(e.target.value),
    },
    {
      label: '장소',
      value: place,
      callback: e => setPlace(e.target.value),
    },
    {
      label: '가수 정보 (공백으로 구분)',
      value: singer,
      callback: e => setSinger(e.target.value),
    },
  ]
  const addData = () => {
    concertData.forEach(data =>
      setRequestData({
        ...requestData,
        title: title,
        status: status,
        place: place,
        price: price,
        singer: singer.split(' '),
      }),
    )
  }
  return (
    <>
      <p>공연 정보</p>
      <br />
      {concertData.map(data => (
        <div key={data.label} style={{ marginBottom: '5px' }}>
          <TextField
            sx={{
              width: '100%',
            }}
            id="outlined-basic"
            label={data.label}
            variant="outlined"
            value={data.value}
            onChange={data.callback}
          />
          <br />
        </div>
      ))}
      <Button variant="contained" onClick={addData}>
        공연 정보 추가
      </Button>
      <br />
      <br />
      <br />
    </>
  )
}
