// div 영역 스타일은 배너 리소스 확보시 삭제

export default function MintBanner() {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100px',
          backgroundColor: 'royalblue',
        }}
        className="MintBanner__img">
        이것은 배너 영역이여
      </div>
    </>
  )
}
