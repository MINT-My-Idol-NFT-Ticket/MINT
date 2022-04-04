import { Box, Grid, Skeleton } from '@mui/material'
import React from 'react'

/*
{notOpenConcerts.length === 0 ? (
          <Grid container spacing={2.5}>
            {[0, 0, 0, 0].map((v, i) => (
              <Grid key={i} item xs={6}>
                <MintVerticalSkeleton notOpen={true} />
              </Grid>
            ))}
          </Grid>
*/
function MintCollectionsSkeleton(props) {
  return (
    <Grid container spacing={{ xs: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {[0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i) => (
        <Grid item key={i} xs={4}>
          <Skeleton variant="rectangular" sx={skeletonStyle} />
        </Grid>
      ))}
    </Grid>
  )
}

const skeletonStyle = { height: '200px', borderRadius: '5px' }

export default MintCollectionsSkeleton
