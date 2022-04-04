import { useState, useEffect } from 'react'
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material'

function MintConcertAgree({ setAgreement }) {
  const [checked, setChecked] = useState({ info: false, cancelRule: false })
  const handleChangeAll = e => {
    setChecked({ info: e.target.checked, cancelRule: e.target.checked })
  }

  const handleChangeInfo = e => {
    setChecked({ info: e.target.checked, cancelRule: checked.cancelRule })
  }

  const handleChangeCancelRule = e => {
    setChecked({ info: checked.info, cancelRule: e.target.checked })
  }

  useEffect(() => setAgreement(checked.info && checked.cancelRule), [checked])

  return (
    <Box sx={{ flex: 2, padding: '20px 18px 0 18px' }}>
      <Typography variant="h6" sx={{ marginBottom: '8px' }}>
        약관동의
      </Typography>
      <FormControlLabel
        label="전체동의"
        control={<Checkbox checked={checked.info && checked.cancelRule} onChange={handleChangeAll} />}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        <FormControlLabel
          label="[필수] 제3자 정보제공 동의"
          control={<Checkbox checked={checked.info} onChange={handleChangeInfo} />}
        />
        <FormControlLabel
          label="[필수] 취소 규정 동의"
          control={<Checkbox checked={checked.cancelRule} onChange={handleChangeCancelRule} />}
        />
      </Box>
    </Box>
  )
}

export default MintConcertAgree
