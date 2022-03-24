import React, { ComponentType, createContext, useCallback, useContext, useMemo, useState } from 'react';
import { MotionValue, motionValue, useSpring } from 'framer-motion';

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
    const progress = useSpring(0, {
      duration: 0.5
    });
    const [ loading, setLoading ] = useState(true);

    const updateLoading = useCallback((isLoading) => setLoading(isLoading), []);

    const loaderContext = useMemo(() => ({
      progress,
      loading,
      setLoading: updateLoading
    }), [ loading, updateLoading ]);

    return (
      <LoaderContext.Provider value={ loaderContext }>
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