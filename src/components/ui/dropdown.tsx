import { useState, type ReactNode } from "react"

export type DropdownItemType = {
  onClick?: () => void
  text: string
  href?: string
  icon?: ReactNode
}

export function Dropdown({ items }: { items: DropdownItemType[] }){
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="min-w-fit relative">
      <button className="rounded-[100px] px-[7px] py-[6px] bg-gray-1 flex items-center gap-7" onClick={toggleDropdown}>
        <div>
          <img src="/profiles/user.png" alt="" />
        </div>
        <img src="../assets/icons/caret-down.svg" alt="" />
      </button>
      {isOpen && (
        <div className="absolute top-3 left-0 w-full p-2">
          {/* {
            items.map((item: DropdownItemType) => {
              if (item.href) {

              }
            })
          } */}

        </div>
      )}
    </div>
  )
}