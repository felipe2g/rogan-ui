import React from "react";
import styled from "styled-components";

interface IUIImage {
    url?: string;
    width?: string;
    height?: string;
}

const StyledUIImage = styled.img`
    ${({ width }) => width && `width: ${width};`}
    ${({ height }) => height && `height: ${height};`}
`;

export const UIImage = ({ url, width, height }: IUIImage) => <StyledUIImage width={width} height={height} src={url} alt="image" />;