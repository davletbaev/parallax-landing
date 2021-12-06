import React, { HTMLAttributes, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useSections } from '@shared/hocs/withSections';

import { AnimatedSectionContext } from './animatedSectionContext';

type AnimatedSectionProps = HTMLAttributes<HTMLElement> & {
  as?: 'header' | 'section' | 'div' | 'footer',
  id?: string,
  children: React.ReactNode
}

function AnimatedSection({ as = 'div', id, children, ...props }: AnimatedSectionProps) {
  const Component = as;

  const { setSection } = useSections();
  const [ ref, inView ] = useInView({
    rootMargin: '20% 0px 20% 0px'
  });

  useEffect(() => {
    if (!id) return;

    setSection(inView ? id : null);
  }, [ inView ]);

  return (
    <Component 
      id={ id }
      ref={ ref }
      { ...props }
    >
      <AnimatedSectionContext.Provider value={ { inView } }>
        { children }
      </AnimatedSectionContext.Provider>
    </Component>
  );
}

export default AnimatedSection;