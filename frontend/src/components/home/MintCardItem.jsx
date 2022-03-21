import '../../styles/MintCardItem.css'
// 인라인 리소스 확보시 스타일 제거 필요

export default function MintCardItem(props) {
  return (
    <div className="MintCardItem">
      <div className="MintCardItem__img">
        <div
          className="img__wrapper"
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'brown',
          }}>
          이것은 포스터 영역이여
        </div>
      </div>
      <p className="MintCardItem__title">
        <span className="singer">[가수]</span>
        <span className="title">이것은 제목이여</span>
      </p>
      <p className="MintCardItem__date">이것은 날짜여</p>
    </div>
  )
}
