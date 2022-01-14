import React from 'react';

import ContactsSection from '@modules/ContactsSection';
import ContactsMobile from '@modules/ContactsSection/ContactsMobile';
import FaqSection from '@modules/FaqSection';
import FaqMobile from '@modules/FaqSection/FaqMobile';
import FirstFeature from '@modules/FirstFeature';
import FourthFeature from '@modules/FourthFeature';
import GallerySection from '@modules/GallerySection';
import MainScreen from '@modules/MainScreen';
import RoadmapSection from '@modules/RoadmapSection';
import RoadmapMobile from '@modules/RoadmapSection/RoadmapMobile';
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
      <MainScreen id="main" />
      <TrailerSection id="trailer" />
      <FirstFeature id="feature-1" />
      <SecondFeature id="feature-2" />
      <ThirdFeature id="feature-3" />
      <FourthFeature id="feature-4" />
      <RoadmapSection id="roadmap" />
      { isMobile && <RoadmapMobile id="roadmap-mobile" /> }
      <GallerySection id="founders-nft" />
      <TeamSection id="team" />
      <FaqSection id="faq" questions={ FAQ_QUESTIONS } />
      { isMobile && <FaqMobile id="faq-mobile" questions={ FAQ_QUESTIONS } /> }
      <ContactsSection id="contacts" />
      { isMobile && <ContactsMobile id="contacts-mobile" /> }
    </ScrollJackWrapper>
  );
};

export default IndexPage;
