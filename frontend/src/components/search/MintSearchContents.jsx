import { useState } from 'react'
import { Box } from '@mui/material'

import MintSearchBar from './MintSearchBar'
import MintHorizontalCard from '../common/MintHorizontalCard'

export default function MintSearchContents() {
  const [searchList, setSearchList] = useState([])
  const makeSearchList = () => {
    return
  }
  return (
    <Box sx={{ padding: '0 20px' }}>
      <Box
        sx={{ position: 'absolute', padding: '0 20px', width: '100%', top: '52px', left: 0, boxSizing: 'border-box' }}>
        <MintSearchBar setSearchList={setSearchList} />
      </Box>
      <Box sx={{ marginTop: '55px' }}>
        {searchList.map(concert => (
          <MintHorizontalCard key={concert.date} concertData={concert} />
        ))}
      </Box>
    </Box>
  )
}
