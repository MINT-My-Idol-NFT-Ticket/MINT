import { Box, Typography } from '@mui/material'
import React from 'react'

function MintPayConcertInfo(props) {
  return (
    <Box sx={{ display: 'flex', height: '20%', backgroundColor: 'lightblue' }}>
      <Box sx={{ flex: 3, display: 'flex', padding: '20px' }}>
        <Box sx={{ width: '100%', height: '100%', backgroundColor: 'red' }}></Box>
      </Box>
      <Box sx={{ flex: 7, padding: '20px' }}>
        <Typography variant="h6">콘서트 제목</Typography>
        <Typography>콘서트 대략정보</Typography>
        <Typography>예매자가 선택한 일시 좌석 정보 출력</Typography>
      </Box>
    </Box>
  )
}

export default MintPayConcertInfo
