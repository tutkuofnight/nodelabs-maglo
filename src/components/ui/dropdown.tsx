import { useState, type ReactNode } from "react"
import { useNavigate } from "react-router-dom"

export type DropdownItemTypes = {
  text: string
  href?: string
  icon?: ReactNode
  onClick?: () => void
}

export function Dropdown({ items, children }: { items: DropdownItemTypes[], children: ReactNode }){
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const dropdownItemClick = (item: DropdownItemTypes) => {
    if (item.onClick) {
      item.onClick()
    }
    if (item.href) {
      navigate(item.href)
    }
  }

  return (
    <div className="min-w-fit relative">
      <button className="rounded-[100px] px-[7px] py-[6px] bg-gray-1 flex items-center gap-7" onClick={toggleDropdown}>
        {children}
      </button>
      {isOpen && (
        <div className="absolute rounded-[100px] bg-gray-1 top-14 left-0 w-full p-4 *:[&>button]:w-full">
          {
            items.map((item: DropdownItemTypes) => (
              <button onClick={() => dropdownItemClick(item)}>
                {item.icon}
                {item.text}
              </button>
            ))
          }
        </div>
      )}
    </div>
  )
}