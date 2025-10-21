"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Send } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  { id: 1, desc: "Relasi dan Koneksi" },
  { id: 2, desc: "Sertifikat Volunteer" },
  { id: 3, desc: "Pengalaman Organisasi" },
  { id: 4, desc: "Sesi Seminar dan Konsultasi Ahli" },
];

export default function JoinUs() {
  return (
    <section
      id="join-us"
      className="flex flex-col lg:flex-row justify-between items-center gap-16  "
    >
      {/* LEFT: DESCRIPTION */}
      <section className="lg:w-3/4 xl:w-1/2 flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="max-md:text-center text-3xl lg:text-5xl font-bold text-slate-800 mb-5 leading-snug">
            Bergabung Bersama Kami
          </h1>
          <p className=" text-slate-600 text-lg max-sm:text-center leading-relaxed">
            Banyak anak dan remaja berjuang sendirian menghadapi tekanan,
            stigma, dan rasa takut untuk berbicara.
          </p>
          <p className="text-slate-600 text-lg max-sm:text-center leading-relaxed mt-4">
            Bersama{" "}
            <strong className="text-teal-700">Adhikti Foundation</strong>, kamu
            bisa membantu mereka menemukan ruang aman untuk tumbuh, bercerita,
            dan sembuh — menjadi pendengar, penyemangat, dan teman yang
            memahami.
          </p>
          <p className="text-slate-600 max-sm:text-center text-lg leading-relaxed mt-4">
            Bergabunglah sekarang, karena{" "}
            <strong className="text-amber-600">kepedulianmu</strong> bisa
            menyalakan harapan bagi masa depan mereka.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="max-sm:text-center text-2xl font-semibold text-slate-800 mb-4">
            Apa yang kamu dapatkan?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <motion.div
                key={b.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border border-transparent bg-gradient-to-br from-white to-slate-100 shadow-md hover:shadow-xl hover:border-amber-300 transition-all duration-300 cursor-pointer select-none">
                  <CardContent className="flex gap-3 items-center py-1 px-5">
                    <div className="p-2 bg-gradient-to-br from-teal-500 to-sky-500 rounded-full shadow-sm">
                      <Check className="size-5 text-white" />
                    </div>
                    <p className="font-medium text-slate-700">{b.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* RIGHT: FORM */}
      <motion.section
        id="form"
        className="lg:w-1/2 w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-xl border-sky-100 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-0">
            <CardTitle className="text-3xl font-bold text-slate-800">
              Be The Next Gen of{" "}
              <span className="text-teal-600">Adhitizens</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="md:p-8">
            <form className="flex flex-col gap-5">
              <div className="flex max-sm:flex-col  lg:flex-col xl:flex-row justify-between w-full gap-5">
                <div className="w-1/2 max-sm:w-full lg:w-full">
                  <label className="text-slate-700 text-sm font-medium">
                    Nama Lengkap
                  </label>
                  <Input
                    placeholder="Masukkan Nama Lengkap"
                    className="max-sm:text-sm"
                  />
                </div>
                <div className="w-1/2 max-sm:w-full lg:w-full">
                  <label className="text-slate-700 text-sm font-medium">
                    Nama Panggilan
                  </label>
                  <Input
                    placeholder="Masukkan Nama Panggilan"
                    className="max-sm:text-sm "
                  />
                </div>
              </div>

              <div className="flex max-sm:flex-col  lg:flex-col xl:flex-row justify-between w-full gap-5">
                <div className="w-1/2 max-sm:w-full lg:w-full">
                  <label className="text-slate-700 text-sm font-medium">
                    Nomor Telp/WA Aktif
                  </label>
                  <Input
                    type="number"
                    placeholder="6281239123"
                    className="max-sm:text-sm"
                  />
                </div>
                <div className="w-1/2 max-sm:w-full lg:w-full">
                  <label className="text-slate-700 text-sm font-medium">
                    Email Aktif
                  </label>
                  <Input
                    type="email"
                    placeholder="johndoe@mail.com"
                    className="max-sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                <div className="w-full">
                  <label className="text-slate-700 text-sm font-medium">
                    Asal Kota
                  </label>
                  <Input placeholder="Jakarta" className="max-sm:text-sm" />
                </div>
                <div className="w-full">
                  <label className="text-slate-700 text-sm font-medium">
                    Profesi
                  </label>
                  <Input placeholder="Mahasiswa" className="max-sm:text-sm" />
                </div>
              </div>
              <div>
                <label className="text-slate-700 text-sm font-medium">
                  Kenapa ingin bergabung?
                </label>
                <Textarea
                  placeholder="Masukkan jawaban Anda"
                  className="max-sm:text-sm"
                />
              </div>

              <Button className="bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 text-white mt-2 font-semibold shadow-md w-1/4 max-sm:w-full lg:w-full py-5 cursor-pointer">
                <Send /> Submit Data
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.section>
    </section>
  );
}
