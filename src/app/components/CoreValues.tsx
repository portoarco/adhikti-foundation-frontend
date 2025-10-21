import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HeartHandshake, ShieldCheck, Users, Megaphone } from "lucide-react";

const coreValues = [
  {
    id: 1,
    icon: <HeartHandshake className="size-8 text-white" />,
    iconBg: "bg-teal-500",
    name: "Empati dan Pemahaman",
    desc: "Kami memahami secara mendalam tantangan yang dihadapi anak dan remaja, serta berkomitmen hadir dengan pendekatan yang penuh empati dan kepedulian.",
  },
  {
    id: 2,
    icon: <ShieldCheck className="size-8 text-white" />,
    iconBg: "bg-blue-500",
    name: "Perlindungan, Pemulihan, dan Pemberdayaan",
    desc: "Kami menjadi rujukan dalam upaya perlindungan, pemulihan, dan pemberdayaan anak dan remaja, dengan melibatkan semua pemangku kepentingan secara aktif.",
  },
  {
    id: 3,
    icon: <Users className="size-8 text-white" />,
    iconBg: "bg-amber-500",
    name: "Keterlibatan dan Perubahan Sosial",
    desc: "Kami mendorong keterlibatan masyarakat, anak, dan remaja sebagai mitra aktif dalam mencegah risiko, menghapus stigma, serta menciptakan perubahan sosial yang positif.",
  },
  {
    id: 4,
    icon: <Megaphone className="size-8 text-white" />,
    iconBg: "bg-teal-600",
    name: "Advokasi dan Edukasi Berbasis Hak Anak",
    desc: "Kami berperan sebagai pusat informasi, edukasi, dan advokasi kebijakan untuk menjamin pemenuhan hak-hak anak di segala situasi dan kondisi.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-16 px-5 md:px-20  rounded-b-3xl">
      <h1 className="text-2xl md:text-4xl font-semibold text-center text-teal-800">
        Prinsip Dasar Adhikti Foundation
      </h1>
      <p className="text-center text-gray-600 mt-4 text-sm md:text-lg max-w-5xl mx-auto leading-relaxed">
        Kami berpegang pada nilai-nilai yang menuntun langkah kami dalam
        melindungi, memulihkan, dan memberdayakan anak serta remaja menuju masa
        depan yang lebih baik.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
        {coreValues.map((value) => (
          <Card
            key={value.id}
            className="border-none inset-shadow-2xs shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl hover:-translate-y-2 hover:scale-105 group cursor-pointer"
          >
            <CardHeader className="flex flex-col items-center gap-4 lg:mt-6">
              <div
                className={`p-4 rounded-full ${value.iconBg} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
              >
                {value.icon}
              </div>
              <h2 className="text-[18px] lg:text-xl font-semibold text-center text-gray-800 group-hover:text-teal-700 transition-colors mt-3">
                {value.name}
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center leading-relaxed text-sm md:text-base">
                {value.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
