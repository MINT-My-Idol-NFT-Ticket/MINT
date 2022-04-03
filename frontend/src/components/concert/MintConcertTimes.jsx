import { Box, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

function MintConcertTimes({ info, times, pick, idx, selected }) {
  const [time, setTime] = useState('')
  const [choice, setChoice] = useState('')
  const dayChecker = ['일', '월', '화', '수', '목', '금', '토']

  const passTime = () => {
    // console.log(props, 'passtime')
    pick(times, idx)
  }
  return (
    <Grid
      container
      sx={{
        color: 'text.primary',
        cursor: 'pointer',
        backgroundColor: selected ? 'rgba(136, 17, 221, .15)' : '',
        padding: '10px',
      }}
      onClick={passTime}>
      <Grid
        item
        xs={3}
        sx={{
          textAlign: 'center',
        }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: '14px' }}>
          {dayChecker[new Date(`22${times.date}`).getDay()]}
        </Typography>
        <Typography sx={{ fontSize: '1.5rem', fontWeight: '800', lineHeight: '24px' }}>{times.time}</Typography>
        <Typography sx={{ fontSize: '0.8rem' }}>{times.date}</Typography>
      </Grid>
      <Grid item xs={9} sx={{ paddingLeft: '36px' }}>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: '600',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
          {info.title}
        </Typography>
        <Typography sx={{ fontSize: '1rem' }}>{info.place}</Typography>
      </Grid>
      <Divider />
    </Grid>
  )
}

export default MintConcertTimes
