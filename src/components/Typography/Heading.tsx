import React from 'react';
import classnames from 'classnames/bind';

import * as styles from './Typography.module.scss';

const cn = classnames.bind(styles);

type HeadingProps = {
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
  children
}: HeadingProps) {
  const classes = cn(
    'heading',
    size || type,
    marginTop && `mt--${ marginTop }`,
    marginBottom && `mb--${ marginBottom }`,
    align && `align--${ align }`,
    className
  );

  return React.createElement(
    type,
    {
      className: classes
    },
    children
  );
}

export default Heading;
