import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const impactStories = [
  {
    id: 1,
    judul:
      "Pendekatan Holistik dalam Pendampingan Keluarga Terkait Perceraian di Indonesia",
    downloadUrl:
      "https://drive.google.com/file/d/1RjNdzT68gZqrXT2deBQlRXMzKDL6v2EV/view?usp=sharing",
    banner: "/assets/justice.jpg",
    shortdesc:
      "Pendekatan Holistik dalam Pendampingan Keluarga Terkait Perceraian di Indonesia, menyoroti dampak perceraian pada anak dan remaja, serta memperkenalkan Program SAHABAT sebagai solusi komprehensif untuk mendukung keluarga dan masa depan anak.",
  },
  {
    id: 2,
    judul:
      "Roadmap for Action on Children Deprived of Liberty (2025–2030) Dalam Konteks Ke-Indonesiaan",
    downloadUrl:
      "https://drive.google.com/file/d/1IXaCcP3Mq6JmfTtc0OIftKP5R7RttXF7/view?usp=sharing",
    banner: "/assets/deprived.jpg",
    shortdesc:
      "Roadmap for Action on Children Deprived of Liberty (2025-2030) dalam konteks Indonesia sebagai upaya mengurangi penahanan anak dan mempromosikan alternatif berbasis komunitas, selaras dengan hukum Indonesia dan SDGs. Dokumen ini juga menyoroti peran penting masyarakat sipil.",
  },
  {
    id: 3,
    judul:
      "Program Voluntary Hub Untuk Mendampingi Anak yang berhadapan dengan Hukum dan Masalah Kesehatan Jiwa Pada Remaja",
    downloadUrl:
      "https://drive.google.com/file/d/1efevQq95Nhn6b-7CK6xmSV-04n9OEvLz/view?usp=sharing",
    banner: "/assets/community.jpg",
    shortdesc:
      "Program Voluntary Hub Adhikti Foundation mengajak masyarakat, mahasiswa, dan relawan muda untuk mendampingi Anak yang Berhadapan dengan Hukum (ABH) dan mengatasi masalah kesehatan jiwa remaja, melalui edukasi, advokasi, dan pemberdayaan sosial.",
  },
];

export default function ImpactStories() {
  return (
    <section className="relative pb-20 px-6 md:px-12" id="impact-story">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-teal-800">
          Our Articles
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mt-4">
          Berbagai Artikel yang Telah Kami Publikasikan terkait Pemberdayaan
          Mental Anak dan Remaja Indonesia
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
                    <h2 className="text-xl font-semibold text-teal-800">
                      {story.judul}
                    </h2>
                    <Link href={story.downloadUrl} target="_blank">
                      <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-2 rounded-full hover:from-teal-600 hover:to-blue-600 transition-all duration-300">
                        <Search className="text-white" size={20} />
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
