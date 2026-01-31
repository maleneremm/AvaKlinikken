import heroBanner from "../../assets/hero-banner.png";
import { Button } from "../common/Button";

export const Hero = () => {
  return (
    <div>
      <img src={heroBanner} alt="Hero Banner" />
      <div className="flex flex-col gap-4 items-center p-4">
        <header>
          <h2 className="text-2xl">Naturlig skjønnhet,</h2>
          <h2 className="text-2xl font-bold">profesjonell behandlig</h2>
        </header>
        <p>
          AvaKlinikken tilbyr trygge og effektive behandlinger for å fremheve
          din naturlige skjønnhet.
        </p>
        <Button
          className="border bg-brown-500 text-white p-2 rounded-md w-40"
          onClick={() => {}}
        >
          Bestill konsultasjon
        </Button>
      </div>
    </div>
  );
};
