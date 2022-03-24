import React from 'react'
import { Button } from '@mui/material'

function MintBtn(props) {
  /*
    primary : main purple color
    secondary : main grey sub color
    info : black for information button
  */

  return (
    <Button variant="contained" color={props.color} sx={{ ...btnStyle }}>
      {props.name}
    </Button>
  )
}

// styles
const btnStyle = { width: '100%', height: '35px' }

// default props
MintBtn.defaultProps = {
  name: '초기값',
  color: 'primary',
}

export default MintBtn
