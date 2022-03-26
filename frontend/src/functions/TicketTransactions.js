import Web3 from 'web3'
import MintTicket from '../contract/MintTicket.json'
import no_MintTicket from '../contract/no_MintTicket.json'

const web3 = new Web3(process.env.REACT_APP_BLOCK_CHAIN_NODE_URL)

// 사용하는 컨트랙트 타입 정의
const MintTicketObj = {
  ABI: MintTicket.abi,
  BYTE_CODE: MintTicket.bytecode,
}
const compiledContract = new Map()
compiledContract.set('MintTicket', MintTicketObj)

//Besu 네트워크로 전송하기 위해서 SignedTransaction을 보내는 함수
//트랜잭션 객체를 인자로 받아 서명을 추가하여 트랜잭션을 전송합니다.
export async function send(options, senderAddress, senderPK) {
  console.log('===================================================================================')
  console.log('send함수 - 트랜젝션을 보내는 주소: ', senderAddress)
  console.log('send함수 - 트랜젝션을 받는 주소: ', options.to)
  console.log('send함수 - 가스 리밋: ', options.gas)
  console.log('send함수 - 보내는 토큰의 양: ', options.value || '없음')

  let signedTransaction = await web3.eth.accounts.signTransaction(options, senderPK)
  return await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)
}

//컨트랙트 배포 함수
//스마트 컨트랙트를 deploy한뒤 컨트랙트 객체 반환
export async function deployContract() {
  const contractInstance = new web3.eth.Contract(compiledContract.get('MintTicket').ABI) // 배포하고자 하는 컨트랙트 인스턴스
  const transactionInstance = contractInstance.deploy({
    data: compiledContract.get('MintTicket').BYTE_CODE,
    arguments: [1],
  }) // 트랜잭션 인스턴스

  const gas = await transactionInstance.estimateGas({ from: process.env.REACT_APP_ADMIN_WALLET_ADDRESS })
  const options = {
    to: transactionInstance._parent._address,
    data: transactionInstance.encodeABI(),
    gas,
  }

  const senderAddress = process.env.REACT_APP_ADMIN_WALLET_ADDRESS
  const senderPK = process.env.REACT_APP_ADMIN_PRIVATE_KEY

  const responseObject = await send(options, senderAddress, senderPK) // 트랜젝션 전송후 반환 받은 객체
  console.log(`deployContract함수 - 배포된 컨트랙트 주소: ${responseObject.contractAddress}`)

  return responseObject
}

export async function mintTicket(contractType, contractAddress, senderAddress, senderPK) {
  const contractInstance = new web3.eth.Contract(compiledContract.get(contractType).ABI, contractAddress)
  const transactionInstance = contractInstance.methods.buyTicket('민팅 테스트')

  const gas = '3000000'
  const options = {
    from: senderAddress,
    to: contractAddress,
    data: transactionInstance.encodeABI(),
    gas,
    value: 1,
  }

  const responseObject = await send(options, senderAddress, senderPK)
  console.log(`mintTicket - 민팅 정보: `)
  console.log(responseObject)

  return responseObject.status ? '민팅 성공' : '민팅 실패'
}

export async function transferTicket(contractType, contractAddress, senderAddress, senderPK, receiverAddress, tokenId) {
  console.log(tokenId)
  const contractInstance = new web3.eth.Contract(compiledContract.get(contractType).ABI, contractAddress)
  const transactionInstance = contractInstance.methods.safeTransferFrom(senderAddress, receiverAddress, tokenId)

  const gas = '3000000'
  const options = {
    to: contractAddress,
    data: transactionInstance.encodeABI(),
    gas,
  }

  const responseObject = await send(options, senderAddress, senderPK)
  console.log(`transferTicket - 전송 정보 `)
  console.log(responseObject)

  return responseObject.status ? '전송 성공' : '전송 실패'
}

export async function getContractName(contractType, contractAddress) {
  const contractInstance = new web3.eth.Contract(compiledContract.get(contractType).ABI, contractAddress)
  const transactionInstance = contractInstance.methods.name()
  const response = await transactionInstance.call()
  console.log('===================================================================================')
  console.log('getContractName 함수 - 컨트랙트 이름: ', response)
  return response
}

export async function getBalance(contractType, contractAddress, senderAddress) {
  const contractInstance = new web3.eth.Contract(compiledContract.get(contractType).ABI, contractAddress)
  const transactionInstance = contractInstance.methods.balanceOf(senderAddress)
  const response = await transactionInstance.call()
  console.log('===================================================================================')
  console.log(`getBalance 함수 - ${senderAddress}의 토큰 개수: ${response}`)

  return response
}

export async function getTicketList(contractType, contractAddress, senderAddress) {
  const contractInstance = new web3.eth.Contract(compiledContract.get(contractType).ABI, contractAddress)
  const transactionInstance = contractInstance.methods.getTicketList(senderAddress)
  try {
    const response = await transactionInstance.call()
    console.log('===================================================================================')
    console.log(`getTicketList 함수 - ${senderAddress}의 토큰 목록: ${response}`)
    return response ? response.toString() : 'no token'
  } catch {
    console.log('===================================================================================')
    console.log('보유한 토큰 없음')
  }
}
