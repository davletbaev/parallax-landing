import React from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import Container from '@components/Container';

import { FADE } from '@shared/transitions';

import * as styles from './TextSection.module.scss';

import { SectionProps } from '@shared/types/modules';

type TextSectionProps = {
  align?: 'left' | 'right',
  children: React.ReactNode,
} & SectionProps

function TextSection({ 
  id,
  align = 'left',
  children,
  ...props
}: TextSectionProps) {  
  return (
    <Container id={ id } as="section" className={ styles.section } data-force={20} data-depth={100}>
      <motion.div
        className={ styles[align] }
        { ...props }
      >
        { children }
      </motion.div>
    </Container>
  );
}

export default TextSection;