import { ArrowDownIcon } from "@icons"
import type { SelectOption } from "@/types"

interface SelectProps {
  className?: string
  options: SelectOption[]
  name: string
  onChange?: (value: string) => void
}

export default function Select({ className, options, name, onChange }: SelectProps){
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <div className={`relative ${className || ''}`}>
      <select 
        name={name}
        className="py-[7.5px] px-[10px] pr-[30px] bg-gray-2 text-[12px] font-normal rounded-md cursor-pointer appearance-none focus:outline-none transition-colors hover:bg-gray-5"
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute right-[10px] top-1/2 transform -translate-y-1/2 pointer-events-none">
        <ArrowDownIcon width={18} height={18} />
      </div>
    </div>
  )
}