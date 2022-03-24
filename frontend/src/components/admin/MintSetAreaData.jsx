import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function MintSetConcertData() {
  return (
    <>
      <p>구역 정보</p>
      <br />
      <TextField
        sx={{
          width: '40%',
        }}
        id="outlined-basic"
        label="구역 이름"
        variant="outlined"
      />
      <TextField
        sx={{
          width: '40%',
        }}
        id="outlined-basic"
        label="개수"
        variant="outlined"
      />
      <Button variant="contained" component="span">
        구역 추가
      </Button>
    </>
  )
}
