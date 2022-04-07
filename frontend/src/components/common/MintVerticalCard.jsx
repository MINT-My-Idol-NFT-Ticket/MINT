import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'

import '../../styles/MintVerticalCard.css'
import { BASE_URL } from '../../api/requests'

import MintConcertText from '../common/MintConcertText'
import MintConcertPoster from '../common/MintConcertPoster'
import removeUnderBar from '../../functions/util/removeUnderBar'

export default function MintVerticalCard({ concertData, notOpen }) {
  const navigate = useNavigate()
  const goDetail = () => {
    navigate(`/concert/detail/${concertData.id}`, { id: concertData.id })
  }
  const makeDataString = str => str.slice(0, -4)
  return (
    <Box sx={{ margin: '10px 0', boxSizing: 'border-box', overflow: 'hidden', cursor: 'pointer' }} onClick={goDetail}>
      <div className={`MintVerticalCard__poster ${notOpen ? 'notOpen' : 'open'}`}>
        <MintConcertPoster imgUrl={`${BASE_URL}${notOpen ? concertData.thumnail : concertData.poster}`} />
      </div>
      <Box sx={{ marginBottom: '10px' }}>
        <MintConcertText
          data={{
            singer: removeUnderBar(concertData.artist[0].name),
            title: concertData.title,
            date: `${makeDataString(concertData.startDate)} ~ ${makeDataString(concertData.endDate)}`,
          }}
          textStyle={textStyle}
        />
      </Box>
    </Box>
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
