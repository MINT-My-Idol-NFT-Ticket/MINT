import LogoLight from '../images/logo_light.png'
import LogoDark from '../images/logo_dark.png'
import DoDuck from '../images/do-duck.gif'
import { Box, Typography } from '@mui/material'
import useBrightness from '../hooks/useBrightness'

export default function MintSplash() {
  const [bright, setBright] = useBrightness()

  const nextPage = () => {
    window.location.pathname = '/intro'
  }

  return (
    <div style={{ display: 'absolute', paddingTop: '200px' }} onMouseUp={nextPage}>
      <Box sx={{ textAlign: 'center' }}>
        <img src={DoDuck} width="150px" />
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <img src={bright === 'light' ? LogoLight : LogoDark} alt="" width="100px" />
      </Box>
      <Box>
        <Typography sx={{ textAlign: 'center', mt: '10px', color: bright === 'light' ? '#000000' : '#ffffff' }}>
          너에게 스며드는 시간
        </Typography>
      </Box>
    </div>
  )
}
