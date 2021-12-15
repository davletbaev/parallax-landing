import React, { ComponentType, createContext, useCallback, useContext, useEffect, useState } from 'react';
import { MotionValue, motionValue, useMotionValue } from 'framer-motion';

type LoaderContext = {
  loading: boolean,
  setLoading: (loading: boolean) => void,
  progress: MotionValue<number>,
}

const LoaderContext = createContext<LoaderContext>({
  loading: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLoading: () => {},
  progress: motionValue(0)
});

function withLoader(WrappedComponent: ComponentType) {
  function WithLoader(props: any) {
    const progress = useMotionValue(0);
    const [ loading, setLoading ] = useState(true);

    const updateLoading = useCallback((isLoading) => setLoading(isLoading), []);

    useEffect(() => {
      document.body.classList.toggle('body--loading', loading);
    }, [ loading ]);

    const getLoaderContext = useCallback(() => ({
      progress,
      loading,
      setLoading: updateLoading
    }), [ loading ]);

    return (
      <LoaderContext.Provider value={ getLoaderContext() }>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */ }
        <WrappedComponent { ...props } />
      </LoaderContext.Provider>
    );
  }

  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  WithLoader.displayName = `withLoader(${ wrappedComponentName })`;

  return WithLoader;
}

export const useLoader = () => useContext(LoaderContext);

export default withLoader;