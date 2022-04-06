import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import '../styles/Minterror.css'

function MintNotFound404(props) {
  document.title = '404 Not Found'

  const navigate = useNavigate()
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%', backgroundImage: 'url(/bg.jpg)' }}>
      <Box
        className="doduck"
        sx={{
          width: '80px',
          height: '80px',
          backgroundImage: 'url(/doducksit.png)',
          backgroundSize: 'cover',
          position: 'absolute',
        }}>
        {/* <img src="./doducksit.png" width={80} /> */}
      </Box>
      <Box sx={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Typography sx={{ fontSize: '84px', color: 'white', textAlign: 'center' }}>404</Typography>
        <Typography sx={{ color: 'white', textAlign: 'center' }}>PAGE NOT FOUND</Typography>
        <Button
          variant="contained"
          color="info"
          sx={{ marginTop: '70px', marginLeft: '15px' }}
          onClick={() => {
            navigate('/home')
          }}>
          홈으로 돌아가기
        </Button>
      </Box>
    </Box>
  )
}

export default MintNotFound404
