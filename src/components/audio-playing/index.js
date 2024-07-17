import React, { useState, useEffect, useRef } from 'react';
import * as C from './styles.js';
import { IoClose, IoPlay } from 'react-icons/io5';
import { IoIosPause } from 'react-icons/io';
import { FiMusic } from 'react-icons/fi';

const AudioPlaying = ( { src, time, user } ) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [progressWidth, setProgressWidth] = useState(0);
  const playerRef = useRef(null);

  const formatZero = (n) => (n < 10 ? `0${n}` : n);

  useEffect(() => {
    const player = playerRef.current;

    const updateTime = () => {
      if (player) {
        const currentMinutes = Math.floor(player.currentTime / 60);
        const currentSeconds = Math.floor(player.currentTime % 60);
        setCurrentTime(`${currentMinutes}:${formatZero(currentSeconds)}`);
    
        const durationFormatted = isNaN(player.duration) ? 0 : player.duration;
        const durationMinutes = Math.floor(durationFormatted / 60);
        const durationSeconds = Math.floor(durationFormatted % 60);
        setDuration(`${durationMinutes}:${formatZero(durationSeconds)}`);
    
        const newProgressWidth = durationFormatted
          ? (player.currentTime / durationFormatted) * 100
          : 0;
        setProgressWidth(newProgressWidth);
      }
    };
    
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime('0:00');
      if (player) {
        player.currentTime = 0;
      }
    };
    
    if (player) {
      player.addEventListener('timeupdate', updateTime);
      player.addEventListener('ended', handleEnded);
    
      return () => {
        player.removeEventListener('timeupdate', updateTime);
        player.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  useEffect(() => {
    const player = playerRef.current;
    if (src && player) {
      player.addEventListener('loadedmetadata', () => {
        const durationFormatted = isNaN(player.duration) ? 0 : player.duration;
        const durationMinutes = Math.floor(durationFormatted / 60);
        const durationSeconds = Math.floor(durationFormatted % 60);
        setDuration(`${durationMinutes}:${formatZero(durationSeconds)}`);
      });
    }
  }, [ src ]);

  const togglePlay = () => {
    const player = playerRef.current;
    if (player) {
      if (isPlaying) {
        player.pause();
      } else {
        player.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <C.Container>
      <header className='header'>
        <span className='name'>Laiz Gabriela</span>
        <button><IoClose /></button>
      </header>
      <C.Content>
        <div className="player">
          <div className='div-image'>
            <img src={"https://lh3.googleusercontent.com/a/ACg8ocKxNZIf-hjxTkrL45JZGXkSzSvhL2t8gZYC7x_g6nnnBSQk9O5cOw=s96-c"} alt="user photo"/>
          </div>
          <audio ref={playerRef} src={src}></audio>
          <div className="controls">
            <button onClick={togglePlay}>
              {isPlaying ? <IoIosPause/> : <IoPlay/>}
            </button>
          </div>
          <div className="footer">
            <div
              className="progress-bar"
              onClick={(e) => {
                const player = playerRef.current;
                if (player) {
                  const newTime = (e.nativeEvent.offsetX / e.target.offsetWidth) * player.duration;
                  player.currentTime = newTime;
                }
              }}
            >
              <div className="progress" style={{ width: `${progressWidth}%` }}></div>
              <div className="time">
                {isPlaying ?
                  <span>{currentTime}</span>
                :
                  <span>{duration}</span>
                }
              </div>
            </div>
          </div>
        </div>
      </C.Content>
    </C.Container>
  );
};

export default AudioPlaying;