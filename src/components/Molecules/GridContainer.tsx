import React, { ReactNode } from "react";
import styled from "styled-components";
import { Container } from "../Atoms/Container";

interface IStyledGridContainer {
    order?: number;
    flexBasis?: number;
    font?: string;
}

interface IGridContainer extends IStyledGridContainer {
    children: ReactNode;
}

const StyledGridContainer = styled(Container) <IStyledGridContainer>`
    ${({ order }) => order && `order: ${order};`}
`;

export const GridContainer = ({ children, order, flexBasis, font }: IGridContainer) => <StyledGridContainer fontFamily={font} order={order} flexBasis={flexBasis}>{children}</StyledGridContainer>;