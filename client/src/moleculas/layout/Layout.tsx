import React, { FC } from "react";
import styled from "styled-components";
import GridLayout from "react-grid-layout";

import { Scrollbar } from "../../components/scrollbar";
import { useLayout } from "./hooks/useLayout";

import { Task } from "./components/Task";

import { LayoutProps } from "./interfaces";
import "./styles.css";

const LayoutStyled = styled.div`
  height: calc(100vh - 80px - 72px - 32px);

  .layout {
    /* border-radius: 40px;
    overflow: hidden; */
  }
`;

export const Layout: FC<LayoutProps> = ({ currentTasks }) => {
  const [sizes, layoutRef] = useLayout();

  const layout = currentTasks.map((task) => task.layout);

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
          {currentTasks.map((task) => (
            <div data-grid={task.layout} key={task._id}>
              <Task {...task} />
            </div>
          ))}
        </GridLayout>
      </LayoutStyled>
    </Scrollbar>
  );
};
