import React from 'react'
import { Box, Button, Typography } from '@mui/material'

function MintBtnGroup(props) {
  return (
    <Box
      sx={{
        position: props.position ? 'absolute' : '',
        bottom: 0,
        paddingTop: '20px',
        paddingLeft: '31px',
        paddingRight: '31px',
        paddingBottom: '20px',
        backgroundColor: 'red',
      }}>
      <Button variant="contained" color="secondary" sx={{ width: '141px', height: '31px', marginRight: '16px' }}>
        이전
      </Button>
      <Button variant="contained" color="primary" sx={{ width: '141px', height: '31px' }}>
        다음
      </Button>
    </Box>
  )
}

export default MintBtnGroup
