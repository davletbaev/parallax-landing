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

import { ExternalUrl } from '@shared/constants';
import { useMedia } from '@shared/hocs/withMedia';

import * as styles from './Header.module.scss';

import { NavItem } from '@shared/types/components';

const NAV_ITEMS: NavItem[] = [
  {
    path: ExternalUrl.wiki,
    label: 'Whitepaper',
    target: '_blank'
  },
  {
    path: '#roadmap',
    label: 'Roadmap',
  },
  {
    path: '#founders-nft',
    label: 'Founders NFT',
  },
  {
    path: '#faq',
    label: 'FAQ',
  }
];

const NFT_NAV_ITEMS: NavItem[] = [
  {
    path: '#utility',
    label: 'Utility',
  },
  {
    path: '#carousel',
    label: 'Explore',
  },
  {
    path: '#artwork',
    label: 'Gallery',
  },
  {
    path: '#roadmap',
    label: 'Timeline'
  },
  {
    path: '#faq',
    label: 'FAQ',
  }
];

function Header() {
  const [ isNavOpen, setNavOpen ] = useState(false);
  const navModalRef = useRef<ModalRef>(null);
  const { isDesktop } = useMedia();

  const isNFTPage = useMatch('/nft-foundation');

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
            <Navigation items={ isNFTPage ? NFT_NAV_ITEMS : NAV_ITEMS } />
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
              href={ isNFTPage ? '#utility' : '#trailer' }
              variant="ghost"
              block
            >
              { isNFTPage ? 'Watch NFT Video' : 'Watch trailer' }
            </Button>
          </ParallaxLayer>
        )
      }
    </Container>
  );
}

export default Header;