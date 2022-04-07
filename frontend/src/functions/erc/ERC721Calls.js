import { typography } from '@mui/system'
import { MINT_ABI, SALE_ABI } from './index'

export async function getBalance(web3, contractAddress, sender) {
  const contract = new web3.eth.Contract(MINT_ABI, contractAddress)
  const transaction = contract.methods.balanceOf(sender)
  try {
    const response = await transaction.call()
    return response
  } catch (err) {
    return 0
  }
}

export async function getTicketList(web3, contractAddress, sender) {
  const contract = new web3.eth.Contract(MINT_ABI, contractAddress)
  const transaction = contract.methods.getTicketList(sender)
  try {
    const response = await transaction.call()
    return response
  } catch {
    return []
  }
}

export async function getTicketPrice(web3, contractAddress) {
  const contract = new web3.eth.Contract(MINT_ABI, contractAddress)
  const transaction = contract.methods.getTicketPrice()
  try {
    const response = await transaction.call()
    return response
  } catch {
    return false
  }
}

export async function tokenURI(web3, contractAddress, tokenId) {
  const contract = new web3.eth.Contract(MINT_ABI, contractAddress)
  const transaction = contract.methods.tokenURI(tokenId)
  try {
    const response = await transaction.call()
    return response
  } catch {
    return false
  }
}

export async function MintTicketAddress(web3, saleContractAddress) {
  const contract = new web3.eth.Contract(SALE_ABI, saleContractAddress)
  const transaction = contract.methods.getLinkedContract()
  try {
    const response = await transaction.call()
    return response
  } catch {
    return false
  }
}

export async function getSaleList(web3, contractAddress) {
  const contract = new web3.eth.Contract(SALE_ABI, contractAddress)
  const transaction = contract.methods.getSaleList()
  try {
    const response = await transaction.call()
    return response
  } catch {
    return false
  }
}

export async function SaleTicketPrice(web3, saleContractAddress, tokenId) {
  const contract = new web3.eth.Contract(SALE_ABI, saleContractAddress)
  const transaction = contract.methods.getTicketPrice(tokenId)

  try {
    const response = await transaction.call()
    return response
  } catch {
    return false
  }
}

export async function getApproved(web3, contractAddress, tokenId) {
  const contract = new web3.eth.Contract(MINT_ABI, contractAddress)
  const transaction = contract.methods.getApproved(tokenId)
  try {
    const response = await transaction.call()
    return response
  } catch {
    return false
  }
}
