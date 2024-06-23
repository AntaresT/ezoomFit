"use client"
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { ButtonIcon, NavResponsive } from "./style";

export default function ResponsiveHeader() {
  const [open, setOpen] = useState<boolean>(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <NavResponsive>
      <ButtonIcon type="button" arial-label="search">
        <AiOutlineSearch size={26} />
      </ButtonIcon>
      <ButtonIcon shouldborder={"1px solid white"} type="button" aria-label="menu">
        <RxHamburgerMenu size={18} />
      </ButtonIcon>
    </NavResponsive>
  )
}