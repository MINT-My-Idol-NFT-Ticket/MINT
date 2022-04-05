import { Skeleton } from '@mui/material'
import React from 'react'

function MintCollectionSingleSkeletion(props) {
  return <Skeleton variant="rectangular" sx={skeletonStyle} />
}

const skeletonStyle = {
  width: '120px',
  height: '175px',
  borderRadius: '5px',
  marginRight: '10px',
  marginBottom: '10px',
}

export default MintCollectionSingleSkeletion
