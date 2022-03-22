//modules
import '../../styles/MintHomeCard.css'
//componentx
import MintConcertText from '../common/MintConcertText'
import MintConcertPoster from '../common/MintConcertPoster'
// 인라인 리소스 확보시 스타일 제거 필요

export default function MintHomeCard({ isOpen, concertData, textStyle, height }) {
  return (
    <div className={`MintHomeCard ${isOpen ? 'open' : ''}`}>
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
