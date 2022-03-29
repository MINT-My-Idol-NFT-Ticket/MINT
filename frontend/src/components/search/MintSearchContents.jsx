//modules
import '../../styles/MintSearchContents.css'
//components
import MintSearchBar from './MintSearchBar'
import MintHorizontalCard from '../common/MintHorizontalCard'

export default function MintSearchContents({ bright }) {
  const testData = []

  for (let i = 1; i <= 40; i++) {
    testData.push({
      title: `${i}번 제목${i}번 제목${i}번 제목${i}번 제목${i}번 제목${i}번 제목${i}번 제목${i}번 제목${i}번 제목`,
      date: `${i}번 날짜`,
      singer: `${i}번 가수`,
      img: 'poster_ver.gif',
    })
  }

  const makeSearchList = () => {
    return testData.map(concert => <MintHorizontalCard key={concert.date} concertData={concert} />)
  }
  return (
    <div className="MintSearchContents">
      <div className={`MintSearchContents__searchBar ${bright}`}>
        <MintSearchBar bright={bright} />
      </div>
      <div className="MintSearchContents__itemlist">{makeSearchList()}</div>
    </div>
  )
}
