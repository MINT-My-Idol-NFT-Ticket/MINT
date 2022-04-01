import React from 'react'
import { Box, Typography } from '@mui/material'
import MintPageTemplate from '../common/MintPageTemplate'
import MintFooter from '../footer/MintFooter'
import MintHeader from '../header/MintHeader'
import MintBtn from '../common/MintBtn'
// images
import noticeImg1 from '../../images/notice/notice2-1.png'
import noticeImg2 from '../../images/notice/notice3-1.png'
import noticeImg3 from '../../images/notice/notice3-2.png'

function MintNotice3(props) {
  return <MintPageTemplate header={<MintHeader />} contents={<Contents />} footer={<MintFooter />} />
}

function Contents() {
  return (
    <Box sx={{ paddingBottom: '60px' }}>
      <Box sx={{ padding: '0 24px' }}>
        <Typography sx={{ fontSize: '26px', fontWeight: '600', marginBottom: '10px', marginTop: '50px' }}>
          지갑 개인키 확인하기
        </Typography>
        <Box sx={subCon}>
          <img src={noticeImg1} style={imgStyle} />
          <Typography>1. 메인 화면에서 우측 상단의 ··· 버튼을 클릭해주세요.</Typography>
        </Box>
        <Box sx={subCon}>
          <img src={noticeImg2} style={imgStyle} />
          <Typography>2. 지갑관리 창에서 개인키 보기를 선택해주세요.</Typography>
        </Box>
        <Box sx={{ ...subCon, marginBottom: '50px' }}>
          <img src={noticeImg3} style={imgStyle} />
          <Typography>3. 창 중앙에서 개인키를 확인할수 있습니다.</Typography>
        </Box>
        <Typography sx={{ ...subHeader, marginTop: '60px' }}>주의사항</Typography>
        <ul style={{ paddingLeft: '20px', marginBottom: '60px' }}>
          <li>
            개인키를 무분별한 타인에게 공개하는 행위는 개인 계정이 위험에 노출될 수 있으므로 지양해주시기 바랍니다.
          </li>
        </ul>
      </Box>
      <MintBtn name="메인으로" link="home" />
    </Box>
  )
}

// styles
const subHeader = { fontWeight: '800', fontSize: '18px', marginTop: '30px', marginBottom: '20px' }
const subCon = { marginTop: '40px' }
const imgStyle = { width: '100%' }

export default MintNotice3
