import React, { MouseEventHandler, useRef, useState } from 'react';

import Button from '@components/Button';
import Container from '@components/Container';
import Icon from '@components/Icon';
import Logo from '@components/Logo';
import { ModalRef } from '@components/Modal/Modal';
import Navigation from '@components/Navigation';
import NavModal from '@components/NavModal';

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

  const handleTrailerButtonClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();

    document.querySelector('#trailer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container as="header" className={ styles.container } name="layers" data-force={5} data-depth={-100}>
      { isDesktop && <Navigation /> }
      
      <Logo to="/" />

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
              onClick={ handleTrailerButtonClick }
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