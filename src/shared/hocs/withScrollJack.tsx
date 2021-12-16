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
    const touchStart = useRef<{ clientX: number, clientY: number }>();
    const canScroll = useRef(true);
    const scrollTimeout = useRef<ReturnType<typeof setTimeout>>();
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

    useEffect(() => {
      return () => {
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
      };
    }, []);
    
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

        scrollTimeout.current = setTimeout(() => {
          canScroll.current = true;
        }, 1000);

        if (e.deltaY >= 1) {
          moveNext();
        } else {
          movePrev();
        }
      }, 50, {
        leading: true,
        trailing: false
      });

      const handleTouchStart = (e: TouchEvent) => {
        touchStart.current = e.changedTouches[0];
      };

      const handleTouchEnd = (e: TouchEvent) => {
        if (!touchStart.current) return;

        const touchEnd = e.changedTouches[0];

        const deltaY = touchStart.current.clientY - touchEnd.clientY;
        const deltaX = touchStart.current.clientX - touchEnd.clientX;

        if (Math.abs(deltaY) < Math.abs(deltaX)) return;

        if (deltaY > 0) {
          moveNext();
        } else {
          movePrev();
        }
      };

      window.addEventListener('wheel', handleScroll);
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchend', handleTouchEnd);

      return () => {
        window.removeEventListener('wheel', handleScroll);
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchend', handleTouchEnd);
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