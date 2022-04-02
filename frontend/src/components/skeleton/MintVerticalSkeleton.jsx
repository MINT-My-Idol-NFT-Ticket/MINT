import { Skeleton } from '@mui/material'

import '../../styles/MintVerticalSkeleton.css'

export default function MintVerticalSkeleton({ notOpen }) {
  return (
    <div className="MintVerticalSkeleton">
      <div className={`MintVerticalSkeleton__poster ${notOpen ? 'notOpen' : 'open'}`}>
        <Skeleton variant="rectangular" animation="wave" sx={{ height: '100%' }} />
      </div>
      <Skeleton animation="wave" sx={{ height: '25px' }} />
      <Skeleton animation="wave" sx={{ height: '20px', width: '50%' }} />
      <div className={`MintVerticalSkeleton__poster ${notOpen ? 'notOpen' : 'open'}`}>
        <Skeleton variant="rectangular" animation="wave" sx={{ height: '100%' }} />
      </div>
      <Skeleton animation="wave" sx={{ height: '25px' }} />
      <Skeleton animation="wave" sx={{ height: '20px', width: '50%' }} />
      <div className={`MintVerticalSkeleton__poster ${notOpen ? 'notOpen' : 'open'}`}>
        <Skeleton variant="rectangular" animation="wave" sx={{ height: '100%' }} />
      </div>
      <Skeleton animation="wave" sx={{ height: '25px' }} />
      <Skeleton animation="wave" sx={{ height: '20px', width: '50%' }} />
      <div className={`MintVerticalSkeleton__poster ${notOpen ? 'notOpen' : 'open'}`}>
        <Skeleton variant="rectangular" animation="wave" sx={{ height: '100%' }} />
      </div>
      <Skeleton animation="wave" sx={{ height: '25px' }} />
      <Skeleton animation="wave" sx={{ height: '20px', width: '50%' }} />
    </div>
  )
}
