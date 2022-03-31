//packages
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { useState } from 'react'
//modules
import { postReqeust } from '../../api/Request.js'
//components
import MintSetConcertData from './MintSetConcertData'
import MintSetConcertImage from './MintSetConcertImage'
import MintSetTimeTable from './MintSetTimeTable'
import MintSetAreaData from './MintSetAreaData'
import MintDeployContract from './MintDeployContract'

export default function MintConcertResist() {
  const [requestData, setRequestData] = useState({})
  const [requestImg, setRequestImg] = useState([])
  const [contractAddress, setContractAddress] = useState([])
  const [check, setCheck] = useState('')

  const checkConcert = () => setCheck(JSON.stringify(requestData))
  const resistConcert = () => {
    const formData = new FormData()

    formData.append('file1', requestImg[0])
    formData.append('file2', requestImg[1])
    formData.append('file3', requestImg[2])
    formData.append('file4', requestImg[3])

    const jsonData = {
      ...requestData,
      contractAddress: contractAddress,
      saleContractAddress: contractAddress,
    }
    console.log(JSON.stringify(jsonData))
    formData.append('key', new Blob([JSON.stringify(jsonData)], { type: 'application/json' }))

    postReqeust('api/concert', formData).then(res => console.log(res))
  }

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <MintSetConcertData requestData={requestData} setRequestData={setRequestData} />
          <MintSetConcertImage requestImg={requestImg} setRequestImg={setRequestImg} />
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
          <MintDeployContract contractAddress={contractAddress} setContractAddress={setContractAddress} />
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

// {
// 	"title":"테스트",
// 	"status":"1",
// 	"place":"테스트",
//   "price":"1"
// 	"singer":["테스트","테스트","테스트"],
// 	"contractAddress": "0x36B7A67F5338654511576A5CB00392E76D2676E2"
// 	"saleContractAddress": "0x36B7A67F5338654511576A5CB00392E76D2676E2"
// 	"time":"3",
// 	"timeTable":["0000","0000","0000"],
// 	"sectionNum":"3",
// 	"section":{"a":"1","b":"2","c":"3"}},
// }
