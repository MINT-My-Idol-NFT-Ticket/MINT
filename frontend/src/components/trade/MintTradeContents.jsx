import '../../styles/MintTradeContents.css'
import Doduck from '../../images/do-duck.gif'

import MintCard from '../common/MintCard'
import { getRequest } from '../../api/requests'
import { useEffect, useState } from 'react'
import { getSaleList } from '../../functions/erc/ERC721Calls'

export default function MintTradeContents() {
  const [saleContractAddress, setSaleContractAddress] = useState([])
  const makeCardList = testData =>
    testData.map(ticket => <MintCard key={`${ticket.ownerAccount}-${ticket.tokenId}`} cardData={ticket} type="trade" />)

  const getSaleContractList = async () => {
    const response = await getRequest(`/api/concert/contracts`, { contract: 'salecontractaddress' })
    console.log('salecontract : ', response)
    setSaleContractAddress(response.data)
    console.log(response.data)
    getOnSaleTicketTokens()
  }

  const getOnSaleTicketTokens = async () => {
    for (let i = 0; i < saleContractAddress.length; i++) {
      console.log(saleContractAddress[i])
      try {
        const saleList = await getSaleList(saleContractAddress[i])
        console.log(saleList)
        const tempOnSaleArray = []

        // for (let j = 0; j < parseInt(onSaleTicketArrayLength, 10).length; j++) {
        //   const ticketTokenId = await
        // }
      } catch (error) {
        console.error(error)
      }
    }
  }

  useEffect(() => {
    getSaleContractList()
  }, [])

  return (
    <>
      <div className="MintTrade__cardList">{makeCardList(testData)}</div>
    </>
  )
}

// 테스트 데이터
const testData = [
  {
    imgUrl:
      'https://lh3.googleusercontent.com/tAZzO-ZmRfov6uFtc7VsqCOUhgfHV56n2zhulPbBQS8FnSxBRci3ih9zxB0qvZkHFR-s_5gXC6Ya9Aa8ocfvIRlZaIc1MqOZkmSSXHE=w192',
    price: 0.02,
    tokenId: 'ddffa213',
    date: '220212',
    ownerAccount: '0x0dafadfaqwer1',
    concert: 'SmallBroNFT',
    title: 'Small Bro #530',
  },
  {
    imgUrl:
      'https://lh3.googleusercontent.com/UZ-26gO6lqy5ttLDdHM5hdZFUy1fjHCpurmWHJl0dFgmuQw2LVjN2FV2bm5JwS-i1rvkngpBzDyWaKgDox80OB4v8_muh9JkZcFS=w600',
    price: 0.01,
    title: '제목입니다',
    tokenId: 'ddffa213',
    owner: 'b023423422',
    date: '220212',
    ownerAccount: '0xdafadfaqwer1',
  },
  {
    imgUrl:
      'https://lh3.googleusercontent.com/1HBO9fN-D2vu75HgWYmQSzje5Zyf6j2RTGPPdaYcEpKDpdxEuPzZG-z2K7Iu0ragRZGsj4B6cW6F-ZDrAz-m9qjuQva1iSAin6O_hA=w335',
    price: 0.01,
    tokenId: 'ddffa213',
    owner: 'b0234234212',
    date: '220212',
    ownerAccount: '0x000dafadfaqwer1',
  },
  {
    imgUrl: `${Doduck}`,
    price: 0.01,
    owner: 'b0234234212',
    date: '220212',
    ownerAccount: '0x00x0dafadfaqwer1',
  },
  {
    imgUrl:
      'https://lh3.googleusercontent.com/UZ-26gO6lqy5ttLDdHM5hdZFUy1fjHCpurmWHJl0dFgmuQw2LVjN2FV2bm5JwS-i1rvkngpBzDyWaKgDox80OB4v8_muh9JkZcFS=w600',
    price: 0.01,
    tokenId: 'ddffa213',
    owner: 'b023423422',
    date: '220212',
    ownerAccount: '0x0x0dafadfaqwer1',
  },
  {
    imgUrl:
      'https://lh3.googleusercontent.com/UZ-26gO6lqy5ttLDdHM5hdZFUy1fjHCpurmWHJl0dFgmuQw2LVjN2FV2bm5JwS-i1rvkngpBzDyWaKgDox80OB4v8_muh9JkZcFS=w600',
    price: 0.01,
    tokenId: 'ddffa213',
    owner: 'b023423422',
    date: '220212',
    ownerAccount: 'x0x00dafadfaqwer1',
  },
  {
    imgUrl:
      'https://lh3.googleusercontent.com/UZ-26gO6lqy5ttLDdHM5hdZFUy1fjHCpurmWHJl0dFgmuQw2LVjN2FV2bm5JwS-i1rvkngpBzDyWaKgDox80OB4v8_muh9JkZcFS=w600',
    price: 0.01,
    tokenId: 'ddffa213',
    owner: 'b023423422',
    date: '220212',
    ownerAccount: '0x0xdafadfaqwer1',
  },
]
