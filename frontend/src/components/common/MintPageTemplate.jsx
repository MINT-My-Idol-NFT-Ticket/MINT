import { Box } from '@mui/material'
import '../../styles/MintPageTemplate.css'

export default function MintPageTemplate({ header, contents, footer }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', color: 'text.primary' }}>
      <Box sx={{ flex: '0 1 auto', width: '100%' }}>{header}</Box>
      <Box
        className="MintPageTemplate__contents"
        sx={{ flex: '1 1 auto', overflowY: 'scroll', scrollbarWidth: 'none' }}>
        {contents}
      </Box>
      <Box sx={{ flex: '0 1 auto', width: '100%' }}>{footer}</Box>
    </Box>
  )
}
