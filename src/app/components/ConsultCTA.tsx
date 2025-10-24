"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";
import { CalendarCheck, Headset } from "lucide-react";
import Link from "next/link";
import ToolTipHover from "./ToolTipHover";

export default function ConsultCTABanner() {
  return (
    <section
      className="relative w-full overflow-hidden lg:rounded-3xl bg-gradient-to-br from-teal-50 via-white to-emerald-50 lg:shadow-xl py-16 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10"
      id="consultation"
    >
      {/* Background accent glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
      </div>

      {/* Left content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:w-3/5 relative z-10 text-center lg:text-left space-y-6"
      >
        <h1 className="text-4xl   xl:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
          Konsultasikan dengan Kami!
        </h1>
        <p className="text-lg xl:text-xl text-gray-700 leading-relaxed max-w-2xl  mx-auto lg:mx-0">
          Kami menyediakan layanan konsultasi profesional untuk pelayanan,
          pendampingan, dan informasi seputar kesehatan mental dengan sepenuh
          hati. Bersama, kita bisa tumbuh dan pulih.
        </p>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-7 pt-4">
          <ToolTipHover label="Sesi Belum Tersedia">
            <Button
              className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 px-8 py-6 text-lg font-semibold text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              disabled
            >
              <CalendarCheck className="size-5" /> Booking Sesi
            </Button>
          </ToolTipHover>
          <div className="flex gap-1 md:gap-2">
            <Link href=" https://wa.me/6281213113182">
              {/* a/n Bonike I Mustaqiem */}
              <Button
                variant="outline"
                className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 cursor-pointer"
              >
                <Headset className="size-5" /> CP Bonike
              </Button>
            </Link>
            <Link href=" https://wa.me/6281282586558">
              {/* a/n Reza */}
              <Button
                variant="outline"
                className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 cursor-pointer"
              >
                <Headset className="size-5" /> CP Reza
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Right image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full lg:w-2/5 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
      >
        <Image
          src="/assets/consultation.jpg"
          alt="Ilustrasi konsultasi"
          fill
          priority
          className="object-cover object-center transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </motion.div>
    </section>
  );
}
