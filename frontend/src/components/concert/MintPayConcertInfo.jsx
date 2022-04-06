import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { BASE_URL } from '../../api/requests'

function MintPayConcertInfo({ concertInfo }) {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        minHeight: '130px',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        padding: '20px',
      }}>
      <Box
        sx={{
          width: '130px',
          height: '130px',
          boxSizing: 'border-box',
          backgroundImage: `url("${BASE_URL}${concertInfo.img}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Box sx={{ flex: '1', paddingLeft: '20px' }}>
        <Typography variant="h6" sx={{ lineHeight: '23px', marginBottom: '10px', wordBreak: 'break-all' }}>
          {concertInfo.title}
        </Typography>
        <Typography>{concertInfo.place}</Typography>
        <Typography>
          {concertInfo.date} {concertInfo.area}구역 {concertInfo.seat.seat}석
        </Typography>
      </Box>
    </Box>
  )
}

export default MintPayConcertInfo
