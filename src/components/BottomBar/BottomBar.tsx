import React, { useEffect, useState } from 'react';
import { useMatch } from '@reach/router';

import Container from '@components/Container';
import Icon from '@components/Icon';
import Pagination from '@components/Pagination';
import { ParallaxLayer } from '@components/Parallax';
import { useScrollJack } from '@components/ScrollJack/withScrollJack';
import Socials from '@components/Socials';

import { useMedia } from '@shared/hocs/withMedia';

import * as styles from './BottomBar.module.scss';

function BottomBar() {
  const [ isScrollAvailable, setScrollAvailable ] = useState(true);

  const { isMobile } = useMedia();
  const { isLastSection } = useScrollJack();

  const isNFTPage = useMatch('/founder-collection');

  useEffect(() => {
    setScrollAvailable(!isLastSection);
    console.log(isLastSection);
  }, [ isLastSection ]);

  return (
    <Container as="footer" className={ styles.bottombar }>
      {
        !isNFTPage && (
          <ParallaxLayer force={ 5 } depth={ -100 } className={ styles.pagination }>
            <Pagination/>
          </ParallaxLayer>
        )
      }

      <ParallaxLayer
        force={ 5 }
        depth={ -100 }
        animate={ { opacity: Number(isScrollAvailable) / 2 } }
        style={ { transition: '0.2s' } }
        className={ styles.scroll }
      >
        <span>Scroll</span>
        <Icon icon="arrow-down"/>
      </ParallaxLayer>

      {
        !isMobile && (
          <ParallaxLayer force={ 5 } depth={ -100 } className={ styles.socials }>
            <Socials transparent/>
          </ParallaxLayer>
        )
      }
    </Container>
  );
}

export default BottomBar;