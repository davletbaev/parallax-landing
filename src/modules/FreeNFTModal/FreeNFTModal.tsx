import React, { ForwardedRef, forwardRef, useEffect } from 'react';

import ConnectWallet from '@components/ConnectWallet';
import useMetamaskConnect from '@components/ConnectWallet/useMetamaskConnect';
import Icon from '@components/Icon';
import Modal, { ModalRef } from '@components/Modal';
import Reward from '@components/Reward';
import VerifyHumanity from '@components/VerifyHumanity';

import { useMedia } from '@shared/hocs/withMedia';
import useApi from '@shared/hooks/useApi';
import useQueryParams from '@shared/hooks/useQueryParams';

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
    isConnectionSkipped,
    skipMetamaskConnection
  } = useMetamaskConnect();
  const query = useQueryParams();

  const { verifyUser } = useApi();

  const { isMobile } = useMedia();

  useEffect(() => {
    if (!query) return;

    const secret = query.get('secret');
    const id = query.get('uuid');

    if (secret && id) {
      setLoading(true);

      verifyUser({
        id,
        secret
      })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          setLoading(false);
        });
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
                !isConnected && !isConnectionSkipped &&
                      <ConnectWallet hasMetamask={ hasMetamask } onSignUpWithEmailClick={ skipMetamaskConnection }/>
              }
              {
                (isConnected || isConnectionSkipped) && !user &&
                      <VerifyHumanity wallet={ wallet } onSuccess={ updateUser }/>
              }
              {(isConnected || isConnectionSkipped) && user && <Reward user={ user }/>}
            </>
          )
        }
      </div>

    </Modal>
  );
};


export default forwardRef<ModalRef, NFTModalProps>(FreeNFTModal);