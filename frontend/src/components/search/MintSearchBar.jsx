import { useState } from 'react'

import '../../styles/MintSearchBar.css'
import SearchIcon from '@mui/icons-material/Search'
import CancelIcon from '@mui/icons-material/Cancel'
import { getRequest } from '../../api/requests.js'
import { Box } from '@mui/material'

import useBrightness from '../../hooks/useBrightness'

export default function MintSearchBar({ setSearchList }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [bright, _] = useBrightness()
  const search = async () => {
    const response = await getRequest('api/concert', { searchQuery })

    setSearchList(response.data)
  }

  return (
    <Box sx={{ position: 'relative', padding: '10px 0', backgroundColor: 'inherit' }}>
      <input
        className={`searchBar ${bright}`}
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <Box sx={{ position: 'absolute', top: '17px', left: '10px', cursor: 'pointer' }}>
        <SearchIcon
          fontSize="small"
          onClick={search}
          sx={{ color: bright === 'light' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 1)' }}
        />
      </Box>
      <Box sx={{ position: 'absolute', top: '17px', right: '10px', cursor: 'pointer' }}>
        <CancelIcon
          fontSize="small"
          sx={{ color: bright === 'light' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 1)' }}
        />
      </Box>
    </Box>
  )
}
