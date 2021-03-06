import React from 'react';
import { Helmet } from 'react-helmet';

import ArtworkSection from '@modules/ArtworkSection';
import CarouselSection from '@modules/CarouselSection';
import FaqSection from '@modules/NFTFaqSection';
import NFTFeature from '@modules/NFTFeature';
import MainScreen from '@modules/NFTMainScreen';
import RoadmapSection, { RoadmapMobile } from '@modules/NFTRoadmapSection';
import TrailerSection from '@modules/NFTTrailerSection';

import { ScrollJackWrapper } from '@components/ScrollJack';

import { Meta, NFT_FAQ_QUESTIONS } from '@shared/constants';
import { useMedia } from '@shared/hocs/withMedia';

import { nftFaqSchema, nftTrailerSchema } from '@shared/seo-schema';

const NFTFoundationPage = () => {
  const { isMobile } = useMedia();

  return (
    <>
      <Helmet
        title={ Meta.NFT.title }
        defer={ false }
      >
        <meta
          name="description"
          content={ Meta.NFT.description }
        />
        <meta
          property="og:title"
          content={ Meta.NFT.title }
        />
        <meta
          property="og:description"
          content={ Meta.NFT.description }
        />
        <meta
          name="twitter:title"
          content={ Meta.NFT.title }
        />
        <meta
          name="twitter:description"
          content={ Meta.NFT.description }
        />
        <script type="application/ld+json">
          {JSON.stringify(nftTrailerSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(nftFaqSchema)}
        </script>
      </Helmet>
      <ScrollJackWrapper>
        <MainScreen id="main"/>
        <TrailerSection id="utility"/>
        <NFTFeature id="feature"/>
        <CarouselSection id="carousel"/>
        <ArtworkSection id="artwork"/>
        <RoadmapSection id="roadmap"/>
        {isMobile && <RoadmapMobile id="roadmap-mobile"/>}
        <FaqSection id="faq" questions={ NFT_FAQ_QUESTIONS }/>
      </ScrollJackWrapper>
    </>
  );
};

export default NFTFoundationPage;