import Section from "../components/layout/Section";
import { About } from "../components/ui/About";
import employeeAnna from "../assets/anna.jpeg";
import employeeHannan from "../assets/hannan.jpeg";
import employeeMomena from "../assets/momena.jpeg";

export const AboutPage = () => {
  return (
    <>
      <h1 className="text-3xl w-screen bg-(--bg-primary-color) p-4 lg:text-4xl">Vårt team</h1>
      <Section className="md:flex-row md:justify-center flex-wrap">
        <About
          imageUrl={employeeAnna}
          name="Anna"
          title="KOSMETISK SYKEPLEIER"
          description="Anna ble utdannet sykepleier i 2024. Hun har det siste året fått sertifiseringer for botulinumtoksin og forskjellige filler. Anna har stor interesse for faget og har fokus på kundens ønske, samt naturlige restulateter."
        />
        <About
          imageUrl={employeeHannan}
          name="Hannan"
          title="KOSMETISK SYKEPLEIER"
          description="Hannan er en erfaren sykepleier med over 16 år erfaring. Hun har det siste året utført flere sertifiseringer innnen estetisk medisin, i behandlinger som fillers og botulinumtoksin. Hannan fokuserer på din unike hudtype, ser hele mennesket og er presis og tydelig i sine behandlinger."
        />
        <About
          imageUrl={employeeMomena}
          name="Dr. Momena Sahar"
          title="LEGE"
          description="Dr. Momena Sahar er ansvarlig lege ved klinikken. Hun har videre utdannet seg i estetisk medisin og jobber som lege i spesialisering innen nevrologi. Hun arbeider til daglig med komplekse medisinske problemstillinger der presisjon, trygghet og helhetlig vurdering står sentralt. Som medisinsk ansvarlig lege har Momena ansvar for at klinikkens estetiske behandlinger utføres i tråd med faglige restningslinjer. Rollen innebærer medisinsk rådgivning, vurdering av pasientsikkerhet og faglig oppfølging av behandlere, med kvalitet og forsvarlighet som grunnleggende prinsipper. "
        />
      </Section>
    </>
  );
};
