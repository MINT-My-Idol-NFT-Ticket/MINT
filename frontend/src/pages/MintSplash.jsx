import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function MintSplash() {
  const navigate = useNavigate()
  const nextPage = () => {
    // window.location.pathname = '/intro'
    navigate('/intro')
  }

  return (
    <Box sx={style} onMouseUp={nextPage}>
      <Box sx={{ textAlign: 'center' }}>
        <img src="do-duck.gif" width="150px" />
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <img src="logo_dark.png" alt="" width="100px" />
      </Box>
      <Box>
        <Typography sx={{ textAlign: 'center', mt: '10px', color: '#fff' }}>너에게 스며드는 시간</Typography>
      </Box>
      <Box>
        <Typography sx={{ color: 'rgba(255,255,255,0.2)', mt: '22px' }}>아무 곳이나 클릭하세요</Typography>
      </Box>
    </Box>
  )
}

// style
const style = {
  backgroundColor: '#8811DD',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
}
