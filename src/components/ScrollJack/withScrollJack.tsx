/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ComponentType, createContext, useContext, useState } from 'react';
import { useLocation } from '@reach/router';

type ScrollJackContextValue = {
  currentSectionIndex: number,
  currentSectionId: string,
  setCurrentSectionId: (id: string) => void,
  setCurrentSectionIndex: (index: number) => void,
  isLastSection: boolean,
  setLastSection: (isLastSection: boolean) => void,
}

const ScrollJackContext = createContext<ScrollJackContextValue>({
  currentSectionIndex: 0,
  currentSectionId: 'main',
  setCurrentSectionId: () => {},
  setCurrentSectionIndex: () => {},
  isLastSection: false,
  setLastSection: () => {}
});

function withScrollJack(WrappedComponent: ComponentType) {
  function WithScrollJack(props: any) {
    const location = useLocation();

    const [ currentSectionIndex, setCurrentSectionIndex ] = useState(0);
    const [ currentSectionId, setCurrentSectionId ] = useState(location.hash.slice(1));
    const [ isLastSection, setLastSection ] = useState(false);

    const contextValues = {
      currentSectionIndex,
      currentSectionId,
      setCurrentSectionIndex,
      setCurrentSectionId,
      isLastSection,
      setLastSection
    };

    return (
      <ScrollJackContext.Provider value={ contextValues }>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */ }
        <WrappedComponent { ...props } />
      </ScrollJackContext.Provider>
    );
  }

  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  WithScrollJack.displayName = `withScrollJack(${ wrappedComponentName })`;

  return WithScrollJack;
}

export const useScrollJack = () => useContext(ScrollJackContext);

export default withScrollJack;