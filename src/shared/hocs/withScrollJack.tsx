/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ComponentType, createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import debounce from 'lodash/debounce';

import { MOBILE_SECTIONS, SECTIONS } from '@shared/constants';

import { useMedia } from './withMedia';

type ScrollJackContextValue = {
  currentSectionIndex: number,
  currentSectionId: string,
  moveNext: () => void,
  movePrev: () => void,
  moveTo: (nextId: number) => void
}

const ScrollJackContext = createContext<ScrollJackContextValue>({
  currentSectionIndex: 0,
  currentSectionId: 'main',
  moveNext: () => {},
  movePrev: () => {},
  moveTo: () => {}
});

function withScrollJack(WrappedComponent: ComponentType) {
  function WithScrollJack(props: any) {
    const { isMobile } = useMedia();
    const canScroll = useRef(true);
    const canMoveNext = useRef(true);
    const canMovePrev = useRef(false);
    const maxSections = useRef(isMobile ? MOBILE_SECTIONS.length : SECTIONS.length);
    const [ currentSectionIndex, setCurrentSectionIndex ] = useState(0);
    const [ currentSectionId, setCurrentSectionId ] = useState(window.location.hash.slice(1));

    useEffect(() => {
      canMoveNext.current = currentSectionIndex < maxSections.current - 1;
      canMovePrev.current = currentSectionIndex > 0;

      const sections = isMobile ? MOBILE_SECTIONS : SECTIONS;
      const nextId = sections[currentSectionIndex]?.id;

      setCurrentSectionId(nextId);
    }, [ currentSectionIndex, isMobile ]);
    
    const moveNext = useCallback(() => {
      if (!canMoveNext.current) return;

      const nextIndex = currentSectionIndex + 1;
      
      setCurrentSectionIndex(nextIndex);
    }, [ currentSectionIndex ]);

    const movePrev = useCallback(() => {
      if (!canMovePrev.current) return;

      const nextIndex = currentSectionIndex - 1;

      setCurrentSectionIndex(nextIndex);
    }, [ currentSectionIndex ]);

    const moveTo = useCallback((nextIndex: number) => {
      setCurrentSectionIndex(Math.max(0, Math.min(nextIndex, maxSections.current)));
    }, []);

    useEffect(() => {
      const handleScroll = debounce((e) => {
        if (!canScroll.current) return;

        canScroll.current = false;

        console.log('scroll');

        setTimeout(() => {
          canScroll.current = true;
        }, 200);

        if (e.deltaY >= 1) {
          moveNext();
        } else {
          movePrev();
        }
      }, 50, {
        leading: true,
        trailing: false
      });

      window.addEventListener('wheel', handleScroll);

      return () => {
        window.removeEventListener('wheel', handleScroll);
      };
    }, [ moveNext, movePrev ]);

    const getContextValues = useCallback(() => ({
      currentSectionIndex,
      currentSectionId,
      moveNext,
      movePrev,
      moveTo
    }), [ currentSectionIndex, currentSectionId, moveNext, movePrev, moveTo ]);

    return (
      <ScrollJackContext.Provider value={ getContextValues() }>
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