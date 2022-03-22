//modules
import '../../styles/MintNotOpenCard.css'
//componentx
import MintConcertText from '../common/MintConcertText'
import MintConcertPoster from '../common/MintConcertPoster'
// 인라인 리소스 확보시 스타일 제거 필요

export default function MintNotOpenCard({ concertData, height }) {
  const textStyle = {
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
  return (
    <div className={`MintNotOpenCard`}>
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
