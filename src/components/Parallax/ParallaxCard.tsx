import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames/bind';
import { HTMLMotionProps, motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';

import * as styles from './Parallax.module.scss';

const cn = classnames.bind(styles);

const ROTATE_FORCE = 10;
const OFFSET = 300;

type ParallaxCardProps = HTMLMotionProps<'div'>;

const ParallaxCard = ({ className, children, ...restProps }: ParallaxCardProps) => {
  const parallaxInterval = useRef<ReturnType<typeof setInterval>>();
  const parallaxTimeout = useRef<ReturnType<typeof setTimeout>>();

  const initialWidth = typeof window !== 'undefined' ? window.innerWidth : 1440;
  const [ screenWidth, setScreenWidth ] = useState(initialWidth);

  const initialHeight = typeof window !== 'undefined' ? window.innerHeight : 768;
  const [ screenHeight, setScreenHeight ] = useState(initialHeight);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const duration = useMotionValue(5);

  const xValue = useTransform(
    x,
    (value) => (value / screenWidth * ROTATE_FORCE * 2) - ROTATE_FORCE
  );
  const yValue = useTransform(
    y,
    (value) => ((value / screenWidth * ROTATE_FORCE * 2) - ROTATE_FORCE) * 0.5
  );

  const transform = useMotionTemplate`rotateX(${yValue}deg) rotateY(${xValue}deg) translateZ(-100px)`;
  const transition = useMotionTemplate`${ duration }s ease-out`;

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      x.set(Math.max(0, Math.min(screenWidth, event.x)));
      y.set(Math.max(0, Math.min(screenHeight, event.y)));
      duration.set(.5);
    };

    document.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, [ screenWidth, screenHeight ]);

  useEffect(() => {
    duration.set(0);
    x.set(screenWidth / 2);
    y.set(screenHeight / 2);

    const leftThreshold = screenWidth / 5;
    const rightThreshold = screenWidth / 5 * 4;

    const topThreshold = screenHeight / 5;
    const bottomThreshold = screenHeight / 5 * 4;

    parallaxInterval.current = setInterval(() => {
      const currentX = x.get();
      const currentY = y.get();

      let newX = Math.random() < 0.5 ? OFFSET : -OFFSET;
      let newY = Math.random() < 0.5 ? OFFSET : -OFFSET;

      if (currentX < leftThreshold) {
        newX = OFFSET;
      }

      if (currentX > rightThreshold) {
        newX = -OFFSET;
      }

      if (currentY < topThreshold) {
        newY = OFFSET;
      }

      if (currentY > bottomThreshold) {
        newY = -OFFSET;
      }

      duration.set(5);
      x.set(currentX + newX);
      y.set(currentY + newY);
    }, 5000);

    return () => {
      if (parallaxInterval.current) {
        clearInterval(parallaxInterval.current);
      }

      if (parallaxTimeout.current) {
        clearTimeout(parallaxTimeout.current);
      }
    };
  }, [ screenWidth, screenHeight ]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    <motion.div 
      { ...restProps }
      className={ cn('wrapper', className) }
      style={
        { 
          transform,
          transition
        } 
      }
    >
      { children }
    </motion.div>
  );
};

export default ParallaxCard;