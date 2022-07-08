import React, { useRef, useState } from 'react';
import YouTube, { Options } from 'react-youtube';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import Icon from '@components/Icon';

import * as styles from './VideoPlayer.module.scss';

type VideoPlayerProps = {
  videoId: string,
  label: string,
  cover?: IGatsbyImageData
}

function VideoPlayer({ videoId, label, cover }: VideoPlayerProps) {
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
            <GatsbyImage className={ styles.media } image={ cover } alt={ label } />
          </div>
        )
      }

      <YouTube
        videoId={ videoId }
        className={ styles.media }
        containerClassName={ playing && cover || !cover ? styles.wrapper : styles.hidden }
        opts={ options }
        onReady={ handleVideoReady }
      />
    </div>
  );
}

export default VideoPlayer;