"use client"
import SubBannerImg1 from "@/assets/SubBanner1.png";
import { Carousel } from 'antd';
import { StaticImageData } from "next/image";
import SubCard from "../subCard";
import { Container } from "./style";

interface ListSubBannerType {
  title: string;
  date: string;
  color: string;
  linkImage: StaticImageData;
}

export default function ResponsiveSubBanner() {

  const data: ListSubBannerType[] = [
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
    }
  ]

  return (
    <Container>
      <Carousel arrows infinite={false}>
        {
          data.map((item, index) => (
            <div key={index}>
              <SubCard 
                title={item.title} 
                color={item.color} 
                linkImage={item.linkImage} 
                date={item.date} 
              />
            </div>
          ))
        }
      </Carousel>
    </Container>
  )
}