import PlayerNews from "@/assets/playerNews.png";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Button from "../button";
import { Bottom, Container, Subtitle, TextSection, Title } from "./style";

export default function News() {
  return(
    <Container>
      <Image src={PlayerNews} alt="image-news" />
      <TextSection>
        <Title>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Title>
        <Bottom>
            <Subtitle>10 de abril</Subtitle>
            <Button>
              <FiArrowRight size={20} />
            </Button>
          </Bottom>
      </TextSection>
    </Container>
  )
}