import { CardChipIcon, WifiIcon, MastercardIcon } from "@icons"
import clsx from "clsx"

type WalletCardProps = {
  className?: string
  style?: 'universal' | 'commercial'
}

export default function WalletCard({ className, style = 'universal' }: WalletCardProps){
  return (
    <div className={clsx(
      "w-full max-w-[354px] h-auto max-h-[210px] relative px-[30px] py-[18px] bg-wallet-gradient bg-no-repeat bg-cover rounded-[15px]",
      style == 'commercial' &&
        "bg-wallet-commercial-glass border border-solid border-image-wallet-glass w-[324px] h-[172px]",
      className
    )}>
      <div className="flex flex-col justify-center h-full  text-[#626260] gap-3">
        <div className="flex items-center gap-3 mb-4">
          <p className="text-white">Maglo.</p> | <p>Universal Bank</p>
        </div>
        <div className="flex items-center justify-between w-full mb-2">
          <CardChipIcon />
          <WifiIcon />
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-white font-bold text-[17px]">1234 5678 9012 3456</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-text-2 font-medium text-[12px]">07/24</p>
          <MastercardIcon />
        </div>
      </div>
    </div>
  )
}