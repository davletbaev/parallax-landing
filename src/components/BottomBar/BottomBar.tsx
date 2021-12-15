import React, { useEffect, useState } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

import Container from '@components/Container';
import Icon from '@components/Icon';
import Pagination from '@components/Pagination';
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
    <Container as="footer" className={ styles.bottombar } name="layers" data-force={5} data-depth={-100} style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
      <div className={ styles.pagination }>
        <Pagination />
      </div>

      <motion.div animate={ { opacity: Number(isScrollAvailable) } } className={ styles.scroll }>
        <span>Scroll</span>
        <Icon icon="arrow-down" />
      </motion.div>

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