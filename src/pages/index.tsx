import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { AnimatePresence } from 'framer-motion';
import { PageProps } from 'gatsby';

import { Meta, MOBILE_SECTIONS, SECTIONS } from '@shared/constants';
import { useMedia } from '@shared/hocs/withMedia';
import { useScrollJack } from '@shared/hocs/withScrollJack';

const sections = SECTIONS.map(({ id, component }) => React.createElement(
  component, 
  { 
    id,
    key: id 
  }
));

const mobileSections = MOBILE_SECTIONS.map(({ id, component }) => React.createElement(
  component, 
  { 
    id,
    key: id 
  }
));

const IndexPage = ({ location, navigate }: PageProps) => {
  const firstMount = useRef(true);
  const { isMobile } = useMedia();
  const { currentSectionIndex, currentSectionId, moveTo } = useScrollJack();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const id = window.location.hash.slice(1);

    const sections = isMobile ? MOBILE_SECTIONS : SECTIONS;
    const sectionIndex = sections.findIndex((section) => section.id === id);

    if (sectionIndex > 0) {
      moveTo(sectionIndex);

      return;
    }

    if (!location.hash) {
      moveTo(0);
    }
  }, [ location.hash ]);

  useEffect(() => {
    navigate(`#${currentSectionId}`, { replace: firstMount.current }); 

    if (firstMount.current) {
      firstMount.current = false;
    }
  }, [ currentSectionId ]);
 
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
        { isMobile ? mobileSections[currentSectionIndex] : sections[currentSectionIndex] }
      </AnimatePresence>
    </>
  );
};

export default IndexPage;
