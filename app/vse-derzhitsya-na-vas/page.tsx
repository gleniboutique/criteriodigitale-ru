import PhaseOnePage from "@/components/PhaseOnePage";
import { phaseOneMetadata } from "@/config/metadata";
import { phaseOnePages } from "@/content/phaseOne";

const page = phaseOnePages["/vse-derzhitsya-na-vas"];

export const metadata = phaseOneMetadata(page);

export default function OperationalDependencyPage() {
  return <PhaseOnePage page={page} />;
}
