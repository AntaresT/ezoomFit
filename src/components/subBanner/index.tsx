"use client"

import SubBannerImg1 from "@/assets/SubBanner1.png";
import useWindowSize from "@/hooks/useWindowSize";
import { StaticImageData } from "next/image";
import ResponsiveSubBanner from "../responsiveSubBanner";
import SubCard from "../subCard";
import { Container } from "./style";

interface ListSubBannerType {
  title: string;
  date: string;
  color: string;
  linkImage: StaticImageData;
}

export default function SubBanner() {

  const width = useWindowSize();

  const listSubBanner: ListSubBannerType[] = [
    {
      title: "Lorem Ipsum dolor Sit Amet Dolor lorem ipsum",
      date: "10 de Abril",
      color: "#42B073",
      linkImage: SubBannerImg1,
    },
    {
      title: "Lorem Ipsum dolor Sit Amet Dolor lorem ipsum",
      date: "10 de Abril",
      color: "#42B073",
      linkImage: SubBannerImg1,
    },
    {
      title: "Lorem Ipsum dolor Sit Amet Dolor lorem ipsum",
      date: "10 de Abril",
      color: "#42B073",
      linkImage: SubBannerImg1,
    },
  
  ]

  return(
    <>
    {width > 640 ? 
      <Container>
        {
          listSubBanner.map((item, index) => (
            <div key={index} style={{position: "relative"}}>
              <SubCard 
                title={item.title} 
                color={item.color} 
                linkImage={item.linkImage} 
                date={item.date} 
              />
            </div>
          ))
        }
      </Container>
      :
      <ResponsiveSubBanner /> 
    }
  </>

  )
}