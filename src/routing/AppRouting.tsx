import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, PricesPage, AboutPage, TreatmentsPage, NotFoundPage } from "../pages";
import { Navbar } from "../components/common/Navbar";
import Section from "../components/layout/Section";
import { ContactUs } from "../components/ui/ContactUs";

export const AppRouting = () => {
  return (
    <BrowserRouter>
     <header>
        <Navbar />
      </header>
      <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/treatments" element={<TreatmentsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </main>
          <footer>
        <Section>
          <ContactUs />
        </Section>
      </footer>
    </BrowserRouter>
  );
};
