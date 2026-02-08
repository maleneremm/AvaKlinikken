import Section from "../components/layout/Section";
import { InfoCard } from "../components/ui/InfoCard";

export const TreatmentsPage = () => {
  const lipsTreatments = ["Fillers", "Lip Flip"];
  const fillerTreatments = [
    "Kinnbein",
    "Hake",
    "Kjeve",
    "Nasolabiale linjer",
    "Marionettlinjer",
  ];
  const wrinklesTreatments = ["Panne", "Sinnarynke", "Kråketær", "Kjeve"];
  const otherTreatments = ["Masseter", "Nefertiti/hals"];
  return (
    <>
      <Section>
        <h1 className="text-3xl w-screen bg-(--bg-primary-color) p-4 lg:text-4xl">
          Behandlinger
        </h1>
        <div className="bg-amber-50 m-4 grid md:grid-cols-2 md:grid-auto-rows md:w-1/2 md:self-center rounded-md items-start">
          <InfoCard title="Rynker" description={wrinklesTreatments} />
          <hr className="border-stone-200 md:hidden" />
          <InfoCard title="Filler" description={fillerTreatments} />
          <hr className="border-stone-200 md:hidden" />
          <InfoCard title="Lepper" description={lipsTreatments} />
          <hr className="border-stone-200 md:hidden" />
          <InfoCard title="Andre" description={otherTreatments} />
        </div>
      </Section>
    </>
  );
};
