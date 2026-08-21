import { FaPhone } from "react-icons/fa6";

const PHONE = "254740967882";

export default function FloatingCall() {
  return (
    <a
      className="floating-call"
      href={`tel:+${PHONE}`}
      aria-label="Call Abednego Morara"
      title="Call +254 740 967 882"
    >
      <span className="floating-call-icon"><FaPhone /></span>
      <span className="floating-call-text"><small>CALL ME</small><strong>+254 740 967 882</strong></span>
    </a>
  );
}
