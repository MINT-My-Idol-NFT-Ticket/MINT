import { useEffect, useState } from 'react'
import { Box } from '@mui/material'

import MintUserData from './MintUserData'
import MintMypageTaps from './MintMypageTaps'

export default function MintMypageContents() {
  const [value, setValue] = useState('1')

  return (
    <Box>
      <Box sx={{ width: '100%', position: 'absolute', top: '45px', zIndex: 100 }}>
        <MintUserData value={value} setValue={setValue} />
      </Box>
      <Box sx={{ paddingTop: '160px' }}>
        <MintMypageTaps value={value} />
      </Box>
    </Box>
  )
}
