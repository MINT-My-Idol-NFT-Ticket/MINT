import MintConcertText from './MintConcertText'
import MintConcertPoster from './MintConcertPoster'
import { Box, Button, Typography } from '@mui/material'
import { BASE_URL } from '../../api/requests'
import { useNavigate } from 'react-router-dom'

export default function MintHorizontalCard({ concertData, passDetail, children }) {
  const navigate = useNavigate()
  console.log(concertData, '콘서트데이터')

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px 0',
        boxSizing: 'border-box',
        cursor: 'default',
      }}>
      <Box sx={{ width: '120px', height: '120px', boxSizing: 'border-box', marginRight: '20px' }}>
        <MintConcertPoster imgUrl={`${BASE_URL}${concertData.poster ? concertData.poster : concertData.thumnailUrl}`} />
      </Box>
      <Box sx={{ width: '100px', flex: '1 auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        <Typography
          sx={{
            display: 'inline-block',
            backgroundColor: concertData.isBefore ? '#DECAEB' : concertData.isOpen ? '#8811dd' : '#ddd',
            padding: '2px 8px',
            color: '#fff',
            borderRadius: '20px',
            fontSize: '12px',
          }}>
          {concertData.isBefore ? 'soon' : concertData.isOpen ? 'open' : 'closed'}
        </Typography>
        <MintConcertText
          data={{
            singer: concertData.artists ? concertData.artists[0].name : concertData.artist[0].name,
            title: concertData.title,
            date: `${concertData.startDate.slice(0, -4)} ~ ${concertData.endDate.slice(0, -4)}`,
          }}
          textStyle={textStyle}
        />
        <Box sx={{ marginTop: '18px' }}>
          <Button
            variant="contained"
            color="info"
            size="small"
            sx={{ width: '45%', marginRight: '16px', float: 'right' }}
            onClick={() => {
              navigate(`/concert/detail/${concertData.id}`)
            }}>
            콘서트 상세
          </Button>
          {children}
        </Box>
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
    marginTop: '10px',
    fontSize: '14px',
    fontWeight: '300',
  },
}
