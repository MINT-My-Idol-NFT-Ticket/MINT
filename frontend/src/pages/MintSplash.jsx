import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import '../styles/MintIntro.css'

export default function MintSplash() {
  document.title = 'MINT'

  const navigate = useNavigate()
  const nextPage = () => {
    navigate('/intro')
  }

  return (
    <Box sx={style} onMouseUp={nextPage}>
      <Box className="splash__animation">
        <Box sx={{ textAlign: 'center' }}>
          <img src="do-duck.gif" width="130px" />
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <img src="logo_dark.png" alt="" width="100px" />
        </Box>
        <Box>
          <Typography
            className="splash__word"
            sx={{ textAlign: 'center', mt: '10px', color: '#fff', cursor: 'default' }}>
            너에게 스며드는 시간
          </Typography>
        </Box>
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
