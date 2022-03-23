import React from 'react'
import { Box, Typography } from '@mui/material'

function MintSeatForm({ title, seat, price }) {
  return (
    <Box
      sx={{
        padding: '0 18px 0 18px',
      }}>
      <Typography>{title}</Typography>
      <Box sx={content}>
        {seat}구역 {price}eth
      </Box>
    </Box>
  )
}

// styles
const content = {
  height: '58px',
  border: '1px solid #5F6369',
}

// props default value
MintSeatForm.defaultProps = {
  seat: 'A',
  price: '0.2',
}

export default MintSeatForm
