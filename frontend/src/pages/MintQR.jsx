import React from 'react'

function MintQR(props) {
  const url = 'http://j6b108.p.ssafy.io/mypage/ticket/1'

  return (
    <div style={{ background: '#f0f0f0' }}>
      <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=50x50`} />
      <table style={{ fontSize: '0.1rem' }}>
        <tbody>
          <tr>
            <td>콘서트명</td>
            <td>Ipsum</td>
          </tr>
          <tr>
            <td>가수</td>
            <td>Ipsum</td>
          </tr>
          <tr>
            <td>좌석정보</td>
            <td>Ipsum</td>
          </tr>
          <tr>
            <td>공연시간</td>
            <td>Ipsum</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MintQR
