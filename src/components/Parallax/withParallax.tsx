import React, { ComponentType, createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { MotionValue, motionValue, useMotionValue } from 'framer-motion';
import { throttle } from 'lodash';

import { IS_BROWSER } from '@shared/constants';

type ParallaxContext = {
  x: MotionValue<number>,
  y: MotionValue<number>,
  duration: MotionValue<number>,
  screenWidth: number,
  screenHeight: number
}

const ParallaxContext = createContext<ParallaxContext>({
  x: motionValue(0),
  y: motionValue(0),
  duration: motionValue(0.5),
  screenWidth: 1440,
  screenHeight: 768
});

const OFFSET = 100;

function withParallax(WrappedComponent: ComponentType) {
  function WithParallax(props: any) {
    const parallaxInterval = useRef<ReturnType<typeof setInterval>>();
    const parallaxTimeout = useRef<ReturnType<typeof setTimeout>>();

    const [ isClient, setIsClient ] = useState(false);

    const initialWidth = isClient ? window.innerWidth : 1440;
    const [ screenWidth, setScreenWidth ] = useState(initialWidth);
  
    const initialHeight = isClient ? window.innerHeight : 768;
    const [ screenHeight, setScreenHeight ] = useState(initialHeight);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const duration = useMotionValue(0.5);

    useEffect(() => {
      setIsClient(typeof window !== 'undefined');
    }, []);

    useEffect(() => {
      if (!IS_BROWSER) return;

      const mouseMoveHandler = throttle((event: MouseEvent) => {
        x.set(Math.max(0, Math.min(screenWidth, event.x)));
        y.set(Math.max(0, Math.min(screenHeight, event.y)));
        duration.set(0.5);
      }, 50);

      document.addEventListener('mousemove', mouseMoveHandler);

      return () => {
        document.removeEventListener('mousemove', mouseMoveHandler);
      };
    }, [ screenWidth, screenHeight ]);

    useEffect(() => {
      if (!IS_BROWSER) return;
      
      duration.set(0);
      x.set(screenWidth / 2);
      y.set(screenHeight / 2);

      const leftThreshold = screenWidth / 5;
      const rightThreshold = screenWidth / 5 * 4;

      const topThreshold = screenHeight / 5;
      const bottomThreshold = screenHeight / 5 * 4;

      parallaxInterval.current = setInterval(() => {

        const currentX = x.get();
        const currentY = y.get();

        let newX = Math.random() < 0.5 ? OFFSET : -OFFSET;
        let newY = Math.random() < 0.5 ? OFFSET : -OFFSET;

        if (currentX < leftThreshold) {
          newX = OFFSET;
        }

        if (currentX > rightThreshold) {
          newX = -OFFSET;
        }

        if (currentY < topThreshold) {
          newY = OFFSET;
        }

        if (currentY > bottomThreshold) {
          newY = -OFFSET;
        }

        duration.set(5);
        x.set(currentX + newX);
        y.set(currentY + newY);
      }, 5000);

      return () => {
        if (parallaxInterval.current) {
          clearInterval(parallaxInterval.current);
        }

        if (parallaxTimeout.current) {
          clearTimeout(parallaxTimeout.current);
        }
      };
    }, [ screenWidth, screenHeight ]);

    useEffect(() => {
      if (!IS_BROWSER) return;

      const handleResize = () => {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
      };

      window.addEventListener('resize', handleResize);
      window.addEventListener('orientationchange', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleResize);
      };
    }, []);

    

    const contextValue = useMemo(() => ({
      x,
      y,
      screenWidth,
      screenHeight,
      duration
    }), [ x, y, screenWidth, screenHeight ]);

    return (
      <ParallaxContext.Provider value={ contextValue }>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */ }
        <WrappedComponent { ...props } />
      </ParallaxContext.Provider>
    );
  }

  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  WithParallax.displayName = `withParallax(${ wrappedComponentName })`;

  return WithParallax;
}

export const useParallax = () => useContext(ParallaxContext);

export default withParallax;