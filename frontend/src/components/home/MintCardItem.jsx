import '../../styles/MintCardItem.css'
import MintConcertText from '../common/MintConcertText.jsx'
// 인라인 리소스 확보시 스타일 제거 필요

export default function MintCardItem({ isOpen, concertData, textStyle }) {
  return (
    <div className={`MintCardItem ${isOpen ? 'open' : ''}`}>
      {/* {a} */}
      <div className={`MintCardItem__img`}>
        <div
          className={`img__wrapper`}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'brown',
          }}>
          {concertData.img}
        </div>
      </div>
      <MintConcertText
        data={{
          singer: concertData.singer,
          title: concertData.title,
          date: concertData.date,
        }}
        textStyle={textStyle}
      />
    </div>
  )
}
