import React, { FC } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

export const Layout: FC = () => {
  return (
    <ResponsiveGridLayout
      className="layout"
      // layouts={layouts}
      breakpoints={{ lg: 1200, md: 996 }}
      cols={{ lg: 6, md: 3 }}
    >
      <div key="1">1</div>
      <div key="2">2</div>
      <div key="3">3</div>
    </ResponsiveGridLayout>
  );
};
