import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData, ImageDataLike, StaticImage } from 'gatsby-plugin-image';

import Carousel from '@components/Carousel';
import Container from '@components/Container';
import Modal, { ModalRef } from '@components/Modal';
import { ParallaxCard, ParallaxLayer } from '@components/Parallax';
import { Heading } from '@components/Typography';

import { useMedia } from '@shared/hocs/withMedia';
import { FADE } from '@shared/transitions';

import * as styles from './ArtworkSection.module.scss';

import { SectionProps } from '@shared/types/modules';

type Node = {
  node: {
    id: string,
    name: string,
    childImageSharp: ImageDataLike
  }
}

type ImageQuery = {
  [index: string]: {
    edges: Node[]
  }
}

function ArtworkSection({ 
  id, 
}: SectionProps) {
  const modalRef = useRef<ModalRef>(null);

  const [ lightboxTarget, setLightboxTarget ] = useState<IGatsbyImageData | null>(null);

  const { isDesktop } = useMedia();
  
  const data: ImageQuery = useStaticQuery(graphql`
    query ArtworkQuery {
      images: allFile(filter: {relativePath: {regex: "/artwork/"}}) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
      thumbnails: allFile(filter: {relativePath: {regex: "/artwork/"}}) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(width: 400, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `);

  const thumbnails = data.thumbnails.edges.map(({ node }) => ({
    id: node.id,
    name: node.name,
    image: getImage(node.childImageSharp)
  }));

  const nodes = data.images.edges.map(({ node }) => ({
    id: node.id,
    name: node.name,
    image: getImage(node.childImageSharp)
  }));

  const handleImageClick = (imageData: IGatsbyImageData) => () => {
    console.log('click');
    setLightboxTarget(imageData);
  };

  const handleModalClose = () => {
    setLightboxTarget(null);
  };

  const renderImages = () => thumbnails.map((node, index) => {
    if (!node.image) return null;

    const lightboxImage = nodes.find((n) => node.id === n.id);

    return (
      <motion.button
        className={ styles.trigger }
        key={ node.id }
        onClick={ lightboxImage?.image ? handleImageClick(lightboxImage.image) : undefined } 
        variants={ FADE.variants }
        transition={ FADE.options }
      >
        <GatsbyImage 
          className={ styles.image }
          image={ node.image }
          alt={ node.name }
        />
      </motion.button>
    );
  });

  useEffect(() => {
    if (!modalRef.current) return;

    if (lightboxTarget && !modalRef.current.isOpen) {
      modalRef.current.openModal();
    }

    if (!lightboxTarget && modalRef.current.isOpen) {
      modalRef.current.closeModal();
    }
  }, [ lightboxTarget ]);

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
            Artwork Gallery
          </Heading>
        </ParallaxLayer>

        <ParallaxLayer force={ 15 } depth={ 100 } className={ styles.gallery }>
          <motion.div
            className={ styles.carousel }
            variants={ FADE.variants }
            transition={ FADE.options }
          >
            {
              isDesktop ? renderImages() : (
                <Carousel>
                  { renderImages() }
                </Carousel>
              )
            }
          </motion.div>
        </ParallaxLayer>
      </motion.div>

      <ParallaxCard className={ styles.background }
        variants={ FADE.variants }
        initial="initial"
        animate="enter"
        exit="exit"
        transition={ FADE.options }
      >
        <StaticImage
          className={ styles.backgroundImage }
          src="./artwork.jpg"
          alt=""
        />
      </ParallaxCard>

      <Modal variant="gallery" ref={ modalRef } label="Lightbox" onClose={ handleModalClose }>
        <div className={ styles.lightbox } onClick={ handleModalClose }>
          {
            lightboxTarget && (
              <GatsbyImage 
                className={ styles.lightboxImage }
                image={ lightboxTarget }
                alt=""
              />
            )
          }
        </div>
      </Modal>
    </Container>
  );
}

export default ArtworkSection;