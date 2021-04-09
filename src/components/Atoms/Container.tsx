import React, { ReactNode } from "react";
import styled from "styled-components";
import { px2rem } from "../utils/getFontSize";
import { device } from "../utils/mediaSizes";

interface IContainer {
  children: ReactNode;
  padding?: number;
  paddingLeft?: number;
  paddingRight?: number;
  backgroundColor?: string;
  color?: string;
  width?: string;
  height?: string;
  boxShadow?: boolean;
  fontFamily?: string;
  center?: boolean;
  centerHorizontal?: boolean;
  centerVertical?: boolean;
  borderRadius?: number;
  border?: "small" | "medium" | "large";
  borderColor?: string;
  horizontalCenterMobile?: boolean;
  minHeight?: string;
}

const StyledContainer = styled.div<IContainer>`
  ${({ padding }) => padding && `padding: ${px2rem(padding)};`}
  ${({ paddingLeft }) => paddingLeft && `padding-left: ${px2rem(paddingLeft)};`}
  ${({ paddingRight }) => paddingRight && `padding-right: ${px2rem(paddingRight)};`}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}
  ${({ color }) => color && `color: ${color};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ boxShadow }) => boxShadow && `box-shadow: -2px 5px 15px -2px #999;`}
  ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily};`}
  ${({ center }) => center && `display: flex; justify-content: center; align-items: center;`}
  ${({ centerHorizontal }) => centerHorizontal && `display: flex; justify-content: center;`}
  ${({ centerVertical }) => centerVertical && `display: flex; align-items: center;`}
  ${({ border }) => border === "small" && `border: solid 1px;`}
  ${({ border }) => border === "medium" && `border: solid 5px;`}
  ${({ border }) => border === "large" && `border: solid 10px;`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}px;`}
  ${({ borderColor }) => borderColor && `border-color: ${borderColor};`}
  ${({ horizontalCenterMobile }) => horizontalCenterMobile && `display: flex; justify-content: center;`}
  ${({ minHeight }) => minHeight && `min-height: ${minHeight};`}
  @media ${device.tablet} {
    ${({ horizontalCenterMobile }) => horizontalCenterMobile && `display: flex; justify-content: initial;`};
  }
`;

export const Container = ({
  padding,
  paddingLeft,
  paddingRight,
  children,
  backgroundColor,
  color,
  width,
  height,
  boxShadow,
  fontFamily,
  center,
  centerHorizontal,
  centerVertical,
  borderRadius,
  border,
  borderColor,
  horizontalCenterMobile,
  minHeight
}: IContainer) => (
  <StyledContainer
    padding={padding}
    paddingLeft={paddingLeft}
    paddingRight={paddingRight}
    backgroundColor={backgroundColor}
    color={color}
    width={width}
    height={height}
    boxShadow={boxShadow}
    fontFamily={fontFamily}
    center={center}
    centerHorizontal={centerHorizontal}
    centerVertical={centerVertical}
    border={border}
    borderRadius={borderRadius}
    borderColor={borderColor}
    horizontalCenterMobile={horizontalCenterMobile}
    minHeight={minHeight}
    data-testid="container"
  >
    {children}
  </StyledContainer>
);
