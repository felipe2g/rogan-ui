import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Grid } from "../Atoms/Grid";
import { UIHeader } from "../Atoms/Header";
import { GridContainer } from "../Molecules/GridContainer";
import { device } from "../utils/mediaSizes";

interface ITwoColumnLayout {
  title?: string;
  image?: string;
  mobileImage?: string;
  children: React.ReactNode;
  leftFlexBasis: number;
  rightFlexBasis: number;
  headerFontSize?: number;
  mobileHeaderFontSize?: number;
  font?: string;
  imageHeight?: string;
  mobileImageHeight?: string;
  titleColor?: string;
  titleLetterSpacing?: number;
  titleFontWeight?: number
}

const StyledImage = styled.img<{ imageHeight: any; mobileImageHeight: any }>`
  ${({ mobileImageHeight }) => mobileImageHeight && `height: ${mobileImageHeight}; width: auto;`}

  @media ${device.tablet} {
    ${({ imageHeight }) => imageHeight && `height: ${imageHeight}; width: auto;`}
  }
`

const StyledTwoColumnLayout = styled.div``;

export const TwoColumnLayout = ({
  title,
  children,
  image,
  leftFlexBasis,
  rightFlexBasis,
  headerFontSize,
  mobileHeaderFontSize,
  mobileImage,
  font,
  imageHeight,
  mobileImageHeight,
  titleColor,
  titleLetterSpacing,
  titleFontWeight
}: ITwoColumnLayout) => {
  const [renderedImage, setRenderedImage] = useState(image)
  useEffect(() => {
    if (window.innerWidth < 601) {
      setRenderedImage(mobileImage)
    } else {
      setRenderedImage(image)
    }
  }, [window])

  return (
    <StyledTwoColumnLayout>
      <Grid columns={2} wrap>
        <GridContainer flexBasis={leftFlexBasis} font={font}>
          {title && <UIHeader fontSize={headerFontSize} mobileFontSize={mobileHeaderFontSize} color={titleColor} fontFamily={font} letterSpacing={titleLetterSpacing} fontWeight={titleFontWeight}>{title}</UIHeader>}
          {image && <StyledImage src={renderedImage} imageHeight={imageHeight} mobileImageHeight={mobileImageHeight} alt="image" />}
        </GridContainer>
        <GridContainer flexBasis={rightFlexBasis} font={font}>
          {children}
        </GridContainer>
      </Grid>
    </StyledTwoColumnLayout>
  )
};
