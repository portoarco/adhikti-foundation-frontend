import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HeartHandshake, ShieldCheck, Users, Megaphone } from "lucide-react"; // ikon lebih relevan
import Image from "next/image";

const coreValues = [
  {
    id: 1,
    icon: <HeartHandshake className="size-8 text-rose-600" />,
    iconBg: "bg-rose-100",
    name: "Empati dan Pemahaman",
    desc: "Kami memahami secara mendalam tantangan yang dihadapi anak dan remaja, serta berkomitmen hadir dengan pendekatan yang penuh empati dan kepedulian.",
  },
  {
    id: 2,
    icon: <ShieldCheck className="size-8 text-blue-600" />,
    iconBg: "bg-blue-100",
    name: "Perlindungan, Pemulihan, dan Pemberdayaan",
    desc: "Kami menjadi rujukan dalam upaya perlindungan, pemulihan, dan pemberdayaan anak dan remaja, dengan melibatkan semua pemangku kepentingan secara aktif.",
  },
  {
    id: 3,
    icon: <Users className="size-8 text-emerald-600" />,
    iconBg: "bg-emerald-100",
    name: "Keterlibatan dan Perubahan Sosial",
    desc: "Kami mendorong keterlibatan masyarakat, anak, dan remaja sebagai mitra aktif dalam mencegah risiko, menghapus stigma, serta menciptakan perubahan sosial yang positif.",
  },
  {
    id: 4,
    icon: <Megaphone className="size-8 text-amber-600" />,
    iconBg: "bg-amber-100",
    name: "Advokasi dan Edukasi Berbasis Hak Anak",
    desc: "Kami berperan sebagai pusat informasi, edukasi, dan advokasi kebijakan untuk menjamin pemenuhan hak-hak anak di segala situasi dan kondisi.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-16 px-5 md:px-20  rounded-b-2xl">
      <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-800">
        Prinsip Dasar Adhikti Foundation
      </h1>
      <p className="text-center text-gray-500 mt-4 text-base md:text-xl max-w-5xl mx-auto">
        Kami berpegang pada nilai-nilai yang menuntun langkah kami dalam
        melindungi, memulihkan, dan memberdayakan anak serta remaja menuju masa
        depan yang lebih baik.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {coreValues.map((value) => (
          <Card
            key={value.id}
            className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white rounded-2xl hover:-translate-y-1"
          >
            <CardHeader className="flex flex-col items-center gap-3 mt-5">
              <div
                className={`p-4 rounded-full ${value.iconBg} flex items-center justify-center`}
              >
                {value.icon}
              </div>
              <h2 className="text-xl font-semibold text-center text-gray-800">
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
