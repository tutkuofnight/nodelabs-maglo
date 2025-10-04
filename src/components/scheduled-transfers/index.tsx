import TransferCard from "./transfer-card"
import { SecondaryArrowRightIcon } from "@icons"
import { transfers } from "@/data/transfers"

export default function ScheduledTransfers({ className }: { className?: string }){
  return (
    <aside className={className}>
      <div className="flex items-center justify-between mb-[10px]">
        <p className="text-[18px] font-semibold text-text-1">Scheduled Transfers</p>
        <a href="" className="text-secondary font-semibold text-sm flex items-center gap-[6px] hover:text-secondary/90">View All <SecondaryArrowRightIcon /></a>
      </div>
      <div className="flex flex-col [&>div]:border-b [&>div]:last:border-b-0 [&>div]:border-b-gray-1">
        {transfers.map((transfer, index) => (
          <TransferCard key={index} transfer={transfer} />
        ))}
      </div>
    </aside>
  )
}