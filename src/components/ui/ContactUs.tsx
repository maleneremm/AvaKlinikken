import { Instagram } from "lucide-react";
import { visitInstagram } from "../../utils/utils";

export const ContactUs = () => {
  return (
    <footer className="bg-white p-4">
      <h3 className="text-2xl">Kontakt oss</h3>
      <ul className="flex flex-col gap-2 mt-2 items-center">
        <li>
          E-post: <a href="mailto:post@avaklinikken.no">post@avaklinikken.no</a>
        </li>
        <li>
          Telefon: <a href="tel:+4745574879">+47 455 74 879</a>
        </li>
        <li>Adresse: Sannergata 32B, 0557 Oslo</li>
        <li>Org: 936519202</li>
        <li
          className="flex gap-2"
          onClick={visitInstagram}
          style={{ cursor: "pointer" }}
        >
          <Instagram />
          Følg oss på Instagram!
        </li>
      </ul>
      <hr className="my-4 text-stone-200" />
      <p className="text-xs">
        Nettside utviklet av{" "}
        <a
          href="https://www.linkedin.com/in/malene-remm"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-[0.5px] underline-offset-2 decoration-transparent hover:decoration-current transition"
        >
          Malene Remm
        </a>
      </p>
    </footer>
  );
};
