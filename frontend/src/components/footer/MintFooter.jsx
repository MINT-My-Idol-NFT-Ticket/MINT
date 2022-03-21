import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import SearchIcon from '@mui/icons-material/Search'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'

function MintFooter() {
  return (
    <BottomNavigation>
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Menu" icon={<MenuIcon />} />
      <BottomNavigationAction label="MyPage" icon={<AccountBoxIcon />} />
      <BottomNavigationAction label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  )
}

export default MintFooter
