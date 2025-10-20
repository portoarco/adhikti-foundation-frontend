import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const impactStories = [
  {
    id: 1,
    judul: "Ini Bagian Judul Ini Bagian Judul ",
    url: "#",
    banner: "/assets/protection.jpg",
    shortdesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique odio fuga eveniet inventore expedita officia maxime magni, necessitatibus culpa!",
  },
  {
    id: 2,
    judul: "Ini Bagian Judul",
    url: "#",
    banner: "/assets/hero.jpg",
    shortdesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique odio fuga eveniet inventore expedita officia maxime magni, necessitatibus culpa!",
  },
  {
    id: 3,
    judul: "Ini Bagian Judul",
    url: "#",
    banner: "/assets/protection.jpg",
    shortdesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique odio fuga eveniet inventore expedita officia maxime magni, necessitatibus culpa!",
  },
  {
    id: 4,
    judul: "Ini Bagian Judul",
    url: "#",
    banner: "/assets/hero.jpg",
    shortdesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique odio fuga eveniet inventore expedita officia maxime magni, necessitatibus culpa!",
  },
  {
    id: 5,
    judul: "Ini Bagian Judul",
    url: "#",
    banner: "/assets/empathy.jpg",
    shortdesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique odio fuga eveniet inventore expedita officia maxime magni, necessitatibus culpa!",
  },
];

export default function ImpactStories() {
  return (
    <section className="relative">
      <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-800">
        Our Impact Stories
      </h1>
      <section className="py-10">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {impactStories.map((story, idx) => (
              <CarouselItem key={idx} className="basis-1/3 px-5">
                <Card className="p-0 shadow-none border-none">
                  <div className="relative w-full h-100 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={story.banner}
                      alt={story.judul}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">{story.judul}</h1>
                    <Link href={story.url}>
                      <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 p-2 rounded-full ">
                        <ArrowUpRight className="text-white" />
                      </div>
                    </Link>
                  </div>
                  <p className="text-[15px] max-w-md text-justify">
                    {story.shortdesc}
                  </p>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute  px-3 -top-15 right-15 ">
            <CarouselNext className="size-12 rounded-xl cursor-pointer" />
            <CarouselPrevious className="size-12 rounded-xl cursor-pointer" />
          </div>
        </Carousel>
      </section>
    </section>
  );
}
