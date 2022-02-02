import React, { FC } from "react";
import styled from "styled-components";
import GridLayout from "react-grid-layout";

import { Scrollbar } from "@src/components/scrollbar";
import { useLayout } from "./hooks/useLayout";

import { TaskCard } from "../taskcard";

import { LayoutProps } from "./interfaces";

const LayoutStyled = styled.div`
  height: calc(100vh - 80px - 72px - 32px);

  .react-grid-placeholder {
    background-color: #f1f1f2 !important;
    border-radius: 12px !important;
    opacity: 0.5 !important;
  }

  .react-graggable-gragging {
    opacity: 0.2 !important;
  }

  .react-graggable-gragging > * {
    opacity: 0.2 !important;
  }
`;

export const Layout: FC<LayoutProps> = ({ currentTasks }) => {
  const [sizes, layoutRef, onLayoutChange] = useLayout(currentTasks);

  const layout = currentTasks.map((task) => ({
    ...JSON.parse(task.layout),
    i: task._id,
  }));

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
          // onLayoutChange={onLayoutChange}
          onDragStop={onLayoutChange}
        >
          {currentTasks.map((task) => (
            <div data-grid={JSON.parse(task.layout)} key={task._id}>
              <TaskCard {...task} />
            </div>
          ))}
        </GridLayout>
      </LayoutStyled>
    </Scrollbar>
  );
};
