import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, useViewportScroll } from 'framer-motion';

import { SCROLL_HEIGHT, SECTIONS } from '@shared/constants';
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
  const [ currentIndex, setCurrentIndex ] = useState<number>(0);

  const { scrollYProgress } = useViewportScroll();
  const { currentSection, setCurrentSection } = useSections();

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      const index = Math.floor((sectionsCount.current - 1) * value);

      if (index === currentIndex) return;

      setCurrentIndex(index);

      console.log(index, SECTIONS[index]);

      if (SECTIONS[index]) {
        setCurrentSection(SECTIONS[index].id);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [ currentIndex ]);

  useEffect(() => {
    const index = SECTIONS.findIndex((item) => item.id === currentSection);

    if (!index || index === currentIndex) return;

    setCurrentIndex(index);
    window.scrollTo({ top: SCROLL_HEIGHT / sectionsCount.current * (index + 1) });
  }, [ currentSection ]);

  return (
    <AnimatePresence exitBeforeEnter>
      { sections[currentIndex] }
    </AnimatePresence>
  );
};

export default IndexPage;
