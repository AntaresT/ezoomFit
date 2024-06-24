import styled from "styled-components";

interface ContainerProps {
  color: string;
}

export const Container = styled.div<ContainerProps>`
  img {
    border-bottom: ${props => `4px solid ${props.color}`};

    @media (min-width: 640px) and (max-width: 1366px) {
      width: 250px
    }
  }


`
export const TextSection = styled.div`

`

export const Title = styled.h5`
  font-family: "Barlow", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  padding: 40px;
  margin: 0;
  max-width: 300px;
  color: black;
  text-align: left;
`

export const Subtitle = styled.p`
  font-family: "Barlow", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: black;
  line-height: 22px;
  padding-left: 40px;
  margin: 0;
  text-align: left;
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 36px;
`