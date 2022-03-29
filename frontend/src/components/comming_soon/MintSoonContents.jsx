//modules
import '../../styles/MintSoonContents.css'
//components
import MintHorizontalCard from '../common/MintHorizontalCard'

export default function MintSoonContents() {
  const testData = []

  for (let i = 1; i <= 15; i++) {
    testData.push({
      title: `${i}번 제목`,
      date: `${i}번 날짜`,
      singer: `${i}번 가수`,
      img: 'poster_ver.gif',
    })
  }

  const makeSearchList = () => {
    return testData.map(concert => <MintHorizontalCard key={concert.date} concertData={concert} />)
  }
  return (
    <div className="MintSoonContents">
      <div className="MintSoonContents__itemlist">{makeSearchList()}</div>
    </div>
  )
}
