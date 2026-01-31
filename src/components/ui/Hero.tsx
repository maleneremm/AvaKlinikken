import heroBanner from "../../assets/hero-banner.png";
import { Button } from "../common/Button";

export const Hero = () => {
  return (
    <div>
      <img src={heroBanner} alt="Hero Banner" />
      <div className="flex flex-col gap-4 items-center p-4 lg:p-22 lg:gap-8">
        <header>
          <h2 className="text-2xl lg:text-4xl">Naturlig skjønnhet,</h2>
          <h2 className="text-2xl font-bold lg:text-4xl">profesjonell behandling</h2>
        </header>
        <p className="text-center md:text-2xl lg:max-w-xl">
          Avaklinikken tilbyr trygge og effektive behandlinger for å fremheve
          din naturlige skjønnhet
        </p>
        <Button
          className="border border-(--primary-border-color) bg-(--primary-button-color) text-white p-2 rounded-md w-40 lg:text-xl lg:w-60"
          onClick={() => {}}
        >
          Bestill konsultasjon
        </Button>
      </div>
    </div>
  );
};
