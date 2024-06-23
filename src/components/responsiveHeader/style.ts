import styled from "styled-components";

export const NavResponsive = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 40px;
  

  @media (min-width: 640px) and (max-width: 1440px) {
    visibility: hidden;
  }
`

interface ButtonProps {
  shouldborder?: string;
}

export const ButtonIcon = styled.button<ButtonProps>`
  align-items: center;
  border: ${props => props.shouldborder ? props.shouldborder : 'none' };
  border-radius: 6px;
  background: none;
  color: white;
  cursor: pointer;
  display: flex;
  

  &:hover {
    color: green;
  }
`
