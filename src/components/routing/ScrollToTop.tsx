import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls the page to the top when navigating between experiences & projects on the career page
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior,
    });
  }, [pathname]);

  return null;
}
