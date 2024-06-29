"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
export function Navbar() {
  return (
    <header className="bg-gray-900 shadow dark:bg-gray-900">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center gap-2" href="/">
          <Image src={"/logo.svg"} alt="Logo image" width={32} height={32} />
          <span
            className={cn("text-lg font-bold text-white dark:text-gray-50")}
          >
            Karamsetu Foundation
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            className={cn(
              "text-white hover:text-white/90 dark:text-gray-400 dark:hover:text-gray-50"
            )}
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-white hover:text-white/90 dark:text-gray-400 dark:hover:text-gray-50"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-white hover:text-white/90 dark:text-gray-400 dark:hover:text-gray-50"
            href="/initiatives"
          >
            Initiatives
          </Link>
          <Link
            className="text-white hover:text-white/90 dark:text-gray-400 dark:hover:text-gray-50"
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-indigo-500 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-700"
            href="/donate"
          >
            Donate
          </Link>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <MenuIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-64" side="right">
              <div className="flex flex-col items-start gap-4 p-4">
                <Link
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="/initiatives"
                >
                  Initiatives
                </Link>
                <Link
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="/contact"
                >
                  Contact
                </Link>
                <Link
                  className="inline-flex h-9 w-full items-center justify-center rounded-md bg-indigo-500 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-700"
                  href="/donate"
                >
                  Donate
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
