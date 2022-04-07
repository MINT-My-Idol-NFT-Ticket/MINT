import { Button } from '@mui/material'
import { useEffect, useState } from 'react'

import { getRequest } from '../../api/requests'

import MintSaleModal from './MintSaleModal'

export default function MintSaleBtn({ tokenId }) {
  const [saleContract, setSaleContract] = useState(null)

  const [SaleOpen, setSaleOpen] = useState(false)
  const handleSaleOpen = () => setSaleOpen(true)
  const handlePayClose = () => setSaleOpen(false)

  const getSaleContractAddress = async () => {
    const response = await getRequest(`api/concert/contracts${tokenId.contractAddress}`)
    setSaleContract(response.data[0].saleContractAddress)
  }

  useEffect(() => {
    getSaleContractAddress()
  })

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        sx={{ position: 'absolute', top: 6, right: 6 }}
        onClick={handleSaleOpen}>
        티켓 판매
      </Button>
      <MintSaleModal
        open={SaleOpen}
        handleClose={handlePayClose}
        saleContract={saleContract}
        tokenId={tokenId.tokenId}
      />
    </>
  )
}
