import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import { BottomNavigation, BottomNavigationAction, Box, Drawer } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import useBrightness from '../../hooks/useBrightness'
import { lightColor, darkColor, isLight } from '../../functions/util/color'

import MintFooterMenus from './MintFooterMenus'

function MintFooter() {
  const navigate = useNavigate()
  const pushHome = () => navigate('/home')
  const pushMypage = () => navigate('/mypage')
  const pushSearch = () => navigate('/search')
  const pushTrade = () => navigate('/trade')
  const [bright, setBright] = useBrightness()
  const [open, setOpen] = useState(false)

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setBright(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen)
  }

  const modeStyle = {
    width: '28px',
    height: '28px',
    borderRadius: '100px',
    padding: '8px',
    boxShadow: '2px 2px 12px rgba(0,0,0,.2)',
  }

  const style = isLight(bright) ? { color: darkColor } : { color: lightColor }
  return (
    <Box sx={{ boxShadow: `0 -1px 20px 0 rgba(0,0,0,.2)`, zIndex: 100 }}>
      <IconButton
        sx={{
          position: 'absolute',
          right: '10px',
          bottom: '75px',
        }}
        onClick={colorMode.toggleColorMode}
        color="inherit">
        {isLight(bright) ? (
          <DarkModeIcon sx={{ ...modeStyle, backgroundColor: darkColor }} style={{ color: lightColor }} />
        ) : (
          <LightModeIcon sx={{ ...modeStyle, backgroundColor: lightColor }} style={{ color: darkColor }} />
        )}
      </IconButton>
      <BottomNavigation sx={{ width: '100%', height: '58px', position: 'relative' }}>
        <BottomNavigationAction label="Home" icon={<HomeIcon style={style} />} onClick={pushHome} />
        <BottomNavigationAction label="Menu" icon={<MenuIcon style={style} />} onClick={toggleDrawer(true)} />
        <BottomNavigationAction label="Trade" icon={<ConfirmationNumberIcon style={style} />} onClick={pushTrade} />
        <BottomNavigationAction label="Search" icon={<SearchIcon style={style} />} onClick={pushSearch} />
        <BottomNavigationAction label="MyPage" icon={<PersonIcon style={style} />} onClick={pushMypage} />
        <Box>
          <Drawer
            anchor="top"
            open={open}
            onClose={toggleDrawer(false)}
            PaperProps={{ style: { width: '100%', maxWidth: '414px', margin: '0 auto' } }}>
            <MintFooterMenus drawer={toggleDrawer(false)} />
          </Drawer>
        </Box>
      </BottomNavigation>
    </Box>
  )
}

export default MintFooter
