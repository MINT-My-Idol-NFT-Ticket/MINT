//modules
import '../../styles/MintVerticalCard.css'
//componentx
import MintConcertText from '../common/MintConcertText'
import MintConcertPoster from '../common/MintConcertPoster'
// 인라인 리소스 확보시 스타일 제거 필요

export default function MintVerticalCard({ concertData, width, height }) {
  const textStyle = {
    width: {
      width: width,
    },
    singer: {
      fontSize: '18px',
    },
    title: {
      fontSize: '18px',
    },
    date: {
      fontSize: '15px',
      fontWeight: '300',
    },
  }
  return (
    <div className={`MintVerticalCard`}>
      <MintConcertPoster imgUrl={concertData.img} width={width} height={height} />
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
