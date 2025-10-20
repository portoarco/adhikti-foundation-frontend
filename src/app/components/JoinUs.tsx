"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Users } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    id: 1,
    icon: <Check className="size-5 text-green-600" />,
    desc: "Relasi dan Koneksi",
  },
  {
    id: 2,
    icon: <Check className="size-5 text-green-600" />,
    desc: "Sertifikat Volunteer",
  },
  {
    id: 3,
    icon: <Check className="size-5 text-green-600" />,
    desc: "Pengalaman Organisasi",
  },
  {
    id: 4,
    icon: <Check className="size-5 text-green-600" />,
    desc: " Sesi Seminar dan Konsultasi Ahli",
  },
];

export default function JoinUs() {
  return (
    <section className="flex justify-between w-full items-center">
      <section id="desc" className="w-1/2 flex flex-col gap-10">
        <div>
          <h1 className="text-5xl  font-semibold  text-gray-800  mb-5">
            Bergabung Bersama Kami
          </h1>
          <p className=" text-[17px]">
            Banyak anak dan remaja berjuang sendirian menghadapi tekanan,
            stigma, dan rasa takut untuk berbicara.
          </p>
          <p className="mt-5 text-[17px]">
            Bersama Adhikti Foundation, kamu bisa membantu mereka menemukan
            ruang aman untuk tumbuh, bercerita, dan sembuh menjadi pendengar,
            penyemangat, dan teman yang memahami.
          </p>
          <p className="mt-5 text-[17px]">
            Bergabunglah sekarang, karena kepedulianmu bisa menyalakan harapan
            bagi masa depan mereka.
          </p>
        </div>
        <div id="benefits">
          <h1 className="text-3xl  font-medium  text-gray-800  mb-5">
            Apa yang kamu dapatkan?
          </h1>
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((b, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="py-4 bg-white/70 border-teal-100 shadow-md hover:shadow-lg transition-all">
                  <CardContent className="flex gap-3 items-center">
                    <div className="p-2 bg-teal-100 rounded-full">
                      <Check className="size-5 text-teal-600" />
                    </div>
                    <p className="font-medium text-gray-700">{b.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="form">
        <Card>
          <CardContent className="px-10 py-5">
            <CardHeader className="p-0">
              <CardTitle className="text-3xl text-center mb-10 ">
                Be The Next Gen of Adhitizens
              </CardTitle>
            </CardHeader>
            <form className="flex flex-col gap-5 ">
              <div>
                <label>Nama Lengkap</label>
                <Input placeholder="Masukkan Nama Lengkap" />
              </div>
              <div>
                <label>Nomor Telp/WA Aktif</label>
                <Input type="number" placeholder="6281239123" />
              </div>
              <div>
                <label>Email Aktif</label>
                <Input type="email" placeholder="johndoe@mail.com" />
              </div>
              <div className="flex gap-5">
                <div className="w-1/2">
                  <label>Asal Kota</label>
                  <Input placeholder="Jakarta" />
                </div>
                <div className="w-1/2">
                  <label>Profesi</label>
                  <Input placeholder="Mahasiswa" />
                </div>
              </div>
              <Button type="submit">Submit Data</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </section>
  );
}
