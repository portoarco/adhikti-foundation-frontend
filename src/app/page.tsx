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
      <main className="">
        {/* About Us */}
        <section
          id="about-us"
          className="flex gap-x-10 items-center px-30 py-10"
        >
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
        <section className="py-10 px-30">
          <h1 className="text-4xl font-bold">Kenapa Kami Bergerak?</h1>
          {/* Grid Image */}
          <div
            className="grid grid-cols-2
           grid-rows-2 gap-5 py-5"
          >
            <div className="row-span-2 shadow-md rounded-md overflow-hidden relative h-120 transition-all duration-500 ease-in-out hover:scale-102 hover:shadow-xl  ">
              <Image
                src="/assets/sexabuse.jpg"
                alt="hero-intro"
                width={1000}
                height={1000}
                className=" w-full object-cover brightness-50"
              />
              <div className="absolute z-10  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-10 ">
                <p className="text-white text-8xl font-bold">93%</p>
                <p className="text-white text-3xl mt-5">
                  Perempuan korban kekerasan seksual memilih bungkam
                </p>
              </div>
            </div>
            <div className="shadow-md rounded-md overflow-hidden relative h-full transition-all duration-500 ease-in-out hover:scale-102 hover:shadow-xl">
              <Image
                src="/assets/mentalissue.jpg"
                alt="hero-intro"
                fill
                className="object-cover brightness-50"
              />
              <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-10">
                <p className="text-white text-5xl font-bold">1 dari 3</p>
                <p className="text-white text-xl mt-5">
                  Remaja Indonesia memiliki masalah kesehatan jiwa
                </p>
              </div>
            </div>
            <div className="shadow-md rounded-md overflow-hidden relative h-full transition-all duration-500 ease-in-out hover:scale-102 hover:shadow-xl">
              {" "}
              <Image
                src="/assets/verbalbully.jpg"
                alt="hero-intro"
                fill
                className=" object-cover brightness-50"
              />
              <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-10">
                <p className="text-white text-5xl font-bold">48%</p>
                <p className="text-white text-xl mt-5">
                  Anak sekolah pernah mengalami perundungan verbal
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Core Values */}
        <section className="py-10 bg-gradient-to-br from-blue-500 to-teal-200">
          <div className="px-30">
            <div>
              <h1 className="text-center text-5xl font-bold text-white">
                Prinsip Dasar Adhikti Foundation
              </h1>
              <p className="text-center mt-4 text-white">
                Prinsip yang mendasari setiap langkah dan pergerakan Adhikti
                Foundation{" "}
              </p>
            </div>
            <div className="flex mt-10">
              <div id="banner" className="relative w-1/4 h-100">
                <Image
                  src="/assets/corevalues.jpg"
                  alt="core-hero"
                  fill
                  className="object-cover"
                />
              </div>
              <div id="core-list">
                <p>Prinsip Dasar</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
