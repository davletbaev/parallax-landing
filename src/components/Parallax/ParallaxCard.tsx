import React, { useEffect, useRef } from 'react';
import classnames from 'classnames/bind';
import { HTMLMotionProps, motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';

import * as styles from './Parallax.module.scss';

const cn = classnames.bind(styles);

const ROTATE_FORCE = 10;

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
    const mouseMoveHandler = (event: MouseEvent) => {
      x.set(event.x);
      y.set(event.y);
      duration.set(.5);
    };

    document.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  useEffect(() => {
    parallaxInterval.current = setInterval(() => {
      x.set(x.get() + 300);
      duration.set(5);

      parallaxTimeout.current = setTimeout(() => {
        y.set(y.get() + 300);
        duration.set(5);
      }, 5000);

      parallaxTimeout.current = setTimeout(() => {
        x.set(x.get() - 300);
        duration.set(5);
      }, 5000);

      parallaxTimeout.current = setTimeout(() => {
        y.set(y.get() - 300);
        duration.set(5);
      }, 5000);
    }, 20000);

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