import { useState } from 'react'

import '../../styles/MintSearchBar.css'
import SearchIcon from '@mui/icons-material/Search'
import CancelIcon from '@mui/icons-material/Cancel'
import { getRequest } from '../../api/requests.js'
import { Box } from '@mui/material'

export default function MintSearchBar({ bright, setSearchList }) {
  const [searchQuery, setSearchQuery] = useState('')
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
      <Box sx={{ position: 'absolute', top: '15px', left: '5px', cursor: 'pointer' }}>
        <SearchIcon fontSize="medium" onClick={search} />
      </Box>
      <Box sx={{ position: 'absolute', top: '17px', right: '5px', cursor: 'pointer' }}>
        <CancelIcon fontSize="medium" />
      </Box>
    </Box>
  )
}
