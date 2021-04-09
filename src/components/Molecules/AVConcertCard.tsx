import React from "react";
import { Container } from "../Atoms/Container";
import { Copy } from "../Atoms/Copy";
import { UIHeader } from "../Atoms/Header";
import { UIImage } from "../Atoms/UIImage";
import { isMobile } from "../utils/mediaSizes";

interface IAVConcertCard {
  title?: string;
  text?: string;
  image?: string;
  font?: string;
  color?: string;
}

export const AVConcertCard = ({ title, text, image, font, color }: IAVConcertCard) => (
  <Container width={isMobile() ? '85vw' : '500px'}>
    <UIHeader level={3} fontFamily={font} color={color}>{title}</UIHeader>
    <UIImage width="100%" height="initial" url={image} />
    <Copy fontFamily={font} color={color}>{text}</Copy>
  </Container>
)
