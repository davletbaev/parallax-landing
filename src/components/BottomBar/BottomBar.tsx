import React from 'react';

import Container from '@components/Container';
import Icon from '@components/Icon';
import Socials from '@components/Socials';

import * as styles from './BottomBar.module.scss';

import { useMedia } from '@shared/hocs/withMedia';

function BottomBar() {
  const { isMobile } = useMedia();
  
  return (
    <Container as="footer" className={ styles.bottombar }>
      <div className={ styles.pagination }>
        01 / 05
      </div>

      <div className={ styles.scroll }>
        <span>Scroll</span>
        <Icon icon="arrow-down" />
      </div>

      {
        !isMobile && (
          <div className={ styles.socials }>
            <Socials transparent />
          </div>
        ) 
      }
    </Container>
  );
}

export default BottomBar;