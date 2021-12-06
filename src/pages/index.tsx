import React, { useEffect, useRef } from 'react';
import { AnimatePresence, useViewportScroll } from 'framer-motion';

import { SECTIONS } from '@shared/constants';
import { useSections } from '@shared/hocs/withSections';

const sections = SECTIONS.map(({ id, component }) => React.createElement(
  component, 
  { 
    id,
    key: id 
  }
));

const IndexPage = () => {
  const sectionsCount = useRef(sections.length);

  const { scrollYProgress } = useViewportScroll();
  const { currentSection, setCurrentSection } = useSections();

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      const index = Math.floor((sectionsCount.current - 1) * value);

      if (index !== currentSection) {
        setCurrentSection(index);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [ currentSection ]);

  return (
    <AnimatePresence exitBeforeEnter>
      { sections[currentSection] }
    </AnimatePresence>
  );
};

export default IndexPage;
