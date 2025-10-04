import { XIcon } from "@icons";
import { menuItems, bottomMenuItems } from "../data/nav"
import { useMobileMenu } from "@/context/mobile-menu-context"
import clsx from "clsx";

export default function DashboardNavigation() {
  const { isMobileMenuOpen, closeMobileMenu } = useMobileMenu()
  return (
    <div className={clsx("hidden xl:block fixed left-0 top-0 z-10", isMobileMenuOpen && "!block")}>
      <nav className="w-[250px] h-screen bg-gray-1 py-[30px] px-[25px] flex flex-col gap-10">
        <div className="flex items-center justify-between">
          <img src="/logo.svg" alt="Maglo." width={122} />
          <button className="ghost p-1 !text-black lg:hidden" onClick={closeMobileMenu}>
            <XIcon />
          </button>
        </div>
        <ul className="flex flex-col flex-1 gap-[2px]">
          {menuItems.map((item, index) => (
            <li key={item.name}>
              <a href={item.url} className={clsx("nav-link", index == 0 && "bg-primary !text-text-1 hover:bg-primary/70 !font-semibold")}>
                {item.icon && <item.icon />}
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-[2px]">
          {bottomMenuItems.map((item) => (
            <a href={item.url} className="nav-link">
              {item.icon && <item.icon />}
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
