"use client";

import AOS from "aos";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function AOSProvider() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: false,
      mirror: false,
      offset: 80
    });
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => AOS.refreshHard(), 120);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
