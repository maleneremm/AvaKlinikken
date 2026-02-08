import Section from "../components/layout/Section";

export const PricesPage = () => {
  const listStyle =
    "flex gap-2 justify-between w-full border-b border-stone-200 lg:text-lg";
  return (
    <>
      <h1 className="text-3xl p-4 lg:text-4xl">Priser</h1>
      <Section className="bg-amber-50 m-4 flex flex-col md:w-1/2 md:self-center rounded-md">
        <div className="flex flex-col p-4 lg:p-12">
          <h2 className="text-2xl">Filler</h2>
          <div className="flex flex-col gap-4 p-4">
            <h3 className="text-xl">Ansikt</h3>
            <ul className="flex flex-col items-start gap-2">
              <li className={listStyle}>
                <span>Første ml</span>
                <span> 2500 kr</span>
              </li>
              <li className={listStyle}>
                <span>Påbegynte ml</span>
                <span>1400 kr</span>
              </li>
            </ul>

            <h3 className="text-xl">Lepper</h3>
            <ul className="flex flex-col gap-2 items-start">
              <li className={listStyle}>
                <span>0.5 ml</span>
                <span>2000 kr</span>
              </li>
              <li className={listStyle}>
                <span>1 ml</span>
                <span>2500 kr</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col p-4 gap-4 lg:p-12">
          <h2 className="text-2xl">Rynkebehandling</h2>
          <ul className="flex flex-col gap-2 items-start">
            <li className={listStyle}>
              <span>1 område</span>
              <span>1300 kr</span>
            </li>
            <li className={listStyle}>
              <span>2 områder</span>
              <span>1800 kr</span>
            </li>
            <li className={listStyle}>
              <span>3 områder</span>
              <span>2600 kr</span>
            </li>
            <li className={listStyle}>
              <span>4 områder</span>
              <span>3200 kr</span>
            </li>
            <li className={listStyle}>
              <span>5 områder</span>
              <span>3800 kr</span>
            </li>
            <li className={listStyle}>
              <span>Lip flip</span>
              <span>1000 kr</span>
            </li>
            <li className={`${listStyle} pt-8`}>
                <span>Avbestillingsgebyr</span>
                <span>500 kr</span>
            </li>
            <p className="text-sm">* Avbestilling må skje minimum 24 timer før avtalt behandling. Ved senere avbestilling påløper gebyr.</p>
          </ul>
    
        </div>
      </Section>
    </>
  );
};
