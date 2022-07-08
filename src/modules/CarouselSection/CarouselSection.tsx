import React, { Fragment, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData, ImageDataLike } from 'gatsby-plugin-image';

import Container from '@components/Container';
import { ParallaxCard, ParallaxLayer } from '@components/Parallax';
import Thumbnails from '@components/Thumbnails';
import { Heading, Paragraph } from '@components/Typography';
import VideoPlayer from '@components/VideoPlayer';

import { useMedia } from '@shared/hocs/withMedia';
import { FADE, SLIDE_LEFT_WITH_FADE, SLIDE_TOP_WITH_FADE } from '@shared/transitions';

import * as styles from './CarouselSection.module.scss';

import { SectionProps } from '@shared/types/modules';

type Node = {
  node: {
    id: string,
    name: string,
    childImageSharp: ImageDataLike
  }
}

type ImageData = {
  id: string,
  name: string,
  image: IGatsbyImageData
}

type ImageQuery = {
  [index: string]: {
    edges: Node[]
  }
}

const items = [
  {
    label: 'Penthouse',
    videoId: 'RYdCuw7L1qk',
    caption: 'RARITY: LEGENDARY',
    heading: 'PENTHOUSE AT THE PRESTIGE',
    text: [ 'Top suite at the most exclusive high-rise apartment in Parallel City. Breathtaking views and..' ],
    image: 'image1'
  },
  {
    label: 'Hills Loft',
    videoId: 'RYdCuw7L1qk',
    caption: 'RARITY: RARE',
    heading: 'BOROUGH HILLS LOFT',
    text: [ 'Cozy in Downtown Broker.', 'Two stories and X sq ft.' ],
    image: 'image2'
  },
  {
    label: 'Medusa M1',
    videoId: 'RYdCuw7L1qk',
    caption: 'RARITY: LEGENDARY',
    heading: 'MEDUSA M1 FOUNDERS EDITION',
    text: [ 'Cozy in Downtown Broker.', 'Two stories and X sq ft.' ],
    image: 'image3'
  },
  {
    label: 'BAUHAUS EVO',
    videoId: 'RYdCuw7L1qk',
    caption: 'RARITY: RARE',
    heading: 'BAUHAUS EVO FOUNDERS EDITION',
    text: [ 'Cozy in Downtown Broker.', 'Two stories and X sq ft.' ],
    image: 'image4'
  }
];

function CarouselSection({ 
  id,
}: SectionProps) {
  const [ currentItem, setCurrentItem ] = useState(0);

  const { isMobile } = useMedia();

  const data: ImageQuery = useStaticQuery(graphql`
    query CarouselQuery {
      images: allFile(filter: {relativePath: {regex: "/carousel/"}}) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      thumbnails: allFile(filter: {relativePath: {regex: "/carousel/"}}) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(width: 200, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `);

  const nodes: ImageData[] = data.images.edges.map(({ node }) => ({
    id: node.id,
    name: node.name,
    image: getImage(node.childImageSharp)
  })) as unknown as ImageData[];

  const thumbnails: ImageData[] = data.thumbnails.edges.map(({ node }) => ({
    id: node.id,
    image: getImage(node.childImageSharp)
  })) as unknown as ImageData[];

  const modifiedItems = items.map((item) => {
    const imageData = nodes.find((node) => node.name === item.image);

    if (imageData) {
      const thumbnail = thumbnails.find((node) => node.id === imageData.id);

      return {
        ...item,
        thumbnail: thumbnail?.image,
        image: imageData.image
      };
    }

    return {
      ...item,
      thumbnail: undefined,
      image: undefined
    };
  });

  return (
    <Container id={ id } as="section">
      <motion.div
        className={ styles.section }
        variants={ {} }
        initial="initial"
        animate="enter"
        exit={
          {
            opacity: 0
          }
        }
        transition={ { staggerChildren: 0.15 } }
      >

        <motion.div
          className={ styles.thumbnails }
          variants={ SLIDE_TOP_WITH_FADE.variants }
          transition={ SLIDE_TOP_WITH_FADE.options }
        >
          <Thumbnails
            options={ modifiedItems }
            value={ currentItem }
            onChange={ setCurrentItem } 
          />
        </motion.div>

        <AnimatePresence exitBeforeEnter> 
          <Fragment key={ currentItem }>
            <ParallaxLayer
              force={ 20 }
              depth={ 75 }
              className={ styles.video }
            >
              <motion.div
                variants={ SLIDE_LEFT_WITH_FADE.variants }
                initial="initial"
                animate="enter"
                exit="exit"
                transition={ SLIDE_LEFT_WITH_FADE.options }
              >
                <VideoPlayer videoId="RYdCuw7L1qk" cover={ modifiedItems[currentItem].image } label={ modifiedItems[currentItem].label } />
              </motion.div>
            </ParallaxLayer>

            <motion.div className={ styles.content }
              variants={ {} }
              initial="initial"
              animate="enter"
              exit="exit"
              transition={ { staggerChildren: 0.15 } }
            >
              <ParallaxLayer force={ 15 } depth={ 175 }>
                <Paragraph
                  className={ styles.caption }
                  size="small"
                  align="left"
                >
                  { modifiedItems[currentItem].caption }
                </Paragraph>
              </ParallaxLayer>

              <ParallaxLayer force={ 15 } depth={ 150 }>
                <Heading
                  type="h3"
                  align="left"
                  marginBottom={ isMobile ? '16' : '24' }
                >
                  { modifiedItems[currentItem].heading }
                </Heading>
              </ParallaxLayer>

              <ParallaxLayer force={ 15 } depth={ 50 }>
                {
                  modifiedItems[currentItem].text.map((text) => (
                    <Paragraph 
                      key={ text.slice(10) }
                      marginTop={ isMobile ? '8' : '16' }
                    >
                      { text }
                    </Paragraph>
                  )) 
                }
              </ParallaxLayer>
            </motion.div>

            {
              modifiedItems[currentItem].image && (
                <ParallaxCard
                  className={ styles.background }
                  variants={ FADE.variants }
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  transition={ FADE.options }
                >
                  <GatsbyImage 
                    key={ modifiedItems[currentItem].label }
                    className={ styles.backgroundImage }
                    image={ modifiedItems[currentItem].image as IGatsbyImageData }
                    alt={ modifiedItems[currentItem].label }
                  />
                </ParallaxCard>
              )
            }
          </Fragment>
        </AnimatePresence>
      </motion.div>
    </Container>
  );
}

export default CarouselSection;