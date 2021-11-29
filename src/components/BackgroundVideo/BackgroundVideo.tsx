import React, { useEffect, useRef, useState } from 'react';

import isSafari from '@shared/helpers/isSafari';

import * as styles from './BackgroundVideo.module.scss';

import bgVideoMP4 from '@assets/video/bg-video.mp4';
import bgVideoWEBM from '@assets/video/bg-video.webm';

import { useLoader } from '@shared/hocs/withLoader';
import { useParallax } from '@shared/hocs/withParallax';

function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ src, setSrc ] = useState('');

  const { setLoading } = useLoader();
  const progress = useParallax();

  useEffect(() => {
    async function preloadVideo(src: string) {
      const res = await fetch(src);
      const blob = await res.blob();

      return URL.createObjectURL(blob);
    }

    const videoUrl = isSafari() ? bgVideoMP4 : bgVideoWEBM;

    preloadVideo(videoUrl)
      .then((blob) => {
        setSrc(blob);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    
    const duration = videoRef.current.duration;

    if (!duration) return;

    videoRef.current.currentTime = duration * progress;
  }, [ progress ]);

  return (
    <div className={ styles.container }>
      <video ref={ videoRef } className={ styles.video } src={ src } playsInline muted />
    </div>
  );
}

export default BackgroundVideo;