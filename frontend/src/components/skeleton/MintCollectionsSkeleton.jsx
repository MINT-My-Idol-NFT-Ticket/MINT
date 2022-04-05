import { Box, Grid, Skeleton } from '@mui/material'
import React from 'react'

function MintCollectionsSkeleton(props) {
  return (
    <Grid container spacing={{ xs: 2 }} columns={{ xs: 12 }}>
      {[0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i) => (
        <Grid item key={i} xs={4}>
          <Skeleton variant="rectangular" sx={skeletonStyle} />
        </Grid>
      ))}
    </Grid>
  )
}

const skeletonStyle = { height: '175px', borderRadius: '5px' }

export default MintCollectionsSkeleton
