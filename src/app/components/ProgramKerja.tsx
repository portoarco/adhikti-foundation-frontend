"use client";
import * as React from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";

const photoCarousel = [
  {
    id: 1,
    name: "Photo1",
    photo: "/assets/hero.jpg",
  },
  {
    id: 2,
    name: "Photo 2",
    photo: "/assets/hero.jpg",
  },
  {
    id: 3,
    name: "Photo 3",
    photo: "/assets/hero.jpg",
  },
  {
    id: 4,
    name: "Photo 4",
    photo: "/assets/hero.jpg",
  },
  {
    id: 5,
    name: "Photo 5",
    photo: "/assets/hero.jpg",
  },
  {
    id: 6,
    name: "Photo 6",
    photo: "/assets/hero.jpg",
  },
  {
    id: 7,
    name: "Photo 7",
    photo: "/assets/hero.jpg",
  },
  {
    id: 8,
    name: "Photo 8",
    photo: "/assets/hero.jpg",
  },
];

export default function ProgramKerja() {
  //   autoplay
  const plugin = React.useRef(
    // Autoplay({ delay: 1000, stopOnInteraction: true })
    AutoScroll({
      speed: 2,
      stopOnInteraction: false,
      stopOnFocusIn: false,
    })
  );

  return (
    <section>
      <section>
        <h1 className="text-3xl md:text-4xl font-semibold  text-gray-800">
          Program Kerja dan Kegiatan
        </h1>
        <p className=" text-gray-500 mt-4 text-base md:text-xl  ">
          Berbagai program kerja dan aksi nyata Adhikti Foundation sebagai wujud
          pengabdian konkret pada masyarakat
        </p>
      </section>
      <section id="photo-carousel" className="pt-10 pb-15 relative ">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.play()}
        >
          <CarouselContent>
            {photoCarousel.map((photo, idx) => (
              <CarouselItem key={idx} className="basis-1/3">
                <Card className="p-0 overflow-hidden relative w-full ">
                  <Image
                    src={photo.photo}
                    alt={photo.name}
                    width={1000}
                    height={1000}
                    className="object-cover"
                  />
                  {/* <CardContent>{photo.name}</CardContent> */}
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 ">
            <CarouselNext className="size-10 rounded-2xl cursor-pointer" />
            <CarouselPrevious className="size-10 rounded-2xl cursor-pointer" />
          </div>
        </Carousel>
      </section>
    </section>
  );
}
