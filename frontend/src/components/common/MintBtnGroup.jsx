import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'

//prev = {url: , content: 버튼 텍스트, color: 버튼 색상}
//next = {url: , content: 버튼 텍스트, color: 버튼 색상}
//params = 라우팅시 사용할 파라미터(Optional)

function MintBtnGroup({ position, prev, next, passData, params = null }) {
  const navigate = useNavigate()

  const handlePrev = () => {
    if (prev) {
      navigate(`/${prev.url}`, params)
    } else {
      alert('이동할 이전 주소가 없습니다')
    }
  }
  const handleNext = () => {
    next ? navigate(`/${next}`, { state: { ...passData } }) : alert('이동할 다음 주소가 없습니다')
  }
  return (
    <Box
      sx={{
        display: 'flex',
      }}>
      <Box sx={{ flex: 1, marginRight: '16px' }}>
        <Button variant="contained" color={prev.color} sx={btnStyle} onClick={handlePrev}>
          {prev.content}
        </Button>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Button variant="contained" color={next.color} sx={btnStyle} onClick={handleNext}>
          {next.content}
        </Button>
      </Box>
    </Box>
  )
}

// styles
const btnStyle = { width: '100%', height: '35px' }

export default MintBtnGroup
