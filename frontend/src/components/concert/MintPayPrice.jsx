import React from 'react'
import { Box, Typography } from '@mui/material'

function MintPayPrice({ price }) {
  return (
    <Box sx={{ flex: 1, padding: '0 18px 0 18px', paddingTop: '40px', paddingBottom: '10px' }}>
      <Typography variant="h6" sx={{ marginBottom: '8px' }}>
        결제 예정 금액
      </Typography>
      <Box sx={content}>{price} SSF</Box>
    </Box>
  )
}
// styles
const content = {
  height: '90px',
  border: '1px solid #5F6369',
  textAlign: 'center',
  lineHeight: '90px',
  fontSize: '18px',
}

export default MintPayPrice
