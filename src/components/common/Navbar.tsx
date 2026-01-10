import Button from "./Button";

export const Navbar = () => {

  const bookAppointment = ()=>{}

  const buttonstyle = ""

  return (
    <nav className="flex flex-row items-center p-4 bg-amber-200">
      <ul className="flex flex-row gap-8 place-content-center basis-1/3">
        <li>OM OSS</li>
        <li>PRISER</li>
      </ul>
      <h1 className="text-4xl basis-1/3">AVAKLINIKKEN</h1>
      <ul className="flex flex-row gap-8 place-content-center  basis-1/3">
        <li>BEHANDLINGER</li>
        <li><Button className={buttonstyle} onClick={bookAppointment}>BOOK TIME</Button></li>
      </ul>
    </nav>
  );
};
