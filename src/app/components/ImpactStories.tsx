import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUpRight, MoveDiagonal, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const impactStories = [
  {
    id: 1,
    judul: "Ini Bagian Judul Ini Bagian Judul",
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
    <section className="relative pb-20 px-6 md:px-12" id="impact-story">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-teal-800">
          Our Impact Stories
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mt-4">
          Kisah nyata dari anak dan remaja yang telah mendapat dukungan dari
          Adhikti Foundation
        </p>
      </div>

      {/* Carousel */}
      <section className="relative">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {impactStories.map((story, idx) => (
              <CarouselItem
                key={idx}
                className="px-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="p-6 bg-white rounded-xl border-none shadow-none">
                  {/* Image */}
                  <div className="relative w-full h-72 rounded-lg overflow-hidden">
                    <Image
                      src={story.banner}
                      alt={story.judul}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Title & button */}
                  <div className="flex items-center justify-between mt-5">
                    <h2 className="text-2xl font-semibold text-teal-800">
                      {story.judul}
                    </h2>
                    <Link href={story.url}>
                      <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-2 rounded-full hover:from-teal-600 hover:to-blue-600 transition-all duration-300">
                        <MoveDiagonal className="text-white" size={20} />
                      </div>
                    </Link>
                  </div>

                  {/* Description */}
                  <p className="text-base text-gray-700 mt-3 text-justify leading-relaxed">
                    {story.shortdesc}
                  </p>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel controls */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-4">
            <CarouselPrevious className="size-10 rounded-full bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300" />
            <CarouselNext className="size-10 rounded-full bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300" />
          </div>
        </Carousel>
      </section>
    </section>
  );
}
