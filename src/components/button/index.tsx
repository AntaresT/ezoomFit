import { ReactNode } from "react";
import { ButtonIcon } from "./style";

interface ButtonProps {
  children: ReactNode;
  shouldborder?: string;
  color?: string; 
  onClick?: () => void;
  rounded?: string;
}

export default function Button({children, color, shouldborder, onClick, rounded}: ButtonProps) {
  return (
    <ButtonIcon 
      color={color} 
      shouldborder={shouldborder} 
      type="button"
      rounded={rounded}
      onClick={onClick}
    >
      {children}
    </ButtonIcon>
  )
}