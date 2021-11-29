import React, { useRef, useState } from 'react';

import Button from '@components/Button';
import Container from '@components/Container';
import Icon from '@components/Icon';
import Logo from '@components/Logo';
import { ModalRef } from '@components/Modal/Modal';
import Navigation from '@components/Navigation';
import NavModal from '@components/NavModal';

import * as styles from './Header.module.scss';

import { useMedia } from '@shared/hocs/withMedia';

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
      { isDesktop && <Navigation /> }
      
      <Logo />

      {
        !isDesktop && (
          <>
            <button className={ styles.navtoggle } onClick={ handleToggleClick }>
              <Icon icon={ isNavOpen ? 'cross' : 'menu' } animate />
            </button>

            <NavModal ref={ navModalRef } />
          </>
        )
      }

      {
        isDesktop && (
          <div className={ styles.trailer }>

            <Button 
              href="#trailer"
              variant="ghost"
              block
            >
            Watch trailer
            </Button>
          </div>
        )
      }
    </Container>
  );
}

export default Header;