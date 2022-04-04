import { Skeleton } from '@mui/material'
import React from 'react'

function MintCollectionSingleSkeletion(props) {
  return <Skeleton variant="rectangular" sx={skeletonStyle} />
}

const skeletonStyle = { width: '33.33%', height: '200px', borderRadius: '5px' }

export default MintCollectionSingleSkeletion
