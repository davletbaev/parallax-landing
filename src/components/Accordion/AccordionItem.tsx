import React, { useCallback, useEffect, useRef } from 'react';

import Icon from '@components/Icon';
import { Heading, Paragraph } from '@components/Typography';

import { IS_BROWSER } from '@shared/constants';

import * as styles from './Accordion.module.scss';

type AccordionItemProps = {
  active: boolean;
  heading: string;
  text: string;
  onToggle: () => void;
}

function AccordionItem({ active, heading, text, onToggle }: AccordionItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const resizeContainer = useCallback(() => {
    if (!IS_BROWSER) return;
    if (!containerRef.current || !headlineRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const headlineHeight = headlineRef.current.clientHeight;
    const contentHeight = contentRef.current.clientHeight;

    if (active) {
      container.style.maxHeight = `${headlineHeight + contentHeight}px`;
    } else {
      container.style.maxHeight = `${headlineHeight}px`;
    }
  }, [ active ]);

  useEffect(() => {
    if (!IS_BROWSER) return;

    resizeContainer();

    window.addEventListener('resize', resizeContainer);
    window.addEventListener('orientationchange', resizeContainer);
    
    return () => {
      window.removeEventListener('resize', resizeContainer);
      window.removeEventListener('orientationchange', resizeContainer);
    };
  }, []);

  useEffect(() => {
    resizeContainer();
  }, [ active ]);

  return (
    <div ref={ containerRef } className={ styles.container }>
      <div ref={ headlineRef } className={ styles.headline } role="button" onClick={ onToggle }>
        <Heading type="h3" size="h5">{ heading }</Heading>

        <span className={ styles.icon }>
          <Icon icon={ active ? 'minus' : 'plus' } animate />
        </span>
      </div>
      <div ref={ contentRef } className={ styles.content }>
        <Paragraph>{ text }</Paragraph>
      </div>
    </div>
  );
}

export default AccordionItem;