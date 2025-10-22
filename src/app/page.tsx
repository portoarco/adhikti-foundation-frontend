import AboutUs from "./components/AboutUs";
import BannerCTA from "./components/BannerCTA";
import ConsultCTABanner from "./components/ConsultCTA";
import CoreValues from "./components/CoreValues";
import DesktopNavbar from "./components/DesktopNavbar";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import ImpactStories from "./components/ImpactStories";
import JoinUs from "./components/JoinUs";
import MobileNavbar from "./components/MobileNavbar";
import ProgramKerjaOrg from "./components/ProgramKerjaOrg";
import WhyDonate from "./components/WhyDonate";
import WhyMove from "./components/WhyMove";

export default function Home() {
  return (
    <>
      {/* Header and Summary Card */}
      <Header />
      {/*  */}
      <main className="">
        <section id="about-us" className="py-10">
          <AboutUs />
        </section>
        <section className="xl:pt-10 xl:px-30 ">
          <WhyMove />
        </section>
        <section className="xl:py-10 xl:px-30">
          <CoreValues />
        </section>
        <section className="py-20 max-lg:px-5 xl:py-40">
          {/* <ProgramKerja /> */}
          <ProgramKerjaOrg />
        </section>
        <section className="pt-30 pb-20 xl:px-30">
          <ImpactStories />
        </section>
        <section className="py-10">
          <BannerCTA />
        </section>
        <section className="p-5 xl:py-20 xl:px-30">
          <WhyDonate />
        </section>
        <section className="py-15 p-5 lg:px-10 xl:px-30">
          <JoinUs />
        </section>
        <section className="py-20 lg:px-10 xl:px-30">
          <ConsultCTABanner />
        </section>
        <section className="py-10 xl:px-30">
          <FAQ />
        </section>
      </main>
    </>
  );
}
