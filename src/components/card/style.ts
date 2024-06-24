import styled from "styled-components";

interface ContainerProps {
  bordercolor: string;
  oddColor: boolean;
}

export const Container = styled.div<ContainerProps>`
  align-items: center;
  display: flex;
  border-left: ${props => `8px solid ${props.bordercolor}`};
  background: ${props => props.oddColor ? "#F7F7F7" : ""};
  gap: 20px;
  border-radius: 0px 0px 5px 5px;
  opacity: 0px;
  padding: 54px 38px;
  border-radius: 10px;
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const TextContainer = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Title = styled.h2`
  font-family: "Barlow", sans-serif;
  font-size: 80px;
  font-weight: 250;
  line-height: 120px;
  letter-spacing: -0.08em;
  text-align: left;

`

export const SubTitle = styled.p`
  font-family: "Barlow", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
  margin: 0;
`

export const ButtonCard = styled.button`
  padding: 15px 20px;
  border: 2px solid black;
  border-radius: 500px;
  background: transparent;
  color: black;
  cursor: pointer;
  text-transform: capitalize;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`

export const ItemsContainer = styled.div`
  display: flex;
  gap: 40px;
`