import { useEffect, useState } from 'react'
import { Box } from '@mui/material'

import MintUserDate from './MintUserData'
import MintMypageTaps from './MintMypageTaps'

export default function MintMypageContents({ bright }) {
  const [value, setValue] = useState('1')

  return (
    <Box>
      <Box sx={{ width: '100%', position: 'absolute', top: '45px', zIndex: 100 }}>
        <MintUserDate value={value} setValue={setValue} bright={bright} />
      </Box>
      <Box sx={{ paddingTop: '160px' }}>
        <MintMypageTaps value={value} />
      </Box>
    </Box>
  )
}
