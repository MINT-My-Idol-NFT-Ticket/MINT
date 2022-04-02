import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function MintHeader({ content, bright }) {
  const navigate = useNavigate()
  const pushBack = () => navigate(-1)
  return (
    <>
      <Box className="MintSubHeader" sx={{ display: 'flex', width: '100%', height: '50px' }}>
        <a
          style={{
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '10px',
          }}>
          <Box>
            <ChevronLeftIcon onClick={pushBack} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span>{content}</span>
          </Box>
        </a>
      </Box>
    </>
  )
}

export default MintHeader
