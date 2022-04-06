import React from 'react'
import { Button, createTheme, Grid, ThemeProvider } from '@mui/material'

// 맨아래
function MintConcertSeat(props) {
  const handleSelect = () => {
    props.handleSeat(props.data.name)
    props.setSelected(props.idx)
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#8811DD',
        light: '#DECAEB',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            minWidth: '40px',
            maxWidth: '40px',
            height: '40px',
          },
        },
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Grid item>
        <Button
          onClick={() => {
            props.handleSelect(props.idx)
          }}
          disabled={props.data.status === 0 ? false : true}
          variant={props.selected ? 'outlined' : 'contained'}>
          {props.data.name.slice(props.data.name.lastIndexOf('-') + 1)}
        </Button>
      </Grid>
    </ThemeProvider>
  )
}

export default MintConcertSeat
