import heroBanner from "../../assets/hero-section.jpg";

export const Hero = () => {
  return (
    <div>
      <img src={heroBanner} alt="Hero Banner" className="w-screen" />
      <div className="flex flex-col gap-4 items-center p-4 lg:p-22 lg:gap-8">
        <header>
          <h2 className="text-2xl lg:text-4xl">Velkommen til</h2>
          <h2 className="text-2xl font-bold lg:text-4xl">AvaKlinikken</h2>
        </header>
        <p className="text-center md:text-2xl lg:max-w-xl">
          Våre åpningstider er fleksible. Se Ledige timer i Timma/ under «Book
          time».{" "}
          <a
            href="mailto:post@avaklinikken.no"
            className="font-medium underline underline-offset-2 decoration-[0.5px] decoration-stone-600 md:decoration-transparent md:hover:decoration-current transition"
          >
            Send oss gjerne en mail
          </a>{" "}
          hvis du ikke finner ledig time på ønsket tidspunkt.
        </p>
        <p>Aldersgrense for behandlinger er 18 år.</p>
      </div>
    </div>
  );
};
