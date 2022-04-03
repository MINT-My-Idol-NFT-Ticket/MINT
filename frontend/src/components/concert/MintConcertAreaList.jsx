import React from 'react'
import { Box, Divider, Grid } from '@mui/material'

function MintConcertAreaList({ section, leftover, idx, pick, selected }) {
  const passTime = () => {
    pick(section, idx)
  }
  return (
    <Grid
      container
      sx={{
        height: '66px',
        backgroundColor: selected ? 'rgba(136, 17, 221, .15)' : '',
        cursor: 'pointer',
      }}
      onClick={passTime}>
      <Grid item xs={3} sx={{ textAlign: 'center', fontSize: '1.6rem', fontWeight: '600', padding: '20px 0' }}>
        {section}
      </Grid>
      <Grid item xs={0.1} sx={{ padding: '10px 0' }}>
        <Divider orientation="vertical" />
      </Grid>
      <Grid
        item
        xs={8.9}
        sx={{
          fontWeight: '500',
          position: 'relative',
          top: '50%',
          transform: 'translateY(-15%)',
          padding: '0 20px 0 20px',
          textAlign: 'center',
        }}>
        잔여 {leftover}석
      </Grid>
    </Grid>
  )
}

export default MintConcertAreaList
