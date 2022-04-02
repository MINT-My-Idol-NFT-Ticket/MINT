import React, { useState } from 'react'
//pakages
import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import SearchIcon from '@mui/icons-material/Search'
import { BottomNavigation, BottomNavigationAction, Box, styled, Drawer, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
//modules
import useBrightness from '../../hooks/useBrightness'
import MintFooterMenus from './MintFooterMenus'

function MintFooter() {
  const navigate = useNavigate()
  const pushHome = () => navigate('/home')
  const pushMypage = () => navigate('/mypage')
  const pushSearch = () => navigate('/search')
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
    boxShadow: '2px 2px 12px rgba(0,0,0,.4)',
  }

  const style = bright === 'light' ? { color: '#222831' } : { color: '#FFF' }
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
          <LightModeIcon sx={{ ...modeStyle, backgroundColor: '#FFF' }} style={{ color: '#222831' }} />
        ) : (
          <DarkModeIcon sx={{ ...modeStyle, backgroundColor: '#222831' }} style={{ color: '#FFF' }} />
        )}
      </IconButton>
      <BottomNavigation sx={{ width: '100%', height: '58px', borderTop: '1px solid #dddddd', position: 'relative' }}>
        <BottomNavigationAction label="Home" icon={<HomeIcon style={style} />} onClick={pushHome} />
        <BottomNavigationAction label="Menu" icon={<MenuIcon style={style} />} onClick={toggleDrawer(true)} />
        <BottomNavigationAction label="MyPage" icon={<AccountBoxIcon style={style} />} onClick={pushMypage} />
        <BottomNavigationAction label="Search" icon={<SearchIcon style={style} />} onClick={pushSearch} />
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
    </>
  )
}

export default MintFooter
