import React from 'react'
import { Box, Typography } from '@mui/material'

function MintSeatForm({ title, section, seat, price }) {
  return (
    <Box
      sx={{
        padding: '0 18px 0 18px',
      }}>
      <Typography>{title}</Typography>
      <Box sx={content}>
        {seat ? seat : ''}
        {section ? section : ''}
      </Box>
    </Box>
  )
}

// styles
const content = {
  height: '58px',
  border: '1px solid #5F6369',
  textAlign: 'center',
  lineHeight: '58px',
}

// props default value for test
// MintSeatForm.defaultProps = {
//   seat: 'A',
//   price: '0.2',
// }

export default MintSeatForm
