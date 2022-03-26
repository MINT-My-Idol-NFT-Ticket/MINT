export default function sellTicket () {
	// 1. [tokenId] 티켓 판매등록 트랜젝션 전송
}

export default function purchaseTicket() {
	// 1. 관리자 계좌(operate)를 [판매 가격 SSF] 만큼 구매자 계좌 권한 approve
	// 2. operator가 구매자 계좌로부터 판매자 계좌로 transferFrom-ERC20
	// 3. operator가 [tokenId] 티켓을 판매자에게 safetransferFrom-ERC721  - 이 operator는 팀장 계좌로 자동으로 등록됩니다.
}