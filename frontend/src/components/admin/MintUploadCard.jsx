import { useState } from 'react'
import { Button } from '@mui/material'
import { postRequest } from '../../api/requests'

let cids = []

export default function MintUploadCard({ requestData, setRequestData }) {
  const [GIF, setGIF] = useState([])
  const [MP4, setMP4] = useState([])
  const selectGIF = e => {
    setGIF(e.target.files)
  }
  const selectMP4 = e => {
    setMP4(e.target.files)
  }
  const uploadFiles = async () => {
    const formData = new FormData()

    formData.append('gif', GIF[0])
    formData.append('mp4', MP4[0])
    console.log(formData)

    const response = await postRequest('api/concert/resource', formData)
    console.log(response.data)
    cids.push(JSON.stringify(response.data))
    console.log(cids)
    // const client = new Web3Storage({ token: getTocken() })
    // const gifCID = await client.put(GIF)
    // const mp4CID = await client.put(MP4)
    // cids.push(JSON.stringify({ gif: `${gifCID}/${GIF[0].name}`, mp4: `${mp4CID}/${MP4[0].name}` }))
    // console.log(cids)
  }
  const resetCID = () => {
    cids = []
    console.log(cids)
  }

  // useEffect(() => {
  //   setRequestData({
  //     ...requestData,
  //     cids: cids,
  //   })
  // }, [cids])

  return (
    <>
      <br />
      <p>IPFS에 이미지 업로드</p>
      <p>GIF</p>
      <input type="file" onChange={selectGIF} />
      <p>MP4</p>
      <input type="file" onChange={selectMP4} />
      <Button variant="contained" onClick={uploadFiles}>
        리소스 추가
      </Button>

      <Button
        variant="contained"
        onClick={() => {
          setRequestData({
            ...requestData,
            cids: cids,
          })
        }}>
        업로드
      </Button>

      <p>새로운 콘서트 등록할 때 반드시 초기화1!!</p>
      <Button variant="contained" onClick={resetCID}>
        리소스 초기화
      </Button>
    </>
  )
}
