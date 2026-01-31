import { Instagram } from "lucide-react";
import { visitInstagram } from "../../utils/utils";

export const ContactUs = () => {
  return (
    <footer className="bg-white p-4">
      <h3 className="text-2xl">Kontakt oss</h3>
      <ul className="flex flex-col gap-2 mt-2 items-center">
        <li>E-post: post@avaklinikken.no</li>
        <li>Telefon: +47 455 74 879</li>
        <li>Adresse: Sannergata 32B, 0557 Oslo</li>
        <li className="flex gap-2" onClick={visitInstagram} style={{ cursor: "pointer" }}   >
          <Instagram />
          Følg oss på Instagram!
        </li>
      </ul>
    </footer>
  );
};
