import React, { useRef, useState } from 'react';
import { useMatch } from '@reach/router';

import Button from '@components/Button';
import Container from '@components/Container';
import Icon from '@components/Icon';
import Logo from '@components/Logo';
import { ModalRef } from '@components/Modal/Modal';
import Navigation from '@components/Navigation';
import NavModal from '@components/NavModal';
import { ParallaxLayer } from '@components/Parallax';

import { NAV_ITEMS, NFT_NAV_ITEMS } from '@shared/constants';
import { useMedia } from '@shared/hocs/withMedia';
import { useNFTModal } from '@shared/hocs/withNFTModal';

import * as styles from './Header.module.scss';

function Header() {
  const [ isNavOpen, setNavOpen ] = useState(false);
  const navModalRef = useRef<ModalRef>(null);
  const { isDesktop } = useMedia();

  const { openModal } = useNFTModal();
  const isNFTPage = useMatch('/founder-collection');

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
            <Navigation items={ isNFTPage ? NFT_NAV_ITEMS : NAV_ITEMS }/>
          </ParallaxLayer>
        )
      }

      <ParallaxLayer force={ 5 } depth={ -100 }>
        <Logo to="/"/>
      </ParallaxLayer>

      {
        !isDesktop && (
          <>
            <ParallaxLayer force={ 5 } depth={ -100 }>
              <button className={ styles.navtoggle } onClick={ handleToggleClick }>
                <Icon icon={ isNavOpen ? 'cross' : 'menu' } animate/>
              </button>
            </ParallaxLayer>

            <NavModal ref={ navModalRef }/>
          </>
        )
      }

      {
        isDesktop && (
          <ParallaxLayer force={ 5 } depth={ -100 } className={ styles.actions }>
            <Button
              href={ isNFTPage ? '#utility' : '#trailer' }
              variant="ghost"
            >
              {isNFTPage ? 'Watch NFT Video' : 'WATCH TEASER'}
            </Button>
            <Button
              variant="secondary"
              onClick={ openModal }
            >
              Free Airdrop
            </Button>
          </ParallaxLayer>
        )
      }
    </Container>
  );
}

export default Header;
