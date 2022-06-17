import React from 'react';
import { useMatch } from '@reach/router';

import Button from '@components/Button';
import Container from '@components/Container';
import Modal, { ModalRef } from '@components/Modal';
import Navigation from '@components/Navigation';
import Socials from '@components/Socials';

import { NAV_ITEMS, NFT_NAV_ITEMS } from '@shared/constants';
import { useNFTModal } from '@shared/hocs/withNFTModal';

import * as styles from './NavModal.module.scss';

const NavModal = React.forwardRef<ModalRef>((props, ref) => {
  const { openModal } = useNFTModal();
  const isNFTPage = useMatch('/founder-collection');

  return (
    <Modal ref={ ref } label="Navigation" variant="fluid">
      <Container className={ styles.navmodal }>
        <div className={ styles.navigation }>
          <Navigation items={ isNFTPage ? NFT_NAV_ITEMS : NAV_ITEMS }/>
        </div>

        <div className={ styles.actions }>
          <Button
            variant="secondary"
            block
            onClick={ openModal }
          >
            Free Airdrop
          </Button>
          <Button
            href={ isNFTPage ? '#utility' : '#trailer' }
            variant="ghost"
            block
          >
            {isNFTPage ? 'Watch NFT Video' : 'Watch Trailer'}
          </Button>
        </div>

        <div className={ styles.socials }>
          <Socials/>
        </div>
      </Container>
    </Modal>
  );
});

NavModal.displayName = 'NavModal';

export default NavModal;
