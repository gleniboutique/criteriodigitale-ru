import PhaseOnePage from "@/components/PhaseOnePage";
import { phaseOneMetadata } from "@/config/metadata";
import { phaseOnePages } from "@/content/phaseOne";

const page = phaseOnePages["/ai-i-cennost"];

export const metadata = phaseOneMetadata(page);

export default function AiValuePage() {
  return <PhaseOnePage page={page} />;
}
