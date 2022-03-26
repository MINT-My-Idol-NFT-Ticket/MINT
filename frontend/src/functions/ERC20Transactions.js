import ERC20 from '../contract/ERC20.json'
import send from './TicketTransactions'

const ABI = ERC20.abi
const CONTRACT_ADDRESS = process.env.REACT_APP_ERC20_ADDRESS

// from 본인이 to에게 토큰 전송
export async function transfer(web3, from, fromPK, to, amount) {
  const contractInstance = new web3.eth.Contract(ABI, CONTRACT_ADDRESS)
  const transactionInstance = contractInstance.methods.transfer(to, amount)
  const gas = await transactionInstance.estimateGas({ from })
  const options = {
    to: CONTRACT_ADDRESS,
    data: transactionInstance.encodeABI(),
    gas,
  }

  try {
    const result = await send(web3, options, fromPK)
    return result
  } catch {
    console.log('전송 실패')
  }
}

// operator가 from으로부터 to로 토큰 전송
export async function transferFrom(web3, operatorPK, from, to, amount) {
  const contractInstance = new web3.eth.Contract(ABI, CONTRACT_ADDRESS)
  const transactionInstance = contractInstance.methods.transferFrom(from, to, amount)
  const gas = await transactionInstance.estimateGas({ from: process.env.REACT_APP_ADMIN_WALLET_ADDRESS })
  const options = {
    to: CONTRACT_ADDRESS,
    data: transactionInstance.encodeABI(),
    gas,
  }

  try {
    const result = await await send(web3, options, operatorPK)
    return result
  } catch {
    console.log('전송 실패')
  }
}

//owner가 spender에게 amount의 토큰 권한 부여
export async function approve(web3, ownerPK, spender, amount) {
  const contractInstance = new web3.eth.Contract(ABI, CONTRACT_ADDRESS)
  const transactionInstance = contractInstance.methods.approve(spender, amount)
  const gas = await transactionInstance.estimateGas({ from: process.env.REACT_APP_ADMIN_WALLET_ADDRESS })
  const options = {
    to: CONTRACT_ADDRESS,
    data: transactionInstance.encodeABI(),
    gas,
  }

  try {
    const result = await send(web3, options, ownerPK)
    return result
  } catch {
    console.log('전송 실패')
  }
}
