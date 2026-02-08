import Section from "../components/layout/Section";
import { Hero } from "../components/ui/Hero";
import { Treatment } from "../components/ui/Treatment";
import wrinkleTreatment from "../src/assets/wrinkle-treatment.png";
import fillers from "../src/assets/fillers.png";
import lips from "../assets/lepper.jpeg";

export const HomePage = () => {
  return (
    <>
      <Section className="flex items-center">
        <Hero />
      </Section>
      <Section>
        <h1 className="text-3xl w-screen bg-white p-4 lg:text-4xl">
          Velkommen til AvaKlinikken
        </h1>
        <p>
          Våre åpningstider er fleksible. Se Ledige timer i Timma/ under «Book
          time». Send oss gjerne en mail hvis du ikke finner ledig time på
          ønsket tidspunkt. Aldersgrense for behandlinger er 18 år.
        </p>
      </Section>
      <h1 className="text-3xl w-screen bg-white p-4 lg:text-4xl">
        Behandlinger
      </h1>
      <Section>Consult</Section>
      <Section>
        <Treatment
          title="Rynkebehandling"
          description={[
            "  Rynkebehandling er med på å lamme bevegelser i ansiktet som kan bidra til å skape linjer og rynker. Rynkebehandling bremser også talgproduksjon i injisert område, og kan bidra til glød i huden. Effekt varer ca 4 måneder.",
          ]}
          imageUrl={wrinkleTreatment}
        />
        <Treatment
          title="Lepper"
          description={[
            " Leppefiller kan endre leppens fasong og tilføre volum. Effekt varer ca 1 år. Lipflip er en mindre invasiv behandling som som er med på å løfte overleppen og kan skape en illusjon om større lepper. Effekt varer ca 4 måneder. Leppefiller og lipflip kan ofte være en fin kombinasjon. ",
          ]}
          imageUrl={lips}
        />
        <Treatment
          title="Fillers"
          description={[
            "Filler er for deg som ønsker å tilføre volum i ansikt. Det kan tilføres omtrent hvor som helst i ansiktet, ut i fra ditt behov. Vi hjelper deg gjerne med å finne hvilke områder som passer deg best.",
          ]}
          imageUrl={fillers}
        />
      </Section>
    </>
  );
};
