import { Modal, Box, Typography, TextField, Button } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}

export default function MintConcertPaymentModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description">
      <Box sx={{ ...style, minWidth: '340px', maxWidth: '414px' }}>
        <Typography>지갑 잔액: {'얼마'} SSF</Typography>
        <Typography>결제 후 예상 잔액: {'얼마'} SSF</Typography>
        <TextField
          label="개인키"
          placeholder="0xabcd1234abcd1234abcd1234abcd1234abcd1234"
          sx={{ width: '100%' }}></TextField>
        <Button variant="contained">결제</Button>
      </Box>
    </Modal>
  )
}
