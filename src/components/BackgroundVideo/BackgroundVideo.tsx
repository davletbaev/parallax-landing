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
import gsap from "gsap"

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

  const [ videoVisible, setVideoVisible ] = useState(false);
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

    const cards:any = document.getElementsByName("cards");
    const layers = document.getElementsByName("layers");
    const range = 40;
    
    let timeout:any;
    var currentX = window.innerWidth/2;
    var currentY = window.innerHeight/2;


    document.addEventListener('mousemove', ({x, y}) => {
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }
      currentX = x
      currentY = y
        var rotateForce = 20
      timeout = window.requestAnimationFrame(() => {
       
        [].forEach.call(cards, (card:any) => {
          const xValue = (x/window.innerWidth*rotateForce*2)-rotateForce;
          const yValue = (y/window.innerHeight*rotateForce*2)-rotateForce;
          card.style.transform = `rotateX(${yValue*0.5}deg) rotateY(${xValue}deg) translateZ(-100px)`;
          card.style.transition = "500ms ease-out"
        });

        [].forEach.call(layers, (card:any) => {
          var rotateIndForce = card.dataset.force
          var layerDepth = card.dataset.depth
          const xValue = (x/window.innerWidth*rotateIndForce*2)-rotateIndForce;
          const yValue = (y/window.innerHeight*rotateIndForce*2)-rotateIndForce;
          card.style.transform = `rotateX(${yValue*0.5}deg) rotateY(${xValue}deg) translateZ(${layerDepth}px)`;
          card.style.transition = "500ms ease-out"
        });
      })
    }, false);

    

   setInterval(() => {
        var rotateForce = 20
        var x = currentX+100;
        var y = currentY+100;
        [].forEach.call(cards, (card:any) => {
          const xValue = (x/window.innerWidth*rotateForce*2)-rotateForce;
          const yValue = (y/window.innerHeight*rotateForce*2)-rotateForce;
          card.style.transform = `rotateX(${yValue*0.5}deg) rotateY(${xValue}deg) translateZ(-100px)`;
          card.style.transition = "2s ease-out"
        });

        [].forEach.call(layers, (card:any) => {
          var rotateIndForce = card.dataset.force
          var layerDepth = card.dataset.depth
          const xValue = (x/window.innerWidth*rotateIndForce*2)-rotateIndForce;
          const yValue = (y/window.innerHeight*rotateIndForce*2)-rotateIndForce;
          card.style.transform = `rotateX(${yValue*0.5}deg) rotateY(${xValue}deg) translateZ(${layerDepth}px)`;
          card.style.transition = "2s ease-out"
        });

        setTimeout(() => {
      x = currentX-100;
      y = currentY-100;
      [].forEach.call(cards, (card:any) => {
        const xValue = (x/window.innerWidth*rotateForce*2)-rotateForce;
        const yValue = (y/window.innerHeight*rotateForce*2)-rotateForce;
        card.style.transform = `rotateX(${yValue*0.5}deg) rotateY(${xValue}deg) translateZ(-100px)`;
        card.style.transition = "2s ease-out"
      });

      [].forEach.call(layers, (card:any) => {
        var rotateIndForce = card.dataset.force
        var layerDepth = card.dataset.depth
        const xValue = (x/window.innerWidth*rotateIndForce*2)-rotateIndForce;
        const yValue = (y/window.innerHeight*rotateIndForce*2)-rotateIndForce;
        card.style.transform = `rotateX(${yValue*0.5}deg) rotateY(${xValue}deg) translateZ(${layerDepth}px)`;
        card.style.transition = "2s ease-out"
      });
    }, 2000);
  }, 4000);


class Dot {

  x: number;
  y: number;
  id: number;
  radius: number;
  context: any;
  new: any;
  scl: any;


  constructor(id:number, x:number, y:number, context:any, scl:number) {
      this.id = id;
      this.x = x;
      this.y = y;
      this.new = { x: x, y: y, radius: 3, color: 'rgba(239, 239, 240, 0.15)' };
      this.radius = 3;
      this.context = context;
      this.scl = scl;
  }

  mousemove(event:any) {
      const x = event.clientX;
      const y = event.clientY;
      var radiuses2 = 80

              if (check_a_point(x, y, this.x, this.y, radiuses2)) {
                this.new.color = 'rgba(239, 239, 240, 0.4)'
      }

      else {
        this.new.color = 'rgba(239, 239, 240, 0.15)'
      }

  }


  render() {
      this.context.beginPath();
      this.context.arc(this.new.x, this.new.y, this.new.radius, 0, 2 * Math.PI, false);
      this.context.fillStyle = this.new.color;
      this.context.fill();
  }
}

var dots:any = [];
var width:number;
var height:number;
var scl:number = 30;
var cols:number = 40;
var rows:number = 40;

        var canvas:any = document.getElementById('canvas');
        var context:any = canvas.getContext('2d');
        canvas.width = width = window.innerWidth;
        canvas.height = height = window.innerHeight;

  

    setupDots();
   function setupDots() {
   
    
        cols = width / scl;
        rows = height / scl;
  
        let id = 0;
        for (let x = 0; x < cols; x += 1) {
            for (let y = 0; y < rows; y += 1) {
                dots.push(new Dot(id, x * scl, y * scl, context, scl));
                id += 1;
            }
        }
    }
  
    function resize() {
        canvas.width = width = window.innerWidth;
        canvas.height = height = window.innerHeight;
        setupDots();
    }
  
    function mousemoveHandler(event:any) {
        dots.forEach((d:any) => {
            d.mousemove(event);
        })
    }
  
    function render() {
        context.clearRect(0, 0, width, height);
        dots.forEach((d:any) => {
            d.render();
        })
    }
  


init()


function init() {
    events();
    loop();
}

function loop() {
    render();
    requestAnimationFrame(loop);
}

function events() {
    document.addEventListener('mousemove', mousemoveHandler, false);
    window.addEventListener('resize', resize, false);
}






function check_a_point(a:number, b:number, x:number, y:number, r:number) {
    var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
    r *= r;
    if (dist_points < r) {
        return true;
    }
    return false;
}


var cursor:any = document.querySelector('#cursor');

document.addEventListener('mousemove', function (e) {
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});






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
      setVideoVisible(value > 0.09);

      if (videoRef.current && videoRef.current.duration) {
        const multiplier = (value - 0.09) / 0.91;

        videoRef.current.currentTime = multiplier * videoRef.current.duration;
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
          (true)
          // (status === 'fallback' || status === 'loading')
            ? (
              <div className={ styles.background } name="cards">
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
      <div id="cursor" className={styles.cursor}><div className={styles.cursorInner}>
        </div></div>
      <canvas id="canvas" className={styles.canvas}></canvas>
    </div>
  );
}

export default BackgroundVideo;