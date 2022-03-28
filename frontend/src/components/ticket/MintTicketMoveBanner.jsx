import React from 'react'
import { Box } from '@mui/material'
import '../../styles/MintBanner.css'

function GroupName({ name }) {
  return (
    <>
      <span style={{ fontSize: '30px', WebkitTextStroke: '1px white', color: 'transparent', marginRight: '20px' }}>
        {name}
      </span>
      <span style={{ fontSize: '30px', marginRight: '20px' }}>{name}</span>
    </>
  )
}

function MintTicketMoveBanner({ position }) {
  return (
    <Box sx={{ position: 'absolute', top: position == 'top' ? '0' : '95.5%' }}>
      <Box className="track">
        <GroupName name="BTS" />
        <GroupName name="BTS" />
        <GroupName name="BTS" />
        <GroupName name="BTS" />
        <GroupName name="BTS" />
        <GroupName name="BTS" />
        <GroupName name="BTS" />
        <GroupName name="BTS" />
        <GroupName name="BTS" />
        <GroupName name="BTS" />
        <GroupName name="BTS" />
        <GroupName name="BTS" />
        <GroupName name="BTS" />
        <GroupName name="BTS" />
        <GroupName name="BTS" />
        <GroupName name="BTS" />
      </Box>
    </Box>
  )
}

export default MintTicketMoveBanner
