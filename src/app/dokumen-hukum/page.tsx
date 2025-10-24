import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Search } from "lucide-react";
import Link from "next/link";

const dataLegal = [
  {
    id: 1,
    name: "Akta Pendirian",
    viewUrl:
      "https://drive.google.com/file/d/1bGsGopXv7g1rcCbTRH6kCGjMf2Y6OCVa/view?usp=sharing",
    downloadUrl: "",
  },
  {
    id: 2,
    name: "Izin Kegiatan Yayasan Sosial",
    viewUrl:
      "https://drive.google.com/file/d/1yO5u_7IKavGmaa3yIwEVk2Gk3We2O12t/view?usp=sharing",
    downloadUrl: "",
  },
  {
    id: 3,
    name: "Nomor Induk Berusaha",
    viewUrl:
      "https://drive.google.com/file/d/125ty4RB_-4lyGKTEbSF-BIl8YXF46MhU/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/uc?export=download&id=125ty4RB_-4lyGKTEbSF-BIl8YXF46MhU",
  },
  {
    id: 4,
    name: "NPWP Organisasi",
    viewUrl:
      "https://drive.google.com/file/d/169cZ9TW_PqlH6cW5bGllXpOzTq6yA9bL/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/uc?export=download&id=169cZ9TW_PqlH6cW5bGllXpOzTq6yA9bL",
  },
  {
    id: 5,
    name: "Profil Organisasi",
    viewUrl:
      "https://drive.google.com/file/d/1BGlADQuOQR32kdFudHbThO5SS866xr0q/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/uc?export=download&id=1BGlADQuOQR32kdFudHbThO5SS866xr0q",
  },
  {
    id: 6,
    name: "SK Kemenkumham",
    viewUrl:
      "https://drive.google.com/file/d/1C_5hxd3V7ZuEvlCuiKsc6z8QX84LeiU2/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/uc?export=download&id=1C_5hxd3V7ZuEvlCuiKsc6z8QX84LeiU2",
  },
  {
    id: 7,
    name: "Tanda Daftar",
    viewUrl:
      "https://drive.google.com/file/d/1NAGhugeTvY_iSb5oUafnn36afy_b2aNS/view?usp=sharing",
    downloadUrl:
      "https://drive.google.com/uc?export=download&id=1NAGhugeTvY_iSb5oUafnn36afy_b2aNS",
  },
];

export default function DokumenHukumPage() {
  return (
    <section className="px-5 py-10 xl:px-30 xl:pt-10 xl:pb-80">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-semibold text-teal-800 ">
          Dokumen Hukum Adhikti Foundation
        </h1>
        <p className="text-gray-600 mt-4 text-xs md:text-lg max-w-4xl mx-auto">
          Anda dapat mengakses berbagai dokumen hukum dan kebijakan privasi
          sebagai komitmen hukum organisasi yang legal di Indonesia
        </p>
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {dataLegal.map((legal, idx) => (
          <Card key={legal.id} className="p-2 ">
            <CardContent className="flex p-2 justify-between items-center">
              <section id="title">
                <p className="font-medium"> {legal.name}</p>
              </section>
              <section id="cta" className="flex items-center gap-2">
                <Link href={legal.viewUrl} target="_blank">
                  <Button className="bg-teal-600 hover:bg-teal-700 rounded-full cursor-pointer">
                    <Search />
                  </Button>
                </Link>
                <Link href={legal.downloadUrl}>
                  <Button className="bg-teal-600 hover:bg-teal-700 rounded-full cursor-pointer">
                    <Download />
                  </Button>
                </Link>
              </section>
            </CardContent>
          </Card>
        ))}
      </section>
    </section>
  );
}
