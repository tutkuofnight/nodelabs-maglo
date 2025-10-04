import clsx from "clsx"

import { USD } from "@/lib/currency"
import { data } from "@/data/transactions"
import dayjs from "dayjs"

export default function TransactionsTable(){
  const titles = ["NAME/BUSINESS", "TYPE", "AMOUNT", "DATE"]

  return (
    <table className="w-full table-auto border-separate border-spacing-0">
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th key={title} className={clsx("px-4 py-3 text-center text-[12px] text-text-2 font-semibold", index == 0 && "!text-left pl-0", index == titles.length - 1 && "pr-0")}>
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.name} className="border-b border-[#F5F5F5] [&>td]:border-b [&>td]:last:border-b-0 [&>td]:border-[#F5F5F5]">
            <td className="px-4 py-3 pl-0 min-w-[200px]">
              <div className="flex items-center gap-[14px]">
                <img src={item.imageUrl} alt="" className="w-10 h-10 rounded" />
                <div className="flex flex-col">
                  <p className="text-text-1 font-medium text-sm">{item.name}</p>
                  <p className="text-text-2 text-[12px]">{item.business}</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-text-2 font-medium text-sm text-center">{item.type}</td>
            <td className="px-4 py-3 text-text-1 font-semibold text-sm text-center">{USD(item.amount)}</td>
            <td className="px-4 py-3 pr-0 text-text-2 font-medium text-sm text-center min-w-[100px]">{dayjs(item.date).format('MMM DD, YYYY')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}