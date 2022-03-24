export default function MintSetConcertData() {
  const imageData = ['공연 포스터', '공연 상세 정보', '구역 이미지']

  return (
    <>
      <p>이미지 업로드</p>
      <br />
      {imageData.map(data => (
        <div key={data} style={{ marginBottom: '5px' }}>
          <label>
            <span>{data}</span>
            <input accept="image/*" id="contained-button-file" multiple type="file" />
          </label>
        </div>
      ))}
    </>
  )
}
