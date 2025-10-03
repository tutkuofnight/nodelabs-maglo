interface Transfer {
  id: string
  amount: number
  date: string
}

export default function TransferCard({ transfer }: { transfer?: Transfer }) {
  console.log(transfer)
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[15px]">
        <img src="/profiles/user.png" width={33} height={33} />
        <div className="flex flex-col text-text-1">
          <span className="font-semibold">Saleh Ahmed</span>
          <span className="text-text-2 text-[12px] font-medium">April 28, 2022 at 11:00</span>
        </div>
      </div>
      <div className="flex items-center gap-1 *:text-black text-base font-semibold">
        <span>-</span>
        <p>$435.00</p>
      </div>
    </div>
  )
}