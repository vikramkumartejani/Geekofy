"use client";

import { useEffect } from "react";

export function useScrollbarVisibility(elementId: string) {
  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const showScrollbar = () => {
      if (!isScrolling) {
        isScrolling = true;
        element.classList.add("is-scrolling");
      }
      clearTimeout(scrollTimeout);
    };

    const hideScrollbar = () => {
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        element.classList.remove("is-scrolling");
      }, 100); // Adjust this value to control how quickly the scrollbar disappears
    };

    const handleScroll = () => {
      showScrollbar();
      hideScrollbar();
    };

    element.addEventListener("scroll", handleScroll);

    return () => {
      element.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [elementId]);
}
