import React from 'react';
import classnames from 'classnames/bind';
import { HTMLMotionProps, motion, useMotionTemplate, useTransform } from 'framer-motion';

import * as styles from './Parallax.module.scss';

import { useParallax } from './withParallax';

const cn = classnames.bind(styles);

const ROTATE_FORCE = 10;

type ParallaxCardProps = HTMLMotionProps<'div'>;

const ParallaxCard = ({ className, children, ...restProps }: ParallaxCardProps) => {
  const { x, y, screenWidth, screenHeight, duration } = useParallax();

  const xValue = useTransform(
    x,
    (value) => (value / screenWidth * ROTATE_FORCE * 2) - ROTATE_FORCE
  );
  const yValue = useTransform(
    y,
    (value) => ((value / screenHeight * ROTATE_FORCE * 2) - ROTATE_FORCE) * 0.5
  );

  const transform = useMotionTemplate`rotateX(${yValue}deg) rotateY(${xValue}deg) translateZ(-100px)`;
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

export default ParallaxCard;