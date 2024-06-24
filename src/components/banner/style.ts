import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  max-width: 1670px;
  
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    
    @media (min-width: 300px) and (max-width: 640px) {
      max-height: 670px;
    }
  }
`

export const TitleContainer = styled.div`
  align-items: end;
  display: flex;
  position: absolute;
  justify-content: space-between;
  flex-direction: row;
  font-family: "Barlow", sans-serif;
  width: 100%;
`

export const Title = styled.h2`
  font-weight: 250;
  font-size: 58px;
  max-width: 440px;

  @media (min-width: 300px) and (max-width: 640px) {
    font-size: 48px;
  }
`
export const SubTitle = styled.p`
  font-family: "Barlow", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
`

export const Text = styled.div`
  color: white;
  padding-left: 20px;
`

export const ChatBtn = styled.button`
  align-items: center;
  background-color: #42B073;
  border-radius: 25px;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  padding: 10px;
  margin-right: 20px;

  @media (min-width: 300px) and (max-width: 640px){
    padding: 5px;
  }

`

export const InfoButton = styled.button`
  padding: 15px 20px;
  border: 2px solid white;
  border-radius: 500px;
  background: transparent;
  color: white;
  cursor: pointer;
  text-transform: capitalize;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`

export const Span = styled.span`
  font-weight: 700;
`