import '../../styles/MintConcertDetailContents.css'
import poster from '../../images/poster_ho.png'
import detail from '../../images/detail.png'
import { BASE_URL } from '../../api/Request'

export default function MintConcertDetailContents({ concertData }) {
  console.log(concertData)
  return (
    <div className="MintConcertDetailContents">
      <div className="MintConcertDetailContents__poster">
        {/* <img src={`${BASE_URL}${concertData.poster}`} alt="" /> */}
      </div>
      <div className="MintConcertDetailContents__data">API 완성 시 마무리</div>
      <div className="MintConcertDetailContents__detail">
        {/* <img src={`${BASE_URL}${concertData.detail}`} alt="" /> */}
      </div>
    </div>
  )
}
