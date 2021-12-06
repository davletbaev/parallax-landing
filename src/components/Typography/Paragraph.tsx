import React from 'react';
import classnames from 'classnames/bind';
import { HTMLMotionProps, motion } from 'framer-motion';

import * as styles from './Typography.module.scss';

import { SLIDE_BOTTOM_WITH_FADE } from '@shared/transitions';

const cn = classnames.bind(styles);

type ParagraphProps = HTMLMotionProps<any> & {
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
  children,
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
    <motion.p
      className={ classes }
      variants={ SLIDE_BOTTOM_WITH_FADE.variants }
      transition={ SLIDE_BOTTOM_WITH_FADE.options }
    >
      { children }
    </motion.p>
  );
}

export default Paragraph;