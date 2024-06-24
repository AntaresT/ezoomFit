"use client"
import useWindowSize from "@/hooks/useWindowSize";
import Card from "../card";
import { CardSectionContainer } from "./style";

export default function CardSection() {
  const width = useWindowSize();

  return(
    <CardSectionContainer>
      <Card />
    </CardSectionContainer>
  )
}