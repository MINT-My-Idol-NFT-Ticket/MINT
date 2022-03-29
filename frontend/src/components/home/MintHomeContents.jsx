//packages
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import MintBanner from './MintBanner'
import Grid from '@mui/material/Grid'
import { useNavigate } from 'react-router-dom'
//modules
import '../../styles/MintHomeContents.css'
//components
import MintVerticalCard from '../common/MintVerticalCard'

export default function MintHomeContents() {
  const navigate = useNavigate()
  const pushCommingSoon = () => navigate('/comming_soon')
  const makeOpenList = testData =>
    testData.map(concert => <MintVerticalCard key={concert.date} concertData={concert} notOpen={false} />)

  const makeNotOpenList = testData => {
    return (
      <Grid container>
        {testData.map(concert => (
          <Grid key={concert.date} item xs={6}>
            <MintVerticalCard concertData={concert} notOpen={true} />
          </Grid>
        ))}
      </Grid>
    )
  }

  return (
    <>
      <MintBanner />
      {makeOpenList(testData)}
      <div className="MintHome__subTitle">
        <p>오픈 예정</p>
        <ChevronRightIcon onClick={pushCommingSoon} />
      </div>
      <div className="MintHome__notOpenList">{makeNotOpenList(testData2)}</div>
    </>
  )
}

// 테스트 데이터
const testData = [
  {
    img: 'poster_ho.png',
    title: '1번 제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목',
    singer: '1번 가수',
    date: '1번 날짜',
  },
  {
    img: 'poster_ho.png',
    title: '2번 제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목',
    singer: '2번 가수',
    date: '2번 날짜',
  },
  {
    img: 'poster_ho.png',
    title: '3번 제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목',
    singer: '3번 가수',
    date: '3번 날짜',
  },
]
const testData2 = [
  {
    img: 'poster_ver.gif',
    title: '1번 제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목',
    singer: '1번 가수',
    date: '1번 날짜',
  },
  {
    img: 'poster_ver.gif',
    title: '2번 제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목',
    singer: '2번 가수',
    date: '2번 날짜',
  },
  {
    img: 'poster_ver.gif',
    title: '3번 제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목',
    singer: '3번 가수',
    date: '3번 날짜',
  },
  {
    img: 'poster_ver.gif',
    title: '4번 제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목',
    singer: '4번 가수',
    date: '4번 날짜',
  },
]
