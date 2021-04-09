import React, { createElement, ReactNode } from "react";
import styled from "styled-components";
import { px2rem } from "../utils/getFontSize";
import { device } from "../utils/mediaSizes";

interface IHeader {
  level?: number;
  children: ReactNode;
  fontFamily?: string;
  color?: string;
  italic?: boolean;
  fontWeight?: number;
  fontSize?: number;
  letterSpacing?: number;
  mobileFontSize?: number;
}

const StyledHeader = styled.span<IHeader>`
  font-weight: normal;
  ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily};`}
  ${({ color }) => color && `color: ${color};`}
  ${({ italic }) => italic && `font-style: italic;`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
  ${({ fontSize }) => fontSize && `font-size: ${px2rem(fontSize)};`}
  ${({ mobileFontSize }) => mobileFontSize && `font-size: ${px2rem(mobileFontSize)};`}
  ${({ letterSpacing }) => letterSpacing && `letter-spacing: ${px2rem(letterSpacing)};`}

  @media ${device.mobileL} {
    ${({ fontSize }) => fontSize && `font-size: ${px2rem(fontSize)};`}
  }
`;

const BaseHeader = ({ level, children }: IHeader) => {
  return createElement(
    `h${level}`,
    {
      "data-testid": "header",
    },
    children
  );
};

export const UIHeader = ({ level, children, fontFamily, color, italic, fontWeight, fontSize, mobileFontSize, letterSpacing }: IHeader) => {
  return (
    <BaseHeader level={level || 1}>
      <StyledHeader
        fontFamily={fontFamily}
        color={color}
        italic={italic}
        fontWeight={fontWeight}
        fontSize={fontSize}
        mobileFontSize={mobileFontSize}
        letterSpacing={letterSpacing}
        data-testid="headerContent"
      >
        {children}
      </StyledHeader>
    </BaseHeader>
  );
};
