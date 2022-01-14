import React from 'react';

import Button from '@components/Button';
import Container from '@components/Container';
import Modal, { ModalRef } from '@components/Modal';
import Navigation from '@components/Navigation';
import Socials from '@components/Socials';

import * as styles from './NavModal.module.scss';

const NavModal = React.forwardRef<ModalRef>((props, ref) => {
  return (
    <Modal ref={ ref } label="Navigation" variant="fluid">
      <Container className={ styles.navmodal }>
        <div className={ styles.navigation }>
          <Navigation />
        </div>

        <div className={ styles.trailer }>
          <Button 
            href="#utility"
            variant="ghost"
            block
          >
            Watch NFT Video
          </Button>
        </div>

        <div className={ styles.socials }>
          <Socials />
        </div>
      </Container>
    </Modal>
  );
});

NavModal.displayName = 'NavModal';

export default NavModal;