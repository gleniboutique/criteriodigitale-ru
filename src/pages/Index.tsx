import HeroSection from "../components/HeroSection";
import ChtoZametilaSection from "../components/ChtoZametilaSection";
import SluchaiSection from "../components/SluchaiSection";
import KtoYaSection from "../components/KtoYaSection";
import ChemNeZanimausSection from "../components/ChemNeZanimausSection";
import KontaktSection from "../components/KontaktSection";
import FooterSection from "../components/FooterSection";

export default function IndexPage() {
  return (
    <>
      <main>
        <HeroSection />
        <ChtoZametilaSection />
        <SluchaiSection />
        <KtoYaSection />
        <ChemNeZanimausSection />
        <KontaktSection />
      </main>
      <FooterSection />
    </>
  );
}
