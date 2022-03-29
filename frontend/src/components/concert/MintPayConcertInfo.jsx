import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

function MintPayConcertInfo(props) {
  const [info, setInfo] = useState({
    img: '콘서트이미지',
    title: '콘서트타이틀',
    descrip: '콘서트설명',
    date: '2022-03-13',
    area: 'A',
    seat: '11',
    price: '0.35',
  })
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        padding: '20px',
      }}>
      <Box sx={{ boxSizing: 'border-box', marginRight: '20px', width: '15vh', height: '15vh', backgroundColor: 'red' }}>
        {info.img}
      </Box>
      <Box sx={{ flex: '1 auto' }}>
        <Typography variant="h6">{info.title}</Typography>
        <Typography>{info.descrip}</Typography>
        <Typography>
          {info.date}, {info.area}, {info.seat}, {info.price}
        </Typography>
      </Box>
    </Box>
  )
}

export default MintPayConcertInfo
