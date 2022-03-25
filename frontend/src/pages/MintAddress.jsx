import { Box, Typography, Card, CardContent, TextField, Button } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useBrightness from '../hooks/useBrightness'

export default function MintConnectWallet() {
  //이주현
  //메인 페이지 이동 함수
  const navigate = useNavigate()
  const pushHome = () => navigate('/home')

  const [bright, setBright] = useBrightness()
  const [address, setAddress] = useState()

  /**
   * 박창현
   * SSAFY WALLET 주소 연결 구현
   */
  const connectWallet = () => {
    // Todo
    address === undefined || address === '' ? alert('주소를 입력하세요') : console.log(address)
  }

  return (
    <Box>
      <Box
        sx={{
          textAlign: 'center',
          fontWeight: 700,
          fontSize: '24px',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Typography variant="h6" sx={{ color: bright === 'light' ? '#000000' : '#ffffff' }}>
          연결을 위해
          <br /> 지갑 주소를 연결해주세요
        </Typography>
        <Card
          sx={{
            width: '306px',
            height: '260px',
            border: '1px solid gray',
            borderRadius: 7,
            margin: '50px auto',
          }}>
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
            <Button onClick={([connectWallet], pushHome)} sx={{ width: '250px' }}>
              연동하기
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  )
}
