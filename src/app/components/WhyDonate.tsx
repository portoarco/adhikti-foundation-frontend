import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Hospital, School, Users } from "lucide-react";

const donateReasons = [
  {
    id: 1,
    icon: (
      <School className="bg-red-500  size-12 text-white p-2 rounded-full" />
    ),
    title: "Pengembangan Kegiatan Edukatif",
    desc: "Membantu kegiatan penyuluhan, pelatihan, pendampingan masyarakat di lapangan maupun  edukasi melalui media sosial",
  },
  {
    id: 2,
    icon: (
      <Hospital className="bg-red-500  size-12 text-white p-2 rounded-full" />
    ),
    title: "Pusat Layanan dan Rujukan",
    desc: "Membantu pengembangan pusat layanan pengaduan dalam upaya pencegahan, deteksi dini maupun bantuan untuk layanan rujukan yang dibutuhkan",
  },

  {
    id: 3,
    icon: <Users className="bg-red-500  size-12 text-white p-2 rounded-full" />,
    title: "Pengembangan SDM dan Kemitraan",
    desc: "Membantu pengembangan SDM lokal dalam pencegahan, deteksi dini, dan membangun kemitraan dengan jaringan layanan rujukan secara mandiri",
  },
];

export default function WhyDonate() {
  return (
    <section>
      <h1 className="text-3xl md:text-4xl font-semibold pb-10 text-gray-800">
        Mengapa Donasimu Sangat Berharga?
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {donateReasons.map((reason, idx) => (
          <Card key={idx}>
            <CardContent>
              <CardHeader className="p-0">
                <div className="flex flex-col items-center gap-5">
                  {reason.icon}
                  <h2 className="text-2xl font-semibold">{reason.title}</h2>
                </div>
              </CardHeader>
              <p className="text-center text-base">{reason.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
