import React, { isValidElement, ReactElement, ReactNode, useCallback, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from '@reach/router';

import ScrollProgress from '@components/ScrollProgress';

import { IS_BROWSER } from '@shared/constants';
import { useMedia } from '@shared/hocs/withMedia';

import { useScrollJack } from './withScrollJack';

type ScrollJackWrapperProps = {
  children: ReactNode
}

const ScrollJackWrapper = ({ children }: ScrollJackWrapperProps) => {
  const sections: ReactElement[] = React.Children.toArray(children).filter(isValidElement);

  const firstMount = useRef<boolean>(true);
  const touchStart = useRef<{ clientX: number, clientY: number }>();
  const canScroll = useRef(true);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout>>();
  const lastScrollWheelTimestamp = useRef<number>(0);
  const lastScrollWheelDelta = useRef<number>(0);
  const minScrollWheelInterval = useRef<number>(200);
  const canMoveNext = useRef(true);
  const canMovePrev = useRef(false);
  const maxSections = useRef(sections.length);

  const location = useLocation();
  const { isMobile } = useMedia();
  const {
    currentSectionId,
    currentSectionIndex,
    setCurrentSectionId,
    setCurrentSectionIndex,
    setLastSection,
  } = useScrollJack();

  useEffect(() => {
    canMoveNext.current = currentSectionIndex < maxSections.current - 1;
    canMovePrev.current = currentSectionIndex > 0;

    setLastSection(currentSectionIndex === maxSections.current - 1);
    console.log(currentSectionIndex === maxSections.current);

    const nextId = sections[currentSectionIndex]?.props.id;

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
    if (!IS_BROWSER) return;

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

  useEffect(() => {
    const id = location.hash.slice(1);

    const sectionIndex = sections.findIndex((section) => section.props.id === id);

    if (sectionIndex > 0) {
      moveTo(sectionIndex);

      return;
    }

    if (!location.hash) {
      moveTo(0);
    }
  }, [ location.hash ]);

  useEffect(() => {
    window.location.hash = `${currentSectionId}`;

    if (firstMount.current) {
      firstMount.current = false;
    }
  }, [ currentSectionId ]);

  return (
    <>
      <ScrollProgress progress={ currentSectionIndex / (sections.length - 1) }/>
      <AnimatePresence exitBeforeEnter>
        {sections[currentSectionIndex]}
      </AnimatePresence>
    </>
  );
};

export default ScrollJackWrapper;