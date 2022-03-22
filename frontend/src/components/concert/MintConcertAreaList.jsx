import React from 'react'
import { Box } from '@mui/material'

function MintConcertAreaList(props) {
  const passTime = () => {
    props.pick(props.section, props.idx)
  }
  return (
    <Box
      sx={{ height: '66px', backgroundColor: props.selected ? 'rgba(136, 17, 221, .15)' : '', cursor: 'pointer' }}
      onClick={passTime}>
      <Box>{props.section}</Box>
      <Box>잔여 {props.leftover}석</Box>
    </Box>
  )
}

export default MintConcertAreaList
