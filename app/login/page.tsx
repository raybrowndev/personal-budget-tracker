"use client";
import { Quicksand } from "next/font/google"; 
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Loader2, Mail } from "lucide-react";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-sans" }); 

export default function LoginPage() {
  const supabase = createClient();
  const [isLoading, setIsLoading] = React.useState(false);

  async function signInWithGithub() {
    try {
      setIsLoading(true);
      await supabase.auth.signInWithOAuth({
        provider: "github",
        options: { redirectTo: `${window.location.origin}/auth/callback` },
      });
    } finally {
      setIsLoading(false);
    }
  }

  function onFakeEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Fake for now — you’ll wire this later if you want email/password.
  }

 

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-green-200 p-5">
      {/* Subtle background */}  
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-background " />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl" />
      
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-[520px] -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl" />
      
      <main className="relative z-10 flex min-h-screen flex-col gap-10 px-6 py-12 text-left lg:flex-row lg:gap-0 lg:px-16 lg:py-16 w-full">
        {/* <h1 className={`text-6xl font-bold font-sans ${quicksand.variable}`}>Sign in</h1> */}
        
        
        <div className="flex w-full items-center justify-center lg:basis-[30%]">
          
          <Card className="w-full border-gray-500/20 bg-background/90 backdrop-blur-xl">
            <CardHeader className="space-y-2">
              <div className=" items-center justify-between">
                <CardTitle className="text-4xl font-bold">Welcome!</CardTitle>
            </div>
            <CardDescription>
              Sign in to view your dashboard, transactions, and savings goals.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {/* OAuth */}
            <Button
              type="button"
              onClick={signInWithGithub}
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Connecting…
                </>
              ) : (
                <>
                  <Github className="mr-2 h-4 w-4" />
                  Continue with GitHub
                </>
              )}
            </Button>

            <div className="relative">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-3 text-xs text-muted-foreground">
                or
              </span>
            </div>

            {/* Fake email/password form */}
            <form onSubmit={onFakeEmailSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="pl-9"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="text-xs text-muted-foreground hover:text-foreground"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••"
                  autoComplete="current-password"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
                  <Checkbox id="remember" />
                  Remember me
                </label>

              </div>

            </form>
            
          </CardContent>
</Card>
        </div>

        <div className="flex w-full items-center justify-end lg:basis-[70%]">
          <div className="w-full max-w-2xl">
            <Image
              src="/piggy-bank.png"
              alt="piggy bank illustration"
              width={1200}
              height={900}
              priority
              className="mx-auto h-auto max-h-[600px] w-full object-contain"
            />
            
          </div>
        </div>
      </main>
      
    </div>
  );
}












// "use client";

// import { createClient } from "@/lib/supabase/client";

// export default function LoginPage() {
//   const supabase = createClient();

//   const signInWithGithub = async () => {
//     await supabase.auth.signInWithOAuth({
//       provider: "github",
//       options: {
//         redirectTo: `${window.location.origin}/auth/callback`,
//       },
//     });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <button
//         onClick={signInWithGithub}
//         className="px-4 py-2 rounded-md border"
//       >
//         Continue with GitHub
//       </button>
//     </div>
//   );
// }
