//modules
import '../../styles/MintSearchCard.css'
//componentx
import MintConcertText from '../common/MintConcertText'
import MintConcertPoster from '../common/MintConcertPoster'

export default function MintSearchCard({ concertData, height }) {
  return (
    <div className={`MintSearchCard`}>
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
