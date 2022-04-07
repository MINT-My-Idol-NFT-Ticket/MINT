import { Modal, Box, TextField, Button } from '@mui/material'
import { useState } from 'react'

import { registSale } from '../../functions/erc/ERCfunctions'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  pt: 2,
  px: 2,
  pb: 3,
}

export default function MintTradeDetailModal({ open, handleClose, saleContract, tokenId }) {
  const [userPK, setUserPK] = useState()
  const [price, setPrice] = useState()

  const registTicketForSale = async () => {
    const response = await registSale(saleContract, userPK, tokenId, price)
    console.log(response)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description">
      <Box sx={{ ...style, minWidth: '340px', maxWidth: '414px' }}>
        <TextField
          size="small"
          label="가격을 입력해주세요"
          placeholder="3"
          value={price}
          onChange={e => setPrice(e.target.value)}
          sx={{ width: '100%', margin: '16px 0' }}
        />
        <TextField
          size="small"
          label="개인키를 입력해주세요"
          placeholder="0xabcd1234abcd1234abcd1234abcd1234abcd1234"
          value={userPK}
          onChange={e => setUserPK(e.target.value)}
          sx={{ width: '100%', margin: '16px 0' }}
        />
        <Button variant="contained" sx={{ float: 'right' }} onClick={registTicketForSale}>
          판매 등록
        </Button>
      </Box>
    </Modal>
  )
}

const itemStyle = { display: 'flex', flexDirection: 'column', textAlign: 'center' }
const itemTypo = { fontSize: '12px', color: '#C4C4C4' }
