import TextField from '@mui/material/TextField'

export default function MintSetConcertData() {
  const concertData = ['제목', '장소', '공연 날짜 정보', '오픈 상태']

  return (
    <>
      <p>공연 정보</p>
      <br />
      {concertData.map(data => (
        <div key={data} style={{ marginBottom: '5px' }}>
          <TextField
            sx={{
              width: '100%',
            }}
            id="outlined-basic"
            label={data}
            variant="outlined"
          />
          <br />
        </div>
      ))}
    </>
  )
}
