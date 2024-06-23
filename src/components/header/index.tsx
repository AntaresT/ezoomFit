"use client"

import Logo from "@/assets/logo.png";
import Image from "next/image";
import ResponsiveHeader from "../responsiveHeader";
import { NavContainer } from "./style";

export default function Header() {
  return (
    <NavContainer>
      <Image src={Logo} alt="logo" aria-label="logo" />
      <ResponsiveHeader />
    </NavContainer>
  )
}