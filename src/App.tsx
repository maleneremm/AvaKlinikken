import "./App.css";
import { Navbar } from "./components/common/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <header>
          <h1 className="title">AvaKlinikken</h1>
        </header>
        <p className="info">Kommer snart</p>
        <a className="contact-link" href="mailto:post@avaklinikken.no">
          Kontakt oss
        </a>
      </main>
    </>
  );
}

export default App;
