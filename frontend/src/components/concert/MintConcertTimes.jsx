import { Box, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

function MintConcertTimes(props) {
  const [time, setTime] = useState('')
  const [choice, setChoice] = useState('')
  const days = ['일', '월', '화', '수', '목', '금', '토']
  const passTime = () => {
    console.log(props)
    props.pick(props.times, props.id)
  }
  return (
    <Grid
      container
      sx={{
        color: 'text.primary',
        cursor: 'pointer',
        backgroundColor: props.selected ? 'rgba(136, 17, 221, .15)' : '',
        padding: '10px',
      }}
      onClick={passTime}>
      <Grid
        item
        xs={2}
        sx={{
          textAlign: 'center',
        }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: '14px' }}>
          {days[new Date(`20${props.times.slice(0, 8).replace(/\D/g, '-')}`).getDay()]}
        </Typography>
        <Typography sx={{ fontSize: '1.5rem', fontWeight: '800', lineHeight: '24px' }}>
          {`${props.times.slice(9, 11)}:${props.times.slice(11)}`}
        </Typography>
        <Typography sx={{ fontSize: '0.8rem' }}>{props.times.slice(0, 8)}</Typography>
      </Grid>
      <Grid item xs={10} sx={{ paddingLeft: '16px' }}>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: '600',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
          [BTS] Map of the soul Map of the soul Map of the soul Map of the soul
        </Typography>
        <Typography sx={{ fontSize: '1rem' }}>예스24 라이브홀, 서울</Typography>
      </Grid>
      <Divider />
    </Grid>
  )
}

export default MintConcertTimes
