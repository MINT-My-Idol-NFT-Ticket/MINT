import { Skeleton } from '@mui/material'

export default function MintDetailSkeleton() {
  return (
    <>
      <Skeleton variant="rectangular" sx={{ height: '200px' }} />
      <Skeleton variant="rectangular" sx={{ height: '600px', margin: '20px 0 0' }} />
    </>
  )
}
