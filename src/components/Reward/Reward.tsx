import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import RewardsList from '@components/RewardsList';
import Share from '@components/Share';
import { Heading, Paragraph } from '@components/Typography';

import { useMedia } from '@shared/hocs/withMedia';
import { User } from '@shared/hooks/useApi';
import { FADE } from '@shared/transitions';

import * as styles from './Reward.module.scss';

import invites5Image from './invites5.png';
import invites10Image from './invites10.png';
import invites100Image from './invites100.png';

const REWARDS = [
  {
    id: 0,
    headline: '5 invites',
    description: 'SNXKR Hydrogenesis NFT (5000 available)',
    image: invites5Image
  }, {
    id: 1,
    headline: '10 invites',
    description: 'Bauhaus Force NFT (1000 available)',
    image: invites10Image
  }, {
    id: 2,
    headline: '100 invites',
    description: 'Founders Collection NFT Whitelist (100 available)',
    image: invites100Image
  }
];

const getRewardFromReferrals = (referrals) => {
  if (referrals < 10) return 0;
  if (referrals < 100) return 1;

  return 2;
};

type RewardProps = {
  user: User
}

const Reward = ({ user }: RewardProps) => {
  const [ reward, setReward ] = useState(getRewardFromReferrals(user.referrals));

  const { isMobile } = useMedia();

  const renderImages = REWARDS.filter(({ id }) => id === reward).map(({ id, description, image }) => (
    <motion.img src={ image }
      alt={ description }
      className={ styles.image }
      key={ id }
      animate="enter"
      variants={ FADE.variants }
      transition={ FADE.options }/>
  ));

  return (
    <div className={ styles.container }>
      <div className={ styles.content }>
        <Heading type="h4">SUCCESSFULLY CLAIMED!<br/>FEELING SOCIAL?</Heading>
        <Paragraph marginTop="16">We’re giving away even more rewards to those who help grow our amazing
            community.</Paragraph>
        <Paragraph marginTop="16" marginBottom="24"> Share your unique link below and unlock the following additional
            airdrops. Learn
            more.</Paragraph>

        <RewardsList items={ REWARDS } value={ reward } onChange={ setReward }/>

        <div className={ styles.share }>
          <Share url={ `https://helixmetaverse.com?r=${user.id}` }/>
        </div>

        <Paragraph marginTop="16" size="small" className={ styles.caption }> We’ll let you know by email when someone
            uses your invite.
        </Paragraph>
      </div>

      {
        !isMobile && (
          <div className={ styles.cover }>
            <AnimatePresence>
              {renderImages}
            </AnimatePresence>
          </div>
        )
      }
    </div>
  );
};

export default Reward;