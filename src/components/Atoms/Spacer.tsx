import React from "react";
import styled from "styled-components";

interface ISpacer {
  height: number;
}

const StyledSpacer = styled.div<ISpacer>`
  ${({ height }) => height && `margin-bottom: ${height}px;`}
`;

export const Spacer = ({ height }: ISpacer) => <StyledSpacer height={height} data-testid="spacer" />;
