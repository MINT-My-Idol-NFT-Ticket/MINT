import { Box } from '@mui/material'

import MintBtnGroup from '../common/MintBtnGroup'
import MintHorizontalCard from '../common/MintHorizontalCard'
import MintHorizontalSkeleton from '../skeleton/MintHorizontalSkeleton'

export default function MintBuyList() {
  const testData = []

  for (let i = 1; i <= 40; i++) {
    testData.push({
      title: `${i}번 제목${i}번 제목${i}번 제목${i}번 제목${i}번 제목${i}번 제목${i}번 제목${i}번 제목${i}번 제목`,
      date: `${i}번 날짜`,
      singer: `${i}번 가수`,
      img: 'poster_ver.gif',
    })
  }

  const makeBuyList = () => {
    return testData.map(concert => (
      // <MintHorizontalCard key={concert.date} concertData={concert}>
      //   <MintBtnGroup
      //     prev={{ url: `home`, content: '상세 보기', color: 'primary' }}
      //     next={{ url: `home`, content: '티켓 확인', color: 'primary' }}
      //   />
      // </MintHorizontalCard>
      <MintHorizontalSkeleton key={concert.singer} />
    ))
  }
  return <div>{makeBuyList()}</div>
}
