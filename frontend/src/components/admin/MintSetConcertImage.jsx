import { useState } from 'react'
import { Button } from '@mui/material'
import Grid from '@mui/material/Grid'

import MintSetImage from './MintSetImage'

export default function MintSetConcertData({ requestImg, setRequestImg }) {
  const [posterImg, setPosterImg] = useState(null)
  const [thumnailImg, setThumnailImg] = useState(null)
  const [detailImg, setDetailImg] = useState(null)
  const [sectionImg, setSectionImg] = useState(null)

  const addImg = () => setRequestImg([posterImg, thumnailImg, detailImg, sectionImg])

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <MintSetImage setImgFile={setPosterImg} type="포스터 이미지" />
          <MintSetImage setImgFile={setThumnailImg} type="정방형 이미지" />{' '}
        </Grid>
        <Grid item xs={6}>
          <MintSetImage setImgFile={setDetailImg} type="구역 이미지" />
          <MintSetImage setImgFile={setSectionImg} type="상세 설명 이미지" />
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
