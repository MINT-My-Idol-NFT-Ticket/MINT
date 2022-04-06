import { Box, Typography, Button } from '@mui/material'
import React, { useState } from 'react'

function MintQR(props) {
  const [isConfirm, setIsConfirm] = useState(false)
  return (
    <Box sx={{ width: '100%', height: '100%', textAlign: 'center', padding: '80% 50px', boxSizing: 'border-box' }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        콘서트 제목
      </Typography>
      <Typography sx={{ marginTop: '4px', fontSize: '14px', color: '#8811dd' }}>공연시작일 2022-03-03</Typography>
      <Box sx={{ margin: '20px 0px' }}>
        <img
          style={{ width: '100%' }}
          src="data:image/png;base64,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"
        />
      </Box>
      <Button
        variant="contained"
        sx={{ width: '300px' }}
        disabled={isConfirm}
        onClick={() => {
          if (confirm('확인을 누르시면 입장 확인이 완료됩니다. 꼭 직원확인이 된 경우에만 확인 버튼을 눌러주세요.')) {
            setIsConfirm(true)
          }
        }}>
        직원확인
      </Button>
    </Box>
  )
}

export default MintQR
