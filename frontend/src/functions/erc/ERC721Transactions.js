import { MINT_ABI, MINT_BYTE_CODE, SALE_ABI, SALE_BYTE_CODE, ADMIN, ADMIN_PK, ERC20ADDRESS } from './index'
import send from './sendTransactions.js'

// 티켓 컨트랙트 배포 함수
export async function deployTicketContract(web3, price) {
  const contract = new web3.eth.Contract(MINT_ABI) // 배포하고자 하는 컨트랙트 인스턴스
  const transaction = contract.deploy({
    data: MINT_BYTE_CODE,
    arguments: [price, ERC20ADDRESS],
  })
  const gas = await transaction.estimateGas({ from: ADMIN })
  const options = {
    to: transaction._parent._address,
    data: transaction.encodeABI(),
    gas,
  }
  try {
    const result = await send(web3, options, ADMIN_PK)
    return result.contractAddress
  } catch {
    console.log('배포 실패')
  }
}

// 판매 등록 컨트랙트 배포 함수
export async function deploySaleContract(web3, mintTicketAddress) {
  const contract = new web3.eth.Contract(SALE_ABI) // 배포하고자 하는 컨트랙트 인스턴스
  // deploy 트랜잭션 인스턴스
  const transaction = contract.deploy({
    data: SALE_BYTE_CODE,
    arguments: [mintTicketAddress, ERC20ADDRESS],
  })
  const gas = await transaction.estimateGas({ from: ADMIN })
  const options = {
    to: transaction._parent._address,
    data: transaction.encodeABI(),
    gas,
  }

  try {
    const result = await send(web3, options, ADMIN_PK)
    return result.contractAddress
  } catch {
    console.log('배포 실패')
  }
}

export async function buyTicket(web3, contractAddress, sender, senderPK, tokenURI) {
  const contract = new web3.eth.Contract(MINT_ABI, contractAddress) // 배포되어 있는 컨트랙트 인스턴스
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

export async function setSaleTicket(web3, ticketContractAddress, saleContractAddress) {
  const contract = new web3.eth.Contract(MINT_ABI, ticketContractAddress)
  const transaction = contract.methods.setSaleTicket(saleContractAddress)

  const gas = '3000000'
  const options = {
    to: ticketContractAddress,
    data: transaction.encodeABI(),
    gas,
  }

  try {
    await send(web3, options, ADMIN_PK)
  } catch {
    console.log('전송 실패')
  }
}

export async function cancelTicket(web3, contractAddress, senderPK, tokenId) {
  const contract = new web3.eth.Contract(MINT_ABI, contractAddress)
  const transaction = contract.methods.cancelTicket(tokenId)

  const gas = '3000000'
  const options = {
    to: contractAddress,
    data: transaction.encodeABI(),
    gas,
  }

  const result = await send(web3, options, senderPK)

  return result
}

export async function setForSaleTicket(web3, saleContractAddress, senderPK, tokenId, price) {
  console.log(saleContractAddress)
  const contract = new web3.eth.Contract(SALE_ABI, saleContractAddress)
  const transaction = contract.methods.setForSaleTicket(tokenId, price)

  const gas = '3000000'
  const options = {
    to: saleContractAddress,
    data: transaction.encodeABI(),
    gas,
  }

  try {
    await send(web3, options, senderPK)
  } catch {
    console.log('전송 실패')
  }
}

export async function purchaseTicket(web3, senderPK, saleContractAddress, tokenId) {
  const contract = new web3.eth.Contract(SALE_ABI, saleContractAddress)
  const transaction = contract.methods.purchaseTicket(tokenId)

  const gas = '3000000'
  const options = {
    to: saleContractAddress,
    data: transaction.encodeABI(),
    gas,
  }

  await send(web3, options, senderPK)
  // console.log('전송 실패')
}

export async function approve(web3, saleContractAddress, contractAddress, tokenId, senderPK) {
  const contract = new web3.eth.Contract(MINT_ABI, contractAddress)
  const transaction = contract.methods.approve(saleContractAddress, tokenId)

  const gas = '3000000'
  const options = {
    to: contractAddress,
    data: transaction.encodeABI(),
    gas,
  }
  const result = await send(web3, options, senderPK)
  console.log(result)
}
