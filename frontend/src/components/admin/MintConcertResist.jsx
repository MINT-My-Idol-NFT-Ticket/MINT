import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { useState } from 'react'

import { postRequest, getRequest } from '../../api/requests.js'

import MintSetConcertData from './MintSetConcertData'
import MintSetConcertImage from './MintSetConcertImage'
import MintSetTimeTable from './MintSetTimeTable'
import MintSetAreaData from './MintSetAreaData'
import MintDeployContract from './MintDeployContract'
import MintUploadCard from './MintUploadCard'

export default function MintConcertResist() {
  const [requestData, setRequestData] = useState({})
  const [requestImg, setRequestImg] = useState([])
  const [contractAddresses, setContractAddresses] = useState([0, 0])
  const [check, setCheck] = useState('')

  const checkConcert = () => setCheck(JSON.stringify(requestData))
  const resistConcert = () => {
    const formData = new FormData()

    formData.append('poster', requestImg[0])
    formData.append('thumnail', requestImg[1])
    formData.append('description', requestImg[2])
    formData.append('seats', requestImg[3])

    const jsonData = {
      ...requestData,
      contractAddress: contractAddresses[0],
      saleContractAddress: contractAddresses[1],
    }
    console.log(formData)
    console.log(jsonData)
    console.log(JSON.stringify(jsonData))
    formData.append('key', new Blob([JSON.stringify(jsonData)], { type: 'application/json' }))

    postRequest('api/concert', formData).then(res => console.log(res))
  }

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <MintSetConcertData requestData={requestData} setRequestData={setRequestData} />
          <MintSetConcertImage requestImg={requestImg} setRequestImg={setRequestImg} />
          <br />
          <MintUploadCard requestData={requestData} setRequestData={setRequestData} />
        </Grid>
        <Grid item xs={6}>
          <MintSetTimeTable requestData={requestData} setRequestData={setRequestData} />
          <MintSetAreaData requestData={requestData} setRequestData={setRequestData} />
          <br />
          <Button variant="contained" component="span" onClick={checkConcert}>
            정보 확인
          </Button>
          {check}
          <br />
          <MintDeployContract contractAddresses={contractAddresses} setContractAddresses={setContractAddresses} />
          <Button variant="contained" component="span" onClick={resistConcert}>
            콘서트 등록
          </Button>
        </Grid>
      </Grid>
      <br />
      <br />
    </Box>
  )
}
