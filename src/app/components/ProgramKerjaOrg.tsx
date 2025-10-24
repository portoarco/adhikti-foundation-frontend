"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";

const photos = [
  { id: 1, name: "proker-ilustration", picUrl: "/assets/proker/pic1.jpg" },
  { id: 2, name: "proker-ilustration", picUrl: "/assets/proker/pic2.jpg" },
  { id: 3, name: "proker-ilustration", picUrl: "/assets/proker/pic3.jpg" },
  { id: 4, name: "proker-ilustration", picUrl: "/assets/proker/pic4.jpg" },
  { id: 5, name: "proker-ilustration", picUrl: "/assets/proker/pic5.jpg" },
  { id: 6, name: "proker-ilustration", picUrl: "/assets/proker/pic6.jpg" },
  { id: 7, name: "proker-ilustration", picUrl: "/assets/proker/pic7.jpg" },
  { id: 8, name: "proker-ilustration", picUrl: "/assets/proker/pic8.jpg" },
  { id: 9, name: "proker-ilustration", picUrl: "/assets/proker/pic9.jpeg" },
  { id: 10, name: "proker-ilustration", picUrl: "/assets/proker/pic10.jpg" },
  { id: 11, name: "proker-ilustration", picUrl: "/assets/proker/pic11.jpeg" },
  { id: 12, name: "proker-ilustration", picUrl: "/assets/proker/pic12.jpeg" },
  { id: 13, name: "proker-ilustration", picUrl: "/assets/proker/pic13.jpg" },
  { id: 14, name: "proker-ilustration", picUrl: "/assets/proker/pic14.jpg" },
  { id: 15, name: "proker-ilustration", picUrl: "/assets/proker/pic15.jpg" },
  { id: 16, name: "proker-ilustration", picUrl: "/assets/proker/pic16.jpg" },
  { id: 16, name: "proker-ilustration", picUrl: "/assets/proker/pil4.jpg" },
];

export default function ProgramKerjaOrg() {
  return (
    <section id="activity">
      <div className="text-center mb-12 ">
        <h1 className="text-3xl md:text-4xl font-semibold text-teal-800">
          Program Kerja & Kegiatan
        </h1>
        <p className="text-gray-600 mt-4 text-base md:text-lg max-w-3xl mx-auto">
          Berbagai program kerja dan aksi nyata Adhikti Foundation sebagai wujud
          pengabdian konkret pada masyarakat.
        </p>
      </div>

      <section id="photo-carousel" className="relative  mx-auto">
        <div className="slider-controller absolute -bottom-20  left-1/2 -translate-x-1/2  z-10 flex justify-between px-18">
          <motion.button
            className="swiper-button-prev bg-teal-600 hover:bg-teal-700 text-white  hover:text-white shadow-md rounded-full p-3  "
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
          >
            <ArrowLeft className="text-white" />
          </motion.button>
          <motion.button
            className="swiper-button-next bg-teal-600 hover:bg-teal-700 text-white hover:text-white shadow-md rounded-full  p-3   "
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
          >
            <ArrowRight className="text-white" />
          </motion.button>
        </div>

        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={400}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 3,
            },
          }}
          className="pt-10"
        >
          {photos.map((photo, idx) => (
            <SwiperSlide
              key={idx}
              className="w-[300px] md:w-[400px] flex justify-center"
            >
              <div className="relative rounded-xl overflow-hidden w-full h-[300px] md:h-[500px]">
                <Image
                  src={photo.picUrl}
                  alt={photo.name}
                  fill
                  priority
                  className="object-cover "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
}
