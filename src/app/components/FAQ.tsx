"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toastError } from "@/utils/toaster";
import { isEmailValid } from "@/utils/validator";
import { HelpCircle, Send } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const faqs = [
  {
    id: 1,
    question: "Siapa yang dapat Menjadi Relawan?",
    answer:
      "Siapa saja dapat menjadi relawan dalam kampanye ini, yang terpenting adalah mereka memiliki kepedulian dan rasa simpati serta empati pada masalah kesehatan jiwa pada anak dan remaja Indonesia.",
  },
  {
    id: 2,
    question: "Apa saja yang dilakukan Relawan?",
    answer:
      "Relawan bertugas mencari dan merekrut Sub Relawan seperti ojek online atau kelompok masyarakat, kemudian memberikan edukasi serta informasi menggunakan materi dari media KIE sebagai bahan sosialisasi. Setelah Sub Relawan bersedia bergabung, Relawan menyerahkan kode Sub Relawan serta materi KIE dalam bentuk leaflet atau brosur (cetak atau fotokopi). Seluruh data Sub Relawan dan laporan distribusi materi KIE wajib disampaikan kepada Adhikti Foundation untuk pendataan dan monitoring kegiatan.",
  },
  {
    id: 3,
    question: "Apa saja yang didapatkan relawan?",
    answer:
      "Relawan berhak menerima apresiasi berupa 2,5% dari total dana yang berhasil dikumpulkan oleh sub-relawan di bawah naungannya, memperoleh sertifikat sebagai tanda ucapan terima kasih atas dedikasi dan kontribusinya, serta berkesempatan untuk direkomendasikan dalam berbagai kegiatan Adhikti Foundation selanjutnya.",
  },
  {
    id: 4,
    question: "Bagaimana cara menjadi relawan?",
    answer: (
      <p>
        Anda bisa mengisi form yang telah kami sediakan{" "}
        <Link href="#join-us" className="font-bold underline">
          berikut
        </Link>{" "}
        atau menghubungi langsung via WA ke Nomor 08811094150.
      </p>
    ),
  },
  {
    id: 5,
    question: "Apakah ada batas usia untuk menjadi relawan?",
    answer:
      "Relawan disarankan berusia minimal 17 tahun atau sudah memiliki izin dari orang tua/wali. Tidak ada batas usia maksimal selama relawan masih mampu berpartisipasi aktif dalam kegiatan sosial dan edukatif.",
  },
  {
    id: 6,
    question: "Apakah relawan harus berasal dari latar belakang kesehatan?",
    answer:
      "Tidak. Siapa pun dari berbagai latar belakang pendidikan atau profesi dapat bergabung, selama memiliki semangat dan kepedulian terhadap isu kesehatan jiwa anak dan remaja.",
  },
];

export default function FAQ() {
  const inFullNameRef = useRef<HTMLInputElement>(null);
  const inPhoneRef = useRef<HTMLInputElement>(null);
  const inEmailRef = useRef<HTMLInputElement>(null);
  const inMessageRef = useRef<HTMLTextAreaElement>(null);

  const handleMessage = () => {
    const payload = {
      fullName: inFullNameRef.current?.value,
      phone: inPhoneRef.current?.value,
      email: inEmailRef.current?.value,
      message: inMessageRef.current?.value,
    };

    if (
      !payload.fullName ||
      !payload.phone ||
      !payload.email ||
      !payload.message
    )
      return toastError("Data tidak boleh kosong");
    if (!isEmailValid(payload.email ?? ""))
      return toastError("Email Anda Invalid");

    // cp adhikti
    const phoneTarget = "628811094150";
    const text = `Halo Admin Adhikti, saya ${payload.fullName} dengan email ${payload.email} ingin bertanya. Berikut pertanyaan saya: ${payload.message}  `;
    const waLink = `https://wa.me/${phoneTarget}?text=${encodeURIComponent(
      text
    )}`;
    if (!waLink) return alert("There is something error");
    window.open(waLink, "_blank");
    // reset
    if (inFullNameRef.current) inFullNameRef.current.value = "";
    if (inPhoneRef.current) inPhoneRef.current.value = "";
    if (inEmailRef.current) inEmailRef.current.value = "";
    if (inMessageRef.current) inMessageRef.current.value = "";
  };

  return (
    <section className="px-4 md:px-10 py-12 " id="faq">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <HelpCircle className="size-8 text-teal-600 max-sm:hidden" />
          <h1 className="text-2xl md:text-5xl font-bold text-teal-600">
            Frequently Asked Questions
          </h1>
        </div>
        <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto">
          Temukan jawaban atas pertanyaan umum tentang program relawan kami
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 w-full">
        {/* Accordion Section */}
        <div className="lg:w-2/3">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
            defaultValue="item-0"
          >
            {faqs.map((f) => (
              <AccordionItem
                key={f.id}
                value={`item-${f.id}`}
                className="border-l-2 border-teal-300 rounded-lg px-4 bg-white shadow-sm"
              >
                <AccordionTrigger className="text-left text-gray-800 font-medium text-base md:text-lg hover:text-teal-600 transition">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/3 w-full">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Ada yang ditanyakan?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Nama Lengkap
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    autoComplete="off"
                    ref={inFullNameRef}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">
                    No Telp/WA Aktif
                  </label>
                  <Input
                    autoComplete="off"
                    id="phone"
                    type="number"
                    placeholder="628123456"
                    ref={inPhoneRef}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email Aktif
                  </label>
                  <Input
                    autoComplete="off"
                    id="email"
                    type="email"
                    placeholder="johndoe@mail.com"
                    ref={inEmailRef}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Pesan Anda
                  </label>
                  <Textarea
                    autoComplete="off"
                    id="message"
                    placeholder="Masukkan Pesan Anda"
                    ref={inMessageRef}
                  />
                </div>
                <Button
                  type="button"
                  className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 w-3/4 mx-auto py-3 text-lg font-semibold text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={handleMessage}
                >
                  <Send className="mr-2 size-5" />
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
