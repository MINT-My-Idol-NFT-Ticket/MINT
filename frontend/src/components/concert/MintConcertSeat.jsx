import { Button, createTheme, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'

function MintConcertSeat(props) {
  const [isSelected, setIsSelected] = useState(false)
  const handleSelect = () => {
    setIsSelected(true)
    props.select(props.data)
  }

  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            minWidth: '50px',
            maxWidth: '50px',
          },
        },
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Button
        sx={{ margin: '3px' }}
        onClick={handleSelect}
        disabled={props.data.status === 0 ? false : true}
        variant={isSelected ? 'outlined' : 'contained'}>
        {props.data.name.slice(props.data.name.lastIndexOf('-') + 1)}
      </Button>
    </ThemeProvider>
  )
}

export default MintConcertSeat
