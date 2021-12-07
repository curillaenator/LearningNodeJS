import { useRef, useState, useLayoutEffect, useCallback } from "react";

import { UseLayout } from "../interfaces";

export const useLayout: UseLayout = () => {
  const layoutRef = useRef<HTMLDivElement | null>(null);

  const [sizes, setSizes] = useState({ w: 0, h: 0 });

  const widthHandler = useCallback(() => {
    setSizes({
      w: layoutRef.current?.clientWidth || 0,
      h: layoutRef.current?.clientHeight || 0,
    });
  }, []);

  useLayoutEffect(() => {
    widthHandler();

    window.addEventListener("resize", widthHandler);
    return () => window.removeEventListener("resize", widthHandler);
  }, [widthHandler]);

  return [sizes, layoutRef];
};
