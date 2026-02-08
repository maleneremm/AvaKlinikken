import heroBanner from "../../assets/hero-section.jpg";

export const Hero = () => {
  return (
    <div>
      <img
        src={heroBanner}
        alt="Hero Banner"
        className="w-full md:w-3/4 place-self-center rounded-b-md"
      />
      <div className="flex flex-col gap-4 items-center p-4 lg:p-8 lg:gap-2">
        <header>
          <h2 className="text-2xl lg:text-4xl">Velkommen til</h2>
          <h2 className="text-2xl font-bold lg:text-4xl">AvaKlinikken</h2>
        </header>
        <p className="text-center md:text-2xl lg:max-w-xl">
          Skjønnhetsklinikk som driver med estetiske og medisinske behandlinger.
          Våre åpningstider er fleksible. Se ledige timer i Timma/under «Book
          time».{" "}
          <a
            href="mailto:post@avaklinikken.no"
            className="font-semibold underline underline-offset-2 decoration-[0.5px] decoration-stone-600 md:decoration-transparent md:hover:decoration-current transition"
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
