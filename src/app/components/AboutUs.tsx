"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="relative w-full overflow-hidden bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200 py-20 px-6 md:px-16 lg:px-28 shadow-lg inset-shadow-2xs "
    >
      {/* Subtle background glow for depth */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl opacity-60" />
      <div className="absolute -bottom-20 -right-20 w-[30rem] h-[30rem] bg-stone-300/30 rounded-full blur-3xl opacity-60" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-2xl md:text-5xl font-serif font-bold text-teal-800 mb-6 tracking-tight">
            Adhikti Foundation Organization
          </h1>
          <p className="text-sm md:text-xl text-stone-700 leading-relaxed text-justify">
            <span className="font-semibold text-teal-700">
              Yayasan Adhirajasa Kusuma Bakti (Adhikti Foundation)
            </span>{" "}
            lahir dari semangat sekelompok aktivis lintas isu yang peduli pada
            nasib anak dan remaja Indonesia. Dimulai sebagai gerakan diskusi
            kecil pada tahun <span className="font-medium">2020</span>, dan
            berkembang menjadi wadah nyata dalam perjuangan sosial dan edukasi
            kesehatan mental.
          </p>
          <p className="mt-5 text-sm md:text-xl text-stone-700 leading-relaxed text-justify">
            Resmi berbadan hukum sejak{" "}
            <span className="font-medium text-teal-700">30 Mei 2022</span>,
            Adhikti Foundation terus berkomitmen menjadi ruang aman untuk
            tumbuh, berbagi, dan berdaya — sebuah perjalanan monumental menuju
            Indonesia yang lebih peduli dan sehat jiwa.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 h-[250px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-stone-300"
        >
          <Image
            src="/assets/hero.jpg"
            alt="Sejarah Adhikti Foundation"
            fill
            priority
            className="object-cover object-center brightness-90 sepia-[20%] contrast-105 transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-800/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
