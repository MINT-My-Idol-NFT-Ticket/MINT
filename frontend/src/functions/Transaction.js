import Web3 from 'web3'
import MintTicket from '../contract/MintTicket.json'

let web3 = new Web3(process.env.REACT_APP_BLOCK_CHAIN_NODE_URL)
const ABI = MintTicket.abi
const BYTE_CODE = MintTicket.bytecode

// 이주현
//Besu 네트워크로 전송하기 위해서 SignedTransaction을 보내는 함수
//트랜잭션 객체를 인자로 받아 서명을 추가하여 트랜잭션을 전송합니다.
export async function send(transaction) {
  let gas = await transaction.estimateGas({ from: process.env.REACT_APP_ADMIN_WALLET_ADDRESS })
  let options = {
    to: transaction._parent._address,
    data: transaction.encodeABI(),
    gas: gas,
  }
  let signedTransaction = await web3.eth.accounts.signTransaction(options, process.env.REACT_APP_ADMIN_PRIVATE_KEY)
  return await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)
}

//컨트랙트 배포 함수
//스마트 컨트랙트를 deploy한뒤 컨트랙트 객체 반환
export async function deployContract() {
  let contract = new web3.eth.Contract(ABI)
  let handle = await send(contract.deploy({ data: BYTE_CODE }))
  console.log(`contract deployed at address ${handle.contractAddress}`)
  const result = new web3.eth.Contract(ABI, handle.contractAddress)
  return result
}

export async function owner(contractAddress) {
  const contract = new web3.eth.Contract(ABI, contractAddress)
  try {
    const transaction = contract.methods.balanceOf(process.env.REACT_APP_ADMIN_WALLET_ADDRESS)
    const result = await send(transaction)
    console.log(result)
  } catch (err) {
    console.log(err)
  }
  return
}

export async function mint()