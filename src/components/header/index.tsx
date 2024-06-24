"use client"

import Logo from "@/assets/logo.png";
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";
import MenuHeader from "../menuHeader";
import ResponsiveHeader from "../responsiveHeader";
import { Container, NavContainer } from "./style";

export default function Header() {

  const width = useWindowSize();
 
  return (
    <NavContainer>
      <Container>
      <Image src={Logo} alt="logo" aria-label="logo" />
      {
        width > 640 ?
        <MenuHeader />
        :
        <ResponsiveHeader />
      }
      </Container>
    </NavContainer>
  )
}