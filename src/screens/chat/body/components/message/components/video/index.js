import { useRef } from 'react';
import * as C from './styles.js';
import { useEffect } from 'react';
import { useState } from 'react';
import { IoPlay, IoPause } from "react-icons/io5";
import { IoIosPause } from "react-icons/io";
import { MdFullscreen } from "react-icons/md";

export default function Video( { children, video, openFullImage } ) {
    
    const videoRef = useRef(null);
    const [ isPlaying, setIsPlaying ] = useState(false);

    const playPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }

        setIsPlaying(prevState => !prevState);
    };
    
    return(
        <C.Container>
            <C.Content isPlaying={isPlaying}>
                <video
                    ref={videoRef}
                    src={video?.src}
                />
                {!isPlaying ?
                    <div className='control-play'>
                        <button className='play' onClick={playPause}><IoPlay/></button>
                    </div>
                    :
                    <div className='controls'>
                        <button className='pause' onClick={playPause}><IoIosPause/></button>
                        <button className='fullscreen' onClick={()=>openFullImage(video?.src, 'video')}><MdFullscreen/></button>
                    </div>
                }
            </C.Content>
            {!isPlaying &&
                <C.Date>
                    {children}
                </C.Date>
            }
        </C.Container>
    )
}