import { useState } from 'react'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'

export default function MintSetConcertData({ requestData, setRequestData }) {
  const [time, setTime] = useState('')
  const [timeData, setTimeData] = useState('')
  const concertData = [
    {
      label: '콘서트 회수',
      value: time,
      callback: e => setTime(e.target.value),
    },
    {
      label: '회차 별 시작시간 (공백으로 구분, 순서대로 기입)',
      value: timeData,
      callback: e => setTimeData(e.target.value),
    },
  ]

  const addData = () => {
    concertData.forEach(data => setRequestData({ ...requestData, time: time, timeTable: timeData.split(' ') }))
  }

  return (
    <>
      <p>회차 정보</p>
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
        </div>
      ))}
      <Button variant="contained" onClick={addData}>
        회차 정보 추가
      </Button>
    </>
  )
}
