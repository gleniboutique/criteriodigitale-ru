import PhaseOnePage from "@/components/PhaseOnePage";
import { phaseOneMetadata } from "@/config/metadata";
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_TELEGRAM,
} from "@/config/contact";
import { contactPage } from "@/content/phaseOne";

export const metadata = phaseOneMetadata(contactPage);

export default function ContactPage() {
  return (
    <PhaseOnePage
      page={contactPage}
      sectionExtras={{
        2: (
          <nav className="contact-links" aria-label="Способы связи">
            <a
              href={CONTACT_TELEGRAM}
              target="_blank"
              rel="noreferrer"
              aria-label="Написать Татьяне в Telegram"
            >
              <span>Telegram</span>
              <span aria-hidden="true">→</span>
            </a>
            <a href={CONTACT_EMAIL_HREF} aria-label={`Написать Татьяне по email: ${CONTACT_EMAIL}`}>
              <span>Email</span>
              <span aria-hidden="true">→</span>
            </a>
          </nav>
        ),
      }}
    />
  );
}
