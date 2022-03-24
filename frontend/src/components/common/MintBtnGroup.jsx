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
        display: 'flex',
        position: position ? 'absolute' : '',
        bottom: 0,
        marginTop: '20px',
        marginLeft: '31px',
        marginRight: '31px',
        marginBottom: '20px',
      }}>
      <Box sx={{ flex: 1, marginRight: '16px' }}>
        <Button variant="contained" color="secondary" sx={btnStyle} onClick={handlePrev}>
          이전
        </Button>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Button variant="contained" color="primary" sx={btnStyle} onClick={handleNext}>
          다음
        </Button>
      </Box>
    </Box>
  )
}

// styles
const btnStyle = { width: '100%', height: '35px' }

export default MintBtnGroup
