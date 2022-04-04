import React from 'react'
import { Box, Typography } from '@mui/material'

function MintSeatForm({ title, section, seat }) {
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
  border: '1px solid rgba(0, 0, 0, .2)',
  borderRadius: '4px',
  backgroundColor: 'rgba(0,0,0,.05)',
  textAlign: 'center',
  lineHeight: '58px',
}

export default MintSeatForm
