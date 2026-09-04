import PhaseOnePage from "@/components/PhaseOnePage";
import { phaseOneMetadata } from "@/config/metadata";
import { phaseOnePages } from "@/content/phaseOne";

const page = phaseOnePages["/kak-ya-rabotayu"];

export const metadata = phaseOneMetadata(page);

export default function HowIWorkPage() {
  return <PhaseOnePage page={page} />;
}
