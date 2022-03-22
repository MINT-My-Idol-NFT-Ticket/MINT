//modules
import '../../styles/MintSearchCard.css'
//componentx
import MintConcertText from '../common/MintConcertText'
import MintConcertPoster from '../common/MintConcertPoster'
// 인라인 리소스 확보시 스타일 제거 필요

export default function MintSearchCard({ isOpen, concertData, height }) {
  return (
    <div className={`MintSearchCard ${isOpen ? 'open' : ''}`}>
      <div className="MintSearchCard__poster">
        <MintConcertPoster imgUrl={concertData.img} height={height} />
      </div>
      <div className="MintSearchCard__text">
        <MintConcertText
          data={{
            singer: concertData.singer,
            title: concertData.title,
            date: concertData.date,
          }}
          textStyle={textStyle}
        />
      </div>
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
