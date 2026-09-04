import PhaseOnePage from "@/components/PhaseOnePage";
import { phaseOneMetadata } from "@/config/metadata";
import { phaseOnePages } from "@/content/phaseOne";

const page = phaseOnePages["/obo-mne"];

export const metadata = phaseOneMetadata(page);

export default function AboutPage() {
  return <PhaseOnePage page={page} />;
}
