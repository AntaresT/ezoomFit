"use client"
import News from "../news";
import { ButtonCard, Container, ItemsContainer, SubTitle, TextContainer, Title } from "./style";

export default function Card() {

  const data = [
    {
      title: "Esporte",
      subTitle: "lorem impsum lorem lorem ipsum",
      color: "#42B073",
      oddColor: true,
    }
  ]

  return (
    <div>
      <Container bordercolor={"#42B073"} oddColor={true}>
        <TextContainer>
          <Title>Esport</Title>
          <SubTitle>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</SubTitle>
          <ButtonCard>Ver todo</ButtonCard>
        </TextContainer>
        <ItemsContainer>
          <News />
          <News />
          <News />              
        </ItemsContainer>
      </Container>
    </div>
    // <>
    //   {
    //     data.map((item, index) => {
          
    //     })
    //   }
    // </>
  )
}