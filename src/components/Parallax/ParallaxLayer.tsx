import React, { useEffect, useRef } from 'react';
import classnames from 'classnames/bind';
import { HTMLMotionProps, motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';

import * as styles from './Parallax.module.scss';

const cn = classnames.bind(styles);

type ParallaxLayerProps = HTMLMotionProps<'div'> & {
  force: number,
  depth: number
};

const ParallaxLayer = ({ className, force, depth, children, ...restProps }: ParallaxLayerProps) => {
  const parallaxInterval = useRef<ReturnType<typeof setInterval>>();
  const parallaxTimeout = useRef<ReturnType<typeof setTimeout>>();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const z = useMotionValue(depth);
  const duration = useMotionValue(0.5);

  const xValue = useTransform(
    x,
    (value) => typeof window !== 'undefined'
      ? (value / window.innerWidth * force * 2) - force
      : value
  );
  const yValue = useTransform(
    y,
    (value) => typeof window !== 'undefined'
      ? ((value / window.innerHeight * force * 2) - force) * 0.5
      : value
  );

  const transform = useMotionTemplate`rotateX(${yValue}deg) rotateY(${xValue}deg) translateZ(${ z }px)`;
  const transition = useMotionTemplate`${ duration }s ease-out`;

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      x.set(event.x);
      y.set(event.y);
      duration.set(0.5);
    };

    document.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  useEffect(() => {
    parallaxInterval.current = setInterval(() => {
      duration.set(2);
      x.set(x.get() + 100);
      y.set(y.get() + 100);

      parallaxTimeout.current = setTimeout(() => {
        duration.set(2);
        x.set(x.get() - 100);
        y.set(y.get() - 100);
      }, 2000);
    }, 4000);

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

export default ParallaxLayer;