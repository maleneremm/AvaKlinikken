import "./App.css";
import { Navbar } from "./components/common/Navbar";
import Section from "./components/layout/Section";
import { Hero } from "./components/ui/Hero";
import { Treatment } from "./components/ui/Treatment";
import wrinkleTreatment from "../src/assets/wrinkle-treatment.png";
import fillers from "../src/assets/fillers.png";
import { About } from "./components/ui/About";
import { ContactUs } from "./components/ui/ContactUs";
import employeeAnna from "../src/assets/employee-Anna.png";
import employeeHannan from "../src/assets/employee-Hannan.png";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Section className="flex items-center">
          <Hero />
        </Section>

        <h1 className="text-3xl w-screen bg-white p-4 lg:text-4xl">Behandlinger</h1>
        <Section>
          <Treatment
            title="Rynkebehandling"
            description={[
              "Kråketær/smilerynker",
              "Glabella/sinnarynker",
              "Pannerynker",
              "Masseter/kjeve",
                "Marionette/munnvik",
                "Brynsløft",
            ]}
            imageUrl={wrinkleTreatment}
          />
          <Treatment
            title="Fillers (opptil 1 ml)"
            description={[
              "Kjeve",
              "Hake",
              "Kinnbein",
              "Nasolabiale linjer",
              "Marionette linjer",
              "Lepper",
            ]}
            imageUrl={fillers}
          />
        </Section>
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
        <Section>
          <ContactUs />
        </Section>
      </main>
    </>
  );
}

export default App;
