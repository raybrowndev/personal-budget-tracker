// IMPORTS 
import { Quicksand, Nunito } from "next/font/google"; 
import Sidebar from "@/components/sidebar"
import { Button } from "@/components/ui/button"


// PAGE START

const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-sans" }); 

export default function Home() {

  return (
    <div
      className={`flex min-h-screen bg-zinc-50 font-sans dark:bg-black ${quicksand.variable}`}
    >

      <Sidebar />

            <main className="flex flex-1 flex-col items-start justify-center gap-6 px-16 py-16 text-left">
        <p className="text-sm uppercase tracking-widest text-emerald-600">Version 2.0</p>
        <h1 className="max-w-xl text-4xl font-semibold leading-tight text-black dark:text-zinc-50 ">
          Dashboard
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Take control of your personal finances, set money goals, and get transparency on your spending habits.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-emerald-600 text-white hover:bg-emerald-500 cursor-pointer">
            Get Started
          </Button>
          <Button variant="outline" className="cursor-pointer">Created by Ray Brown 👋</Button>
        </div>
      </main>
    </div>
  );
}

// PAGE END
