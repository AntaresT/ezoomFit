import Image, { StaticImageData } from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Button from "../button";
import { Bottom, Container, Subtitle, TextContainer, Title } from "./style";


interface SubBannerType {
  title: string;
  date: string;
  color: string;
  linkImage: StaticImageData;
}

export default function SubCard({title, date, color, linkImage}: SubBannerType) {

  return (
    <Container bordercolor={color}>
      <Image src={linkImage} alt="sub-image" priority className="bg-image" />
      <TextContainer>
        <Title>{title}</Title>
        <Bottom>
          <Subtitle>{date}</Subtitle>
          <Button>
            <FiArrowRight size={20} />
          </Button>
        </Bottom>
      </TextContainer>
    </Container>
  )
}