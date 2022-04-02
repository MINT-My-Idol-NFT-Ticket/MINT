import { Box } from '@mui/material'
import { isLight } from '../../functions/util/color.js'

function MintHeader({ bright }) {
  return (
    <Box
      className="MintHeader__logo"
      sx={{
        width: '100%',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}>
      <img src={isLight(bright) ? 'logo_light.png' : 'logo_dark.png'} style={{ width: '90px' }} alt="" />
    </Box>
  )
}

export default MintHeader
