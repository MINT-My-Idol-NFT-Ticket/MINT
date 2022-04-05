import MintConcertText from './MintConcertText'
import MintConcertPoster from './MintConcertPoster'
import { Box, Button } from '@mui/material'
import { BASE_URL } from '../../api/requests'

export default function MintHorizontalCard({ concertData, passDetail, children }) {
  console.log(concertData)
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px 0',
        boxSizing: 'border-box',
      }}>
      <Box sx={{ width: '120px', height: '120px', boxSizing: 'border-box', marginRight: '20px' }}>
        <MintConcertPoster imgUrl={`${BASE_URL}${concertData.poster}`} />
      </Box>
      <Box sx={{ width: '100px', flex: '1 auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        <MintConcertText
          data={{
            singer: concertData.artist[0].name,
            title: concertData.title,
            date: `${concertData.startDate.slice(0, -4)} ~ ${concertData.endDate.slice(0, -4)}`,
          }}
          textStyle={textStyle}
        />
        <Box sx={{ marginTop: '25px' }}>
          <Button
            variant="contained"
            color="info"
            size="small"
            sx={{ width: '45%', marginRight: '16px', float: 'right' }}
            onClick={() => {
              passDetail(concertData.id)
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
