import { Button } from '@mui/material'
import React, { useState } from 'react'

function MintConcertSeat(props) {
  const [isSelected, setIsSelected] = useState(false)
  const handleSelect = () => {
    props.select(props.data)
  }

  return (
    <Button style={{ margin: '3px' }} onClick={handleSelect} disabled={props.data.status === 0 ? true : false}>
      {props.data.name}
    </Button>
  )
}

export default MintConcertSeat
