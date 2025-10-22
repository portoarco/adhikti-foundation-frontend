"use client";
import { Button } from "@/components/ui/button";
import {
  CircleCheckBig,
  Footprints,
  HandCoins,
  Haze,
  HeartHandshake,
  UserStar,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

function CountUp({ end, duration = 1500 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start: number;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <span>
      {end >= 1000 ? count.toLocaleString("id-ID") : count}
      {end < 100}
    </span>
  );
}

export default function Header() {
  return (
    <header className="mb-15">
      <div className="relative">
        <div className="relative -z-10 md:mt-10 h-130 md:rounded-3xl mx-auto md:w-[95vw] shadow-xl inset-shadow-2xs overflow-hidden">
          <Image
            src="/assets/hero.jpg"
            alt="hero"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-50"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-blue-900/30"
          />
        </div>
        <div
          id="header-title"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center w-full px-2 md:px-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold  text-balance text-shadow-lg/30   ">
            ADHIKTI FOUNDATION
          </h1>
          <p className="my-5 text-[13px] md:text-2xl text-slate-100">
            Bebaskan Anak dan Remaja Indonesia dari Masalah Kesehatan Jiwa
          </p>
          <div className="flex gap-4 md:gap-5 mt-10 justify-center flex-wrap">
            <Button className="rounded-lg font-medium py-6 px-6 md:px-8 bg-teal-600 hover:bg-teal-700 text-white text-base md:text-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 cursor-pointer">
              <HeartHandshake className="size-5" /> Hubungi Konselor
            </Button>
            <Button className="rounded-lg font-medium py-6 px-6 md:px-8 bg-amber-600 hover:bg-amber-700 text-white text-base md:text-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 cursor-pointer">
              <Footprints className="size-5" /> Ikut Berkarya
            </Button>
          </div>
        </div>
      </div>
      {/* Statistik  */}
      <div className="relative w-[92vw] sm:w-[85vw] md:w-[90vw] lg:w-[90vw] mx-auto -mt-18 md:-mt-16 bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl border border-slate-100">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Penerima Manfaat */}
          <li className="flex flex-col text-center">
            <p className="text-xl sm:text-3xl md:text-4xl xl:text-5xl  font-bold text-teal-600">
              <CountUp end={100} />+
            </p>
            <p className="text-[10px] sm:text-sm md:text-base text-slate-600 mt-3 sm:mt-5 flex items-center justify-center gap-2">
              <Haze className="w-4 h-4" /> Penerima Manfaat
            </p>
          </li>

          {/* Program Terlaksana */}
          <li className="flex flex-col text-center">
            <p className="text-xl sm:text-3xl md:text-4xl xl:text-5xl  font-bold text-teal-600">
              <CountUp end={10} />+
            </p>
            <p className="text-[10px] sm:text-sm md:text-base text-slate-600 mt-3 sm:mt-5 flex items-center justify-center gap-2">
              <CircleCheckBig className="w-4 h-4" /> Program Terlaksana
            </p>
          </li>

          {/* Donasi Terkumpul */}
          <li className="flex flex-col text-center">
            <p className="text-xl sm:text-3xl md:text-4xl xl:text-5xl  font-bold text-teal-600">
              <CountUp end={30000000} />
            </p>
            <p className="text-[10px] sm:text-sm md:text-base text-slate-600 mt-3 sm:mt-5 flex items-center justify-center gap-2">
              <HandCoins className="w-4 h-4" /> Donasi Terkumpul
            </p>
          </li>

          {/* Anggota Aktif */}
          <li className="flex flex-col text-center">
            <p className="text-xl sm:text-3xl md:text-4xl xl:text-5xl  font-bold text-teal-600">
              <CountUp end={10} />+
            </p>
            <p className="text-[10px] sm:text-sm md:text-base text-slate-600 mt-3 sm:mt-5 flex items-center justify-center gap-2">
              <UserStar className="w-4 h-4" /> Anggota Aktif
            </p>
          </li>
        </ul>
      </div>
    </header>
  );
}
