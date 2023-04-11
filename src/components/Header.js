import useMusicPlayer from '../hooks/usePlayerProvider'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
function Header () {
  const { currentTrackName } = useMusicPlayer()
  return (
    <Box sx={{ color: 'Indigo', marginTop: 2 }}>
      <Typography variant='h6'>{currentTrackName}</Typography>
    </Box>
  )
}
export default Header
