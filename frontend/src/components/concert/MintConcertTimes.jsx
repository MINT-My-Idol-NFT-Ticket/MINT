import { Box, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

function MintConcertTimes(props) {
  const [time, setTime] = useState('')
  const [choice, setChoice] = useState('')

  const passTime = () => {
    props.pick(props.times.date, props.idx)
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
        <Typography sx={{ fontSize: '1rem', lineHeight: '14px' }}>화</Typography>
        <Typography sx={{ fontSize: '1.5rem', fontWeight: '800', lineHeight: '24px' }}>{props.times.date}</Typography>
        <Typography sx={{ fontSize: '0.8rem' }}>03.2022</Typography>
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
