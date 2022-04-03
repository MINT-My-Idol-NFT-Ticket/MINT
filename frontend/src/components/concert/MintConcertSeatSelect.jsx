import React, { useState } from 'react'
import { Box, Button, Checkbox } from '@mui/material'
import MintConcertSeat from './MintConcertSeat'

function MintConcertSeatSelect(props) {
  console.log(props, 'MintConcertSeatSelect')
  const [seats, setSeat] = useState(props.data)
  const handleSelect = info => {
    console.log(info, '자식이벤트')
    props.handleSelect(info)
  }

  return (
    <Box sx={{ margin: '0 auto' }}>
      {seats.map(seat => (
        <MintConcertSeat key={seat.name} data={seat} select={handleSelect} />
      ))}
    </Box>
  )
}

export default MintConcertSeatSelect
