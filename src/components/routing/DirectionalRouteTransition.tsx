import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLocation } from "react-router-dom";
import { type BreakpointName, BREAKPOINTS } from "../../layout/breakpoints";

type NavItemLike = {
  to: string;
};

type DirectionalRouteTransitionProps = {
  items: readonly NavItemLike[];
  children: ReactNode;
  mobileBreakpoint?: BreakpointName;
  className?: string;
};

type TransitionContext = {
  direction: number;
  axis: "x" | "y";
};

/** Given a list of items with a to property, return the index of the item with the given pathname/ slug */
function getPageIndex(pathname: string, items: readonly NavItemLike[]) {
  const index = items.findIndex((item) => {
    if (item.to === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(item.to);
  });

  return index === -1 ? 0 : index;
}

// For some reason we aren't allowed to inline this in the motion element, so we define the variants up here.
const pageVariants = {
  initial: ({ direction, axis }: TransitionContext) => ({
    opacity: 0,
    x: axis === "x" ? (direction > 0 ? 100 : direction < 0 ? -100 : 0) : 0,
    y: axis === "y" ? (direction > 0 ? 60 : direction < 0 ? -60 : 0) : 0,
  }),
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  exit: ({ direction, axis }: TransitionContext) => ({
    opacity: 0,
    x: axis === "x" ? (direction > 0 ? -100 : direction < 0 ? 100 : 0) : 0,
    y: axis === "y" ? (direction > 0 ? -60 : direction < 0 ? 60 : 0) : 0,
  }),
};

export function DirectionalRouteTransition({
  items,
  children,
  mobileBreakpoint = "md",
  className = "h-full",
}: DirectionalRouteTransitionProps) {
  const location = useLocation();

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia(
      `(max-width: ${BREAKPOINTS[mobileBreakpoint] - 1}px)`,
    ).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: ${BREAKPOINTS[mobileBreakpoint] - 1}px)`,
    );

    function handleChange(event: MediaQueryListEvent) {
      setIsMobile(event.matches);
    }

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [mobileBreakpoint]);

  const currentIndex = getPageIndex(location.pathname, items);

  const previousIndexRef = useRef(currentIndex);
  const previousIndex = previousIndexRef.current;

  // Determine the direction that the page(s) should move
  const direction =
    currentIndex > previousIndex ? 1 : currentIndex < previousIndex ? -1 : 0;

  // Update the previous page index every time the current page index changes
  useEffect(() => {
    previousIndexRef.current = currentIndex;
  }, [currentIndex]);

  // Set the transition context. If this is considered a mobile device (<768px) transition should be on Y axis.
  const transitionContext: TransitionContext = {
    direction,
    axis: isMobile ? "y" : "x",
  };

  return (
    <AnimatePresence mode='wait' initial={false} custom={transitionContext}>
      <motion.div
        key={location.pathname}
        custom={transitionContext}
        variants={pageVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
