import HeroSection from "../components/HeroSection";
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
