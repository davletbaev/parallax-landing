
import React from 'react';
import classnames from 'classnames/bind';

import * as styles from './Container.module.scss';

const cn = classnames.bind(styles);

type ContainerProps = {
  as?: string,
  className?: string,
  children: React.ReactNode
}

function Container({ 
  as = 'div', 
  className,
  children 
}: ContainerProps) {
  const classes = cn(
    'container',
    className,
  );

  return React.createElement(as, {
    className: classes,
  }, children);
}

export default Container;