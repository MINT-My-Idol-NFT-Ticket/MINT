//modules
import '../../styles/MintTradeContents.css'
import Doduck from '../../images/do-duck.gif'
//components
import MintCategory from './MintCategory'
import MintTradeCard from './MintTradeCard'

export default function MintTradeContents() {
  const makeCardList = testData => testData.map(ticket => <MintTradeCard key={ticket.number} cardData={ticket} />)
  const makeCategory = testCategory =>
    testCategory.map(category => <MintCategory key={category.number} category={category} />)

  return (
    <>
      <div className="MintTrade__category">{makeCategory(testCategory)}</div>
      <div className="MintTrade__cardList">{makeCardList(testData)}</div>
    </>
  )
}

// 테스트 데이터
const testData = [
  {
    imgUrl:
      'https://lh3.googleusercontent.com/tAZzO-ZmRfov6uFtc7VsqCOUhgfHV56n2zhulPbBQS8FnSxBRci3ih9zxB0qvZkHFR-s_5gXC6Ya9Aa8ocfvIRlZaIc1MqOZkmSSXHE=w192',
    price: 0.02,
    tokenId: 'ddffa213',
    date: '220212',
    number: 1,
  },
  {
    imgUrl:
      'https://lh3.googleusercontent.com/UZ-26gO6lqy5ttLDdHM5hdZFUy1fjHCpurmWHJl0dFgmuQw2LVjN2FV2bm5JwS-i1rvkngpBzDyWaKgDox80OB4v8_muh9JkZcFS=w600',
    price: 0.01,
    title: '제목입니다',
    tokenId: 'ddffa213',
    owner: 'b023423422',
    date: '220212',
    number: 2,
  },
  {
    imgUrl:
      'https://lh3.googleusercontent.com/1HBO9fN-D2vu75HgWYmQSzje5Zyf6j2RTGPPdaYcEpKDpdxEuPzZG-z2K7Iu0ragRZGsj4B6cW6F-ZDrAz-m9qjuQva1iSAin6O_hA=w335',
    price: 0.01,
    tokenId: 'ddffa213',
    owner: 'b0234234212',
    date: '220212',
    number: 3,
  },
  {
    imgUrl: `${Doduck}`,
    price: 0.01,
    owner: 'b0234234212',
    date: '220212',
    number: 4,
  },
  {
    imgUrl:
      'https://lh3.googleusercontent.com/UZ-26gO6lqy5ttLDdHM5hdZFUy1fjHCpurmWHJl0dFgmuQw2LVjN2FV2bm5JwS-i1rvkngpBzDyWaKgDox80OB4v8_muh9JkZcFS=w600',
    price: 0.01,
    tokenId: 'ddffa213',
    owner: 'b023423422',
    date: '220212',
    number: 5,
  },
  {
    imgUrl:
      'https://lh3.googleusercontent.com/UZ-26gO6lqy5ttLDdHM5hdZFUy1fjHCpurmWHJl0dFgmuQw2LVjN2FV2bm5JwS-i1rvkngpBzDyWaKgDox80OB4v8_muh9JkZcFS=w600',
    price: 0.01,
    tokenId: 'ddffa213',
    owner: 'b023423422',
    date: '220212',
    number: 6,
  },
  {
    imgUrl:
      'https://lh3.googleusercontent.com/UZ-26gO6lqy5ttLDdHM5hdZFUy1fjHCpurmWHJl0dFgmuQw2LVjN2FV2bm5JwS-i1rvkngpBzDyWaKgDox80OB4v8_muh9JkZcFS=w600',
    price: 0.01,
    tokenId: 'ddffa213',
    owner: 'b023423422',
    date: '220212',
    number: 7,
  },
]

const testCategory = [
  {
    number: 1,
    icon: '아이콘 링크',
    categoryname: 'Concert',
  },
  {
    number: 2,
    icon: '아이콘 링크',
    categoryname: 'Musical',
  },
  {
    number: 3,
    icon: '아이콘 링크',
    categoryname: 'Art',
  },
  {
    number: 4,
    icon: '아이콘 링크',
    categoryname: 'Ticket',
  },
  {
    number: 5,
    icon: '아이콘 링크',
    categoryname: 'BTS',
  },
  {
    number: 6,
    icon: '아이콘 링크',
    categoryname: 'Event',
  },
]
