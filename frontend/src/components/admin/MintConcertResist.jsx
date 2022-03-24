//packages
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
//modules
import { deployContract, owner } from '../../functions/Transaction.js'
//components
import MintSetConcertData from './MintSetConcertData'
import MintSetConcertImage from './MintSetConcertImage'
import MintSetTimeTable from './MintSetTimeTable'
import MintSetAreaData from './MintSetAreaData'
import { useState } from 'react'

export default function MintConcertResist() {
  const [address, setAdress] = useState('')
  const inputAdress = e => {
    setAdress(e.target.value)
  }
  const ownerTest = () => {
    owner(address)
  }
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
      <Button variant="contained" component="span" onClick={deployContract}>
        등록하기
      </Button>
      <Button variant="contained" component="span" onClick={deployContract}>
        deploy
      </Button>
      <Button variant="contained" component="span" onClick={ownerTest}>
        Owner
      </Button>
      <input type="text" onChange={inputAdress} />
    </Box>
  )
}
