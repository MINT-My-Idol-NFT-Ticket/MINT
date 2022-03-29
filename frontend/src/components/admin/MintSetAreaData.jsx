import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Grid } from '@mui/material'

export default function MintSetConcertData({ requestData, setRequestData }) {
  const [areaNum, setAreaNum] = useState('')
  const [areaData, setAreaData] = useState({ name: '', num: 0 })

  const addAreaNum = () => {
    setRequestData({ ...requestData, sectionNum: areaNum })
  }
  const addAreaData = () => {
    const tmp = { ...requestData.section }
    tmp[areaData.name] = areaData.num
    setRequestData({ ...requestData, section: tmp })
  }
  const resetAreaData = () => {
    setRequestData({ ...requestData, section: {} })
  }

  return (
    <>
      <p>구역 정보</p>
      <br />
      <div>
        <TextField
          sx={{
            width: '50%',
          }}
          id="outlined-basic"
          label={'구역 개수'}
          variant="outlined"
          value={areaNum}
          onChange={e => setAreaNum(e.target.value)}
        />
        <Button variant="contained" onClick={addAreaNum}>
          구역 개수 추가
        </Button>
        <br />
        <br />
        <TextField
          sx={{
            width: '25%',
          }}
          id="outlined-basic"
          label={'구역 이름'}
          variant="outlined"
          value={areaData.name}
          onChange={e => setAreaData({ name: e.target.value, num: areaData.num })}
        />
        <TextField
          sx={{
            width: '25%',
          }}
          id="outlined-basic"
          label={'구역별 좌석 수'}
          variant="outlined"
          value={areaData.num}
          onChange={e => setAreaData({ name: areaData.name, num: e.target.value })}
        />
        <Button variant="contained" onClick={addAreaData}>
          구역별 좌석 수 추가
        </Button>
        <Button variant="contained" onClick={resetAreaData}>
          구역별 좌석 초기화
        </Button>
        <br />
      </div>
    </>
  )
}
