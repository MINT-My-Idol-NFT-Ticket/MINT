import React, { useState } from 'react'
import { Box, Button, Checkbox } from '@mui/material'
import MintConcertSeat from './MintConcertSeat'

function MintConcertSeatSelect(props) {
  const [seats, setSeat] = useState(props.data.seats)
  const handleSelect = info => {
    // console.log(info, '자식이벤트')
    props.handleSelect(info)
  }

  return (
    <Box>
      {seats.map(seat => (
        <MintConcertSeat key={seat.name} data={seat} select={handleSelect} />
      ))}
    </Box>
  )
}

export default MintConcertSeatSelect
