<<<<<<< HEAD
import React, { useEffect, useRef, useState } from 'react';
=======
import React, { useRef, useState } from 'react';
import YouTube, { Options } from 'react-youtube';
>>>>>>> 252e79ebfabd8870d1969f34a57126fe34259520

import Icon from '@components/Icon';

import * as styles from './VideoPlayer.module.scss';

type VideoPlayerProps = {
<<<<<<< HEAD
  src: string
}

function VideoPlayer({ src }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ playing, setPlaying ] = useState(false);

  const handlePlayClick = () => {
    if (!videoRef.current) return;

    videoRef.current.play();
  };

  useEffect(() => {
    if (!videoRef.current) return;

    videoRef.current.addEventListener('play', () => {
      setPlaying(true);
    });

    videoRef.current.addEventListener('pause', () => {
      setPlaying(false);
    });
  }, []);
=======
  videoId: string,
  cover?: string
}

function VideoPlayer({ videoId, cover }: VideoPlayerProps) {
  const videoRef = useRef<any>(null);
  const [ playing, setPlaying ] = useState(false);

  const options: Options = {
    playerVars: {
      rel: 0,
      iv_load_policy: 3,
    },
  };

  const handleVideoReady = (event: any) => {
    videoRef.current = event.target;
  };

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current.playVideo();
  };
>>>>>>> 252e79ebfabd8870d1969f34a57126fe34259520

  return (
    <div className={ styles.container }>
      {
        !playing && (
<<<<<<< HEAD
          <button className={ styles.playButton } onClick={ handlePlayClick }>
            <Icon icon="play" />
          </button>
        ) 
      }
      <video
        ref={ videoRef }
        className={ styles.video }
        src={ src }
        controls={ playing }
        preload="auto"
=======
          <button className={ styles.playButton } onClick={ handlePlay }>
            <Icon icon="play" />
          </button>
        )
      }


      {
        !playing && cover && (
          <div
            className={ styles.wrapper }
          >
            <img
              src={ cover }
              className={ styles.media }
            />
          </div>
        )
      }

      <YouTube
        videoId={ videoId }
        className={ styles.media }
        containerClassName={ playing && cover ? styles.wrapper : styles.hidden }
        opts={ options }   
        onReady={ handleVideoReady }
>>>>>>> 252e79ebfabd8870d1969f34a57126fe34259520
      />
    </div>
  );
}

export default VideoPlayer;