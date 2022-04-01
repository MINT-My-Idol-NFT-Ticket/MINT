import { create } from 'ipfs-http-client'
import { useEffect, useState } from 'react'
import { Button } from '@mui/material'

const ipfs = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

export default function MintUploadCard({ requestData, setRequestData }) {
  const [files, setFiles] = useState([])
  const [cids, setCids] = useState([])
  const selectFiles = e => setFiles(e.target.files)
  const uploadFiles = async () => {
    const list = []
    for (let file of files) {
      const tmp = await ipfs.add(file)
      list.push(tmp.path)
    }
    setCids(list)
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
