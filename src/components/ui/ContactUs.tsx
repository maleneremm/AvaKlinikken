import { Instagram } from "lucide-react";
import { visitInstagram } from "../../utils/utils";

export const ContactUs = () => {
  return (
    <footer className="bg-white p-4">
      <h3 className="text-2xl">Kontakt oss</h3>
      <ul className="flex flex-col gap-2 mt-2 items-center">
        <li >
          E-post: <a href="mailto:post@avaklinikken.no">post@avaklinikken.no</a>
        </li>
        <li>Telefon: <a href="tel:">+47 123 45 678</a></li>
        <li>Adresse: Sannergata 32B, 0557 Oslo</li>
        <li
          className="flex gap-2"
          onClick={visitInstagram}
          style={{ cursor: "pointer" }}
        >
          <Instagram />
          Følg oss på Instagram!
        </li>
      </ul>
    </footer>
  );
};
