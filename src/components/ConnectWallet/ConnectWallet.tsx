import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Button from '@components/Button';
import { Heading, Paragraph } from '@components/Typography';

import { useMedia } from '@shared/hocs/withMedia';

import * as styles from './ConnectWallet.module.scss';

type ConnectWalletProps = {
  onConnect: () => void
}

const ConnectWallet = ({ onConnect }: ConnectWalletProps) => {
  const { isMobile } = useMedia();
  
  return (
    <div className={ styles.container }>
      <div className={ styles.content }>
        <Heading type="h3">Claim free NFT item</Heading>
        <Paragraph marginTop="16" marginBottom="24">Connect your wallet to claim a free NFT item which will be
            airdropped to you before HELIX early
            access.</Paragraph>

        <Button variant="secondary" onClick={ onConnect } block={ isMobile }>Connect Wallet</Button>

        <Paragraph className={ styles.caption } size="small" marginTop="8">45,103 left to claim</Paragraph>
      </div>

      <StaticImage className={ styles.background } alt="NFT Lamborghini" src="background.jpg"/>
    </div>
  );
};

export default ConnectWallet;