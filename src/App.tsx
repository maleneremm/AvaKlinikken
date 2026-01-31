import "./App.css";
import { Navbar } from "./components/common/Navbar";
import Section from "./components/layout/Section";
import {Hero} from "./components/ui/Hero";
import { Treatment } from "./components/ui/Treatment";
import wrinkleTreatment from "../src/assets/wrinkle-treatment.png";
import fillers from "../src/assets/fillers.png";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Section>
          <Hero />
        </Section>
    
        <Section>
          <h1 className="text-3xl w-screen bg-white p-4">Behandlinger</h1>
          <Treatment title="Rynkebehandling" description="Kråketær/smilerynker, Glabella/sinnarynker, Pannerynker, Masseter/kjeve, Marionette/munnvik, Brynsløft" imageUrl={wrinkleTreatment} />
           <Treatment title="Fillers" description="Kjeve, Hake, Kinnbein, Nasolabiale linjer, Marionette linjer, Lepper" imageUrl={fillers} />
        </Section>
      </main>
    </>
  );
}

export default App;
