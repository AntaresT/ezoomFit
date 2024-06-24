"use client"
import useWindowSize from "@/hooks/useWindowSize";
import Card from "../card";

export default function CardSection() {
  const width = useWindowSize();

  return(
    <div>
      <Card />
    </div>
  )
}