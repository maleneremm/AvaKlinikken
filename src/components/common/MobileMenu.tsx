import React from 'react'

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({isOpen}: MobileMenuProps) => {
    const listItemStyle = "p-2 border-b border-amber-300 w-full";

  return (
    <>
    <div className={`absolute -right-4 w-screen -z-10 ${isOpen ? 'top-10' : '-top-200'} transition-all duration-300 ease-in-out`}>
        <ul className="flex flex-col bg-amber-200 p-4 gap-4">
            <li className={listItemStyle}>OM OSS</li>
            <li className={listItemStyle}>PRISER</li>
            <li className={listItemStyle}>BEHANDLINGER</li>
        </ul>
    </div>
    </>
  )
}

export default MobileMenu