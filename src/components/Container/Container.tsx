
import React from 'react';
import classnames from 'classnames/bind';
import { HTMLMotionProps } from 'framer-motion';

import * as styles from './Container.module.scss';

const cn = classnames.bind(styles);

type ContainerProps = HTMLMotionProps<'div'> & {
  as?: string,
  track?: boolean,
  className?: string,
  children: React.ReactNode
}

const Container = React.forwardRef<Element, ContainerProps>(({ 
  as = 'div', 
  className,
  children,
  ...props
}, ref) => {
  const classes = cn(
    'container',
    className,
  );

  return React.createElement(as, {
    ref: ref,
    className: classes,
    ...props
  }, children);
});

Container.displayName = 'Container';

export default Container;