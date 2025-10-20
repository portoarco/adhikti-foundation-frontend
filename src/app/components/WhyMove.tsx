import Image from "next/image";

export default function WhyMove() {
  return (
    <section>
      <h1 className="text-4xl font-semibold">Kenapa Kami Bergerak?</h1>
      {/* Grid Image */}
      <div
        className="grid grid-cols-2
           grid-rows-2 gap-5 py-5"
      >
        <div className="row-span-2 shadow-md rounded-xl overflow-hidden relative h-120 transition-all duration-500 ease-in-out hover:scale-102 hover:shadow-xl  ">
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
        <div className="shadow-md rounded-xl overflow-hidden relative h-full transition-all duration-500 ease-in-out hover:scale-102 hover:shadow-xl">
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
        <div className="shadow-md rounded-xl overflow-hidden relative h-full transition-all duration-500 ease-in-out hover:scale-102 hover:shadow-xl">
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
  );
}
