// IMPORTS 
import Image from "next/image"; // Image class form next to add 
import { Button } from "@/components/ui/button"
import { Quicksand } from "next/font/google"; 
import { FaTv } from "react-icons/fa";
 

// PAGE START

const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-sans" }); 

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

<div className="p-6">
      <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center">
        <FaTv className="text-slate-900 text-xl" />
        <h1 className={quicksand.variable}>
          <span className="text-2xl font-bold text-emerald-500 text-shadow-xs p-2">
            Personal Budget Tracker
            </span>
        </h1>
      </div>
    </div>

        {/* <Image
          className="dark:invert"
          src="/pbt_logo.webp"
          alt="Personal Budget App logo"
          width={50}
          height={20}
          priority
        /> */}
  
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Personal Budget Tracker 2.0
          </h1>

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Take control of your personal finances, set money goals and get transparency on your spending habits
          </p>

        </div>
                <div className="flex flex-wrap items-center gap-2 md:flex-row">
         <a
              href="https://github.com/raybrowndev"
              className="font-medium text-zinc-950 "
            >
              <Button variant="outline">Created by Ray Brown 👋</Button>
            </a>{" "}
      

    </div>
      </main>
    </div>
  );
}

// PAGE END


