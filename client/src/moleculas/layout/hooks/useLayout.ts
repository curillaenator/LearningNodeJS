import { useRef, useState, useLayoutEffect, useCallback } from "react";
import { Layout } from "react-grid-layout";

import { useAppDispatch, updateLayout } from "../../../redux";

import { UseLayout } from "../interfaces";

export const useLayout: UseLayout = (tasks) => {
  const appDispatch = useAppDispatch();

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

  function onLayoutChange(layouts: Layout[], oldItem: Layout, newItem: Layout) {
    const draggedTask = tasks.find((task) => task._id === oldItem.i);

    if (!!draggedTask) {
      const taskUpd = {
        ...draggedTask,
        layout: JSON.stringify(newItem),
      };

      appDispatch(updateLayout(taskUpd));
    }
  }

  return [sizes, layoutRef, onLayoutChange];
};
