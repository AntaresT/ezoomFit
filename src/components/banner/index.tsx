"use client"

import BannerBg from "@/assets/bgSvg.svg";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { ChatBtn, Container, InfoButton, Span, SubTitle, Text, Title, TitleContainer } from "./style";

export default function Banner() {
  return(
    <Container>
      <Image src={BannerBg} alt="banner" priority objectFit="cover" />
      <TitleContainer>
        <Text>
          <Title>Novas <Span>modalidades</Span> e ampliação de <Span>horários</Span>.</Title>
          <SubTitle>Aulas de 45 minutos e período de teste gratuito.</SubTitle>
          <InfoButton onClick={() => {}}>Saiba Mais</InfoButton>
        </Text>
        <ChatBtn type="button">
          <FaWhatsapp size={25} />
        </ChatBtn>
      </TitleContainer>
    </Container>
  )
}