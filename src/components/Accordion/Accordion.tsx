import React, { useState } from 'react';

import { useMedia } from '@shared/hocs/withMedia';

import * as styles from './Accordion.module.scss';

import { FaqQuestion } from '@shared/types/components';

import AccordionItem from './AccordionItem';
import AccordionLink from './AccordionLink';

type AccordionProps = {
  items: FaqQuestion[]
}

function Accordion({ items }: AccordionProps) {
  const [ active, setActive ] = useState<number | null>(null);
  const { isDesktop } = useMedia();

  const handleItemToggle = (index: number) => () => {
    if (active === index) {
      setActive(null);

      return;
    }

    setActive(index);
  };

  const renderItems = () => items.map(({ heading, text, link }, index) => (
    <li key={ index } className={ styles.item }>
      {
        link
          ? <AccordionLink
            heading={ heading }
            href={ link } />    
          : (
            <AccordionItem 
              active={ active === index }
              heading={ heading }
              text={ text || '' }
              onToggle={ handleItemToggle(index) }
            />
          )
      }
    </li>
  ));

  if (isDesktop) {
    const items = renderItems();

    const middleIndex = Math.ceil(items.length / 2);

    const firstHalf = items.splice(0, middleIndex);   
    const secondHalf = items.splice(-middleIndex);


    return (
      <div className={ styles.accordion }>
        <ul className={ styles.wrapper }>
          { firstHalf }
        </ul>
        <ul className={ styles.wrapper }>
          { secondHalf }
        </ul>
      </div>
    );
  }

  return (
    <div className={ styles.accordion }>
      <ul className={ styles.wrapper }>
        { renderItems() }
      </ul>
    </div>
  ); 
}

export default Accordion;