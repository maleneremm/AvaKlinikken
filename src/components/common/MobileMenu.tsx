interface MobileMenuProps {
  isOpen: boolean;
}

export const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const listItemStyle = "p-2 border-b border-stone-900 w-full";

  return (
    <>
      <div
        className={`absolute -right-4 w-screen ${isOpen ? "top-10" : "-top-200"}  ${isOpen ? "z-10" : "-z-10"} transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col bg-white p-4 gap-4">
          <li className={listItemStyle}>OM OSS</li>
          <li className={listItemStyle}>PRISER</li>
          <li className={listItemStyle}>BEHANDLINGER</li>
        </ul>
      </div>
    </>
  );
};
