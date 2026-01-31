import type { ReactNode } from "react"

interface buttonProps {
children: ReactNode,
onClick: () => void,
className: string
}

export const Button = ({children, onClick, className} : buttonProps) => {
return (
          <button className={`${className} cursor-pointer`} onClick={onClick}>{children}</button>
)
}
