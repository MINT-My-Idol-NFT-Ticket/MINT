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

function MintTicketMoveBanner({ position, name }) {
  return (
    <Box sx={{ position: 'absolute', top: position == 'top' ? '6.5%' : '95.5%' }}>
      <Box className="track">
        <GroupName name={name} />
        <GroupName name={name} />
        <GroupName name={name} />
        <GroupName name={name} />
        <GroupName name={name} />
        <GroupName name={name} />
        <GroupName name={name} />
        <GroupName name={name} />
        <GroupName name={name} />
        <GroupName name={name} />
        <GroupName name={name} />
        <GroupName name={name} />
        <GroupName name={name} />
        <GroupName name={name} />
        <GroupName name={name} />
        <GroupName name={name} />
      </Box>
    </Box>
  )
}

export default MintTicketMoveBanner
