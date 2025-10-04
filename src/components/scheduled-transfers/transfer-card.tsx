import type { TransferTypes } from "@/types"
import { USD } from "@/lib/currency"

export default function TransferCard({ transfer }: { transfer?: TransferTypes }) {
  return (
    <div className="flex items-center justify-between py-[15px]">
      <div className="flex items-center gap-[15px]">
        <img src={transfer?.profileImage} width={33} height={33} />
        <div className="flex flex-col text-text-1">
          <span className="font-semibold">{transfer?.fullname}</span>
          <span className="text-text-2 text-[12px] font-medium">April 28, 2022 at 11:00</span>
        </div>
      </div>
      <div className="flex items-center gap-1 *:text-black text-base font-semibold">
        <span>-</span>
        <p>{USD(transfer?.amount || 0)}</p>
      </div>
    </div>
  )
}