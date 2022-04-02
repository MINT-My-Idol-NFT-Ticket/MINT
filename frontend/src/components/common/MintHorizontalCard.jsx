import MintConcertText from './MintConcertText'
import MintConcertPoster from './MintConcertPoster'
import { Box } from '@mui/material'

export default function MintHorizontalCard({ concertData, children }) {
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
        <MintConcertPoster imgUrl={concertData.img} />
      </Box>
      <Box sx={{ width: '100px', flex: '1 auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        <MintConcertText
          data={{ singer: concertData.singer, title: concertData.title, date: concertData.date }}
          textStyle={textStyle}
        />
        <Box sx={{ marginTop: '25px' }}>{children}</Box>
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
    fontSize: '16px',
    fontWeight: '300',
  },
}
