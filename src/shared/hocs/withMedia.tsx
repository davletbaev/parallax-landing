import React, { ComponentType, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { IS_BROWSER } from '@shared/constants';

type MediaContext = {
  isMobile: boolean,
  isTabletOrLess: boolean,
  isTabletOrBigger: boolean,
  isDesktop: boolean,
}

const MediaContext = createContext<MediaContext>({
  isMobile: true,
  isTabletOrLess: true,
  isTabletOrBigger: false,
  isDesktop: false
});

function withMedia(WrappedComponent: ComponentType) {
  function WithMedia(props: any) {
    const [ width, setWidth ] = useState(IS_BROWSER ? window.innerWidth : 0);
    const [ isMobile, setIsMobile ] = useState(width < 600);
    const [ isTabletOrLess, setIsTabletOrLess ] = useState(width < 1024);
    const [ isTabletOrBigger, setIsTabletOrBigger ] = useState(width >= 600);
    const [ isDesktop, setIsDesktop ] = useState(width >= 1024);

    const handleResize = useCallback(() => {
      if (!IS_BROWSER) return;

      const windowWidth = window.innerWidth;

      setWidth(windowWidth);
      setIsMobile(windowWidth < 600);
      setIsTabletOrLess(windowWidth < 1024);
      setIsTabletOrBigger(windowWidth >= 600);
      setIsDesktop(windowWidth >= 1024);
    }, []);

    useEffect(() => {
      if (!IS_BROWSER) return;
      
      handleResize();

      window.addEventListener('resize', handleResize);
      window.addEventListener('orientationchange', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleResize);
      };
    }, []);

    const mediaContext = useMemo(() => ({
      isMobile,
      isTabletOrLess,
      isTabletOrBigger,
      isDesktop
    }), [ isMobile, isTabletOrLess, isTabletOrBigger, isDesktop ]);

    return (
      <MediaContext.Provider value={ mediaContext }>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */ }
        <WrappedComponent { ...props } />
      </MediaContext.Provider>
    );
  }

  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  WithMedia.displayName = `withMedia(${ wrappedComponentName })`;

  return WithMedia;
}

export const useMedia = () => useContext(MediaContext);

export default withMedia;