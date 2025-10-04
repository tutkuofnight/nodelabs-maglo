import { useNavigate } from "react-router-dom";

import ScheduledTransfers from "@/components/scheduled-transfers";
import { Dropdown } from "@/components/ui/dropdown";
import WalletCard from "@/components/wallet-card";
import WorkingCapitalChart from "@/components/working-capital-chart";
import DashboardNavigation from "@/components/dashboard-navigation";
import TotalsCard from "@/components/totals-card";
import RecentTransactions from "@/components/recent-transactions";

import { useAuth } from "@/context/auth-context";
import { useMobileMenu } from "@/context/mobile-menu-context";

import { wallets } from "@/data/wallets"

import { USD } from "@/lib/currency"
import { motion } from "motion/react"

import { useEffect } from "react";

import {
  CaretDownIcon,
  DotsIcon,
  NotificationIcon,
  SearchIcon,
  WalletIcon,
  WalletBlackIcon,
  WalletAddIcon,
  MenuIcon
} from "@icons";

export default function Dashboard() {
  const { user, isAuthenticated, logout, totals } = useAuth()
  const navigate = useNavigate()
  const { toggleMobileMenu } = useMobileMenu()
  
  useEffect(() => {
    if (!user && !isAuthenticated) {
      navigate("/sign-up", { replace: true })
    }
  }, [isAuthenticated, navigate])

  return (
    <main className="bg-white flex overflow-x-hidden">
      <DashboardNavigation />
      <motion.div 
        className="p-5 lg:py-[30px] lg:px-[40px] w-full xl:ml-[250px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.header 
          className="flex justify-between items-center mb-5 lg:mb-[30px]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-1">
            <button 
              className="ghost p-2 !text-black xl:hidden"
              onClick={toggleMobileMenu}
            >
              <MenuIcon width={24} height={24} />
            </button>
            <h1 className="text-xl md:text-2xl">Dashboard</h1>
          </div>
          <div className="flex items-center gap-[10px] md:gap-[45px]">
            <button className="p-0">
              <SearchIcon width={24} height={24} />
            </button>
            <button className="p-0">
              <NotificationIcon width={24} height={24} />
            </button>
            <Dropdown items={[{ text: "Logout", href: "/sign-in", onClick: logout }]}>
              <div className="flex items-center gap-3 md:mr-7">
                <img src="/profiles/user.png" alt="" />
                <span className="text-sm font-semibold text-text-1">
                  {user?.fullName}
                </span>
              </div>
              <CaretDownIcon width={20} height={20} className="mr-2" />
            </Dropdown>
          </div>
        </motion.header>
        <div className="flex flex-col lg:flex-row gap-10">
          <section className="flex-1 flex flex-col gap-[20px] lg:gap-[30px]">
            <motion.div 
              className="flex items-center flex-wrap md:flex-nowrap gap-[20px] lg:gap-[25px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TotalsCard
                icon={<WalletIcon width={20} />}
                title="Total balance"
                amount={USD(totals.totalBalance)}
                type="primary"
              />
              <TotalsCard
                icon={<WalletBlackIcon width={20} />}
                title="Total spending"
                amount={USD(totals.totalSpending)}
                type="ghost"
              />
              <TotalsCard
                icon={<WalletAddIcon width={20} />}
                title="Total saved"
                amount={USD(totals.totalSaved)}
                type="ghost"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <WorkingCapitalChart />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <RecentTransactions />
            </motion.div>
          </section>  
          <motion.aside 
            className="w-full lg:w-[354px] flex flex-col gap-[30px] sm:flex-row lg:flex-col"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-col -mb-6">
              <div className="flex items-center gap-3 justify-between pb-[15px]">
                <p className="text-lg font-semibold text-text-1">Wallet</p>
                <button className="p-0">
                  <DotsIcon width={22} height={22} />
                </button>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} 
                className="relative w-[354px]">
                {wallets.map((wallet, index) => (
                  <WalletCard
                    key={index} 
                    wallet={wallet} 
                  />
                ))}
              </motion.div>
            </div>
            <ScheduledTransfers className="w-full lg:-mt-5" />
          </motion.aside>
        </div>
      </motion.div>
    </main>
  );
}