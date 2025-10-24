"use client";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, HandCoins, LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DonateDialog from "./DonateDialog";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface IMobileNavbar {
  className?: string;
}

const navMenu = [
  {
    id: 1,
    name: "Tentang Kami",
    href: "/#about-us",
  },
  {
    id: 2,
    name: "Kegiatan",
    href: "/#activity",
  },
  {
    id: 3,
    name: "Artikel",
    href: "/#impact-story",
  },
  {
    id: 4,
    name: "Komunitas",
    subMenu: [
      {
        id: 1,
        subName: "KidPedia for Kids",
        href: "https://kidpedia.my.id/",
        description: "Website Interaktif untuk Anak dan Orang Tua",
      },
      {
        id: 2,
        subName: "Pelita Jiwa",
        href: "http://pelitajiwa.my.id/",
        description: "Website Alternatif Layanan Konsultasi",
      },
      {
        id: 3,
        subName: "Adhiktizens",
        href: "/adhiktizens",
        description: "Berkenalan lebih dekat dengan anggota kami",
      },
      {
        id: 4,
        subName: "Dokumen Hukum",
        href: "/dokumen-hukum",
        description: "Dokumen dan kebijakan organisasi",
      },
    ],
  },
];

export default function MobileNavbar({ className }: IMobileNavbar) {
  const [open, setOpen] = useState(false);
  const [openDonate, setOpenDonate] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<number | null>(null);

  const toggleSubmenu = (id: number) => {
    setExpandedSubmenu(expandedSubmenu === id ? null : id);
  };

  return (
    <>
      <nav
        className={`${className} px-5 py-3 flex justify-between items-center shadow-sm  bg-gradient-to-r from-blue-50 to-amber-50 border-b border-blue-100`}
      >
        <div id="image">
          <Link
            href="/"
            className="transition-transform duration-300 hover:scale-110 inline-block"
          >
            <Image src="/logo.png" alt="comp-logo" width={60} height={60} />
          </Link>
        </div>

        <div className="flex">
          <div id="toggle-language">
            <ToggleGroup
              type="single"
              className="bg-gray-200 dark:bg-gray-700   flex items-center w-[100px] justify-between shadow-md inset-shadow-2xs"
              defaultValue="id"
            >
              <ToggleGroupItem
                value="id"
                className="flex-1 text-center py-1  cursor-pointer text-sm font-semibold transition-all duration-300 
      data-[state=on]:bg-gradient-to-r data-[state=on]:from-teal-500 data-[state=on]:to-emerald-500
      data-[state=on]:text-white
      data-[state=off]:text-gray-700 hover:data-[state=off]:bg-gray-300"
              >
                ID
              </ToggleGroupItem>
              <ToggleGroupItem
                value="en"
                className="flex-1 text-center py-1  cursor-pointer text-sm font-semibold transition-all duration-300 
      data-[state=on]:bg-gradient-to-r data-[state=on]:from-teal-500 data-[state=on]:to-emerald-500
      data-[state=on]:text-white
      data-[state=off]:text-gray-700 hover:data-[state=off]:bg-gray-300"
              >
                EN
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-teal-100 text-teal-600 transition-all duration-300"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </nav>

      {open && (
        <section className="bg-gradient-to-b from-blue-50 to-slate-50 border-b border-blue-100 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="px-5 py-4 space-y-2">
            {navMenu.map((menu) => (
              <div key={menu.id} className="space-y-1">
                {!menu.subMenu ? (
                  <Link
                    href={menu.href}
                    className="block px-4 py-2 rounded-lg text-foreground font-medium transition-all duration-300 hover:bg-teal-100 hover:text-teal-700 hover:pl-6 active:bg-teal-200"
                  >
                    {menu.name}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleSubmenu(menu.id)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-foreground font-medium transition-all duration-300 hover:bg-teal-100 hover:text-teal-700 hover:pl-6 active:bg-teal-200"
                    >
                      <span>{menu.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          expandedSubmenu === menu.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedSubmenu === menu.id && (
                      <div className="space-y-1 pl-4  animate-in fade-in slide-in-from-top-1 duration-200">
                        {menu.subMenu.map((sub) => (
                          <Link
                            key={sub.id}
                            href={sub.href}
                            target="blank"
                            className="block px-4 py-3  bg-white border-l-4 border-teal-500 text-foreground transition-all duration-300 hover:bg-teal-50 hover:text-teal-700 hover:pl-6 active:bg-teal-100"
                          >
                            <div className="font-medium text-sm">
                              {sub.subName}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                              {sub.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-blue-200 mt-4 flex flex-col gap-3">
              <Button
                className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 cursor-pointer rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex justify-center gap-2 text-white font-semibold"
                onClick={() => setOpenDonate(true)}
              >
                <HandCoins className="w-5 h-5" />
                Mulai Berdonasi
              </Button>
              <Button className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 cursor-pointer rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex justify-center gap-2 text-white font-semibold">
                <LogIn className="w-5 h-5" /> Login/Register
              </Button>
            </div>
          </div>
        </section>
      )}
      {/* Donate Dialog */}
      <DonateDialog open={openDonate} setOpen={setOpenDonate} />
    </>
  );
}
