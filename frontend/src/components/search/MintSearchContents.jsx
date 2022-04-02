import { useState } from 'react'

import '../../styles/MintSearchContents.css'
import MintSearchBar from './MintSearchBar'
import MintHorizontalCard from '../common/MintHorizontalCard'

export default function MintSearchContents({ bright }) {
  const [searchList, setSearchList] = useState([])
  const makeSearchList = () => {
    return
  }
  return (
    <div className="MintSearchContents">
      <div className={`MintSearchContents__searchBar ${bright}`}>
        <MintSearchBar bright={bright} setSearchList={setSearchList} />
      </div>
      <div className="MintSearchContents__itemlist">
        {searchList.map(concert => (
          <MintHorizontalCard key={concert.date} concertData={concert} />
        ))}
      </div>
    </div>
  )
}
