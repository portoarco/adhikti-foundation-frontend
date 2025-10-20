import { Button } from "@/components/ui/button";

export default function BannerCTA() {
  return (
    <section className="bg-blue-500/30 h-100 p-10 flex flex-col gap-15 justify-center">
      <div>
        <h1 className="text-center text-5xl font-semibold">
          Mari Ambil Langkah Nyata, Kolaborasi Bersama
        </h1>
        <p className="text-center mt-3 text-xl">
          Wujudkan kesehatan mental yang sehat bagi generasi penerus Indonesia
        </p>
      </div>
      <div className="flex justify-center gap-5">
        <Button>Mulai Berdonasi</Button>
        <Button>Bergabung Bersama Kami</Button>
      </div>
    </section>
  );
}
