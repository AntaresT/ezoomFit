"use client"
import News from "../news";
import { ButtonCard, CardsContainer, Container, ItemsContainer, SubTitle, TextContainer, Title } from "./style";

export default function Card() {

  const data = [
    {
      title: "Esporte",
      subTitle: "lorem impsum lorem lorem ipsum",
      color: "#42B073",
      oddColor: true,
    },
    {
      title: "Eventos",
      subTitle: "lorem impsum lorem lorem ipsum",
      color: "#9B836B",
      oddColor: true,
    }
  ]

  return (
  
    <CardsContainer>
      {
        data.map((item, index) => (
          <Container bordercolor={item.color} oddColor={true} key={index}>
            <TextContainer>
              <Title>{item.title}</Title>
              <SubTitle>{item.subTitle}</SubTitle>
              <ButtonCard>Ver todo</ButtonCard>
            </TextContainer>
            <ItemsContainer>
              <News color={item.color} />
              <News color={item.color} />
              <News color={item.color} />              
            </ItemsContainer>
          </Container>
        ))
      }
    </CardsContainer>
  )
}