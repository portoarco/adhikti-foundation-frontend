"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface IMobileNavbar {
  className?: string;
}

const navMenu = [
  {
    id: 1,
    name: "Tentang Kami",
    href: "#",
  },
  {
    id: 2,
    name: "Kegiatan",
    href: "#",
  },
  {
    id: 3,
    name: "Artikel",
    href: "#",
  },
  {
    id: 4,
    name: "Komunitas",
    subMenu: [
      {
        id: 1,
        subName: "Adhitizens",
        href: "#",
        description: "Bergabung dengan komunitas kami",
      },
      {
        id: 2,
        subName: "Sahabat Adhikti",
        href: "#",
        description: "Para donatur organisasi",
      },
      {
        id: 3,
        subName: "Dokumen Hukum",
        href: "#",
        description: "Dokumen dan kebijakan organisasi",
      },
    ],
  },
];

export default function MobileNavbar({ className }: IMobileNavbar) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <nav
        className={`${className} px-5 py-2 flex justify-between items-center shadow-xs rounded-b-sm`}
      >
        <div id="image">
          <Link href="/">
            <Image src="/logo.png" alt="comp-logo" width={60} height={60} />
          </Link>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-gray-100"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <Menu /> : <X />}
        </Button>
      </nav>

      {/* container */}
      <section></section>
    </>
  );
}
