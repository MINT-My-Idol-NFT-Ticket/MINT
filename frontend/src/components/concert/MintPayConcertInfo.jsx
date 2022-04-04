import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { BASE_URL } from '../../api/requests'

function MintPayConcertInfo({ concertInfo }) {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        padding: '20px',
      }}>
      <Box sx={{ boxSizing: 'border-box', marginRight: '20px', width: '50px', backgroundColor: 'red' }}>
        <img src={`${BASE_URL}${concertInfo.img}`} alt="" style={{ width: '100px' }} />
      </Box>
      <Box sx={{ flex: '1 auto' }}>
        <Typography variant="h6">{concertInfo.title}</Typography>
        <Typography>
          {concertInfo.date}, {concertInfo.area}, {concertInfo.seat}, {concertInfo.price}
        </Typography>
      </Box>
    </Box>
  )
}

export default MintPayConcertInfo
