import TransactionsTable from "./transactions-table"
export default function RecentTransactions(){
  return (
    <div className="w-full rounded-lg border border-gray-3 px-[25px] py-5">
      <div className="flex items-center justify-between">
        <p className="text-[18px] font-semibold">Recent Transaction</p>
        <a href="" className="text-secondary font-semibold text-sm">View All</a>
      </div>
      <TransactionsTable />
    </div>
  )
}