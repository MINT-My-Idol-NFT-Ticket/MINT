import React from 'react'
import { Box, Typography } from '@mui/material'

function MintSeatForm({ title, section, seat }) {
  console.log(section, 'mintseatform')
  return (
    <Box
      sx={{
        padding: '0 18px 0 18px',
      }}>
      <Typography>{title}</Typography>
      <Box sx={content}>
        {seat ? seat : ''}
        {/* {section.area.area ? section.area : ''} */}
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

export default MintSeatForm
