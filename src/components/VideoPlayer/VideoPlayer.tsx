import React, { useRef, useState } from 'react';
import YouTube, { Options } from 'react-youtube';

import Icon from '@components/Icon';

import * as styles from './VideoPlayer.module.scss';

type VideoPlayerProps = {
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

  return (
    <div className={ styles.container }>
      {
        !playing && (
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
      />
    </div>
  );
}

export default VideoPlayer;