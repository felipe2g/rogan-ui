import React, { ReactNode } from "react";
import styled from "styled-components";
import { px2rem } from "../utils/getFontSize";

interface ICopy {
  children: ReactNode;
  fontFamily?: string;
  color?: string;
  italic?: boolean;
  fontWeight?: number;
  fontSize?: number;
  letterSpacing?: number;
  lineHeight?: number;
}

const StyledCopy = styled.p<ICopy>`
  ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily};`}
  ${({ color }) => color && `color: ${color};`}
  ${({ italic }) => italic && `font-style: italic;`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
  ${({ fontSize }) => fontSize && `font-size: ${px2rem(fontSize)};`}
  ${({ lineHeight }) => lineHeight && `line-height: ${px2rem(lineHeight)};`}
  ${({ letterSpacing }) => letterSpacing && `letter-spacing: ${px2rem(letterSpacing)};`}
`;

export const Copy = ({ children, fontFamily, color, italic, fontWeight, fontSize, letterSpacing, lineHeight }: ICopy) => (
  <StyledCopy
    fontFamily={fontFamily}
    color={color}
    italic={italic}
    fontWeight={fontWeight}
    fontSize={fontSize}
    letterSpacing={letterSpacing}
    lineHeight={lineHeight}
    data-testid="copyContent"
  >
    {children}
  </StyledCopy>
);
