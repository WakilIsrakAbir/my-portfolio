/**
 * Central Orchestrated Motion Design System
 * 100% GPU-Accelerated (Zero Filter Blur, Zero Layout Thrashing)
 */

export const appleEase = [0.19, 1, 0.22, 1];

export const smoothSpring = {
  type: "spring",
  stiffness: 160,
  damping: 22,
  mass: 0.8,
};

// Parent Stagger Container for coordinating multiple children in a graceful cascade
export const staggerContainer = (staggerTime = 0.09, delay = 0.04) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerTime,
      delayChildren: delay,
    },
  },
});

// Section Header with Pure Hardware-Accelerated Drop-down Reveal
export const sectionHeaderMotion = {
  hidden: {
    opacity: 0,
    y: -16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: appleEase,
    },
  },
};

// "Choto theke Boro" (Scale Pop-in) with Elegant, Gentle Expansion
export const scalePop = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 16,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: appleEase,
    },
  },
};

// Sleek Entrance from Left (Graceful Glide)
export const slideFromLeft = {
  hidden: {
    opacity: 0,
    x: -22,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: appleEase,
    },
  },
};

// Sleek Entrance from Right (Graceful Glide)
export const slideFromRight = {
  hidden: {
    opacity: 0,
    x: 22,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: appleEase,
    },
  },
};

// Clean Rise from Bottom
export const slideFromBottom = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: appleEase,
    },
  },
};

// Bilateral Alternating Entrance (Even: Left, Odd: Right)
export const bilateralSlide = (index) => ({
  hidden: {
    opacity: 0,
    x: index % 2 === 0 ? -22 : 22,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      delay: (index % 2) * 0.08,
      ease: appleEase,
    },
  },
});

// Interactive Micro-Interactions (Hover & Tap)
export const cardHover = {
  y: -5,
  scale: 1.012,
  transition: {
    duration: 0.3,
    ease: appleEase,
  },
};

export const buttonHover = {
  scale: 1.04,
  y: -2,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 18,
  },
};

export const tapPress = {
  scale: 0.96,
};
