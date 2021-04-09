import React from "react";
import styled from "styled-components";
import { px2rem } from "../utils/getFontSize";

const StyledButton = styled.button<IButton>`
  background: #333;
  color: #fff;
  font-size: 20px;
  border: none;
  padding: 10px 20px;
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}px;`}
  ${({ background }) => background && `background: ${background};`}
  ${({ fontSize }) => fontSize && `font-size: ${px2rem(fontSize)};`}
  ${({ padding }) => padding && `padding: ${padding};`}
`;
interface IButton {
  text?: string;
  borderRadius?: number;
  background?: string;
  fontSize?: number;
  padding?: string;
}

export const Button = ({ text, borderRadius, background, fontSize, padding }: IButton) => (
  <StyledButton
    role="button"
    borderRadius={borderRadius}
    background={background}
    fontSize={fontSize}
    padding={padding}
    data-testid="button"
  >
    {text}
  </StyledButton>
);
