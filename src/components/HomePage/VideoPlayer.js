import React, { useState, useRef } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { PlayArrow, Pause, ArrowBack, ArrowForward, VolumeOff, VolumeUp } from '@mui/icons-material';

const VideoPlayer = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Default to muted
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleNext = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
      setIsPlaying(false);
    }
  };

  const handlePrevious = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
      setIsPlaying(false);
    }
  };

  return (
    <Box
      sx={{
        width: '45vw',
        height: '60vh',
        marginTop: '3rem',
        borderRadius: '16px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#000',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        src={videos[currentVideoIndex]}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        controls={false}
        muted={isMuted}
      />

      {isHovered && (
        <>
          {/* Play/Pause Button */}
          <IconButton
            onClick={togglePlayPause}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
            }}
          >
            {isPlaying ? <Pause /> : <PlayArrow />}
          </IconButton>

          {/* Mute/Unmute Button */}
          <IconButton
            onClick={toggleMute}
            sx={{
              position: 'absolute',
              bottom: '10%',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
            }}
          >
            {isMuted ? <VolumeOff /> : <VolumeUp />}
          </IconButton>

          {/* Previous Button */}
          <IconButton
            onClick={handlePrevious}
            disabled={currentVideoIndex === 0}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '10%',
              transform: 'translateY(-50%)',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
              opacity: currentVideoIndex === 0 ? 0.5 : 1,
            }}
          >
            <ArrowBack />
          </IconButton>

          {/* Next Button */}
          <IconButton
            onClick={handleNext}
            disabled={currentVideoIndex === videos.length - 1}
            sx={{
              position: 'absolute',
              top: '50%',
              right: '10%',
              transform: 'translateY(-50%)',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
              opacity: currentVideoIndex === videos.length - 1 ? 0.5 : 1,
            }}
          >
            <ArrowForward />
          </IconButton>
        </>
      )}

      <Typography
        variant="body2"
        sx={{
          padding: 1,
          textAlign: 'center',
          backgroundColor: '#f9f9f9',
          color: 'gray',
          borderTop: '1px solid #ddd',
        }}
      >
        {`Video ${currentVideoIndex + 1} of ${videos.length}`}
      </Typography>
    </Box>
  );
};

export default VideoPlayer;
