import TextField from '@mui/material/TextField'

export default function MintSetConcertData() {
  const timeTableData = ['회차 정보', '구역 개수']

  return (
    <>
      <p>회차 정보</p>
      <br />
      {timeTableData.map(data => (
        <div key={data} style={{ marginBottom: '5px' }}>
          <TextField
            sx={{
              width: '100%',
            }}
            id="outlined-basic"
            label={data}
            variant="outlined"
          />
        </div>
      ))}
    </>
  )
}
