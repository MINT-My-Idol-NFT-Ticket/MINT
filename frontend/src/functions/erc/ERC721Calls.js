import { MINT_ABI, SALE_ABI } from './index'

export async function getBalance(web3, contractAddress, sender) {
  const contractInstance = new web3.eth.Contract(MINT_ABI, contractAddress)
  const transactionInstance = contractInstance.methods.balanceOf(sender)
  try {
    const response = await transactionInstance.call()
    return response
  } catch {
    console.log('토큰 개수 조회 실패')
  }
}

export async function getTicketList(web3, contractAddress, sender) {
  const contractInstance = new web3.eth.Contract(MINT_ABI, contractAddress)
  const transactionInstance = contractInstance.methods.getTicketList(sender)
  try {
    const response = await transactionInstance.call()
    return response ? response.toString() : 'no token'
  } catch {
    console.log('토큰 목록 조회 실패')
  }
}

export async function getSaleList(web3, contractAddress) {
  const contractInstance = new web3.eth.Contract(SALE_ABI, contractAddress)
  const transactionInstance = contractInstance.methods.getSaleList()
  try {
    const response = await transactionInstance.call()
    return response ? response.toString() : 'no sale'
  } catch {
    console.log('판매 토큰 목록 조회 실패')
  }
}
