import "./App.css";
import { Navbar } from "./components/common/Navbar";
import Section from "./components/layout/Section";
import {Hero} from "./components/ui/Hero";
import { Treatment } from "./components/ui/Treatment";

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
          <Treatment />
        </Section>
      </main>
    </>
  );
}

export default App;
