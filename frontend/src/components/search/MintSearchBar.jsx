import { useState } from 'react'

import '../../styles/MintSearchBar.css'
import SearchIcon from '@mui/icons-material/Search'
import CancelIcon from '@mui/icons-material/Cancel'
import { getRequest } from '../../api/Request.js'

export default function MintSearchBar({ bright, setSearchList }) {
  const [searchQuery, setSearchQuery] = useState('')
  const search = async () => {
    const response = await getRequest('api/concert', { searchQuery })

    setSearchList(response.data)
  }

  return (
    <div className="MintSearchBar">
      <input
        className={`searchBar ${bright}`}
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <div className="MintSearchBar__SearchIcon">
        <SearchIcon fontSize="medium" onClick={search} />
      </div>
      <div className="MintSearchBar__CancelIcon">
        <CancelIcon fontSize="medium" />
      </div>
    </div>
  )
}
