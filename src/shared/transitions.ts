export const FADE = {
  variants: {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  },
  options: {
    type: 'spring',
    // duration: 0.3,
    when: 'beforeChildren',
    staggerChildren: .05
  }
};

export const SLIDE_TOP_WITH_FADE = {
  variants: {
    initial: {
      y: '-25%',
      opacity: 0,
    },
    enter: {
      y: '0',
      opacity: 1,
    },
    exit: {
      y: '-25%',
      opacity: 0,
    },
  },
  options: {
    type: 'spring',
    duration: 0.3,
    staggerChildren: .05
  }
};

export const SLIDE_BOTTOM_WITH_FADE = {
  variants: {
    initial: {
      y: '25%',
      opacity: 0,
    },
    enter: {
      y: '0',
      opacity: 1,
    },
    exit: {
      y: '25%',
      opacity: 0,
    },
  },
  options: {
    type: 'spring',
    duration: 0.3,
    when: 'beforeChildren',
    staggerChildren: .1
  }
};

export const SLIDE_LEFT_WITH_FADE = {
  variants: {
    initial: {
      opacity: 0,
      x: '-150%',
    },
    enter: {
      opacity: 1,
      x: '0',
    },
    exit: {
      opacity: 0,
      x: '-150%',
    },
  },
  options: {
    type: 'spring',
    bounce: 0.15,
  }
};
