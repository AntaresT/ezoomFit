import styled from "styled-components";

interface ContainerProps {
  bordercolor: string;
}

export const Container = styled.div<ContainerProps>`
  border-top: ${props => `8px solid ${props.bordercolor}`};
  width: 384px;
  gap: 0px;
  border-radius: 0px 0px 5px 5px;
  opacity: 0px;

  .bg-image {
    object-fit: cover;
    z-index: -5;
    border-radius: 0px 0px 5px 5px;

  }

  @media (min-width: 300px) and (max-width: 640px) {
    width: 100%;
  }

  img {
    @media (min-width: 300px) and (max-width: 640px) {
      width: 100%;
    }
  }
`

export const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
`

export const Title = styled.h5`
  font-family: "Barlow", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  padding: 40px;
  margin: 0;
  max-width: 300px;
  color: white;
  text-align: left;
`

export const Subtitle = styled.p`
  font-family: "Barlow", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: white;
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