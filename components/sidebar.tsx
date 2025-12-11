'use client'

import Link from "next/link";
// import { Button } from "@/components/ui/button"
import { Nunito, Quicksand } from "next/font/google"; 
import { usePathname } from "next/navigation";
import { PiSquaresFour } from "react-icons/pi";
import { FaFolder, FaReceipt, FaRegChartBar, FaRegCreditCard, FaRegClone } from "react-icons/fa";


const nunito = Nunito({ subsets: ["latin"], variable: "--logo-font" }); 
const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-sans" }); 

export default function Sidebar() {
    
    const pathname = usePathname(); // Path name matching href
    const menuItems = [
        { label: "Dashboard", icon: PiSquaresFour, href: "/"},
        { label: "Budget", icon: FaRegChartBar, href: "/budget"},
        { label: "Income", icon: FaRegCreditCard, href: "/income"},
        { label: "Expenses", icon: FaReceipt, href: "/expenses" },
        { label: "Savings", icon: FaFolder, href: "/savings" }
    ]

return (
    <div
      className={`flex min-h-screen bg-zinc-50 font-sans dark:bg-black ${quicksand.variable}`}
    >
      <aside className="flex w-64 flex-col border-r border-zinc-200 bg-white/80 p-6 dark:border-zinc-800 dark:bg-zinc-900/70">
        <div className="sticky top-6 flex flex-col gap-3">
          <Link
            href="/"
            className="cursor-pointer transition delay-0 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-103"
          >
            <h1 className={nunito.variable}>
              <span className="pl-2 text-2xl font-bold text-emerald-700 text-shadow-1xs">
                Money Manager 
              </span>
            </h1>
          </Link>
        </div>

        <nav className="mt-10 flex flex-col gap-2 text-sm font-semibold text-zinc-600 dark:text-zinc-300">
          {menuItems.map(({ label, icon: Icon, href }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={label}
                href={href}
                className={`rounded-md px-3 py-2 transition hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/40 ${
                  isActive ? "bg-emerald-50 text-emerald-700" : "text-zinc-600 dark:text-zinc-300"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon className="text-lg" />
                  {label}
                </span>
              </Link>
            );
          })}
        </nav>


        <Link
          href="/settings"
          className="mt-auto rounded-md px-3 py-2 text-sm font-semibold text-zinc-500 transition hover:bg-zinc-100 hover:text-emerald-600 dark:hover:bg-zinc-800"
        >
          Settings
        </Link>
      </aside>

    </div>
  );
}