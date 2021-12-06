import React from 'react';
import classnames from 'classnames/bind';
import { HTMLMotionProps, motion } from 'framer-motion';

import * as styles from './Typography.module.scss';

import { SLIDE_TOP_WITH_FADE } from '@shared/transitions';

const cn = classnames.bind(styles);

type HeadingProps = HTMLMotionProps<any> & {
  children: React.ReactNode,
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p',
  className?: string,
  marginTop?: 'none' | '8' | '16' | '24' | '32' | 'auto',
  marginBottom?: 'none' | '8' | '16' | '24' | '32' | 'auto',
  align?: 'left' | 'right' | 'center',
}

function Heading({
  size,
  type = 'h1',
  marginTop = 'none',
  marginBottom = 'none',
  align,
  className,
  children,
}: HeadingProps) {
  const classes = cn(
    'heading',
    size || type,
    marginTop && `mt--${ marginTop }`,
    marginBottom && `mb--${ marginBottom }`,
    align && `align--${ align }`,
    className
  );
  
  const renderChildren = React.Children
    .map(children, (child, idx) => typeof child === 'string' 
      ? child
        .split('')
        .map((letter, index) => letter === ' ' ? letter : (
          <motion.span
            className={ styles.letter }
            key={ `${idx}-${index}` }
            variants={ SLIDE_TOP_WITH_FADE.variants }
          >
            { letter }
          </motion.span>
        ))
      : child);

  return React.createElement(
    motion[type],
    {
      variants: {},
      className: classes,
      transition: SLIDE_TOP_WITH_FADE.options,
    },
    renderChildren
  );
}

export default Heading;
