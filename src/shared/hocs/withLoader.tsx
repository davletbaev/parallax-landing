import React, { ComponentType, createContext, useContext, useEffect, useState } from 'react';

type LoaderContext = {
  loading: boolean,
  setLoading: (loading: boolean) => void
}

const LoaderContext = createContext<LoaderContext>({
  loading: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLoading: () => {}
});

function withLoader(WrappedComponent: ComponentType) {
  function WithLoader(props: any) {
    const [ loading, setLoading ] = useState(true);

    const contextValues = {
      loading,
      setLoading
    };

    useEffect(() => {
      document.body.classList.toggle('body--loading', loading);
    }, [ loading ]);

    return (
      <LoaderContext.Provider value={ contextValues }>
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