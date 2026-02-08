import { NavLink } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
}

export const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const listItemStyle = "p-2 border-b border-stone-900 w-full text-2xl";

  return (
    <>
      <div
        className={`absolute left-0 right-0 top-full h-screen overflow-y-auto bg-white shadow-md transition-[transform,opacity] duration-300 ease-out will-change-transform ${
          isOpen
            ? "opacity-100  pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col bg-white p-4 gap-4">
          <NavLink to="/about">
            <li className={listItemStyle}>Om oss</li>
          </NavLink>
          <NavLink to="/prices">
            <li className={listItemStyle}>Priser</li>
          </NavLink>
          <NavLink to="/treatments">
            <li className={listItemStyle}>Behandlinger</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};
