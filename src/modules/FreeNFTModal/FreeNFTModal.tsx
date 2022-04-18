import React, {ForwardedRef, forwardRef, useEffect, useRef, useState} from 'react';

import ConnectWallet from '@components/ConnectWallet';
import Icon from '@components/Icon';
import Modal, { ModalRef } from '@components/Modal';
import Reward from '@components/Reward';
import VerifyHumanity from '@components/VerifyHumanity';

import { useMedia } from '@shared/hocs/withMedia';

import * as styles from './FreeNFTModal.module.scss';

type NFTModalProps = {
  onClose: () => void
}

const FreeNFTModal = ({ onClose }: NFTModalProps, ref: ForwardedRef<ModalRef>) => {
  const [ stage, setStage ] = useState(0);
  const { isMobile } = useMedia();

  const goToNextStage = () => setStage(stage + 1);

  return (
    <Modal ref={ ref } variant={ isMobile ? 'fluid' : 'center' } label="Free NFT Item" top>
      <button className={ styles.close } onClick={ onClose }>
        <Icon icon="cross"/>
      </button>

      <div className={ styles.content }>
        {stage === 0 && <ConnectWallet onConnect={ goToNextStage }/>}
        {stage === 1 && <VerifyHumanity onSuccess={ goToNextStage }/>}
        {stage === 2 && <Reward/>}
      </div>
    </Modal>
  );
};


export default forwardRef<ModalRef, NFTModalProps>(FreeNFTModal);