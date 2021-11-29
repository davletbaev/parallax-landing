import React, { ComponentType, createContext, useCallback, useContext, useEffect, useState } from 'react';

const ParallaxContext = createContext(0);

function withParallax(WrappedComponent: ComponentType) {
  function WithParallax(props: any) {
    const [ progress, setProgress ] = useState(0);

    useEffect(() => {
      const updateProgress = () => {
        const currentScroll = window.scrollY;
        const scrollHeight = document.body.scrollHeight;

        const scrollProgress = currentScroll / (scrollHeight - window.innerHeight);

        setProgress(Number(scrollProgress.toFixed(2)));

        requestAnimationFrame(updateProgress);
      };

      requestAnimationFrame(updateProgress);
    }, []);

    return (
      <ParallaxContext.Provider value={ progress }>
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