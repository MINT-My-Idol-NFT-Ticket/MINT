import React from 'react'
import { Box, Typography } from '@mui/material'

function MintPayPrice(props) {
  return (
    <Box sx={{ height: '20%', padding: '0 18px 0 18px', paddingTop: '40px' }}>
      <Typography variant="h6" sx={{ marginBottom: '8px' }}>
        결제 예정 금액
      </Typography>
      <Box sx={content}>티켓금액</Box>
    </Box>
  )
}
// styles
const content = {
  height: '90px',
  border: '1px solid #5F6369',
  textAlign: 'center',
  lineHeight: '90px',
}

export default MintPayPrice
