import { ReactNode } from 'react'

interface MobileOnlyProps {
  children: ReactNode
  message?: string
}

const MobileOnly = ({ children, message = "Para visualizar este contenido, por favor, utiliza un dispositivo móvil" }: MobileOnlyProps) => {
  return (
    <>
      {/* Mobile content - visible only on screens <= 600px */}
      <div className="block md:hidden">
        {children}
      </div>

      {/* Desktop message - visible only on screens > 600px */}
      <div className="hidden md:flex flex-col justify-center items-center min-h-screen p-4">
        <div className="flex flex-col justify-center items-center text-secondary font-secondary text-2xl md:text-2xl text-center font-medium">
          <span>{message}</span>
        </div>
      </div>
    </>
  )
}

export default MobileOnly 