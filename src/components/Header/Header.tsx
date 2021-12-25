import React, { useRef, useState } from 'react';

import Button from '@components/Button';
import Container from '@components/Container';
import Icon from '@components/Icon';
import Logo from '@components/Logo';
import { ModalRef } from '@components/Modal/Modal';
import Navigation from '@components/Navigation';
import NavModal from '@components/NavModal';
import { ParallaxLayer } from '@components/Parallax';

import { useMedia } from '@shared/hocs/withMedia';

import * as styles from './Header.module.scss';

function Header() {
  const [ isNavOpen, setNavOpen ] = useState(false);
  const navModalRef = useRef<ModalRef>(null);
  const { isDesktop } = useMedia();

  const handleToggleClick = () => {
    if (!navModalRef.current) return;
      
    navModalRef.current.toggleModal();
    setNavOpen(!isNavOpen);
  };

  return (
    <Container as="header" className={ styles.container }>
      {
        isDesktop && (
          <ParallaxLayer force={ 5 } depth={ -100 }>
            <Navigation />
          </ParallaxLayer>
        ) 
      }
      
      <ParallaxLayer force={ 5 } depth={ -100 }>
        <Logo to="/" />
      </ParallaxLayer>

      {
        !isDesktop && (
          <>
            <ParallaxLayer force={ 5 } depth={ -100 }>
              <button className={ styles.navtoggle } onClick={ handleToggleClick }>
                <Icon icon={ isNavOpen ? 'cross' : 'menu' } animate />
              </button>
            </ParallaxLayer>

            <NavModal ref={ navModalRef } />
          </>
        )
      }

      {
        isDesktop && (
          <ParallaxLayer force={ 5 } depth={ -100 } className={ styles.trailer }>
            <Button 
              href="#trailer"
              variant="ghost"
              block
            >
                Watch trailer
            </Button>
          </ParallaxLayer>
        )
      }
    </Container>
  );
}

export default Header;