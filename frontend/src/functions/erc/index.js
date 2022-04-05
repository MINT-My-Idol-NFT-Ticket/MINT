import Web3 from 'web3'
import MintTicket from '../../contract/MintTicket.json'
import SaleTicket from '../../contract/SaleTicket.json'
import ERC20 from '../../contract/ERC20.json'

export const web3 = new Web3(process.env.REACT_APP_BLOCK_CHAIN_NODE_URL)

const getSsafyNet = () => 'http://20.196.209.2:8545'
const getAdminWalletAddress = () => '0x2418B0cea93A6efC494DB419A24a0186d4C6065F'
const getAdminPK = () => '0xb492301336976866218b482de63c470efec9749fefa9e5317b16de00bd73f511'
const getERC20Address = () => '0x6C927304104CDAA5A8B3691E0ADE8A3DED41A333'

export const SSAFY_NET = getSsafyNet()

export const MINT_ABI = MintTicket.abi
export const MINT_BYTE_CODE = MintTicket.bytecode

export const SALE_ABI = SaleTicket.abi
export const SALE_BYTE_CODE = SaleTicket.bytecode

export const ERC20_ABI = ERC20.abi

export const ADMIN = getAdminWalletAddress()
export const ADMIN_PK = getAdminPK()
export const ERC20ADDRESS = getERC20Address()
