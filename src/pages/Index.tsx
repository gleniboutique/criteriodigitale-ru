import HeroSection from "../components/HeroSection";
import ChtoZametilaSection from "../components/ChtoZametilaSection";
import DlyaKogoSection from "../components/DlyaKogoSection";
import SluchaiSection from "../components/SluchaiSection";
import KakUstroenoSection from "../components/KakUstroenoSection";
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
        <DlyaKogoSection />
        <SluchaiSection />
        <KakUstroenoSection />
        <KtoYaSection />
        <ChemNeZanimausSection />
        <KontaktSection />
      </main>
      <FooterSection />
    </>
  );
}
