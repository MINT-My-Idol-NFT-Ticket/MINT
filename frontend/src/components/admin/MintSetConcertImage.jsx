import { useState } from 'react'
import { Button } from '@mui/material'
import Grid from '@mui/material/Grid'

import MintSetImage from './MintSetImage'

export default function MintSetConcertData({ requestImg, setRequestImg }) {
  const [poster, setPoster] = useState(null)
  const [thumnail, setThumnail] = useState(null)
  const [description, setDescription] = useState(null)
  const [seats, setSeats] = useState(null)

  const addImg = () => {
    setRequestImg([poster, thumnail, description, seats])
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <MintSetImage setImgFile={setPoster} type="포스터 이미지" />
          <MintSetImage setImgFile={setThumnail} type="정방형 이미지" />{' '}
        </Grid>
        <Grid item xs={6}>
          <MintSetImage setImgFile={setDescription} type="상세 설명 이미지" />
          <MintSetImage setImgFile={setSeats} type="구역 이미지" />
        </Grid>
      </Grid>
      <br />
      <br />
      <Button variant="contained" onClick={addImg}>
        이미지 추가
      </Button>
    </>
  )
}
