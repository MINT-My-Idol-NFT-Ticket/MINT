import { useState } from 'react'

import '../../styles/MintSearchBar.css'
import SearchIcon from '@mui/icons-material/Search'
import CancelIcon from '@mui/icons-material/Cancel'
import { getRequest } from '../../api/requests.js'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import useBrightness from '../../hooks/useBrightness'
import { errorMessage } from '../../functions/alert/alertFunctions'

export default function MintSearchBar({ setSearchList }) {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [bright, _] = useBrightness()

  const search = async () => {
    try {
      const response = await getRequest('api/concert/search', { keyword: searchQuery })
      setSearchList(response.data)
    } catch {
      navigate('/error404')
    }
  }
  const handleEnter = e => {
    if (e.key === 'Enter') {
      if (searchQuery === '') {
        errorMessage('검색어를 입력해주세요.', bright)
      } else {
        search()
      }
    }
  }

  return (
    <Box sx={{ position: 'relative', padding: '10px 0', bgcolor: 'background.default' }}>
      <input
        className={`searchBar ${bright}`}
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        onKeyPress={handleEnter}
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
          onClick={() => setSearchQuery('')}
          fontSize="small"
          sx={{ color: bright === 'light' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 1)' }}
        />
      </Box>
    </Box>
  )
}
