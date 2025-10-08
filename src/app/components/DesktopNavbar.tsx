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
        subName: "Adhitizens",
        href: "#",
        description: "Berkenalan lebih dekat dengan anggota kami",
      },
      {
        id: 2,
        subName: "Sahabat Adhikti",
        href: "#",
        description: "Support System dan Donatur kami",
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
                    <Link href={menu.href}> {menu.name}</Link>
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
        <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-full p-5 shadow-sm flex justify-between">
          <HandCoins />
          Mulai Berdonasi
        </Button>
      </div>
    </nav>
  );
}
