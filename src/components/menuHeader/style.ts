import Link from "next/link"
import styled from "styled-components"

export const Container = styled.nav`
  display: flex;
  gap: 40px;
`


export const CustomLink = styled(Link)`
  color: white;
  cursor: pointer;
  font-family: "Barlow", sans-serif;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    color: #42B073;
  }
`

export const LinkContainer = styled.section`
  display: flex;
  gap: 63px;
`

export const SocialMenu = styled.div`
  display: flex;
  gap: 21px;
`

interface ButtonProps {
  shouldborder?: string;
  color?: string;
}

export const ButtonIcon = styled.button<ButtonProps>`
  align-items: center;
  border: ${props => props.shouldborder === "true" ? "1px solid white" : 'none' }; 
  border-radius: 6px;
  background: none;
  color: ${props => props.color ? props.color : "white"};
  cursor: pointer;
  display: flex;
  

  &:hover {
    color: green;
  }
`