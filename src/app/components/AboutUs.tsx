import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="flex gap-x-10 items-center px-30 py-10">
      <div id="intro">
        <h1 className="text-4xl font-semibold">
          Adhikti Foundation Organization
        </h1>
        <p className="text-lg mt-5">
          <strong>Yayasan Adhirajasa Kusuma Bakti</strong> atau Adhikti
          Foundation adalah organisasi yang didirikan oleh orang-orang yang
          Peduli pada Nasib Anak dan Remaja di Indonesia. Adhikti Foundation
          bermula sebagai kelompok diskusi aktivis lintas isu yang dilakukan
          sejak tahun 2020. Adhikti Foundation resmi berbadan hukum pada 30 Mei
          2022
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
  );
}
