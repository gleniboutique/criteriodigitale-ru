import PhaseOnePage from "@/components/PhaseOnePage";
import { phaseOneMetadata } from "@/config/metadata";
import { phaseOnePages } from "@/content/phaseOne";

const page = phaseOnePages["/sait-ne-obyasnyaet-cennost"];

export const metadata = phaseOneMetadata(page);

export default function DigitalRepresentationPage() {
  return <PhaseOnePage page={page} />;
}
