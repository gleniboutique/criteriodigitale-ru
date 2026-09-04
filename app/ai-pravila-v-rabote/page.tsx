import PhaseOnePage from "@/components/PhaseOnePage";
import { phaseOneMetadata } from "@/config/metadata";
import { phaseOnePages } from "@/content/phaseOne";

const page = phaseOnePages["/ai-pravila-v-rabote"];

export const metadata = phaseOneMetadata(page);

export default function AiGovernancePage() {
  return <PhaseOnePage page={page} />;
}
