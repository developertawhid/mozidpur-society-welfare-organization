"use client";

import Image1 from "@/assets/slider/image-1.jpg";
import Image2 from "@/assets/slider/image-2.jpg";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const imagesArray = [
  {
    id: 1,
    src: Image1,
  },
  {
    id: 2,
    src: Image2,
  },
  {
    id: 3,
    src: Image1,
  },
  {
    id: 4,
    src: Image2,
  },
];

export default function Slider() {
  return (
    <div className="container px-16 py-8">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {imagesArray.map((item) => (
            <CarouselItem key={item.id}>
              <div className="p-1">
                <Card className="p-2 md:p-5">
                  <CardHeader>
                    <h2 className="text-4xl">1 dey tournament 2025</h2>
                  </CardHeader>
                  <CardContent className="p-0 m-0 flex min-h-32 max-h-[2500] overflow-hidden md:max-h-[600] md:min-h-96 items-center justify-center rounded-xl">
                    <Image
                      className="rounded-xl object-cover"
                      alt="slider-image"
                      src={item.src}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
