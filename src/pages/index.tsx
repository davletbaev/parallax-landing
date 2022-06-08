import React from 'react';

import ContactsSection from '@modules/ContactsSection';
import FaqSection, { FaqMobile } from '@modules/FaqSection';
import FirstFeature from '@modules/FirstFeature';
import FourthFeature from '@modules/FourthFeature';
import GallerySection from '@modules/GallerySection';
import MainScreen from '@modules/MainScreen';
import RoadmapSection, { RoadmapMobile } from '@modules/RoadmapSection';
import SecondFeature from '@modules/SecondFeature';
import TeamSection from '@modules/TeamSection';
import ThirdFeature from '@modules/ThirdFeature';
import TrailerSection from '@modules/TrailerSection';

import { ScrollJackWrapper } from '@components/ScrollJack';

import { FAQ_QUESTIONS } from '@shared/constants';
import { useMedia } from '@shared/hocs/withMedia';

const IndexPage = () => {
  const { isMobile } = useMedia();

  return (
    <ScrollJackWrapper>
      <MainScreen id="main"/>
      <TrailerSection id="trailer"/>
      <FirstFeature id="feature-1"/>
      <SecondFeature id="feature-2"/>
      <ThirdFeature id="feature-3"/>
      <FourthFeature id="feature-4"/>
      <RoadmapSection id="roadmap"/>
      {isMobile && <RoadmapMobile id="roadmap-mobile"/>}
      <GallerySection id="land-sale"/>
      <TeamSection id="team"/>
      <FaqSection id="faq" questions={ FAQ_QUESTIONS }/>
      {isMobile && <FaqMobile id="faq-mobile" questions={ FAQ_QUESTIONS }/>}
      <ContactsSection id="contacts"/>
    </ScrollJackWrapper>
  );
};

export default IndexPage;
