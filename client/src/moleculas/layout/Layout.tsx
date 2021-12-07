import React, { FC } from "react";
import styled from "styled-components";
import GridLayout from "react-grid-layout";

import { Scrollbar } from "../../components/scrollbar";
import { useLayout } from "./hooks/useLayout";

import { Task } from "./components/Task";

const LayoutStyled = styled.div`
  height: calc(100vh - 80px - 72px - 32px);

  .layout {
    /* border-radius: 40px;
    overflow: hidden; */
  }
`;

export const Layout: FC = () => {
  const [sizes, layoutRef] = useLayout();

  const tasksMock = [...Array(5)].map((_, i) => ({
    id: `task${i}`,
    taskId: "PROJ-1",
    title: `task${i}`,
    layout: {
      i: `task${i}`,
      x: 0,
      y: 0,
      w: 1,
      h: 1,
      minW: 1,
      maxW: 1,
      minH: 1,
      maxH: 1,
    },
  }));

  const layout = tasksMock.map((task) => task.layout);

  return (
    <Scrollbar maxHeight={`${sizes.h}px`} schema="dark" isVisible="scroll">
      <LayoutStyled ref={layoutRef}>
        <GridLayout
          className="layout"
          layout={layout}
          cols={3}
          rowHeight={160}
          width={sizes.w - 8}
          margin={[8, 8]}
          containerPadding={[0, 0]}
          isResizable={false}
        >
          {tasksMock.map((task) => (
            <div data-grid={task.layout} key={task.id}>
              <Task {...task} />
            </div>
          ))}
        </GridLayout>
      </LayoutStyled>
    </Scrollbar>
  );
};
