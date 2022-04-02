import { Box, Typography, Card, CardContent, TextField, Button } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function MintConnectWallet() {
  //이주현
  //메인 페이지 이동 함수
  const navigate = useNavigate()
  const pushHome = () => navigate('/home')

  const [address, setAddress] = useState('')

  /**
   * 박창현
   * SSAFY WALLET 주소 연결 구현
   */
  const connectWallet = () => {
    // Todo
    if (address.length === 42 && address.startsWith('0x')) {
      sessionStorage.setItem('address', address)
      pushHome()
    } else alert('잘못된 키 입력' + address)
  }

  return (
    <Box>
      <Box sx={title}>
        <Typography variant="h6" sx={{ color: '#000000' }}>
          연결을 위해
          <br /> 지갑 주소를 연결해주세요
        </Typography>
        <Card sx={card}>
          <CardContent>
            <Typography sx={{ textAlign: 'center', fontWeight: 700, mt: '50px' }}>
              SSAFY WALLET 지갑 주소 입력
            </Typography>
            <Typography sx={{ mt: '10px' }}></Typography>
          </CardContent>
          <TextField
            id="address"
            label="지갑 주소 입력"
            variant="standard"
            sx={{ width: '250px', mt: '20px', color: '#FFFFFF' }}
            onChange={e => {
              setAddress(e.target.value)
            }}
          />
          <Box sx={{ mt: '30px' }}>
            <Button onClick={connectWallet} sx={{ width: '250px' }}>
              연동하기
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  )
}

const title = {
  textAlign: 'center',
  fontWeight: 700,
  fontSize: '24px',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
}
const card = {
  width: '306px',
  height: '260px',
  border: '1px solid gray',
  borderRadius: 7,
  margin: '50px auto',
}
