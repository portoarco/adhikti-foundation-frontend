import Image from "next/image";
import DesktopNavbar from "./components/DesktopNavbar";
import Header from "./components/Header";
import MobileNavbar from "./components/MobileNavbar";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <DesktopNavbar className="max-sm:hidden" />
      <MobileNavbar className="sm:hidden" />
      {/* Header and Summary Card */}
      <Header />
      {/*  */}
      <main className="px-30">
        {/* About Us */}
        <section id="about-us" className="flex gap-x-10 items-center py-10">
          <div id="intro">
            <h1 className="text-4xl font-bold">
              Adhikti Foundation Organization
            </h1>
            <p className="text-lg mt-5">
              <strong>Yayasan Adhirajasa Kusuma Bakti</strong> atau Adhikti
              Foundation adalah organisasi yang didirikan oleh orang-orang yang
              Peduli pada Nasib Anak dan Remaja di Indonesia. Adhikti Foundation
              bermula sebagai kelompok diskusi aktivis lintas isu yang dilakukan
              sejak tahun 2020. Adhikti Foundation resmi berbadan hukum pada 30
              Mei 2022
            </p>
          </div>
          <div className="relative w-500 h-100  overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/assets/hero.jpg"
              alt="hero-intro"
              fill
              className="object-cover"
            />
          </div>
        </section>
        {/* Why Move? */}
        <section className="py-10">
          <h1 className="text-4xl font-bold">Kenapa Kami Bergerak?</h1>
          {/* Grid Image */}
          <div
            className="grid grid-cols-2
           grid-rows-2 gap-5 py-5"
          >
            <div className="row-span-2 shadow-md rounded-md overflow-hidden relative">
              <Image
                src="/assets/hero.jpg"
                alt="hero-intro"
                width={1000}
                height={1000}
                className="h-full w-full object-cover brightness-60"
              />
              <div className="absolute z-10  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-10">
                <p className="text-white text-8xl font-bold">93%</p>
                <p className="text-white text-3xl">
                  Perempuan korban kekerasan seksual memilih bungkam
                </p>
              </div>
            </div>
            <div className="shadow-md rounded-md overflow-hidden relative">
              <Image
                src="/assets/dummy.jpg"
                alt="hero-intro"
                width={1000}
                height={1000}
                className="h-70 w-full object-cover brightness-60"
              />
              <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-10">
                <p>1 dari 3</p>
                <p>Remaja Indonesia memiliki masalah kesehatan jiwa</p>
              </div>
            </div>
            <div className="shadow-md rounded-md overflow-hidden relative">
              {" "}
              <Image
                src="/assets/hero.jpg"
                alt="hero-intro"
                width={1000}
                height={1000}
                className="h-70 w-full object-cover brightness-60"
              />
              <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-10">
                <p>48%</p>
                <p>Anak sekolah pernah mengalami perundungan verbal</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
