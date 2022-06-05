import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import Button from '@components/Button';
import { Heading, Paragraph } from '@components/Typography';

import { useMedia } from '@shared/hocs/withMedia';

import * as styles from './ConnectWallet.module.scss';

type ConnectWalletProps = {
  error: string | null,
  hasMetamask: boolean,
  connectUser: () => Promise<void>,
  onSignUpWithEmailClick: () => void
}

const ConnectWallet = ({ error, hasMetamask, connectUser, onSignUpWithEmailClick }: ConnectWalletProps) => {
  const { isMobile } = useMedia();


  const installMetamask = () => {
    const win = window.open('https://metamask.io/', '_blank');

    if (win != null) {
      win.focus();
    }
  };

  return (
    <div className={ styles.container }>
      <div className={ styles.content }>
        <Heading type="h3">Claim free NFT item</Heading>
        <Paragraph marginTop="16" marginBottom="24">Connect your wallet to claim a free NFT item which will be
            airdropped to you before HELIX early
            access.</Paragraph>

        {
          hasMetamask ? (
            <>
              <Button variant="secondary" onClick={ connectUser } block={ isMobile }>Connect Wallet</Button>

              <Paragraph className={ error ? styles.error : styles.caption }
                size="small"
                marginTop="8">{error ? error : ''}</Paragraph>
            </>
          ) : (
            <>
              <Paragraph marginTop="16" marginBottom="24">MetaMask not detected. Try opening browser via MetaMask
                    app or sign up with email.</Paragraph>

              <div className={ styles.actions }>
                <Button variant="secondary" onClick={ installMetamask } block={ isMobile }>Install MetaMask</Button>
                <Button variant="ghost"
                  className={ styles.secondaryButton }
                  onClick={ onSignUpWithEmailClick }
                  block={ isMobile }>Sign Up with Email</Button>
              </div>
            </>
          )
        }
      </div>

      <StaticImage className={ styles.background } alt="NFT Lamborghini" src="background.jpg"/>
    </div>
  );
};

export default ConnectWallet;
