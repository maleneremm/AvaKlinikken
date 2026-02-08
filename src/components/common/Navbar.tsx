import { Button } from "./Button";
import { Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { useEffect, useState } from "react";
import { bookAppointment } from "../../utils/utils";
import { NavLink, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const buttonStyle =
    "border border-(--primary-border-color) text-(--primary-font-color) bg-[#e8dfd0] px-2 py-1 lg:w-32 rounded-md transition-all duration-150 ease-out hover:bg-[#e3d9c8] active:scale-[0.97] focus:outline-none focus:ring-0.5 focus:ring-(--primary-border-color)/30";

  return (
    <>
      <nav className="relative flex flex-row items-center p-4 bg-[#cfbfaf] justify-between">
        <h1 className="text-2xl basis-1/3 lg:text-4xl">
          <NavLink to="/">AvaKlinikken</NavLink>
        </h1>
        <div className="flex items-center gap-4 lg:gap-8">
          <ul className="flex-row gap-8 items-center justify-center hidden lg:flex lg:text-xl">
            <li
              className="underline
         decoration-[0.5px]
         underline-offset-2
         decoration-transparent
         hover:decoration-current
         transition"
            >
              <NavLink to="/about">Om oss</NavLink>
            </li>
            <li
              className="underline
         decoration-[0.5px]
         underline-offset-2
         decoration-transparent
         hover:decoration-current
         transition"
            >
              <NavLink to="/prices">Priser</NavLink>
            </li>
            <li
              className="underline
         decoration-[0.5px]
         underline-offset-2
         decoration-transparent
         hover:decoration-current
         transition"
            >
              <NavLink to="/treatments">Behandlinger</NavLink>
            </li>
          </ul>
          <div className="flex gap-4 justify-center items-center lg:text-xl lg:gap-8">
            <Button className={buttonStyle} onClick={bookAppointment}>
              Book time
            </Button>
            <div className="relative lg:hidden">
              <Menu onClick={() => setIsOpen(!isOpen)} />
            </div>
          </div>
        </div>
        <MobileMenu isOpen={isOpen} />
      </nav>
    </>
  );
};
