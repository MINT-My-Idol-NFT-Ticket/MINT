//modules
import '../../styles/MintVerticalCard.css'
//componentx
import MintConcertText from '../common/MintConcertText'
import MintConcertPoster from '../common/MintConcertPoster'
// 인라인 리소스 확보시 스타일 제거 필요

export default function MintVerticalCard({ concertData, width, height }) {
  return (
    <div className={`MintVerticalCard`} style={{ width: width }}>
      <MintConcertPoster imgUrl={concertData.img} height={height} />
      <MintConcertText
        data={{
          singer: concertData.singer,
          title: concertData.title,
          date: concertData.date,
        }}
        textStyle={textStyle}
      />
    </div>
  )
}

const textStyle = {
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
