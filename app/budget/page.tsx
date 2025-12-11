'use client'

import { Quicksand } from "next/font/google"; 
import Sidebar from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

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
      className={`flex min-h-screen bg-zinc-50 font-sans dark:bg-black ${quicksand.variable}`}
    >
    <Sidebar />
    <main className="flex flex-1 flex-col items-start justify-center gap-6 px-16 py-16 text-left">
        <p className="text-sm uppercase tracking-widest text-emerald-600">Version 2.0</p>
        <h1 className="max-w-xl text-4xl font-semibold leading-tight text-black dark:text-zinc-50">
          Budget
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Take control of your personal finances, set money goals, and get transparency on your spending habits.
        </p>

        <ChartContainer
          config={monthlyBudgetConfig}
          className="w-full rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60"
        >
          <BarChart data={monthlyBudgetData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="category"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="allocated"
              fill="var(--color-allocated)"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
            <Bar
              dataKey="spent"
              fill="var(--color-spent)"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ChartContainer>

        <div className="flex flex-wrap gap-4">
          <Button variant="outline" className="cursor-pointer">Start Budget</Button>
        </div>
      </main>
    </div>
  );
}
