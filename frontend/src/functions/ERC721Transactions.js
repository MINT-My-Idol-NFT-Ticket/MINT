import MintTicket from '../contract/MintTicket.json'
import send from './sendTransactions.js'

const ABI = MintTicket.abi
const BYTE_CODE = MintTicket.bytecode
const OWNER = process.env.REACT_APP_ADMIN_WALLET_ADDRESS // 컨트랙트 owner
const OWNER_PK = process.env.REACT_APP_ADMIN_PRIVATE_KEY // owner 개인키

// 컨트랙트 배포 함수
export async function deploy(web3) {
  const contract = new web3.eth.Contract(ABI) // 배포하고자 하는 컨트랙트 인스턴스
  // deploy 트랜잭션 인스턴스
  const transaction = contract.deploy({
    data: BYTE_CODE,
    arguments: [1],
  })

  const gas = await transaction.estimateGas({ from: OWNER })
  const options = {
    to: transaction._parent._address,
    data: transaction.encodeABI(),
    gas,
  }

  try {
    const result = await send(web3, options, OWNER_PK)
    return result.contractAddress
  } catch {
    console.log('배포 실패')
  }
}

export async function buyTicket(web3, contractAddress, sender, senderPK, tokenURI) {
  const contract = new web3.eth.Contract(ABI, contractAddress) // 배포되어 있는 컨트랙트 인스턴스
  const transaction = contract.methods.buyTicket(tokenURI) // 민팅 트랜잭션 인스턴스

  const gas = '3000000'
  const options = {
    from: sender,
    to: contractAddress,
    data: transaction.encodeABI(),
    gas,
  }

  try {
    const result = await send(web3, options, senderPK)
    return result.status ? true : false
  } catch {
    console.log('민팅 실패')
  }
}

export async function safeTransferFrom(web3, contractAddress, from, to, tokenId) {
  console.log(tokenId)
  const contractInstance = new web3.eth.Contract(ABI, contractAddress) // 배포되어 있는 컨트랙트 인스턴스
  const transactionInstance = contractInstance.methods.safeTransferFrom(from, to, tokenId) // safeTransferFrom 트랜잭션 인스턴스

  const gas = '3000000'
  const options = {
    to: contractAddress,
    data: transactionInstance.encodeABI(),
    gas,
  }

  try {
    // 스마트 컨트랙트에서 민팅할 때마다 해당 토큰의 operator로 contract owner가 추가됩니다
    // 따라서 owner는 모든 토큰에 대한 transfer권한을 가지고 있습니다
    const result = await send(web3, options, OWNER_PK)
    return result.status ? true : false // NFT 전송 성공 여부 반환
  } catch {
    console.log('전송 실패')
  }
}
