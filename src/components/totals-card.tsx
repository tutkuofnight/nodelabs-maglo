import type { ReactNode } from "react"
import clsx from "clsx"

type CardTypes = {
  icon: ReactNode
  title: string
  amount?: string,
  type?: 'ghost' | 'primary'
}

export default function TotalsCard({ title, amount, icon, type = 'primary' }: CardTypes){
  return (
    <div className={
      clsx("rounded-lg py-6 px-5 w-full flex items-center gap-[15px] bg-darkish", 
        type == "ghost" && "bg-gray-2"
      )
    }>
      <div className={clsx("w-[42px] h-[42px] rounded-full grid place-items-center bg-[#4E5257]", type == "ghost" && "bg-[#EBE8E8]")}>{icon}</div>
      <div className="flex flex-col gap-[10px]">
        <p className="text-sm font-normal text-text-2">{title}</p>
        {amount && <span className={clsx("text-2xl font-bold text-white", type == "ghost" && "!text-black")}>{amount}</span>}
      </div>
    </div>
  )
}