import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Button from '@components/Button';
import { Heading, Paragraph } from '@components/Typography';

import { useMedia } from '@shared/hocs/withMedia';

import * as styles from './ConnectWallet.module.scss';

type ConnectWalletProps = {
  hasMetamask: boolean
}

const ConnectWallet = ({ hasMetamask }: ConnectWalletProps) => {
  const { isMobile } = useMedia();

  const connectMetamask = async () => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.error(error);
    }
  };

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
              <Button variant="secondary" onClick={ connectMetamask } block={ isMobile }>Connect Wallet</Button>

              <Paragraph className={ styles.caption } size="small" marginTop="8">45,103 left to claim</Paragraph>
            </>
          ) : (
            <>
              <Paragraph marginTop="16" marginBottom="24">It`s seems like you don`t have Metamask installed.
                    Please
                    install it and reload page.</Paragraph>

              <Button variant="secondary" onClick={ installMetamask } block={ isMobile }>Install Metamask</Button>
            </>
          )
        }
      </div>

      <StaticImage className={ styles.background } alt="NFT Lamborghini" src="background.jpg"/>
    </div>
  );
};

export default ConnectWallet;