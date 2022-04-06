import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function Intro() {
  document.title = 'MINT - 나만의 아이돌 티켓'

  // 지갑 연동 페이지 이동
  const navigate = useNavigate()
  const moveToAccount = () => {
    navigate('/address')
  }

  const moveToSSAFYGit = () => {
    alert('지갑생성을 위해 Project SSAFY로 이동합니다.')
    window.open('https://project.ssafy.com/notice/view/BD202203100420475003290', '_blank')
  }

  return (
    <div style={style}>
      <Typography variant="h5" component="div" sx={title}>
        MINT 이용을 위해
        <br /> 지갑을 연동해주세요
      </Typography>
      <Card sx={card}>
        <CardContent>
          <Typography sx={{ fontWeight: 'bold' }}>[다운로드 및 인증]</Typography>
          <Typography sx={{ mt: '10px' }}>
            1. APK 다운로드 및 설치 [https://t.ly/YZwL]
            <br />
            2. SSAFY WALLET 앱 실행
            <br />
            3. (초기 실행시) SSAFY GIT 이메일 주소로 인증
            <br />
            4. 수신 이메일 확인 후 인증코드 입력
            <br />
            5. 새로운 지갑 생성(지갑 생성 후 재인증 시에는 복원 진행)
            <br />
            6. 화면 안내에 따라 시드 구문 기록 및 입력하여 인증 완료
          </Typography>
        </CardContent>
      </Card>
      <Box sx={{ textAlign: 'center', mt: '30px' }}>
        <Button variant="contained" sx={{ width: '250px' }} onClick={moveToAccount}>
          지갑 주소 입력하기
        </Button>
      </Box>
      <Box textAlign="center">
        <Button variant="contained" sx={{ width: '250px', mt: '10px' }} onClick={moveToSSAFYGit}>
          지갑 생성하기
        </Button>
      </Box>
    </div>
  )
}

//style
const style = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
}
const title = {
  textAlign: 'center',
  fontWeight: '700',
  paddingTop: '20px',
}
const card = {
  width: '306px',
  height: '350px',
  border: '1px solid rgba(0, 0, 0, .2)',
  margin: '20px auto',
}
