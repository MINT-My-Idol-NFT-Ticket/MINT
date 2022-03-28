import '../../styles/MintConcertDetailContents.css'
import poster from '../../images/poster_ho.png'
import detail from '../../images/detail.png'

export default function MintConcertDetailContents() {
  return (
    <div className="MintConcertDetailContents">
      <div className="MintConcertDetailContents__poster">
        <img src={poster} alt="" />
      </div>
      <div className="MintConcertDetailContents__data">API 완성 시 마무리</div>
      <div className="MintConcertDetailContents__detail">
        <img src={detail} alt="" />
      </div>
    </div>
  )
}
