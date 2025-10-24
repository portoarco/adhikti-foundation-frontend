"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Hospital, School, Users } from "lucide-react";
import * as motion from "motion/react-client";

const donateReasons = [
  {
    id: 1,
    icon: (
      <School className="bg-teal-500 size-14 text-white p-3 rounded-full shadow-md" />
    ),
    title: "Pengembangan Kegiatan Edukatif",
    desc: "Mendukung penyuluhan, pelatihan, dan edukasi masyarakat baik di lapangan maupun melalui media sosial untuk meningkatkan kesadaran akan kesehatan jiwa.",
  },
  {
    id: 2,
    icon: (
      <Hospital className="bg-teal-500 size-14 text-white p-3 rounded-full shadow-md" />
    ),
    title: "Pusat Layanan dan Rujukan",
    desc: "Berperan dalam pengembangan pusat layanan pengaduan dan rujukan bagi masyarakat yang membutuhkan bantuan profesional atau dukungan kesehatan jiwa.",
  },
  {
    id: 3,
    icon: (
      <Users className="bg-teal-500 size-14 text-white p-3 rounded-full shadow-md" />
    ),
    title: "Pengembangan SDM dan Kemitraan",
    desc: "Mendorong pengembangan SDM lokal dan membangun kemitraan yang berkelanjutan dengan jaringan layanan rujukan di berbagai daerah.",
  },
];

export default function WhyDonate() {
  return (
    <section className="py-20">
      <div className="text-center mb-20  space-y-4">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-900">
          Mengapa Donasimu{" "}
          <span className="text-teal-600 ">Sangat Berharga?</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-[16px] md:text-lg">
          Setiap kontribusi kamu membantu memperluas dampak positif bagi anak
          dan remaja Indonesia dalam membangun masa depan yang sehat secara
          mental dan sosial.
        </p>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
        {donateReasons.map((reason, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-gradient-to-b from-white to-teal-50/50 max-md:h-90 h-100 inset-shadow-2xs flex flex-col justify-center">
              <CardHeader className=" flex flex-col items-center gap-5 ">
                {reason.icon}
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 text-center">
                  {reason.title}
                </h2>
              </CardHeader>
              <CardContent className="">
                <p className="text-center text-gray-700 leading-relaxed text-sm lg:text-lg">
                  {reason.desc}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
