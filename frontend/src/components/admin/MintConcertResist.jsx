//packages
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
//modules
//components
import MintSetConcertData from './MintSetConcertData'
import MintSetConcertImage from './MintSetConcertImage'
import MintSetTimeTable from './MintSetTimeTable'
import MintSetAreaData from './MintSetAreaData'

export default function MintConcertResist() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <MintSetConcertData />
          <MintSetConcertImage />
        </Grid>
        <Grid item xs={6}>
          <MintSetTimeTable />
          <MintSetAreaData />
        </Grid>
      </Grid>
      <Button variant="contained" component="span">
        등록하기
      </Button>
    </Box>
  )
}
