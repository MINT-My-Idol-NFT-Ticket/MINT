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
  return (
    <div className="MintVerticalCard" onClick={goDetail}>
      <div className={`MintVerticalCard__poster ${notOpen ? 'notOpen' : 'open'}`}>
        <MintConcertPoster imgUrl={`${BASE_URL}${notOpen ? concertData.thumnail : concertData.poster}`} />
      </div>
      <MintConcertText
        data={{
          singer: concertData.artist[0].name,
          title: concertData.title,
          date: `${concertData.startData} - ${concertData.endDate}`,
        }}
        textStyle={textStyle}
      />
    </div>
  )
}

const textStyle = {
  singer: {
    fontSize: '16px',
  },
  title: {
    fontSize: '16px',
  },
  date: {
    fontSize: '14px',
    fontWeight: '300',
  },
}
