import MintTicket from '../contract/MintTicket.json'

const ABI = MintTicket.abi

export async function getBalance(web3, contractAddress, sender) {
  const contractInstance = new web3.eth.Contract(ABI, contractAddress)
  const transactionInstance = contractInstance.methods.balanceOf(sender)
  try {
    const response = await transactionInstance.call()
    return response
  } catch {
    console.log('토큰 개수 조회 실패')
  }
}

export async function getTicketList(web3, contractAddress, sender) {
  const contractInstance = new web3.eth.Contract(ABI, contractAddress)
  const transactionInstance = contractInstance.methods.getTicketList(sender)
  try {
    const response = await transactionInstance.call()
    return response ? response.toString() : 'no token'
  } catch {
    console.log('토큰 목록 조회 실패')
  }
}
