import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { HandCoins } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IDesktopNavbar {
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
        subName: "KidPedia for Kids",
        href: "#",
        description: "Website Interaktif untuk Anak dan Orang Tua",
      },
      {
        id: 2,
        subName: "Pelita Jiwa",
        href: "#",
        description: "Website Alternatif Layanan Konsultasi",
      },
      {
        id: 3,
        subName: "Adhitizens",
        href: "#",
        description: "Berkenalan lebih dekat dengan anggota kami",
      },
      {
        id: 4,
        subName: "Dokumen Hukum",
        href: "#",
        description: "Dokumen dan kebijakan organisasi",
      },
    ],
  },
];

export default function DesktopNavbar({ className }: IDesktopNavbar) {
  return (
    <nav
      className={`${className} flex items-center justify-center gap-100 py-2`}
    >
      <div id="image">
        <Link href="/">
          <Image src="/logo.png" alt="comp-logo" width={80} height={80} />
        </Link>
      </div>
      <div id="menu">
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {navMenu.map((menu, idx) => (
              <NavigationMenuItem key={idx} className="p-2">
                {!menu.subMenu ? (
                  <NavigationMenuLink asChild className="text-[16px]">
                    <Link href={menu.href} target="blank">
                      {" "}
                      {menu.name}
                    </Link>
                  </NavigationMenuLink>
                ) : (
                  <>
                    <NavigationMenuTrigger className="font-normal text-[16px]">
                      {menu.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute z-10">
                      <ul className="grid w-[300px] gap-1 p-1" role="list">
                        {menu.subMenu.map((sub) => (
                          <li key={sub.id}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={sub.href}
                                target="blank"
                                className="block rounded-md p-1 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                              >
                                <div className="text-[16px] font-medium text-foreground">
                                  {sub.subName}
                                </div>
                                {sub.description ? (
                                  <p className="mt-1 text-xs text-muted-foreground">
                                    {sub.description}
                                  </p>
                                ) : null}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div id="cta">
        <Button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 cursor-pointer rounded-full p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex justify-between gap-2 text-white font-semibold">
          <HandCoins className="w-5 h-5" />
          Mulai Berdonasi
        </Button>
      </div>
    </nav>
  );
}
