import { Box, Typography } from '@mui/material'
import React from 'react'

function MintSeatForm({ seat, price }) {
  return (
    <Box
      sx={{
        padding: '0 18px 0 18px',
      }}>
      <Typography>좌석등급/가격</Typography>
      <Box
        sx={{
          height: '58px',
          border: '1px solid #5F6369',
        }}>
        {seat}구역 {price}eth
      </Box>
    </Box>
  )
}

// props default value
MintSeatForm.defaultProps = {
  seat: 'A',
  price: '0.2',
}

export default MintSeatForm
