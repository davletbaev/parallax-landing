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
import {TweenMax} from "gsap"

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

    const cards = document.getElementsByName("cards");
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
       
        [].forEach.call(cards, (card) => {
          const xValue = (x/window.innerWidth*rotateForce*2)-rotateForce;
          const yValue = (y/window.innerHeight*rotateForce*2)-rotateForce;
          card.style.transform = `rotateX(${yValue*0.5}deg) rotateY(${xValue}deg) translateZ(-100px)`;
          card.style.transition = "500ms ease-out"
        });

        [].forEach.call(layers, (card) => {
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
        [].forEach.call(cards, (card) => {
          const xValue = (x/window.innerWidth*rotateForce*2)-rotateForce;
          const yValue = (y/window.innerHeight*rotateForce*2)-rotateForce;
          card.style.transform = `rotateX(${yValue*0.5}deg) rotateY(${xValue}deg) translateZ(-100px)`;
          card.style.transition = "2s ease-out"
        });

        [].forEach.call(layers, (card) => {
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
      [].forEach.call(cards, (card) => {
        const xValue = (x/window.innerWidth*rotateForce*2)-rotateForce;
        const yValue = (y/window.innerHeight*rotateForce*2)-rotateForce;
        card.style.transform = `rotateX(${yValue*0.5}deg) rotateY(${xValue}deg) translateZ(-100px)`;
        card.style.transition = "2s ease-out"
      });

      [].forEach.call(layers, (card) => {
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
  constructor(id, x, y, context, scl) {
      this.id = id;
      this.x = x;
      this.y = y;
      this.new = { x: x, y: y, radius: 3, color: 'rgba(239, 239, 240, 0.15)' };
      this.radius = 3;
      this.context = context;
      this.scl = scl;
      this.isHover = false;
      this.isANimated = false;
  }

  mousemove(event) {
      const x = event.clientX+(window.innerWidth*0.05);
      const y = event.clientY+(window.innerHeight*0.05);
      var radiuses = 50
      var radiuses2 = 80
      var radiuses3 = 100
      var radiuses4 = 120

      if (check_a_point(x, y, this.x, this.y, radiuses4)) {
   
          TweenMax.to(this.new, 0.4, {
              radius: 6
          });
          if (check_a_point(x, y, this.x, this.y, radiuses3)) {
              TweenMax.to(this.new, 0.4, {
                  radius: 8
              });
              if (check_a_point(x, y, this.x, this.y, radiuses2)) {
                  TweenMax.to(this.new, 0.4, {
                      radius: 10
                  });
                  if (check_a_point(x, y, this.x, this.y, radiuses)) {
                      TweenMax.to(this.new, 0.4, {
                          radius: 12
                      });
                  }
              }
          }

      }

      else {
  
          TweenMax.to(this.new, 0.4, {
              radius: 3
          });
      }

  }


  render() {
      this.context.beginPath();
      this.context.arc(this.new.x, this.new.y, this.new.radius, 0, 2 * Math.PI, false);
      this.context.fillStyle = this.new.color;
      this.context.fill();
  }
}


  class App {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.width = window.innerWidth+(window.innerWidth*0.1);
        this.canvas.height = this.height = window.innerHeight+(window.innerHeight*0.1);
  
        this.setupDots();
  
        this.resize = this.resize.bind(this);
        this.mousemoveHandler = this.mousemoveHandler.bind(this);
        this.mouseleaveHandler = this.mouseleaveHandler.bind(this);
    }
  
    setupDots() {
        this.dots = [];
        this.scl = 30;
        this.cols = this.width / this.scl;
        this.rows = this.height / this.scl;
  
        let id = 0;
        for (let x = 0; x < this.cols; x += 1) {
            for (let y = 0; y < this.rows; y += 1) {
                this.dots.push(new Dot(id, x * this.scl, y * this.scl, this.context, this.scl));
                id += 1;
            }
        }
    }
  
    resize() {
        this.canvas.width = this.width = window.innerWidth+(window.innerWidth*0.1);
        this.canvas.height = this.height = window.innerHeight+(window.innerHeight*0.1);
        this.setupDots();
    }
  
    mousemoveHandler(event) {
        this.dots.forEach(d => {
            d.mousemove(event);
        })
    }
  
    mouseleaveHandler() {
        this.dots.forEach(d => {
            d.isHover = false;
        })
    }
  
    render() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.dots.forEach(d => {
            d.render();
        })
    }
  }


let APP:App;
init()


function init() {
    APP = new App();
    events();
    loop();
}

function loop() {
    APP.render();
    requestAnimationFrame(loop);
}

function events() {
    document.addEventListener('mousemove', APP.mousemoveHandler, false);
    document.addEventListener('mouseleave', APP.mouseleaveHandler, false);
    window.addEventListener('resize', APP.resize, false);
}






function check_a_point(a:number, b:number, x:number, y:number, r:number) {
    var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
    r *= r;
    if (dist_points < r) {
        return true;
    }
    return false;
}


var cursor = document.querySelector('#cursor');

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
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
        {/* {
          (status === 'fallback' || status === 'loading')
            ? ( */}
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
       
           
        {/* } */}
        
      </AnimatePresence>
      <div id="cursor" className={styles.cursor}></div>
      <canvas id="canvas" className={styles.canvas}  name="layers"
    data-force={20} data-depth={-100}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}} ></canvas>
    </div>
  );
}

export default BackgroundVideo;