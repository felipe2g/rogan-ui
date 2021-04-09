import React, { ReactNode } from "react";
import styled from "styled-components";
import { device } from "../utils/mediaSizes";

const GridContainer = styled.div<IGrid>`
  display: flex;
  ${({ wrap }) => wrap && `flex-wrap: wrap;`}
`;

const GridCol = styled.div<IGrid>`
  flex-basis: 100%;
  ${({ mobileColumns }) => mobileColumns && `flex-basis: ${getFlexBasis(mobileColumns)}%;`};
  ${({ order }) => order && `order: ${order}`};
  

  @media ${device.tablet} {
    ${({ columns }) => columns && `flex-basis: ${getFlexBasis(columns)}%;`};
    ${({ flexBasis }) => flexBasis && `flex-basis: ${flexBasis}%;`};
  }
`;

const getFlexBasis = (columns: number) => {
  return 100 / columns
}

interface IGrid {
  children: ReactNode;
  wrap?: boolean;
  columns?: number;
  mobileColumns?: number;
  order?: number;
  flexBasis?: number;
}

export const Grid = ({ children, columns, mobileColumns, wrap }: IGrid) => {
  if (!children) return null
  return (
    <GridContainer wrap={wrap} data-testid="grid">
      {React.Children.map(children, (Child, i) => {
        const order = children[i]?.props['order']
        const flexBasis = children[i]?.props['flexBasis']
        return (
          <GridCol columns={columns} mobileColumns={mobileColumns} order={order && order} flexBasis={flexBasis} data-testid="gridColumn">
            {Child}
          </GridCol>
        );
      })}
    </GridContainer>
  );
};
