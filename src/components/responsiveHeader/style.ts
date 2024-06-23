import Link from "next/link";
import styled from "styled-components";

export const NavResponsive = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  

  @media (min-width: 640px) and (max-width: 1440px) {
    visibility: hidden;
  }
`

export const CustomLink = styled(Link)`
  color: black;
  cursor: pointer;
  font-family: "Barlow", sans-serif;
  font-size: 20px;
`

export const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Social = styled.div`
  display: flex;
  margin-top: 20px
`