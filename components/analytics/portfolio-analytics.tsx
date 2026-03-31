"use client";

import { useEffect } from "react";

type AnalyticsProps = Record<string, string>;

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: AnalyticsProps }) => void;
    gtag?: (command: string, eventName: string, params?: AnalyticsProps) => void;
    umami?: {
      track: (eventName: string, data?: AnalyticsProps) => void;
    };
  }
}

function trackEvent(name: string, props?: AnalyticsProps) {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.plausible === "function") {
    window.plausible(name, props ? { props } : undefined);
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", name, props);
  }

  if (window.umami?.track) {
    window.umami.track(name, props);
  }
}

export function PortfolioAnalytics() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const element = target?.closest<HTMLElement>("[data-analytics-event]");

      if (!element?.dataset.analyticsEvent) {
        return;
      }

      trackEvent(element.dataset.analyticsEvent, {
        label: element.dataset.analyticsLabel ?? element.textContent?.trim() ?? ""
      });
    }

    function handleCustomEvent(event: Event) {
      const customEvent = event as CustomEvent<{
        name: string;
        props?: AnalyticsProps;
      }>;

      if (!customEvent.detail?.name) {
        return;
      }

      trackEvent(customEvent.detail.name, customEvent.detail.props);
    }

    document.addEventListener("click", handleClick);
    window.addEventListener("portfolio:analytics", handleCustomEvent as EventListener);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener(
        "portfolio:analytics",
        handleCustomEvent as EventListener
      );
    };
  }, []);

  return null;
}
