import React, { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import MintBtn from '../components/MintBtn'

function MintConcertDate() {
  const [tourName, settourName] = useState('BTS WORLD TOUR')
  const [concertName, setConcertName] = useState("LOVE YOL'RSELF")
  return (
    <Box>
      <Box sx={{ textAlign: 'center', border: '1px solid red', height: '400px' }}>
        <Typography variant="h6" sx={{ paddingTop: '20px' }}>
          {tourName}
        </Typography>
        <Typography>{concertName}</Typography>
      </Box>
      <Box>
        <MintBtn name="미친럼아" />
      </Box>
    </Box>
  )
}

export default MintConcertDate
