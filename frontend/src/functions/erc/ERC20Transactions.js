import send from './sendTransactions.js'
import { ERC20_ABI, ERC20ADDRESS } from './index'

// from 본인이 to에게 토큰 전송
export async function transfer(web3, from, fromPK, to, amount) {
  const contractInstance = new web3.eth.Contract(ERC20_ABI, ERC20ADDRESS)
  const transactionInstance = contractInstance.methods.transfer(to, amount)
  const gas = await transactionInstance.estimateGas({ from })
  const options = {
    to: ERC20ADDRESS,
    data: transactionInstance.encodeABI(),
    gas,
  }
  return await send(web3, options, fromPK)
}

// operator가 from으로부터 to로 토큰 전송
export async function transferFrom(web3, operatorPK, from, to, amount) {
  const contractInstance = new web3.eth.Contract(ERC20_ABI, ERC20ADDRESS)
  const transactionInstance = contractInstance.methods.transferFrom(from, to, amount)
  const gas = await transactionInstance.estimateGas({ from: process.env.REACT_APP_ADMIN_WALLET_ADDRESS })
  const options = {
    to: ERC20ADDRESS,
    data: transactionInstance.encodeABI(),
    gas,
  }
  return await send(web3, options, operatorPK)
}

//owner가 spender에게 amount의 토큰 권한 부여
export async function approve(web3, ownerPK, spender, amount) {
  const contractInstance = new web3.eth.Contract(ERC20_ABI, ERC20ADDRESS)
  const transactionInstance = contractInstance.methods.approve(spender, amount)
  const gas = await transactionInstance.estimateGas({ from: process.env.REACT_APP_ADMIN_WALLET_ADDRESS })
  const options = {
    to: ERC20ADDRESS,
    data: transactionInstance.encodeABI(),
    gas,
  }
  return await send(web3, options, ownerPK)
}
