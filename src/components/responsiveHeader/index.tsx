"use client"
import { Drawer } from "antd";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaMicrophone, FaTiktok, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../button";
import { CustomLink, DrawerContainer, NavResponsive, Social } from "./style";

export default function ResponsiveHeader() {
  const [open, setOpen] = useState<boolean>(false);

  const showDrawer = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NavResponsive>
        <Button aria-label="search">
          <AiOutlineSearch size={26} />
        </Button>
        <Button onClick={showDrawer} shouldborder="true" aria-label="menu">
          <RxHamburgerMenu size={18} />
        </Button>
      </NavResponsive>
      <Drawer onClose={onClose} open={open}>
        <DrawerContainer>
          <CustomLink href="/">Menu 1</CustomLink>
          <CustomLink href="/">Menu 2</CustomLink>
          <CustomLink href="/">Menu 3</CustomLink>
          <Social>
            <Button color="black">
              <FaFacebook size={24} />
            </Button>
            <Button color="black">
              <IoLogoInstagram size={24} />
            </Button>
            <Button color="black">
              <FaYoutube size={24} />
            </Button>
            <Button color="black">
              <FaTiktok size={24} />
            </Button>
            <Button color="black">
              <FaMicrophone size={24} />
            </Button>
            <Button color="black">
              <FaLinkedin size={24} />
            </Button>
          </Social>
        </DrawerContainer>
      </Drawer>
    </>
  )
}