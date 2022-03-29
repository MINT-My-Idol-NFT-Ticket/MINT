import React from 'react'
import { Box } from '@mui/material'
import MintTicketMoveBanner from '../components/ticket/MintTicketMoveBanner'
import MintTicket3D from '../components/ticket/MintTicket3D'

function MintTicket(props) {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      <MintTicketMoveBanner position="top" />
      <MintTicket3D />
      <MintTicketMoveBanner />
    </Box>
  )
}

export default MintTicket
