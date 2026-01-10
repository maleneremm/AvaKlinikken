import type { ReactNode } from "react"

interface buttonProps {
children: ReactNode,
onClick: () => void,
className: string
}

const Button = ({children, onClick, className} : buttonProps) => {
return (
          <button className={className} onClick={onClick}>{children}</button>
)
}

export default Button