//pakages
import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import SearchIcon from '@mui/icons-material/Search'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
//modules
import useBrightness from '../../hooks/useBrightness'

function MintFooter() {
  const navigate = useNavigate()
  const pushHome = () => navigate('/home')
  const pushMypage = () => navigate('/mypage')
  const pushSearch = () => navigate('/search')
  const [bright, setBright] = useBrightness()

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setBright(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )

  const modeStyle = {
    width: '28px',
    height: '28px',
    borderRadius: '100px',
    padding: '8px',
    boxShadow: '2px 2px 12px rgba(0,0,0,.4)',
  }

  const style = bright === 'light' ? { color: '#222831' } : { color: '#EEEEEE' }
  return (
    <>
      <IconButton
        sx={{
          position: 'absolute',
          right: '10px',
          bottom: '55px',
        }}
        onClick={colorMode.toggleColorMode}
        color="inherit">
        {bright === 'dark' ? (
          <LightModeIcon sx={{ ...modeStyle, backgroundColor: '#EEEEEE' }} style={{ color: '#222831' }} />
        ) : (
          <DarkModeIcon sx={{ ...modeStyle, backgroundColor: '#222831' }} style={{ color: '#EEEEEE' }} />
        )}
      </IconButton>
      <BottomNavigation sx={{ width: '100%', height: '50px' }}>
        <BottomNavigationAction label="Home" icon={<HomeIcon style={style} />} onClick={pushHome} />
        <BottomNavigationAction label="Menu" icon={<MenuIcon style={style} />} />
        <BottomNavigationAction label="MyPage" icon={<AccountBoxIcon style={style} />} onClick={pushMypage} />
        <BottomNavigationAction label="Search" icon={<SearchIcon style={style} />} onClick={pushSearch} />
      </BottomNavigation>
    </>
  )
}

export default MintFooter
