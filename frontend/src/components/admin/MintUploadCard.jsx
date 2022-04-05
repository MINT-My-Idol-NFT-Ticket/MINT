import { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { Web3Storage } from 'web3.storage'

const getTocken = () =>
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEE2RDQzQWFEMTMzMmZiRDFjNUM2NzMwNEYxZkJhNTdGRjJkRTYzNDIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDg5Nzg3MTE1NDUsIm5hbWUiOiJTU0FZRl9NSU5UIn0.2R4MBp59c8W3ds0aTMSD89XM1Rp2XTHHYk8ratza72M'

export default function MintUploadCard({ requestData, setRequestData }) {
  const [files, setFiles] = useState([])
  const [cids, setCids] = useState([])
  const selectFiles = e => {
    setFiles(e.target.files)
    console.log(e.target.files)
  }
  const uploadFiles = async () => {
    const client = new Web3Storage({ token: getTocken() })
    const cid = await client.put(files)
    const tmp = []
    for (const file of files) tmp.push(`${cid}/${file.name}`)

    setCids(tmp)
  }

  useEffect(() => {
    setRequestData({
      ...requestData,
      cids: cids,
    })
  }, [cids])

  return (
    <>
      <br />
      <p>IPFS에 이미지 업로드</p>
      <input type="file" multiple onChange={selectFiles} />
      <Button variant="contained" onClick={uploadFiles}>
        업로드
      </Button>
    </>
  )
}
