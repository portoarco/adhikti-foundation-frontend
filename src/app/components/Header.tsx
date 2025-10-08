import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="relative">
        <div className="relative -z-10 h-120">
          <Image
            src="/assets/hero.jpg"
            alt="hero"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-50"
          />
          {/* overlay*/}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-background-10"
          />
        </div>
        <div
          id="header-title"
          className="absolute top-1/2 translate-x-1/4  -translate-y-1/2  text-white"
        >
          <h1 className="text-7xl font-bold">ADHIKTI FOUNDATION</h1>
          <p className="my-5 text-xl">
            Bebaskan Anak dan Remaja Indonesia dari Masalah Kesehatan Jiwa
          </p>
          <div className="flex gap-5">
            <Button className="rounded-full p-5 bg-blue-500 hover:bg-blue-600 cursor-pointer">
              Konsultasi
            </Button>
            <Button className="rounded-full p-5 bg-blue-500 hover:bg-blue-600 cursor-pointer">
              Ikut Bergabung
            </Button>
          </div>
        </div>
      </div>
      <div className="relative w-[80vw] mx-auto -top-15 bg-white p-6 rounded-xl shadow-xl">
        <ul className="flex justify-around">
          <li className="flex flex-col text-center">
            <p className="text-5xl font-bold">100+</p>
            <p>Penerima Manfaat</p>
          </li>
          <li className="flex flex-col text-center">
            <p className="text-5xl font-bold">10+</p>
            <p>Program Terlaksana</p>
          </li>
          <li className="flex flex-col text-center">
            <p className="text-5xl font-bold">30.000.000</p>
            <p>Donasi Terkumpul</p>
          </li>
          <li className="flex flex-col text-center">
            <p className="text-5xl font-bold">10+</p>
            <p>Anggota Aktif</p>
          </li>
        </ul>
      </div>
    </header>
  );
}
