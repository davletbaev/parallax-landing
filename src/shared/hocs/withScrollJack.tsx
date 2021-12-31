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
    const prevTarget = useRef<EventTarget>();
    const scrollTimeout = useRef<ReturnType<typeof setTimeout>>();
    const lastScrollWheelTimestamp = useRef<number>(0);
    const lastScrollWheelDelta = useRef<number>(0);
    const minScrollWheelInterval = useRef<number>(200);
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

      console.log('next');

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
      const handleScroll = (e: WheelEvent) => {
        const now = Date.now();

        const rapidSuccession = now - lastScrollWheelTimestamp.current < minScrollWheelInterval.current;
        const otherDirection = (lastScrollWheelDelta.current > 0) !== (e.deltaY > 0);
        const speedDecrease = Math.abs(e.deltaY) < Math.abs(lastScrollWheelDelta.current);

        const isHuman = otherDirection || !rapidSuccession || !speedDecrease;

        if (!isHuman || !canScroll.current) return;

        canScroll.current = false;
        lastScrollWheelTimestamp.current = now;
        lastScrollWheelDelta.current = e.deltaY;

        scrollTimeout.current = setTimeout(() => {
          canScroll.current = true;
        }, 2000);

        if (e.deltaY >= 1) {
          moveNext();
        } else {
          movePrev();
        }

      };

      const handleTouchStart = (e: TouchEvent) => {
        touchStart.current = e.changedTouches[0];
      };

      const handleTouchEnd = (e: TouchEvent) => {
        if (!touchStart.current || !canScroll.current) return;

        canScroll.current = false;

        scrollTimeout.current = setTimeout(() => {
          canScroll.current = true;
        }, 2000);

        const touchEnd = e.changedTouches[0];

        const deltaY = touchStart.current.clientY - touchEnd.clientY;
        const deltaX = touchStart.current.clientX - touchEnd.clientX;

        if (Math.abs(deltaY) < Math.abs(deltaX)) return;

        if (deltaY > 30) {
          moveNext();
        } else if (deltaY < -30) {
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