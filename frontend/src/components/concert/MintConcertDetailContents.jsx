import '../../styles/MintConcertDetailContents.css'
import { BASE_URL } from '../../api/Request'

export default function MintConcertDetailContents({ concertData }) {
  console.log(concertData)
  return (
    <div className="MintConcertDetailContents">
      <div className="MintConcertDetailContents__poster">
        <img src={`${BASE_URL}${concertData.poster}`} alt="" />
      </div>
      <div className="MintConcertDetailContents__detail">
        <img src={`${BASE_URL}${concertData.detail}`} alt="" />
      </div>
    </div>
  )
}
