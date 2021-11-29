import React from 'react';

import Layout from '@layouts/Main';

import ContactsSection from '@modules/ContactsSection';
import FaqSection from '@modules/FaqSection';
import GallerySection from '@modules/GallerySection';
import MainScreen from '@modules/MainScreen';
import RoadmapSection from '@modules/RoadmapSection';
import TeamSection from '@modules/TeamSection';
import TextSection from '@modules/TextSection';
import TrailerSection from '@modules/TrailerSection';

import { Heading, Paragraph } from '@components/Typography';

const SECTION_HEIGHT = 2500;

const IndexPage = () => {
  return (
    <Layout>
      <MainScreen scrollHeight={ SECTION_HEIGHT } />

      <TrailerSection scrollHeight={ SECTION_HEIGHT } />

      <TextSection scrollHeight={ SECTION_HEIGHT } align="right">
        <Heading type="h2" align="left">
          CUTTING-EDGE<br /> GRAPHICS
        </Heading>
        <Paragraph marginTop="24">
          True immersion starts with life-like visual quality and clarity.
        </Paragraph>
        <Paragraph>
          HELIX features thousands of incredibly detailed, custom modeled environments, vehicles and items, from billboards down to strands of hair on your avatar.
        </Paragraph>
      </TextSection>

      <TextSection scrollHeight={ SECTION_HEIGHT }>
        <Heading type="h2" align="left">
          TRUE ITEM<br /> OWNERSHIP
        </Heading>
        <Paragraph marginTop="24">
          With traditional games, you buy an item and.. when you stop playing..
        </Paragraph>
        <Paragraph>
          In HELIX, every item holds real-world value and can be exchanged for money and.. 
        </Paragraph>
        <Paragraph>
          every item is a non-fungible token (NFT) stored on the blockchain for everyone to verify.
        </Paragraph>
        <Paragraph>
          Every item written to the blockchain, where..
        </Paragraph>
        <Paragraph>
          Show off your collection, resell them for profit, or do whatever you want..
        </Paragraph>
      </TextSection>

      <TextSection scrollHeight={ SECTION_HEIGHT } align="right">
        <Heading type="h2" align="left">
          PLAY TO EARN
        </Heading>
        <Paragraph marginTop="24">
          Welcome to the era of earning money for playing games.
        </Paragraph>
        <Paragraph>
          HELIX features competitive PvP game modes and events where you can win tokens
        </Paragraph>
      </TextSection>

      <TextSection scrollHeight={ SECTION_HEIGHT }>
        <Heading type="h2" align="left">
          COMMUNITY<br /> FIRST
        </Heading>
        <Paragraph marginTop="24">
          HELIX aims to lead the way for an open, fair metaverse with..
        </Paragraph>
        <Paragraph>
          Community Treasury will be responsible for..
        </Paragraph>
      </TextSection>

      <RoadmapSection scrollHeight={ SECTION_HEIGHT } />

      <GallerySection scrollHeight={ SECTION_HEIGHT } />

      <TeamSection scrollHeight={ SECTION_HEIGHT } />

      <FaqSection scrollHeight={ SECTION_HEIGHT } />

      <ContactsSection scrollHeight={ SECTION_HEIGHT } />
    </Layout>
  );
};

export default IndexPage;
