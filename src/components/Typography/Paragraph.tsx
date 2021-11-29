import React from 'react';
import classnames from 'classnames/bind';

import * as styles from './Typography.module.scss';

const cn = classnames.bind(styles);

type ParagraphProps = {
  children: React.ReactNode,
  size?: 'small' | 'medium' | 'large',
  marginTop?: 'none' | '8' | '16' | '24' | '32' | 'auto',
  marginBottom?: 'none' | '8' | '16' | '24' | '32' | 'auto',
  align?: 'left' | 'right' | 'center',
  className?: string,
}

function Paragraph({
  size = 'medium',
  marginTop = 'none',
  marginBottom = 'none',
  align,
  className,
  children
}: ParagraphProps) {
  const classes = cn(
    'paragraph',
    size,
    marginTop && `mt--${ marginTop }`,
    marginBottom && `mb--${ marginBottom }`,
    align && `align--${ align }`,
    className
  );

  return (
    <p
      className={ classes }
    >
      { children }
    </p>
  );
}

export default Paragraph;