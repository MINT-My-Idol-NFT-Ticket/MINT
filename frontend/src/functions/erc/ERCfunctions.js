import { web3 } from './index'

import * as ERC721Transactions from './ERC721Transactions.js'
import * as ERC721Calls from './ERC721Calls.js'
import * as ERC20Transactions from './ERC20Transactions.js'
import * as ERC20Calls from './ERC20Calls.js'

// 컨트랙트 배포
export const deployTicketContract = price => ERC721Transactions.deployTicketContract(web3, price)
export const deploySaleContract = mintTicketAddress => ERC721Transactions.deploySaleContract(web3, mintTicketAddress)

// 예매 시 티켓 mint
export const mintTicket = (contractAddress, sender, senderPK, tokenURI) =>
  ERC721Transactions.buyTicket(web3, contractAddress, sender, senderPK, tokenURI)
// 예매 취소 시 티켓 burn
export const burnTicket = (contractAddress, tokenId) => ERC721Transactions.cancelTicket(web3, contractAddress, tokenId)

// 컨트랙트 배포 시 sale 컨트랙트 연동
export const setSaleTicket = (ticketContractAddress, saleContractAddress) =>
  ERC721Transactions.setSaleTicket(web3, ticketContractAddress, saleContractAddress)

// sender의 티켓 수량 파악
export const getTicketAmount = (contractAddress, sender) => ERC721Calls.getBalance(web3, contractAddress, sender)
// sender의 티켓 목록 파악
export const getTicketList = (contractAddress, sender) => ERC721Calls.getTicketList(web3, contractAddress, sender)
// 판매 등록된 토큰id 배열 반환
export const getSaleList = contractAddress => ERC721Calls.getSaleList(web3, contractAddress)

// from으로부터 to로 [amount] SSF 전송
export const transferSSF = (from, fromPK, to, amount) => ERC20Transactions.transfer(web3, from, fromPK, to, amount)
// operator가 from으로부터 to로 [amount] SSF 전송
export const transferFromSSF = (operatorPK, from, to, amount) =>
  ERC20Transactions.transfer(web3, operatorPK, from, to, amount)
// SSF 전송권한 부여
export const approveSSF = (from, ownerPK, spender, amount) =>
  ERC20Transactions.approve(web3, from, ownerPK, spender, amount)
//spender에게 owner의 토큰 중 얼만큼의 권한이 있는지 확인
export const allowanceSSF = (owner, spender) => ERC20Calls.allowance(web3, owner, spender)

//판매 등록
export const registSale = (saleContractAddress, tokenId, price) =>
  ERC721Transactions.setForSaleTicket(web3, saleContractAddress, tokenId, price)
//구매
export const purchaseTicket = (saleContractAddress, tokenId) =>
  ERC721Transactions.purchaseTicket(web3, saleContractAddress, tokenId)
