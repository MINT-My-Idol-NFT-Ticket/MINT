import Web3 from 'web3'
import MintTicket from '../../contract/MintTicket.json'
import SaleTicket from '../../contract/SaleTicket.json'
import ERC20 from '../../contract/ERC20.json'

export const web3 = new Web3(process.env.REACT_APP_BLOCK_CHAIN_NODE_URL)

const getSsafyNet = () => process.env.REACT_APP_BASE_URL
const getAdminWalletAddress = () => process.env.REACT_APP_ADMIN_WALLET_ADDRESS
const getAdminPK = () => process.env.REACT_APP_ADMIN_PRIVATE_KEY
const getERC20Address = () => process.env.REACT_APP_ERC20_ADDRESS

export const SSAFY_NET = getSsafyNet()

export const MINT_ABI = MintTicket.abi
export const MINT_BYTE_CODE = MintTicket.bytecode

export const SALE_ABI = SaleTicket.abi
export const SALE_BYTE_CODE = SaleTicket.bytecode

export const ERC20_ABI = ERC20.abi

export const ADMIN = getAdminWalletAddress()
export const ADMIN_PK = getAdminPK()
export const ERC20ADDRESS = getERC20Address()
