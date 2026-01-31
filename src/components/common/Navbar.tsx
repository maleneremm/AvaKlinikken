import { Button } from "./Button";
import { Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";
import { bookAppointment } from "../../utils/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonStyle =
    "border border-(--primary-border-color) text-(--primary-font-color) px-3 py-1 rounded-md lg:w-32";

  return (
    <>
      <nav className="relative flex flex-row items-center p-4 bg-white justify-between">
        <h1 className="text-2xl basis-1/3">AVAKLINIKKEN</h1>
        <div className="flex items-center gap-4">
          <ul className="flex-row gap-8 items-center justify-center hidden lg:flex">
            <li>OM OSS</li>
            <li>PRISER</li>
            <li>BEHANDLINGER</li>
          </ul>
          <div className="flex gap-4 justify-center items-center">
            <Button className={buttonStyle} onClick={bookAppointment}>
              Book time
            </Button>
            <div className="relative lg:hidden">
              <Menu onClick={() => setIsOpen(!isOpen)} />
              <MobileMenu isOpen={isOpen} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
