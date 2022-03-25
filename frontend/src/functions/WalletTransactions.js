import Web3 from 'web3'
import ERC20 from '../contract/ERC20.json'
import { send } from './TicketTransactions'

const ERC20Obj = {
  ABI: ERC20.abi,
  BYTE_CODE: ERC20.bytecode,
}

const web3 = new Web3(process.env.REACT_APP_BLOCK_CHAIN_NODE_URL)
const contractAddress = '0x6C927304104CDAA5A8B3691E0ADE8A3DED41A333'

export async function getWalletBalance(senderAddress) {
  const contractInstance = new web3.eth.Contract(ERC20Obj.ABI, contractAddress)
  const transactionInstance = contractInstance.methods.balanceOf(senderAddress)
  const response = await transactionInstance.call()
  console.log('===================================================================================')
  console.log(`getBalance 함수 - ${senderAddress}의 잔액: ${response}`)

  return response
}

export async function transferSSAFY(sender, senderPK, recipient, amount) {
  const contractInstance = new web3.eth.Contract(ERC20Obj.ABI, contractAddress)
  const transactionInstance = contractInstance.methods.transfer(recipient, 1)
  const gas = await transactionInstance.estimateGas({ from: process.env.REACT_APP_ADMIN_WALLET_ADDRESS })
  const options = {
    to: contractAddress,
    data: transactionInstance.encodeABI(),
    gas,
  }

  const responseObject = await send(options, sender, senderPK)
  console.log('===================================================================================')
  console.log(`transferSSAFY 함수 - 전송 정보: `)
  console.log(responseObject)
  console.log(`transferSSAFY 함수 - ${sender}로부터 ${amount} ${recipient} 전송`)

  // return response
}
