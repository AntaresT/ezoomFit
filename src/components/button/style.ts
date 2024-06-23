import styled from "styled-components";

interface ButtonProps {
  shouldborder?: string;
  color?: string;
  rounded?: string;
}

export const ButtonIcon = styled.button<ButtonProps>`
  align-items: center;
  border: ${props => props.shouldborder === "true" ? "1px solid white" : 'none' }; 
  border-radius: ${props => props.rounded ? props.rounded : "6px"};
  background: none;
  color: ${props => props.color ? props.color : "white"};
  cursor: pointer;
  display: flex;
  

  &:hover {
    color: green;
  }
`