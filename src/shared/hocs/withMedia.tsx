import React, { ComponentType, createContext, useCallback, useContext, useEffect, useState } from 'react';

type MediaContext = {
  screenWidth: number,
  isMobile: boolean,
  isTabletOrLess: boolean,
  isTabletOrBigger: boolean,
  isDesktop: boolean,
}

const MediaContext = createContext<MediaContext>({
  screenWidth: 0,
  isMobile: true,
  isTabletOrLess: true,
  isTabletOrBigger: false,
  isDesktop: false
});

function withMedia(WrappedComponent: ComponentType) {
  function WithMedia(props: any) {
    const [ width, setWidth ] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    const handleResize = useCallback(() => {
      if (typeof window === 'undefined') return;

      setWidth(window.innerWidth);
    }, []);

    useEffect(() => {
      if (typeof window === 'undefined') return;
      
      handleResize();

      window.addEventListener('resize', handleResize);
      window.addEventListener('orientationchange', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleResize);
      };
    }, []);

    const contextValue = {
      screenWidth: width,
      isMobile: width < 600,
      isTabletOrLess: width < 1024,
      isTabletOrBigger: width >= 600,
      isDesktop: width >= 1024,
    };

    return (
      <MediaContext.Provider value={ contextValue }>
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