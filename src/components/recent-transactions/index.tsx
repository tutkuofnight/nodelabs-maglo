import TransactionsTable from "./transactions-table"
import { SecondaryArrowRightIcon } from "@icons"
export default function RecentTransactions(){
  return (
    <div className="w-full rounded-lg border border-gray-3 px-[25px] py-5 overflow-x-auto">
      <div className="flex items-center justify-between pb-2">
        <p className="text-[18px] font-semibold text-text-1">Recent Transaction</p>
        <a href="" className="text-secondary font-semibold text-sm flex items-center gap-[6px] hover:text-secondary/90">View All <SecondaryArrowRightIcon /></a>
      </div>
      <TransactionsTable />
    </div>
  )
}