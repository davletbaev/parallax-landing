import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import * as styles from './Carousel.module.scss';

type CarouselProps = {
  children: React.ReactNode
}

function Carousel({ children }: CarouselProps) {
  const [ emblaRef ] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps'
  });

  const renderSlides = () => React.Children.map(children, (child) => {
    return (
      <div className={ styles.slide }>
        { child }
      </div>
    );
  });

  return (
    <div className={ styles.carousel  } ref={ emblaRef }>
      <div className={ styles.container }>
        { renderSlides() }
      </div>
    </div>
  );
}

export default Carousel;