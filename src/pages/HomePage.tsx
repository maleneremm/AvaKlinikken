import Section from "../components/layout/Section";
import { Hero } from "../components/ui/Hero";
import { InfoCard } from "../components/ui/InfoCard";
import wrinkleTreatment from "../assets/wrinkle-treatment.png";
import fillers from "../assets/fillers.png";
import lips from "../assets/lepper.jpeg";
import consult from "../assets/consult-image.jpeg";

export const HomePage = () => {
  return (
    <>
      <Section className="flex items-center">
        <Hero />
      </Section>
     
       <InfoCard
        title="Konsultasjon"
        description={["Vi tilbyr e-konsultasjon. Ved booking av behandling vil du få tilsendt en SMS med skjema som du fyller ut hjemme. Skjema må fylles ut minimum 48 timer før behandling. Resten tar vi oss av! Skjema og konsultasjonen må alltid godkjennes av ansvarlig lege. Dette er inkludert i prisen."]}
        imageUrl={consult}
        />
      <h1 className="text-3xl w-screen bg-[#cfbfaf] p-4 lg:text-4xl">
        Behandlinger
      </h1>
      <Section>
       
        <InfoCard
          title="Rynkebehandling"
          description={[
            "  Rynkebehandling er med på å lamme bevegelser i ansiktet som kan bidra til å skape linjer og rynker. Rynkebehandling bremser også talgproduksjon i injisert område, og kan bidra til glød i huden. Effekt varer ca 4 måneder.",
          ]}
          imageUrl={wrinkleTreatment}
        />
        <InfoCard
          title="Lepper"
          description={[
            " Leppefiller kan endre leppens fasong og tilføre volum. Effekt varer ca 1 år. Lipflip er en mindre invasiv behandling som som er med på å løfte overleppen og kan skape en illusjon om større lepper. Effekt varer ca 4 måneder. Leppefiller og lipflip kan ofte være en fin kombinasjon. ",
          ]}
          imageUrl={lips}
        />
        <InfoCard
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
