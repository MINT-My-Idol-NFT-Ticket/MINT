import { Box } from '@mui/material'
import '../../styles/MintPageTemplate.css'

export default function MintPageTemplate({ header, contents, footer }) {
  return (
    <Box className={`MintPageTemplate`} sx={{ color: 'text.primary' }}>
      <div className="MintPageTemplate__header">{header}</div>
      <div className="MintPageTemplate__contents">{contents}</div>
      <div className="MintPageTemplate__footer">{footer}</div>
    </Box>
  )
}
