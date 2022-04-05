import React from 'react'
import { Box } from '@mui/material'
import MintTicketMoveBanner from '../components/ticket/MintTicketMoveBanner'
import MintTicket3D from '../components/ticket/MintTicket3D'
import { useLocation } from 'react-router-dom'

function MintTicket(props) {
  const location = useLocation()
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      <MintTicketMoveBanner position="top" name={'OHMYGIRL'} />
      <MintTicket3D concertData={location.state} />
      <MintTicketMoveBanner name={'OH MY GIRL'} />
    </Box>
  )
}

export default MintTicket
