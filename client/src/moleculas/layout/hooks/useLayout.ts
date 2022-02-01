import { useRef, useState, useLayoutEffect, useCallback } from "react";
import { Layout } from "react-grid-layout";

import { useAppDispatch, updateLayout } from "@src/redux";

import { STATUSES_ASSOC } from "./constants";
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
    const pickedTask = tasks.find((task) => task._id === oldItem.i);

    if (!!pickedTask) {
      const taskUpd = {
        ...pickedTask,
        status: STATUSES_ASSOC[newItem.x],
        layout: JSON.stringify(newItem),
      };

      appDispatch(updateLayout(taskUpd));
    }
  }

  return [sizes, layoutRef, onLayoutChange];
};
