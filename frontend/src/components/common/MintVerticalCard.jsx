import { useNavigate } from 'react-router-dom'

import '../../styles/MintVerticalCard.css'
import { BASE_URL } from '../../api/Request'

import MintConcertText from '../common/MintConcertText'
import MintConcertPoster from '../common/MintConcertPoster'

export default function MintVerticalCard({ concertData, notOpen }) {
  const navigate = useNavigate()
  const goDetail = () => {
    navigate(`/concert/detail/${concertData.id}`, { id: concertData.id })
  }
  const makeDataString = str => str.split('.').slice(0, 3).join('.')
  return (
    <div className="MintVerticalCard" onClick={goDetail}>
      <div className={`MintVerticalCard__poster ${notOpen ? 'notOpen' : 'open'}`}>
        <MintConcertPoster imgUrl={`${BASE_URL}${notOpen ? concertData.thumnail : concertData.poster}`} />
      </div>
      <div className="MintVerticalCard__Texts">
        <MintConcertText
          data={{
            singer: concertData.artist[0].name,
            title: concertData.title,
            date: `${makeDataString(concertData.startDate)} - ${makeDataString(concertData.endDate)}`,
          }}
          textStyle={textStyle}
        />
      </div>
    </div>
  )
}

const textStyle = {
  singer: {
    fontSize: '18px',
  },
  title: {
    fontSize: '18px',
  },
  date: {
    fontSize: '14px',
    fontWeight: '300',
  },
}
