import React from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import Button from '@components/Button';
import Container from '@components/Container';
import { ParallaxCard, ParallaxLayer } from '@components/Parallax';
import Roadmap from '@components/Roadmap';
import { Heading, Paragraph } from '@components/Typography';

import { ExternalUrl, NFT_ROADMAP_ITEMS } from '@shared/constants';
import { useMedia } from '@shared/hocs/withMedia';
import { FADE, SLIDE_BOTTOM_WITH_FADE } from '@shared/transitions';

import * as styles from './RoadmapSection.module.scss';

import { SectionProps } from '@shared/types/modules';

function RoadmapSection({ 
  id,
}: SectionProps) {
  const { isTabletOrBigger } = useMedia();
  
  return (
    <Container id={ id } as="section">
      <motion.div 
        className={ styles.section }
        variants={ {} }
        initial="initial"
        animate="enter"
        exit="exit"
        transition={ { staggerChildren: 0.15 } }
      >
        <ParallaxLayer force={ 15 } depth={ 150 } className={ styles.heading }>
          <Heading type="h2">
            MINT PRICE & DATE
          </Heading>
        </ParallaxLayer>
          
        <div className={ styles.content }>
          <ParallaxLayer force={ 15 } depth={ 50 }>
            <Paragraph marginTop="24" marginBottom="24">
              We will announce the price, date, and format of the NFT sale soon.<br />
              Join our Discord and Twitter to find out.
            </Paragraph>
          </ParallaxLayer>

          <ParallaxLayer 
            force={ 15 }
            depth={ 75 }
          >
            <motion.div
              variants={ SLIDE_BOTTOM_WITH_FADE.variants }
              transition={ SLIDE_BOTTOM_WITH_FADE.options }
            >
              <Button className={ styles.button } href={ ExternalUrl.discord } variant="secondary">
                Join Discord
              </Button>

              <Button className={ styles.button } href={ ExternalUrl.twitter } variant="secondary">
                Follow Twitter
              </Button>
            </motion.div>
          </ParallaxLayer>
        </div>

        {
          isTabletOrBigger && (
            <ParallaxLayer 
              force={ 15 }
              depth={ 150 }
              className={ styles.roadmap }
            >
              <motion.div
                variants={ SLIDE_BOTTOM_WITH_FADE.variants }
                transition={ SLIDE_BOTTOM_WITH_FADE.options }>
                <Roadmap items={ NFT_ROADMAP_ITEMS } />
              </motion.div>
            </ParallaxLayer>
          )
        }
      </motion.div>

      <ParallaxCard
        className={ styles.background }
        variants={ FADE.variants }
        initial="initial"
        animate="enter"
        exit="exit"
        transition={ FADE.options }
      >
        <StaticImage
          className={ styles.backgroundImage }
          src="./roadmap.jpg"
          alt="Driving car on the bridge"
        />
      </ParallaxCard>
    </Container>
  );
}

export default RoadmapSection;