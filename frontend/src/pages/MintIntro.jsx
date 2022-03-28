import * as React from 'react'
//modules
import useBrightness from '../hooks/useBrightness'
//components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function Intro() {
  const [bright, setBright] = useBrightness()

  // 지갑 연동 페이지 이동
  const moveToAccount = () => {
    window.location.pathname = '/address'
  }

  const moveToSSAFYGit = () => {
    window.open('https://project.ssafy.com/notice/view/BD202203100420475003290', '_blank')
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          textAlign: 'center',
          fontWeight: '700',
          paddingTop: '20px',
          color: bright === 'light' ? '#000000' : '#ffffff',
        }}>
        안녕하세요~~
        <br /> 지갑 있으신가요~?
      </Typography>
      <Card
        sx={{
          width: '306px',
          height: '350px',
          border: '1px solid gray',
          borderRadius: 7,
          margin: '20px auto',
        }}>
        <CardContent>
          <Typography sx={{ textAlign: 'center', mt: '10px' }}>SSAFY WALLET 안내문</Typography>
          <Typography sx={{ mt: '10px' }}>
            [다운로드 및 인증]
            <br />
            1. APK 다운로드 및 설치 : [https://t.ly/YZwL]
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
        <Button variant="text" sx={{ width: '250px' }} onClick={moveToAccount}>
          지갑 주소 입력하기
        </Button>
      </Box>
      <Box textAlign="center">
        <Button variant="text" sx={{ width: '250px', mt: '10px' }} onClick={moveToSSAFYGit}>
          지갑 생성하기
        </Button>
      </Box>
    </div>
  )
}
