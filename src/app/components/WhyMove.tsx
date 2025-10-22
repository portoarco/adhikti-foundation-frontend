import Image from "next/image";

export default function WhyMove() {
  return (
    <section className="py-10 px-5 md:px-10" id="why-move">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-teal-800 mb-2 max-xl:text-center">
        Kenapa Kami Perlu Bergerak?
      </h1>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 max-w-3xl max-xl:text-center">
        Statistik menunjukkan tantangan serius yang dihadapi anak dan remaja
        Indonesia
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Item 1: Kekerasan Seksual */}
        <div className="md:row-span-2 shadow-lg rounded-2xl overflow-hidden relative min-h-[200px] sm:min-h-[400px] md:min-h-[100%] transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-105 group">
          <Image
            src="/assets/sexabuse.jpg"
            alt="Kekerasan seksual"
            fill
            className="object-cover brightness-50 group-hover:brightness-40 transition-all duration-300"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10">
            <p className="text-white text-5xl sm:text-6xl md:text-7xl font-bold drop-shadow-lg">
              93%
            </p>
            <p className="text-white text-lg sm:text-xl md:text-2xl mt-4 drop-shadow-md font-semibold">
              Perempuan korban kekerasan seksual memilih bungkam
            </p>
          </div>
        </div>

        {/* Item 2: Kesehatan Mental */}
        <div className="shadow-lg rounded-2xl overflow-hidden relative min-h-[200px] sm:min-h-[250px] transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-105 group">
          <Image
            src="/assets/mentalissue.jpg"
            alt="Masalah kesehatan mental"
            fill
            className="object-cover brightness-50 group-hover:brightness-40 transition-all duration-300"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10">
            <p className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
              1 dari 3
            </p>
            <p className="text-white text-base sm:text-lg md:text-xl mt-4 drop-shadow-md font-semibold">
              Remaja Indonesia memiliki masalah kesehatan jiwa
            </p>
          </div>
        </div>

        {/* Item 3: Perundungan Verbal */}
        <div className="shadow-lg rounded-2xl overflow-hidden relative min-h-[200px] sm:min-h-[250px] transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-105 group">
          <Image
            src="/assets/verbalbully.jpg"
            alt="Perundungan verbal"
            fill
            className="object-cover brightness-50 group-hover:brightness-40 transition-all duration-300"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10">
            <p className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
              48%
            </p>
            <p className="text-white text-base sm:text-lg md:text-xl mt-4 drop-shadow-md font-semibold">
              Anak sekolah pernah mengalami perundungan verbal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
