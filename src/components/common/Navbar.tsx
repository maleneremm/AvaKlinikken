import {Button} from "./Button";
import { Menu } from "lucide-react";
import {MobileMenu} from "./MobileMenu";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const bookAppointment = () => {};

  const buttonStyle =
    "border bg-brown-500 text-white p-2 rounded-md";

  return (
    <>
      <nav className="relative flex flex-row items-center p-4 bg-white justify-between">
        <ul className="flex-row gap-8 place-content-center basis-1/3 hidden">
          <li>OM OSS</li>
          <li>PRISER</li>
        </ul>
        <h1 className="text-2xl basis-1/3">AVAKLINIKKEN</h1>
        <ul className="flex-row gap-8 place-content-center  basis-1/3 hidden">
          <li>BEHANDLINGER</li>
        </ul>
        <Button className={buttonStyle} onClick={bookAppointment}>
          BOOK TIME
        </Button>
        <div className="relative">
          <Menu onClick={() => setIsOpen(!isOpen)} />
          <MobileMenu isOpen={isOpen} />
        </div>
      </nav>
    </>
  );
};
