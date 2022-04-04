import '../../styles/MintTradeContents.css'
import Doduck from '../../images/do-duck.gif'

import MintCard from '../common/MintCard'

export default function MintTradeContents() {
  const makeCardList = testData =>
    testData.map(ticket => <MintCard key={`${ticket.ownerAccount}-${ticket.tokenId}`} cardData={ticket} type="trade" />)

  return (
    <>
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
    ownerAccount: 'dafadfaqwer1',
    concert: 'BTS Permission To Dance Concert',
    title: '[BTS] V Permission To Dance Edition #33',
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
    ownerAccount: 'dafadfaqwer1',
  },
  {
    imgUrl:
      'https://lh3.googleusercontent.com/1HBO9fN-D2vu75HgWYmQSzje5Zyf6j2RTGPPdaYcEpKDpdxEuPzZG-z2K7Iu0ragRZGsj4B6cW6F-ZDrAz-m9qjuQva1iSAin6O_hA=w335',
    price: 0.01,
    tokenId: 'ddffa213',
    owner: 'b0234234212',
    date: '220212',
    number: 3,
    ownerAccount: 'dafadfaqwer1',
  },
  {
    imgUrl: `${Doduck}`,
    price: 0.01,
    owner: 'b0234234212',
    date: '220212',
    number: 4,
    ownerAccount: 'dafadfaqwer1',
  },
  {
    imgUrl:
      'https://lh3.googleusercontent.com/UZ-26gO6lqy5ttLDdHM5hdZFUy1fjHCpurmWHJl0dFgmuQw2LVjN2FV2bm5JwS-i1rvkngpBzDyWaKgDox80OB4v8_muh9JkZcFS=w600',
    price: 0.01,
    tokenId: 'ddffa213',
    owner: 'b023423422',
    date: '220212',
    number: 5,
    ownerAccount: 'dafadfaqwer1',
  },
  {
    imgUrl:
      'https://lh3.googleusercontent.com/UZ-26gO6lqy5ttLDdHM5hdZFUy1fjHCpurmWHJl0dFgmuQw2LVjN2FV2bm5JwS-i1rvkngpBzDyWaKgDox80OB4v8_muh9JkZcFS=w600',
    price: 0.01,
    tokenId: 'ddffa213',
    owner: 'b023423422',
    date: '220212',
    number: 6,
    ownerAccount: 'dafadfaqwer1',
  },
  {
    imgUrl:
      'https://lh3.googleusercontent.com/UZ-26gO6lqy5ttLDdHM5hdZFUy1fjHCpurmWHJl0dFgmuQw2LVjN2FV2bm5JwS-i1rvkngpBzDyWaKgDox80OB4v8_muh9JkZcFS=w600',
    price: 0.01,
    tokenId: 'ddffa213',
    owner: 'b023423422',
    date: '220212',
    number: 7,
    ownerAccount: 'dafadfaqwer1',
  },
]
