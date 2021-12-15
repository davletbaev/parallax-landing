import { createContext, useContext  } from 'react';

type AnimatedSectionContext = {
  inView: boolean
}

export const AnimatedSectionContext = createContext<AnimatedSectionContext>({
  inView: false
});

export const useAnimatedSection = () => useContext(AnimatedSectionContext);