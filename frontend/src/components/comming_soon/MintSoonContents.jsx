//components
import MintSoonCard from './MintSoonCard'

export default function MintSoonContents() {
  const testData = []

  for (let i = 1; i <= 15; i++) {
    testData.push({
      title: `${i}번 제목`,
      date: `${i}번 날짜`,
      singer: `${i}번 가수`,
      img: `${i}번 포스터`,
    })
  }

  const makeSearchList = () => {
    return testData.map(concert => <MintSoonCard key={concert.date} concertData={concert} height="100px" />)
  }
  return (
    <div className="MintSoonContents">
      <div className="MintSoonContents__itemlist">{makeSearchList()}</div>
    </div>
  )
}
