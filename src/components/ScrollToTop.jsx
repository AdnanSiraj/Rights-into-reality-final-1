import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Jump to the top instantly, bypassing the site-wide `scroll-behavior: smooth`
// (which otherwise animates the scroll and works unreliably across browsers).
const jumpToTop = () => {
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  window.scrollTo(0, 0);
  document.body.scrollTop = 0; // older Safari
  root.scrollTop = 0;
  root.style.scrollBehavior = previous;
};

// Scrolls to the top on every navigation, including footer links and clicks
// on the link for the page you are already on. If the URL has a hash
// (e.g. /activities#cleanliness-drive), it scrolls to that section instead.
const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();

  // Stop the browser from restoring the previous scroll position itself.
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Layout effect runs before the browser paints, so the new page never
  // flashes at the old (bottom) scroll position.
  useLayoutEffect(() => {
    if (!hash) {
      jumpToTop();
      return undefined;
    }
    jumpToTop();
    const id = decodeURIComponent(hash.slice(1));
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname, hash, key]);

  return null;
};

export default ScrollToTop;
