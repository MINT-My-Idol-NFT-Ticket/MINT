import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import SearchIcon from '@mui/icons-material/Search'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'

function MintFooter() {
  return (
    <BottomNavigation>
      <BottomNavigationAction label="Home" icon={<HomeIcon style={{ color: '#222831' }} />} />
      <BottomNavigationAction label="Menu" icon={<MenuIcon style={{ color: '#222831' }} />} />
      <BottomNavigationAction label="MyPage" icon={<AccountBoxIcon style={{ color: '#222831' }} />} />
      <BottomNavigationAction label="Search" icon={<SearchIcon style={{ color: '#222831' }} />} />
    </BottomNavigation>
  )
}

export default MintFooter
