import PhaseOnePage from "@/components/PhaseOnePage";
import { phaseOneMetadata } from "@/config/metadata";
import { phaseOnePages } from "@/content/phaseOne";

const basePage = phaseOnePages["/kak-ya-rabotayu"];
const page = {
  ...basePage,
  sections: basePage.sections.map((section) =>
    section.title === "Поэтому нужны реальные случаи"
      ? {
          ...section,
          units: [
            ...section.units,
            {
              type: "link" as const,
              label: "Filigran — кейс собственного AI-assisted продукта",
              href: "/praktika/filigran",
            },
            {
              type: "link" as const,
              label: "«Путь Героини» — кейс пересборки цифровой системы",
              href: "/praktika/put-geroini",
            },
            {
              type: "link" as const,
              label: "Реальные проекты / кейсы — на итальянском",
              href: "https://criteriodigitale.it/progetti",
            },
          ],
        }
      : section,
  ),
} satisfies typeof basePage;

export const metadata = phaseOneMetadata(page);

export default function HowIWorkPage() {
  return <PhaseOnePage page={page} />;
}
