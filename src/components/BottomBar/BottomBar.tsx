import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll } from 'framer-motion';

import Container from '@components/Container';
import Icon from '@components/Icon';
import Pagination from '@components/Pagination';
import { ParallaxLayer } from '@components/Parallax';
import Socials from '@components/Socials';

import { useMedia } from '@shared/hocs/withMedia';

import * as styles from './BottomBar.module.scss';

function BottomBar() {
  const [ isScrollAvailable, setScrollAvailable ] = useState(true);

  const { isMobile } = useMedia();
  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    scrollYProgress.onChange((value) => {
      setScrollAvailable(value < 1);
    });
  }, []);
  
  return (
    <Container as="footer" className={ styles.bottombar }>
      <ParallaxLayer force={ 5 } depth={ -100 } className={ styles.pagination }>
        <Pagination />
      </ParallaxLayer>

      <ParallaxLayer 
        force={ 5 }
        depth={ -100 }
        animate={ { opacity: Number(isScrollAvailable) / 2 } }
        className={ styles.scroll }
      >
        <span>Scroll</span>
        <Icon icon="arrow-down" />
      </ParallaxLayer>

      {
        !isMobile && (
          <ParallaxLayer force={ 5 } depth={ -100 } className={ styles.socials }>
            <Socials transparent />
          </ParallaxLayer>
        ) 
      }
    </Container>
  );
}

export default BottomBar;