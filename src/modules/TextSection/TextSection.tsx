import React from 'react';

import Container from '@components/Container';

import * as styles from './TextSection.module.scss';

type TextSectionProps = {
  scrollHeight: number,
  align?: 'left' | 'right',
  children: React.ReactNode
}

function TextSection({ 
  scrollHeight, 
  align = 'left',
  children 
}: TextSectionProps) {
  return (
    <div style={ { height: `${scrollHeight}px` } } className={ styles.wrapper }>
      <Container as="section" className={ styles.section }>
        <div className={ styles[align] }>
          { children }
        </div>
      </Container>
    </div>
  );
}

export default TextSection;