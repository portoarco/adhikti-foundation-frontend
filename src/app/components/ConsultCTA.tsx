import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ConsultCTABanner() {
  return (
    <section className="bg-gray-300/30 h-100 p-20 flex items-center rounded-xl shadow-xl w-full gap-10">
      <section className="w-3/4 flex flex-col gap-5">
        <h1 className="text-5xl font-semibold">Konsultasikan dengan Kami!</h1>
        <h2 className="text-xl ">
          Kami menyediakan layanan konsultasi profesional untuk pelayanan,
          pendampingan, dan informasi seputar kesehatan mental dengan sepenuh
          hati
        </h2>
        <div className="flex gap-5">
          <Button>Booking Sesi</Button>
          <Button>Contact Person Konsultasi</Button>
        </div>
      </section>
      <section>
        <div className="w-100 h-70 relative  rounded-xl overflow-hidden">
          <Image
            src="/assets/empathy.jpg"
            alt="consultation"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </section>
  );
}
