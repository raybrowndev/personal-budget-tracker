'use client'

import { Quicksand } from "next/font/google"; 
import Sidebar from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { FaPlus } from "react-icons/fa6";

const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-sans" }); 

const monthlyBudgetConfig = {
  allocated: {
    label: "Allocated",
    color: "hsl(142, 71%, 45%)",
  },
  spent: {
    label: "Spent",
    color: "hsl(217, 91%, 60%)",
  },
}

const monthlyBudgetData = [
  { category: "Housing", allocated: 1600, spent: 1525 },
  { category: "Groceries", allocated: 450, spent: 380 },
  { category: "Transportation", allocated: 300, spent: 290 },
  { category: "Utilities", allocated: 250, spent: 230 },
  { category: "Entertainment", allocated: 200, spent: 240 },
  { category: "Savings", allocated: 500, spent: 500 },
]

export default function BudgetPage() {
    
return (
    <div
      className={`flex min-h-screen w-screen font-sans ${quicksand.variable}`}
      style={{
        backgroundImage: 'url("/background.svg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
    <Sidebar />
    <main className="flex flex-1 flex-col items-start justify-center gap-6 px-16 py-16 text-left">
        <p className="text-sm uppercase tracking-widest text-emerald-600">get started</p>
        <h1 className="max-w-xl text-4xl font-semibold leading-tight text-black dark:text-zinc-50">
          Budget
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Take control of your personal finances, set money goals, and get transparency on your spending habits.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button variant="outline" className="cursor-pointer"><FaPlus />Add Transaction</Button>
        </div>
      </main>
    </div>
  );
}
