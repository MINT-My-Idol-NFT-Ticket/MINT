//components
import MintHorizontalCard from '../common/MintHorizontalCard'

export default function MintBuyList() {
  const testData = []

  for (let i = 1; i <= 40; i++) {
    testData.push({
      title: `${i}번 제목${i}번 제목${i}번 제목${i}번 제목${i}번 제목${i}번 제목${i}번 제목${i}번 제목${i}번 제목`,
      date: `${i}번 날짜`,
      singer: `${i}번 가수`,
      img: `${i}번 포스터`,
    })
  }

  const makeBuyList = () => {
    return testData.map(concert => <MintHorizontalCard key={concert.date} concertData={concert} />)
  }
  return <div>{makeBuyList()}</div>
}
