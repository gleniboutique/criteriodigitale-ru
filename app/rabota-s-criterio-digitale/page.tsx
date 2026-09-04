import PhaseOnePage from "@/components/PhaseOnePage";
import { phaseOneMetadata } from "@/config/metadata";
import { phaseOnePages } from "@/content/phaseOne";

const page = phaseOnePages["/rabota-s-criterio-digitale"];

export const metadata = phaseOneMetadata(page);

export default function WorkWithCriterioPage() {
  return <PhaseOnePage page={page} />;
}
