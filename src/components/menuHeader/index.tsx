import { AiOutlineSearch } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaMicrophone, FaTiktok, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import Button from "../button";
import { Container, CustomLink, LinkContainer, SocialMenu } from "./style";

export default function MenuHeader() {
  return(
    <Container>
      <LinkContainer>
        <CustomLink href="/">Menu 1</CustomLink>
        <CustomLink href="/">Menu 2</CustomLink>
        <CustomLink href="/">Menu 3</CustomLink>
      </LinkContainer>
      <Button color="#42B073" aria-label="search">
        <AiOutlineSearch size={20} />
      </Button>
      <SocialMenu>
        <Button aria-label="Facebook" color="white">
          <FaFacebook size={20} />
        </Button>
        <Button aria-label="Instagram" color="white">
          <IoLogoInstagram size={20} />
        </Button>
        <Button aria-label="Youtube" color="white">
          <FaYoutube size={20} />
        </Button>
        <Button aria-label="Tiktok" color="white">
          <FaTiktok size={20} />
        </Button>
        <Button aria-label="Microphone" color="white">
          <FaMicrophone size={20} />
        </Button>
        <Button aria-label="Linkedin" color="white">
          <FaLinkedin size={20} />
        </Button>
      </SocialMenu>
    </Container>
  )
}