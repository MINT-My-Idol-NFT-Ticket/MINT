import { Button } from '@mui/material'
import React, { useState } from 'react'

function MintConcertSeat(props) {
  const [isSelected, setIsSelected] = useState(false)
  const handleSelect = () => {
    setIsSelected(!isSelected)
    props.select(props.data)
  }

  return (
    <Button
      style={{ margin: '3px', width: '30px' }}
      onClick={handleSelect}
      disabled={props.data.status === 0 ? true : false}
      variant={isSelected ? 'outlined' : 'contained'}>
      {props.data.name}
    </Button>
  )
}

export default MintConcertSeat
