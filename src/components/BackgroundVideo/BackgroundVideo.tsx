import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useViewportScroll } from 'framer-motion';

import isSafari from '@shared/helpers/isSafari';
import { useLoader } from '@shared/hocs/withLoader';

import * as styles from './BackgroundVideo.module.scss';

import backgroundImageSrcAvif from '@assets/images/background.avif';
import backgroundImageSrc from '@assets/images/background.jpg';
import backgroundImageSrcWebp from '@assets/images/background.webp';
import bgVideoMP4 from '@assets/video/bg-video.mp4';
import bgVideoWEBM from '@assets/video/bg-video.webm';

const fadeVariants = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
};

function BackgroundVideo() {
  const fallbackTimeout = useRef<ReturnType<typeof setTimeout> | number>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const controllerRef = useRef(typeof window !== 'undefined' ? new AbortController() : null);

  const [ imageLoaded, setImageLoaded ] = useState(false);
  const [ status, setStatus ] = useState('loading');
  const [ src, setSrc ] = useState('');

  const { setLoading, progress } = useLoader();
  const { scrollYProgress } = useViewportScroll();

  const preloadVideo = useCallback(async (src: string) => {
    const signal = controllerRef.current?.signal;

    const res = await fetch(src, { signal });

    if (!res.body) return '';

    const reader = res.body?.getReader();
    const contentLength = Number(res.headers.get('Content-Length'));

    const chunks = []; // массив полученных двоичных фрагментов (составляющих тело ответа)

    let loaded = 0;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      chunks.push(value);
      loaded += value?.length || 0;
      progress.set(Math.round(loaded / contentLength * 100) / 100);
    }

    const blob = new Blob(chunks as unknown as any);

    return URL.createObjectURL(blob);
  }, []);

  useEffect(() => {
    if (navigator.connection) {
      const { effectiveType } = navigator.connection as any;

      if (effectiveType !== '4g') {
        progress.set(1);
        setLoading(false);
        setStatus('fallback');

        return;
      }
    }

    const videoUrl = isSafari() ? bgVideoMP4 : bgVideoWEBM;

    preloadVideo(videoUrl)
      .then((blob) => {
        setSrc(blob);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
        setStatus('idle');
        clearTimeout(fallbackTimeout.current as unknown as number);
      });
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (videoRef.current && videoRef.current.duration) {
        videoRef.current.currentTime = value * videoRef.current.duration;
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (status === 'fallback') return;

    fallbackTimeout.current = setTimeout(() => {
      controllerRef.current?.abort();
      progress.set(1);
      setLoading(false);
      setStatus('fallback');
    }, 10000);

    return () => {
      clearTimeout(fallbackTimeout.current as unknown as number);
    };
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={ styles.container }>
      <AnimatePresence>
        {
          (status === 'fallback' || status === 'loading')
            ? (
              <div className={ styles.background }>
                <picture>
                  <source srcSet={ backgroundImageSrcAvif } type="image/avif" />
                  <source srcSet={ backgroundImageSrcWebp } type="image/webp" />
                  <motion.img
                    variants={ fadeVariants }
                    initial="initial"
                    animate={ imageLoaded && 'enter' }
                    exit="exit"
                    src={ backgroundImageSrc }
                    onLoad={ handleImageLoad }
                  />
                </picture>
              </div>
            ) 
            : (
              <motion.video 
                variants={ fadeVariants }
                initial="initial"
                animate="enter"
                exit="exit"
                ref={ videoRef }
                className={ styles.video }
                src={ src }
                playsInline
                muted
              />
            )
        }
      </AnimatePresence>
    </div>
  );
}

export default BackgroundVideo;