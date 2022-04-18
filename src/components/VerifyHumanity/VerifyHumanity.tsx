import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import SubscriptionForm from '@components/SubscriptionForm';
import { Heading, Paragraph } from '@components/Typography';

import * as styles from './VerifyHumanity.module.scss';

type VerifyHumanityProps = {
  onSuccess: () => void
}


const VerifyHumanity = ({
  onSuccess
}: VerifyHumanityProps) => {
  return (
    <div className={ styles.container }>
      <div className={ styles.content }>
        <Heading type="h3">Verify Humanity</Heading>
        <Paragraph marginTop="16" marginBottom="24">Enter your email to finish claiming your NFT item.</Paragraph>

        <SubscriptionForm onSubmit={ onSuccess }/>
      </div>

      <StaticImage className={ styles.background } alt="NFT Lamborghini" src="background.jpg"/>
    </div>
  );
};

export default VerifyHumanity;