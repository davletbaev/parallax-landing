import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import { useAnimatedSection } from '@components/AnimatedSection/animatedSectionContext';
import { FadeMotion, SlideTopMotion } from '@components/AnimatedSection/animatedSectionTransitions';

import * as styles from './AnimatedText.module.scss';

const transitionOptions = {
  byLetter: {
    when: 'beforeChildren',
    staggerChildren: .05
  },
  byWord: {
    duration: 0.1,
    when: 'beforeChildren',
    staggerChildren: .15
  }
};

type AnimatedTextProps = {
  type?: 'byWord' | 'byLetter',
  variant?: typeof FadeMotion | typeof SlideTopMotion,
  children: React.ReactNode
}

function AnimatedText({ 
  type = 'byLetter', 
  variant = FadeMotion,
  children
}: AnimatedTextProps) {
  const controls = useAnimation();
  const { inView } = useAnimatedSection();
  
  let renderLetters = children;

  if (type === 'byWord') {
    renderLetters = React.Children
      .map(children, (child, idx) => typeof child === 'string' 
        ? child
          .split(/\b(\s)/)
          .map((word, index) => word === ' ' ? word : (
            <motion.span
              className={ styles.letter }
              key={ `${idx}-${index}` }
              variants={ variant }
            >
              { word }
            </motion.span>
          ))
        : child);
  }
  
  if (type === 'byLetter') {
    renderLetters = React.Children
      .map(children, (child, idx) => typeof child === 'string' 
        ? child
          .split('')
          .map((letter, index) => letter === ' ' ? letter : (
            <motion.span
              className={ styles.letter }
              key={ `${idx}-${index}` }
              variants={ variant }
            >
              { letter }
            </motion.span>
          ))
        : child);
  }
  

  useEffect(() => {
    if (inView) {
      controls.start('enter');
    } else {
      controls.set('exit');
    }
  }, [ inView ]);

  return (
    <motion.span
      className={ styles.wrapper }
      variants={ variant }
      initial="initial"
      animate={ controls }
      transition={ transitionOptions[type] }
    >
      { renderLetters }
    </motion.span>
  );
}

export default AnimatedText;