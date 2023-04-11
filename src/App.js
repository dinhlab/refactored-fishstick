import { MusicPlayerProvider } from './contexts/MusicPlayerContext'
import Header from './components/Header'
import TrackList from './components/TrackList'
import Controller from './components/Controller'
import { Container } from '@mui/system'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
const theme = createTheme({
  palette: {
    background: {
      default: 'PeachPuff'
    }
  },
  typography: {
    fontFamily: [
      'Alkatra',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
})
const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 5,
  width: 300,
  height: 400,
  bgcolor: 'white',
  borderRadius: 1,
  boxShadow: '-8px 8px #10162F'
}
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MusicPlayerProvider>
        <Container sx={style}>
          <Header />
          <TrackList />
          <Controller />
        </Container>
      </MusicPlayerProvider>
    </ThemeProvider>
  )
}
export default App
