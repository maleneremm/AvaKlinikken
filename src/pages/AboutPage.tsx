import Section from "../components/layout/Section";
import { About } from "../components/ui/About";
import employeeAnna from "../src/assets/anna.jpeg";
import employeeHannan from "../src/assets/hannan.jpeg";

export const AboutPage = () => {
  return (
<>
 <h1 className="text-3xl w-screen bg-white p-4 lg:text-4xl">Vårt team</h1>
        <Section className="md:flex-row md:justify-center">
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
            description="Hannan er en erfaren sykepleier med over XX år erfaring. Hun har det siste året utført flere sertifiseringer innnen estetisk medisin, i behandlinger som fillers og botulinumtoksin. Hannan fokuserer på din unike hudtype, ser hele mennesket og er presis og tydelig i sine behandlinger."
          />
        </Section>
</>
  )
}
