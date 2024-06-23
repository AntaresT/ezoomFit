"use client"

import Logo from "@/assets/logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import MenuHeader from "../menuHeader";
import ResponsiveHeader from "../responsiveHeader";
import { Container, NavContainer } from "./style";

export default function Header() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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