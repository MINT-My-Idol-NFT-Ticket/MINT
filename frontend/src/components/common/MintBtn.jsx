import React from 'react'
import { Button } from '@mui/material'

function MintBtn(props) {
  return (
    <Button variant="contained" color={props.color} sx={{ width: '141px', height: '31px' }}>
      {props.name}
    </Button>
  )
}

export default MintBtn
