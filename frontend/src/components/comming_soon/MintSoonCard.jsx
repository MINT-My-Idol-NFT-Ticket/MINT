//modules
import '../../styles/MintSoonCard.css'
//componentx
import MintConcertText from '../common/MintConcertText'
import MintConcertPoster from '../common/MintConcertPoster'

export default function MintSoonCard({ concertData, height }) {
  return (
    <div className={`MintSoonCard`}>
      <div className="MintSoonCard__poster">
        <MintConcertPoster imgUrl={concertData.img} height={height} />
      </div>
      <div className="MintSoonCard__text">
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
