import React, { ForwardedRef, forwardRef, useEffect } from 'react';

import ConnectWallet from '@components/ConnectWallet';
import useMetamaskConnect from '@components/ConnectWallet/useMetamaskConnect';
import Icon from '@components/Icon';
import Modal, { ModalRef } from '@components/Modal';
import Reward from '@components/Reward';
import VerifyHumanity from '@components/VerifyHumanity';

import { useMedia } from '@shared/hocs/withMedia';
import useQueryParams from '@shared/hooks/useQueryParams';

import * as styles from './FreeNFTModal.module.scss';

type NFTModalProps = {
  onClose: () => void
}


const FreeNFTModal = ({ onClose }: NFTModalProps, ref: ForwardedRef<ModalRef>) => {
  const {
    isLoading,
    user,
    error,
    connectUser,
    createUser,
    updateUser,
    verifyUser,
    skipMetamaskConnection
  } = useMetamaskConnect();
  const query = useQueryParams();

  const { isMobile } = useMedia();

  useEffect(() => {
    if (!query) return;

    const secret = query.get('secret');
    const id = query.get('uuid');

    if (secret && id) {
      verifyUser({
        id,
        secret
      })

      return;
    }

    const referrerId = query.get('r');

    if (referrerId) {
      updateUser({ referrer: referrerId });
    }
  }, [ query ]);

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
              {
                !user.connected &&
                      <ConnectWallet
                        error={ error }
                        hasMetamask={ user.hasMetamask }
                        connectUser={ connectUser }
                        onSignUpWithEmailClick={ skipMetamaskConnection }/>
              }
              {
                user.connected && !user.id &&
                      <VerifyHumanity
                        error={ error }
                        loading={ isLoading }
                        createUser={ createUser }
                      />
              }
              {user.connected && user.id && <Reward id={ user.id } verified={user.verified}/>}
            </>
          )
        }
      </div>

    </Modal>
  );
};


export default forwardRef<ModalRef, NFTModalProps>(FreeNFTModal);