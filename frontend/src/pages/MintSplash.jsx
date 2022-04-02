import { Box, Typography } from '@mui/material'

export default function MintSplash() {
  const nextPage = () => {
    window.location.pathname = '/intro'
  }

  return (
    <div style={style} onMouseUp={nextPage}>
      <Box sx={{ textAlign: 'center' }}>
        <img src="do-duck.gif" width="150px" />
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <img src="logo_light.png" alt="" width="100px" />
      </Box>
      <Box>
        <Typography sx={{ textAlign: 'center', mt: '10px', color: '#000000' }}>너에게 스며드는 시간</Typography>
      </Box>
    </div>
  )
}

// style
const style = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
}
