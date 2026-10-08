import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    // Use generous margin and minimal threshold so sections smoothly reveal without any black voids
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -20px 0px",
      threshold: 0.02,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll(".reveal-on-scroll");

    elements.forEach((el) => observer.observe(el));

    // Instant reveal fallback for elements already in viewport on load
    const checkInitialVisibility = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 50) {
          el.classList.add("reveal-visible");
        }
      });
    };

    checkInitialVisibility();

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
}
