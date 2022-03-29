export function sellTicket() {
  // 1. [tokenId] 티켓 판매등록 트랜젝션 전송
}

export function purchaseTicket() {
  // 2. 구매자가 판매자 계좌로 transfer
  // 3. operator가 [tokenId] 티켓을 판매자에게 safetransferFrom-ERC721  - 이 operator는 팀장 계좌로 자동으로 등록됩니다.
}
