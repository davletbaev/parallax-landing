import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AnimatePresence, useViewportScroll } from 'framer-motion';
import { throttle } from 'lodash';

import { Meta, SCROLL_HEIGHT, SECTIONS } from '@shared/constants';
import { useMedia } from '@shared/hocs/withMedia';
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

  const { isMobile } = useMedia();
  const { scrollYProgress } = useViewportScroll();
  const { currentSection, setCurrentSection } = useSections();

  const update = useCallback(throttle((value) => {
    let index = 0;

    switch (true) {
      case value > 0.9:
        index = 12;

        break;
      case isMobile && value > 0.85:
        index = 11;

        break;
      case value > 0.81:
        index = 10;

        break;
      case value > 0.72:
        index = 9;

        break;
      case value > 0.63:
        index = 8;

        break;
      case isMobile && value > 0.58:
        index = 7;

        break;
      case value > 0.54:
        index = 6;

        break;
      case value > 0.45:
        index = 5;

        break;
      case value > 0.36:
        index = 4;

        break;
      case value > 0.27:
        index = 3;

        break;
      case value > 0.18:
        index = 2;

        break;
      case value > 0.09:
        index = 1;

        break;
      default:
        index = 0;
    }

    if (SECTIONS[index]) {
      setCurrentIndex(index);
      setCurrentSection(SECTIONS[index].id);
    }
  }, 100), [ isMobile ]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(update);

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const index = SECTIONS.findIndex((item) => item.id === currentSection);

    if (!index || index === currentIndex) return;

    setCurrentIndex(index);

    if (typeof window !== 'undefined') {
      window.scrollTo({ top: SCROLL_HEIGHT / sectionsCount.current * (index + 0.75) });
    }
  }, [ currentSection ]);

  return (
    <>
      <Helmet 
        title={ Meta.title }
        defer={ false }
      >
        <meta
          name="description"
          content={ Meta.description }
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:title"
          content={ Meta.title }
        />
        <meta
          property="og:description"
          content={ Meta.description }
        />
        <meta
          property="og:url"
          content={ Meta.url }
        />
        <meta
          property="og:image"
          content={ Meta.preview }
        />
        <meta
          property="og:image:width"
          content="1200"
        />
        <meta
          property="og:image:height"
          content="600"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:site"
          content="@helix"
        />
        <meta
          name="twitter:creator"
          content="@helix"
        />
        <meta
          name="twitter:title"
          content={ Meta.title }
        />
        <meta
          name="twitter:description"
          content={ Meta.description }
        />
        <meta
          name="twitter:image"
          content={ Meta.preview }
        />
      </Helmet>
      <AnimatePresence exitBeforeEnter>
        { sections[currentIndex] }
      </AnimatePresence>
    </>
  );
};

export default IndexPage;
