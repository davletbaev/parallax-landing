import React, { useEffect, useRef, useState } from 'react';

import Icon from '@components/Icon';

import * as styles from './VideoPlayer.module.scss';

type VideoPlayerProps = {
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

  return (
    <div className={ styles.container }>
      {
        !playing && (
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
      />
    </div>
  );
}

export default VideoPlayer;