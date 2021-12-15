import React, { ComponentType, createContext, useCallback, useContext, useMemo, useState } from 'react';

type SectionsContextValue = {
  currentSection: number,
  setCurrentSection: (section: number) => void
}

const SectionsContext = createContext<SectionsContextValue>({
  currentSection: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCurrentSection: () => {}
});

function withSections(WrappedComponent: ComponentType) {
  function WithSections(props: any) {
    const [ section, setSection ] = useState<number>(0);

    const setCurrentSection = useCallback((newSection: number) => setSection(newSection), []);

    const contextValues = useMemo(() => ({
      currentSection: section,
      setCurrentSection
    }), [ section ]);

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