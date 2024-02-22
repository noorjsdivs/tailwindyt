"use client";

import { createContext, useEffect, useRef } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { usePathname } from "next/navigation";

function usePrevious<T>(value: T) {
  let ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

const ThemeWatcher = () => {
  let { resolvedTheme, setTheme } = useTheme();
  useEffect(() => {
    let media = window.matchMedia("(prefers-color-scheme: dark)");

    const onMediaChange = () => {
      let systemTheme = media.matches ? "dark" : "light";
      if (resolvedTheme === systemTheme) {
        setTheme("system");
      }
    };

    onMediaChange();
    media.addEventListener("change", onMediaChange);
    return () => {
      media.removeEventListener("change", onMediaChange);
    };
  }, [resolvedTheme, setTheme]);
  return null;
};

export const AppContext = createContext<{ previousPathname?: string }>({});

export const Providers = ({ children }: { children: React.ReactNode }) => {
  let pathname = usePathname();
  let previousPathname = usePrevious(pathname);
  return (
    <AppContext.Provider value={{ previousPathname }}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <ThemeWatcher />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};
