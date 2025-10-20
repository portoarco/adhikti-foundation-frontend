import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Users } from "lucide-react";

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
          <div className="grid grid-cols-2 gap-5 ">
            {benefits.map((b, idx) => (
              <Card key={idx} className="w-full  py-4">
                <CardContent className="flex gap-x-4 items-center">
                  {b.icon}
                  <p className="w-full font-medium">{b.desc}</p>
                </CardContent>
              </Card>
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
