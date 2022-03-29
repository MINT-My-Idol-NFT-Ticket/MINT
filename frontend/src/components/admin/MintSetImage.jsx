import { useState } from 'react'

export default function MintSetImage({ setImgFile, type }) {
  const [imgBase64, setImgBse64] = useState([])

  const loadFile = e => {
    setImgFile(e.target.files[0])
    setImgBse64([])

    let reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onloadend = () => {
      const base64 = reader.result
      if (base64) {
        const base64Sub = base64.toString()
        setImgBse64(imgBase64 => [...imgBase64, base64Sub])
      }
    }
  }
  return (
    <>
      <br />
      <p>{type} 업로드</p>
      <input type="file" id="file" onChange={loadFile} />
      <img src={imgBase64} style={{ width: '100px', maxHeight: '100px' }} />
      <br />
    </>
  )
}
