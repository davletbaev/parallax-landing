import React from 'react';
import classnames from 'classnames/bind';
import { HTMLMotionProps, motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';

import { IS_BROWSER } from '@shared/constants';

import * as styles from './Parallax.module.scss';

import { useParallax } from './withParallax';

const cn = classnames.bind(styles);

type ParallaxLayerProps = HTMLMotionProps<'div'> & {
  force: number,
  depth: number
};

const ParallaxLayer = ({ className, force, depth, children, ...restProps }: ParallaxLayerProps) => {
  const z = useMotionValue(depth);

  const { x, y, screenWidth, screenHeight, duration } = useParallax();

  const xValue = useTransform(
    x,
    (value) => IS_BROWSER
      ? (value / screenWidth * force * 2) - force
      : value
  );
  const yValue = useTransform(
    y,
    (value) => IS_BROWSER
      ? ((value / screenHeight * force * 2) - force) * 0.5
      : value
  );

  const transform = useMotionTemplate`rotateX(${yValue}deg) rotateY(${xValue}deg) translateZ(${ z }px)`;
  const transition = useMotionTemplate`${ duration }s ease-out`;

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