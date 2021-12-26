import React, { useEffect, useRef } from 'react';
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

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const duration = useMotionValue(5);

  const xValue = useTransform(
    x,
    (value) => typeof window !== 'undefined'
      ? (value / window.innerWidth * ROTATE_FORCE * 2) - ROTATE_FORCE
      : value
  );
  const yValue = useTransform(
    y,
    (value) => typeof window !== 'undefined'
      ? ((value / window.innerHeight * ROTATE_FORCE * 2) - ROTATE_FORCE) * 0.5
      : value
  );

  const transform = useMotionTemplate`rotateX(${yValue}deg) rotateY(${xValue}deg) translateZ(-100px)`;
  const transition = useMotionTemplate`${ duration }s ease-out`;

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const mouseMoveHandler = (event: MouseEvent) => {
      x.set(Math.max(0, Math.min(screenWidth, event.x)));
      y.set(Math.max(0, Math.min(screenHeight, event.y)));
      duration.set(.5);
    };

    document.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  useEffect(() => {
    duration.set(0);
    x.set(window.innerWidth / 2);
    y.set(window.innerHeight / 2);

    parallaxInterval.current = setInterval(() => {

      const screenWidth = window.innerWidth;
      const leftThreshold = screenWidth / 5;
      const rightThreshold = screenWidth / 5 * 4;

      const screenHeight = window.innerHeight;
      const topThreshold = screenHeight / 5;
      const bottomThreshold = screenHeight / 5 * 4;

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