"use client"

import BannerBg from "@/assets/bannerBackground.png";
import Image from "next/image";
import { Container } from "./style";

export default function Banner() {
  return(
    <Container>
      <Image src={BannerBg} alt="banner" fill />
    </Container>
  )
}