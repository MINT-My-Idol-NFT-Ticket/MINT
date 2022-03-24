import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'

function MintBtnGroup({ position, prev, next }) {
  const navigate = useNavigate()

  const handlePrev = () => {
    if (prev) {
      navigate(`/${prev}`)
    } else {
      alert('이동할 이전 주소가 없습니다')
    }
  }
  const handleNext = () => {
    next ? navigate(`/${next}`) : alert('이동할 다음 주소가 없습니다')
  }
  return (
    <Box
      sx={{
        position: position ? 'absolute' : '',
        bottom: 0,
        paddingTop: '20px',
        paddingLeft: '31px',
        paddingRight: '31px',
        paddingBottom: '20px',
      }}>
      <Button variant="contained" color="secondary" sx={{ ...btnStyle, marginRight: '16px' }} onClick={handlePrev}>
        이전
      </Button>
      <Button variant="contained" color="primary" sx={btnStyle} onClick={handleNext}>
        다음
      </Button>
    </Box>
  )
}

// styles
const btnStyle = { width: '141px', height: '35px' }

export default MintBtnGroup
