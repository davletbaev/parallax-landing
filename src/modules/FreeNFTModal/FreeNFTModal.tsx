import React, { ForwardedRef, forwardRef } from 'react';

import ConnectWallet from '@components/ConnectWallet';
import useMetamaskConnect from '@components/ConnectWallet/useMetamaskConnect';
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
  const {
    isLoading,
    setLoading,
    user,
    updateUser,
    wallet,
    hasMetamask,
    isConnected,
  } = useMetamaskConnect();

  const { isMobile } = useMedia();

  return (
    <Modal ref={ ref } variant={ isMobile ? 'fluid' : 'center' } label="Free NFT Item" top>
      <button className={ styles.close } onClick={ onClose }>
        <Icon icon="cross"/>
      </button>

      <div className={ styles.content }>

        {
          isLoading ? (
            <div className={ styles.loader }>
              <span className={ styles.spinner }/>
            </div>
          ) : (
            <>
              {!isConnected && <ConnectWallet hasMetamask={ hasMetamask }/>}
              {
                isConnected && !user?.verified &&
                      <VerifyHumanity
                        setLoading={ setLoading }
                        user={ user }
                        wallet={ wallet }
                        onSuccess={ updateUser }
                      />
              }
              {isConnected && user?.verified && <Reward user={ user }/>}
            </>
          )
        }
      </div>

    </Modal>
  );
};


export default forwardRef<ModalRef, NFTModalProps>(FreeNFTModal);