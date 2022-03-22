import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import SearchIcon from '@mui/icons-material/Search'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'

import useBrightness from '../../hooks/useBrightness'

function MintFooter() {
  const [bright, setBright] = useBrightness()

  const style = bright === 'light' ? { color: '#222831' } : { color: '#EEEEEE' }
  return (
    <BottomNavigation sx={{ width: '100%', height: '50px' }}>
      <BottomNavigationAction label="Home" icon={<HomeIcon style={style} />} />
      <BottomNavigationAction label="Menu" icon={<MenuIcon style={style} />} />
      <BottomNavigationAction label="MyPage" icon={<AccountBoxIcon style={style} />} />
      <BottomNavigationAction label="Search" icon={<SearchIcon style={style} />} />
    </BottomNavigation>
  )
}

export default MintFooter
