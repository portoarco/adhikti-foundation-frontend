import { Instagram, Mail, Phone, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-50 via-slate-50 to-amber-50 text-slate-900 border-t-4 border-teal-600">
      {/* MAIN SECTION */}
      <section className="px-8 md:px-20 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Identity */}
        <div id="identity">
          <Image
            src="/logo.png"
            alt="Logo Yayasan Adhirajasa Kusuma Bakti"
            width={90}
            height={90}
            className="rounded-md mb-4"
          />
          <h1 className="font-semibold text-xl leading-tight">
            Yayasan Adhirajasa Kusuma Bakti
          </h1>
          <p className="text-base leading-relaxed mt-2">
            Jl. Waru No. 20A, Rawamangun, Jakarta Timur, DKI Jakarta
          </p>

          {/* Ikon Sosial */}
          <div className="flex items-center gap-3 mt-5">
            <SocialIcon
              href="mailto:adhiktifoundation@gmail.com"
              label="Email"
              icon={<Mail className="size-4" />}
            />
            <SocialIcon
              href="https://instagram.com/adhikti"
              label="Instagram"
              icon={<Instagram className="size-4" />}
            />
            <SocialIcon
              href="https://youtube.com/@adhikti"
              label="YouTube"
              icon={<Youtube className="size-4" />}
            />
            <SocialIcon
              href="tel:+6288999181282"
              label="WhatsApp Center"
              icon={<Phone className="size-4" />}
            />
          </div>
        </div>

        {/* Pages */}
        <div id="pages" className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-teal-600 rounded-full" />
            Halaman
          </h2>
          <FooterLink href="/tentang">Tentang Kami</FooterLink>
          <FooterLink href="/kegiatan">Kegiatan</FooterLink>
          <FooterLink href="/artikel">Artikel</FooterLink>
          <FooterLink href="/donasi">Donasi</FooterLink>
          <FooterLink href="/volunteer">Registrasi Volunteer</FooterLink>
        </div>

        {/* Community */}
        <div id="community" className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-teal-600 rounded-full" />
            Komunitas
          </h2>
          <FooterLink href="/komunitas/kidpedia">KidPedia</FooterLink>
          <FooterLink href="/komunitas/pelitajiwa">Pelita Jiwa</FooterLink>
          <FooterLink href="/komunitas/adhitizens">Adhitizens</FooterLink>
          <FooterLink href="/dokumen-hukum">Dokumen Hukum</FooterLink>
        </div>

        {/* Location */}
        <div id="location">
          <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-teal-600 rounded-full" />
            Lokasi Kami
          </h2>
          <div className="w-full overflow-hidden rounded-xl shadow-lg">
            <iframe
              className="w-full h-[240px] border-0"
              scrolling="no"
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=id&amp;q=Jl.%20Waru%20No%2020A%20Rawamangun,%20Jakarta%20Timur,%20DKI%20Jakarta+(Yayasan%20Adhirajasa%20Kusuma%20Bakti)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-gray-400" />

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 px-8 md:px-20 py-6 text-base text-gray-700">
        <p className="text-center md:text-left font-medium">
          © 2025 Yayasan Adhirajasa Kusuma Bakti. All rights reserved.
        </p>
        <div className="flex gap-8 text-base">
          <FooterLink href="/kebijakan-privasi">Kebijakan Privasi</FooterLink>
          <FooterLink href="/kebijakan-hukum">Kebijakan Hukum</FooterLink>
        </div>
      </div>
    </footer>
  );
}

/* Komponen Reusable untuk Link Footer */
function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-slate-700 hover:text-teal-600 text-lg transition-colors duration-200 font-medium"
    >
      {children}
    </Link>
  );
}

/* Komponen Reusable untuk Icon Sosial */
function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="p-2 rounded-lg bg-white text-slate-700 hover:bg-teal-50 hover:text-teal-600 transition-all duration-200 border border-slate-200 hover:border-teal-300 shadow-sm"
    >
      {icon}
    </Link>
  );
}
