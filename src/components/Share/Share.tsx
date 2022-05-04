import React, { useEffect, useRef, useState } from 'react';
import classnames, { Binding } from 'classnames/bind';

import Button from '@components/Button';
import Icon from '@components/Icon';

import useClipboard from '@shared/hooks/useClipboard';

import * as styles from './Share.module.scss';

const cn = classnames.bind(styles as unknown as Binding);

type ShareProps = {
  url: string
}

const Share = ({ url }: ShareProps) => {
  const copiedTimeout = useRef<NodeJS.Timeout>();
  const [ copied, setCopied ] = useState(false);
  const { copyToClipboard } = useClipboard();

  const handleCopy = () => copyToClipboard(url).then(() => {
    setCopied(true);

    copiedTimeout.current = setTimeout(() => {
      setCopied(false);
    }, 2000);
  });

  useEffect(() => {
    return () => {
      clearTimeout(copiedTimeout.current as unknown as number);
    };
  }, []);

  return (
    <div className={ styles.share }>
      <div className={ styles.copy }>
        <input className={ styles.input } type="url" value={ url } readOnly/>
        <Button variant="secondary" className={ cn('button', copied && 'copied') } onClick={ handleCopy }>
          {copied ? 'Copied' : 'Copy'}
        </Button>
      </div>

      <div className={ styles.socials }>
        <a className={ styles.twitter }
          href={ `http://twitter.com/share?text=Check this out!&url=${url}` }
          target="_blank"
          rel="noreferrer">
          <Icon icon="twitter"/>
            Share
        </a>

        <a className={ styles.facebook }
          href={ `https://www.facebook.com/dialog/feed?app_id=481315870442672&display=page&link=${url}` }
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
