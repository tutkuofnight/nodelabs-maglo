import TransferCard from "./transfer-card"

export default function ScheduledTransfers(){
  return (
    <aside>
      <div className="flex items-center justify-between mb-[25px]">
        <p className="text-[18px] font-semibold text-text-1">Scheduled Transfers</p>
        <a href="" className="text-secondary font-semibold text-sm">View All</a>
      </div>
      <div className="flex flex-col gap-[27px]">
        <TransferCard />
        <TransferCard />
        <TransferCard />
      </div>
    </aside>
  )
}