//packages
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import MintBanner from './MintBanner'
import MintHomeCard from './MintHomeCard'

export default function MintHomeContents() {
  const makeOpenList = testData => {
    const style = {
      singer: {
        fontSize: '15px',
      },
      title: {
        fontSize: '14px',
      },
      date: {
        fontSize: '12px',
        fontWeight: '300',
      },
    }
    return testData.map(concert => (
      <MintHomeCard key={concert.date} concertData={concert} textStyle={style} height="150px" />
    ))
  }
  const makeNotOpenList = testData => {
    const style = {
      singer: {
        fontWeight: '600',
        fontSize: '12px',
      },
      title: {
        fontWeight: '500',
        fontSize: '12px',
      },
      date: {
        fontSize: '10px',
        fontWeight: '300',
      },
    }
    return testData.map(concert => (
      <MintHomeCard key={concert.date} isOpen={true} concertData={concert} textStyle={style} height="120px" />
    ))
  }
  return (
    <>
      <MintBanner />
      {makeOpenList(testData)}
      <div className="MintHome__sub__title">
        <p>오픈 예정</p>
        <ChevronRightIcon />
      </div>
      <div className="MintHome__not__open__list">{makeNotOpenList(testData2)}</div>
    </>
  )
}

// 테스트 데이터
const testData = [
  {
    img: '1번 포스터',
    title: '1번 제목 길지롱 깨롱까롱~~~~',
    singer: '1번 가수',
    date: '1번 날짜',
  },
  {
    img: '2번 포스터',
    title: '2번 제목 길지롱 깨롱까롱~~~~',
    singer: '2번 가수',
    date: '2번 날짜',
  },
  {
    img: '3번 포스터',
    title: '3번 제목 길지롱 깨롱까롱~~~~',
    singer: '3번 가수',
    date: '3번 날짜',
  },
]
const testData2 = [
  {
    img: '1번 포스터',
    title: '1번 제목 길지롱 깨롱까롱~~~~',
    singer: '1번 가수',
    date: '1번 날짜',
  },
  {
    img: '2번 포스터',
    title: '2번 제목 길지롱 깨롱까롱~~~~',
    singer: '2번 가수',
    date: '2번 날짜',
  },
  {
    img: '3번 포스터',
    title: '3번 제목 길지롱 깨롱까롱~~~~',
    singer: '3번 가수',
    date: '3번 날짜',
  },
  {
    img: '4번 포스터',
    title: '4번 제목 졸라 길지롱 깨롱까롱~~~~',
    singer: '4번 가수',
    date: '4번 날짜',
  },
]
