import { CaretDownIcon, DotsIcon, NotificationIcon, SearchIcon } from "@icons"
import ScheduledTransfers from "../components/scheduled-transfers";
import { Dropdown } from "../components/ui/dropdown";
import WalletCard from "../components/wallet-card";

export default function Dashboard() {
  return (
    <main className="bg-white flex flex-col gap-[30px]">
      <nav className="w-[250px] h-screen bg-gray-1 py-[30px] px-[25px]">
        <img src="/logo.svg" alt="Maglo." />
        <ul className="flex flex-col gap-[2px]">
          <li>
            <a href="">Dashboard</a>
          </li>
          <li>
            <a href="">Transactions</a>
          </li>
          <li>
            <a href="">Invoices</a>
          </li>
          <li>
            <a href="">My Wallets</a>
          </li>
          <li>
            <a href="">Settings</a>
          </li>
          <div className="flex-1"></div>
          <li>
            <a href="">Help</a>
          </li>
          <li>
            <a href="">Logout</a>
          </li>
        </ul>
      </nav>
      <div className="py-[30px] px-[40px] w-full">
        <header className="flex justify-between items-center">
          <h1>Dashboard</h1>
          <div className="flex items-center gap-[45px]">
            <button><SearchIcon width={24} height={24} /></button>
            <button><NotificationIcon width={24} height={24} /></button>
            <Dropdown items={[{ text: "Logout", href: "/sign-in" }]}>
              <div className="flex items-center gap-3 mr-7">
                <img src="/profiles/user.png" alt="" />
                <span className="text-sm font-semibold text-text-1">Mahfuzul Nabil</span>
              </div>
              <CaretDownIcon width={20} height={20} className="mr-2" />
            </Dropdown>
          </div>
        </header>
        <div className="flex gap-10">
          <section className="flex-1">

          </section>
          <aside className="w-[354px] flex flex-col gap-[30px]">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 justify-between">
                <p className="text-lg font-semibold text-text-1">Wallet</p>
                <button>
                  <DotsIcon width={22} height={22} />
                </button>
              </div>
              <div className="relative">
                <WalletCard />
                <WalletCard style="commercial" className="absolute bottom-14 left-1/2 -translate-x-1/2" />
              </div>
            </div>
            <ScheduledTransfers />
          </aside>
        </div>
      </div>
    </main>
  );
}
