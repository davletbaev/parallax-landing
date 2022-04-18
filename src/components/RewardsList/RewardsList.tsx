import React from 'react';
import classnames, { Binding } from 'classnames/bind';
import { motion } from 'framer-motion';

import { Heading, Paragraph } from '@components/Typography';

import { useMedia } from '@shared/hocs/withMedia';

import * as styles from './RewardsList.module.scss';

const cn = classnames.bind(styles as unknown as Binding);

type Reward = {
  id: number,
  image: string,
  headline: string,
  description: string
}

type RewardsListProps = {
  items: Reward[],
  value: number,
  onChange: (value: number) => void
}

const RewardsList = ({ items, value, onChange }: RewardsListProps) => {
  const { isMobile } = useMedia();

  const handleChange = (id: number) => () => onChange(id);

  const renderItems = items.map(({ id, image, headline, description }) => (
    <li key={ id }>
      <label className={ cn('control', id === value && 'active') } onClick={ handleChange(id) }>
        <input className="visually-hidden" type="radio" name="reward" value="headline"/>
        <Heading type="h5">{headline}</Heading>
        <Paragraph size="small" marginBottom={ isMobile ? '16' : 'none' }>{description}</Paragraph>
        {
          isMobile && id === value &&
              <motion.img animate={ { maxHeight: '100%' } }
                className={ styles.image }
                src={ image }
                alt={ description }/>
        }
      </label>
    </li>
  ));

  return (
    <ul className={ styles.list }>
      {renderItems}
    </ul>
  );
};

export default RewardsList;