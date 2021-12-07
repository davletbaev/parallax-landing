import React, { ComponentType, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

type SectionsContextValue = {
  currentSection: string,
  setCurrentSection: (section: string) => void
}

const SectionsContext = createContext<SectionsContextValue>({
  currentSection: 'main',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCurrentSection: () => {}
});

function withSections(WrappedComponent: ComponentType) {
  function WithSections(props: any) {
    const [ section, setSection ] = useState<string>('main');

    const setCurrentSection = useCallback((newSection: string) => setSection(newSection), []);

    const contextValues = useMemo(() => ({
      currentSection: section,
      setCurrentSection
    }), [ section ]);

    useEffect(() => {
      window.location.hash = section;
    }, [ section ]);

    useEffect(() => {
      if (section === window.location.hash) return;

      setCurrentSection(window.location.hash.slice(1));
    }, [ window.location.hash ]);

    return (
      <SectionsContext.Provider value={ contextValues }>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */ }
        <WrappedComponent { ...props } />
      </SectionsContext.Provider>
    );
  }

  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  WithSections.displayName = `withSections(${ wrappedComponentName })`;

  return WithSections;
}

export const useSections = () => useContext(SectionsContext);

export default withSections;