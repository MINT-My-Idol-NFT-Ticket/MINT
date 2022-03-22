import { Box, Divider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

function MintConcertTimes(props) {
  const [time, setTime] = useState('')
  const [choice, setChoice] = useState('')

  const passTime = () => {
    props.myTime(props.times.date, props.idx)
  }
  return (
    <>
      <Box
        sx={{ display: 'flex', cursor: 'pointer', backgroundColor: props.selected ? '#DECAEB' : '' }}
        onClick={passTime}>
        <Box
          sx={{
            width: '86px',
            textAlign: 'center',
          }}>
          <Typography sx={{ fontSize: '14px' }}>화</Typography>
          <Typography sx={{ fontSize: '24px', fontWeight: '800' }}>{props.times.date}</Typography>
          <Typography sx={{ fontSize: '12px' }}>03.2022</Typography>
        </Box>
        <Box
          sx={{
            width: '273px',
            paddingLeft: '18px',
          }}>
          <Typography
            sx={{
              width: '250px',
              fontSize: '16px',
              fontWeight: '600',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
            [BTS] Map of the soul길어지는글자테스트
          </Typography>
          <Typography>예스24 라이브홀, 서울</Typography>
        </Box>
      </Box>
      <Divider />
    </>
  )
}

export default MintConcertTimes
