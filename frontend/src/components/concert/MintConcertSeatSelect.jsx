import React, { useState } from 'react'
import { Grid } from '@mui/material'
import MintConcertSeatBtn from './MintConcertSeatBtn'

function MintConcertSeatSelect(props) {
  const [seats, setSeat] = useState(props.data)

  return (
    <Grid container spacing={1} sx={{ margin: '0 auto' }}>
      {seats.map((seat, idx) =>
        props.selected === idx ? (
          <MintConcertSeatBtn
            key={seat.name}
            data={seat}
            handleSelect={props.handleSelect}
            handleSeat={props.handleSeat}
            selected={true}
            idx={idx}
          />
        ) : (
          <MintConcertSeatBtn
            key={seat.name}
            data={seat}
            handleSelect={props.handleSelect}
            handleSeat={props.handleSeat}
            idx={idx}
          />
        ),
      )}
    </Grid>
  )
}

export default MintConcertSeatSelect
