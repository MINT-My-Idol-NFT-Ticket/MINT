import '../../styles/MintTradeContents.css'

import MintCategory from './MintCategory'
import MintTradeCard from './MintTradeCard'

export default function MintTradeContents() {
  const makeCardList = testData => testData.map(ticket => <MintTradeCard key={ticket.number} cardData={ticket} />)

  return (
    <>
      <MintCategory />
      <div className="MintTrade__cardList">{makeCardList(testData)}</div>
    </>
  )
}

const testData = [
  {
    img: 'https://lh3.googleusercontent.com/tAZzO-ZmRfov6uFtc7VsqCOUhgfHV56n2zhulPbBQS8FnSxBRci3ih9zxB0qvZkHFR-s_5gXC6Ya9Aa8ocfvIRlZaIc1MqOZkmSSXHE=w192',
    price: 0.02,
    title: '제목입니다',
    owner: 'b023423423',
    date: '220212',
    number: 1,
    likeCnt: 4,
  },
  {
    img: 'https://lh3.googleusercontent.com/UZ-26gO6lqy5ttLDdHM5hdZFUy1fjHCpurmWHJl0dFgmuQw2LVjN2FV2bm5JwS-i1rvkngpBzDyWaKgDox80OB4v8_muh9JkZcFS=w600',
    price: 0.01,
    title: '제목입니다',
    owner: 'b023423422',
    date: '220212',
    number: 2,
    likeCnt: 16,
  },
  {
    img: 'https://lh3.googleusercontent.com/1HBO9fN-D2vu75HgWYmQSzje5Zyf6j2RTGPPdaYcEpKDpdxEuPzZG-z2K7Iu0ragRZGsj4B6cW6F-ZDrAz-m9qjuQva1iSAin6O_hA=w335',
    price: 0.01,
    title: '제목입니다',
    owner: 'b0234234212',
    date: '220212',
    number: 3,
    likeCnt: 23,
  },
]
