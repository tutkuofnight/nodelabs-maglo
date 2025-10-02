// import { ReactComponent as WalletIcon }  from "../assets/icons/wallet.svg"

export default function Dashboard() {
  return (
    <main className="bg-white">
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
      <header>
        <h1>Dashboard</h1>
        <div>
          <button>S</button>
          <button>N</button>
          
        </div>
      </header>
    </main>
  );
}
