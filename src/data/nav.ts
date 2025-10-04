import { HomeIcon, TransactionsIcon, InvoicesIcon, MyWalletsIcon, SettingsIcon, HelpIcon, LogoutIcon } from "@icons"
import type { MenuItem } from "@/types"

export const menuItems: MenuItem[] = [
  {
    name: "Dashboard",
    icon: HomeIcon,
    url: "#"
  },
  {
    name: "Transactions",
    icon: TransactionsIcon,
    url: "#"
  },
  {
    name: "Invoices",
    icon: InvoicesIcon,
    url: "#"
  },
  {
    name: "My Wallets",
    icon: MyWalletsIcon,
    url: "#"
  },
  {
    name: "Settings",
    icon: SettingsIcon,
    url: "#"
  }
]

export const bottomMenuItems: MenuItem[] = [
  {
    name: "Help",
    icon: HelpIcon,
    url: "#"
  },
  {
    name: "Logout",
    icon: LogoutIcon,
    url: "#"
  }
]