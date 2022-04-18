import React from 'react';

import Button from '@components/Button';
import Icon from '@components/Icon';

import useClipboard from '@shared/hooks/useClipboard';

import * as styles from './Share.module.scss';

type ShareProps = {
  url: string
}

const Share = ({ url }: ShareProps) => {
  const { copyToClipboard } = useClipboard();

  const handleCopy = () => copyToClipboard(url);

  return (
    <div className={ styles.share }>
      <div className={ styles.copy }>
        <input className={ styles.input } type="url" value={ url }/>
        <Button variant="secondary" className={ styles.button } onClick={ handleCopy }>
            Copy
        </Button>
      </div>

      <div className={ styles.socials }>
        <a className={ styles.twitter }
          href={ `http://twitter.com/share?text=Helix Metaverse&url=${url}&hashtags=abbr` }
          target="_blank"
          rel="noreferrer">
          <Icon icon="twitter"/>
            Share
        </a>

        <a className={ styles.facebook }
          href={ `https://www.facebook.com/dialog/feed?display=page&link=${url}` }
          target="_blank"
          rel="noreferrer">
          <Icon icon="facebook"/>
            Share
        </a>

        <a className={ styles.mail } href="mailto:" target="_blank" rel="noreferrer">
          <Icon icon="mail"/>
            Share
        </a>
      </div>
    </div>
  );
};

export default Share;