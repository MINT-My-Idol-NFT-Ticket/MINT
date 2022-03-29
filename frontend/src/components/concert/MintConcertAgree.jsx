import React, { useState } from 'react'
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material'

function MintConcertAgree(props) {
  const [checked, setChecked] = useState([false, false])
  const handleChange1 = event => {
    setChecked([event.target.checked, event.target.checked])
  }

  const handleChange2 = event => {
    setChecked([event.target.checked, checked[1]])
  }

  const handleChange3 = event => {
    setChecked([checked[0], event.target.checked])
  }
  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="[필수] 제3자 정보제공 동의"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="[필수] 취소 규정 동의"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  )

  return (
    <Box sx={{ flex: 2, padding: '20px 18px 0 18px' }}>
      <Typography variant="h6" sx={{ marginBottom: '8px' }}>
        약관동의
      </Typography>
      <FormControlLabel
        label="전체동의"
        control={<Checkbox checked={checked[0] && checked[1]} onChange={handleChange1} />}
      />
      {children}
    </Box>
  )
}

export default MintConcertAgree
