import Image from "next/image";
import DesktopNavbar from "./components/DesktopNavbar";
import Header from "./components/Header";
import MobileNavbar from "./components/MobileNavbar";
import CoreValues from "./components/CoreValues";
import WhyMove from "./components/WhyMove";
import AboutUs from "./components/AboutUs";
import ProgramKerja from "./components/ProgramKerja";
import ImpactStories from "./components/ImpactStories";
import BannerCTA from "./components/BannerCTA";
import WhyDonate from "./components/WhyDonate";
import HelpedPeople from "./components/HelpedPeople";
import JoinUs from "./components/JoinUs";
import ConsultCTABanner from "./components/ConsultCTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <DesktopNavbar className="max-sm:hidden  rounded-b-full" />
      <MobileNavbar className="sm:hidden" />
      {/* Header and Summary Card */}
      <Header />
      {/*  */}
      <main className="">
        <section id="about-us" className="py-30">
          <AboutUs />
        </section>
        <section className="pt-10 px-30 ">
          <WhyMove />
        </section>
        <section className="py-10 px-30">
          <CoreValues />
        </section>
        <section className="py-10 px-30">
          <ProgramKerja />
        </section>
        <section className="pt-30 pb-10 px-30">
          <ImpactStories />
        </section>
        <section className="py-10 ">
          <BannerCTA />
        </section>
        <section className="py-20 px-30">
          <WhyDonate />
        </section>
        <section className="py-15 px-30">
          <JoinUs />
        </section>
        <section className="py-10">
          <HelpedPeople />
        </section>
        <section className="py-20 px-30">
          <ConsultCTABanner />
        </section>
        <section className="py-20 px-30">
          <FAQ />
        </section>
      </main>
      <Footer />
    </>
  );
}
