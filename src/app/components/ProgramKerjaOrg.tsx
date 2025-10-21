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
  { id: 1, name: "Photo1", picUrl: "/assets/collaboration.jpg" },
  { id: 2, name: "Photo 2", picUrl: "/assets/hero.jpg" },
  { id: 3, name: "Photo 3", picUrl: "/assets/empathy.jpg" },
  { id: 4, name: "Photo 4", picUrl: "/assets/empathy.jpg" },
  { id: 5, name: "Photo 5", picUrl: "/assets/legal.jpg" },
  { id: 6, name: "Photo 6", picUrl: "/assets/verbalbully.jpg" },
  { id: 7, name: "Photo 7", picUrl: "/assets/verbalbully.jpg" },
  { id: 8, name: "Photo 8", picUrl: "/assets/sexabuse.jpg" },
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
