import React from 'react'
import { Box, Typography } from '@mui/material'
import MintPageTemplate from '../common/MintPageTemplate'
import MintFooter from '../footer/MintFooter'
import MintSubHeader from '../header/MintSubHeader'
import MintBtn from '../common/MintBtn'

function MintNotice2(props) {
  return (
    <MintPageTemplate header={<MintSubHeader content="메인으로" />} contents={<Contents />} footer={<MintFooter />} />
  )
}

function Contents() {
  return (
    <Box sx={{ paddingBottom: '60px' }}>
      <Box sx={{ padding: '0 24px' }}>
        <Typography sx={{ fontSize: '26px', fontWeight: '600', marginBottom: '10px', marginTop: '50px' }}>
          지갑주소 확인하기
        </Typography>
        <Box sx={subCon}>
          <img src="/img/notice2_1.png" style={imgStyle} />
          <Typography>1. 메인 화면에서 중앙 하단의 받기 버튼을 클릭해주세요.</Typography>
        </Box>
        <Box sx={{ ...subCon, marginBottom: '50px' }}>
          <img src="/img/notice2_2.png" style={imgStyle} />
          <Typography>2. 주소 복사를 클릭하거나 QR코드를 캡쳐하여 토큰 받을 주소를 전달할 수 있습니다.</Typography>
        </Box>
      </Box>
      <MintBtn name="메인으로" link="home" />
    </Box>
  )
}

// styles
const subCon = { marginTop: '40px' }
const imgStyle = { width: '100%' }

export default MintNotice2
