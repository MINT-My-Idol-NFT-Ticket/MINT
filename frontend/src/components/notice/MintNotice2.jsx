import React from 'react'
import { Box, Typography } from '@mui/material'
import MintPageTemplate from '../common/MintPageTemplate'
import MintFooter from '../footer/MintFooter'
import MintHeader from '../header/MintHeader'

function MintNotice2(props) {
  return <div>지갑 주소 확인하기</div>
}

function Contents() {
  return (
    <Box sx={{ padding: '0 24px' }}>
      <Typography sx={{ fontSize: '26px', fontWeight: '600', marginBottom: '10px', marginTop: '50px' }}>
        지갑 주소 확인하기
      </Typography>
    </Box>
  )
}

export default MintNotice2
