import React, { useRef, useState } from 'react';
import YouTube, { Options } from 'react-youtube';

import * as styles from './VideoPlayer.module.scss';

type VideoPlayerProps = {
  videoId: string
}

function VideoPlayer({ videoId }: VideoPlayerProps) {
  const videoRef = useRef<any>(null);

  const options: Options = {
    playerVars: {
      controls: 0,
      autoplay: 1,
      mute: 1,
      disablekb: 0,
      rel: 0,
      iv_load_policy: 3,
      modestbranding: 1,
      playsinline: 1,
      showinfo: 0
    },
  };

  const handleVideoReady = (player: any) => {
    videoRef.current = player;
  };

  return (
    <div className={ styles.container }>
      <YouTube
        videoId={ videoId }
        className={ styles.video }
        containerClassName={ styles.wrapper }
        opts={ options }   
        onReady={ handleVideoReady }
      />
    </div>
  );
}

export default VideoPlayer;