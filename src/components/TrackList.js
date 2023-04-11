import useMusicPlayer from '../hooks/usePlayerProvider'
import HeadsetIcon from '@mui/icons-material/Headset'
import PauseCircleIcon from '@mui/icons-material/PauseCircle'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
function TrackList () {
  const {
    trackList,
    playTrack,
    currentTrackIndex,
    isPlaying
  } = useMusicPlayer()
  return (
    <Stack spacing={2}>
      {trackList.map((track, index) => (
        <Button
          sx={{
            bgcolor:
              currentTrackIndex === index && isPlaying ? 'pink' : 'thistle',
            color: 'indigo',
            justifyContent: 'flex-start',
            textTransform: 'none'
          }}
          key={index}
          onClick={() => playTrack(index)}
        >
          {currentTrackIndex === index && isPlaying
            ? (
              <HeadsetIcon />
              )
            : (
              <PauseCircleIcon />
              )}
          <Typography> - {track.name}</Typography>
        </Button>
      ))}
    </Stack>
  )
}
export default TrackList
