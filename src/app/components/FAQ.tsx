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
    answer:
      "Anda bisa mengklik tautan berikut https://www.indorelawan.org/activity/fCWZ/kampanye-bebaskan-anak-dari-masalah-kesehatan-jiwa atau menghubungi langsung via WA ke Nomor 08811094150.",
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
  return (
    <section>
      <h1 className="text-3xl md:text-4xl font-semibold  text-gray-800 text-center">
        Frequently Ask Questions
      </h1>
      <section className="flex gap-20  justify-between w-full mt-15">
        <section id="accordion" className="w-3/4 mt-5 ">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
            defaultValue="item-1"
          >
            <div className="flex flex-col gap-3">
              {faqs.map((f, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item+${f.id}`}
                  className="border rounded-lg px-4 bg-white shadow-sm"
                >
                  <AccordionTrigger className="text-xl font-medium text-left text-gray-800 hover:text-primary transition-all">
                    {f.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-600 leading-relaxed pb-3">
                    {f.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>
          </Accordion>
        </section>
        <section id="form" className="w-1/4">
          <Card>
            <CardContent>
              <CardHeader className="p-0 mb-5">
                <CardTitle className="text-2xl text-center">
                  Ada yang ditanyakan?
                </CardTitle>
              </CardHeader>
              <form className="flex flex-col gap-5">
                <div>
                  <label>Nama Lengkap</label>
                  <Input />
                </div>
                <div>
                  <label>No Telp/WA Aktif</label>
                  <Input />
                </div>
                <div>
                  <label>Email Aktif</label>
                  <Input />
                </div>
                <div>
                  <label>Pesan Anda</label>
                  <Textarea />
                </div>
                <Button>Submit</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </section>
    </section>
  );
}
