import { CardChipIcon, WifiIcon, MastercardIcon, VisaIcon } from "@icons"
import clsx from "clsx"

import type { Wallet } from "@/types"

type WalletCardProps = {
  className?: string
  wallet: Wallet
}

export default function WalletCard({ className, wallet }: WalletCardProps){
  return (
    <div className={clsx(
      "w-full max-w-[354px] h-auto max-h-[210px] relative px-[30px] py-[18px] bg-wallet-gradient bg-no-repeat bg-cover rounded-[15px]",
      wallet.type == 'commercial' &&
        "bg-wallet-commercial-glass border-[0.2px] border-gray-200 rounded-[100px] border-image-wallet-glass !w-[324px] !h-[172px] absolute left-1/2 -translate-x-1/2 -top-14",
      className
    )} style={{ backdropFilter: "blur(10px)" }}>
      <div className="flex flex-col justify-center h-full text-[#626260] gap-3">
        <div className={clsx("flex items-center gap-2 mb-4", wallet.type == "commercial" && "!mb-0")}>
          <p className="text-white font-bold text-base">Maglo.</p> 
          <p className={clsx("border-l border-[#626261] pl-2 text-[12px] font-medium", wallet.type == "commercial" && "text-gray-3 !border-gray-3")}>{wallet.type == 'commercial' ? 'Commercial' : 'Universal'} Bank</p>
        </div>
        <div className={clsx("flex items-center justify-between w-full mb-2", wallet.type == "commercial" && "!mb-0")}>
          <CardChipIcon />
          <WifiIcon />
        </div>
        <div className="flex flex-col w-full">
          <p className={clsx("text-white font-bold text-[17px] mb-4", wallet.type == "commercial" && "!text-text-1 !mb-0")}>
            {wallet.type == "universal" ? wallet.cardNumber.map((number) => number + " ").join('') : wallet.cardNumber.join('').replace(/\d{4}$/, '****')}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-text-2 font-medium text-[12px]">{wallet.month}/{wallet.year}</p>
            {wallet.type == "universal" ? <MastercardIcon /> : <VisaIcon />}
          </div>
        </div>
      </div>
    </div>
  )
}