import ERC20 from '../contract/ERC20.json'

const ABI = ERC20.abi
const CONTRACT_ADDRESS = process.env.REACT_APP_ERC20_ADDRESS

//spender에게 owner의 토큰 중 얼만큼의 권한이 있는지
export async function allowance(web3, owner, spender) {
  const contractInstance = new web3.eth.Contract(ABI, CONTRACT_ADDRESS)
  const transactionInstance = contractInstance.methods.allowance(owner, spender)
  const response = await transactionInstance.call()

  return response
}
