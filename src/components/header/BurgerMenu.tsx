import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Icons } from "../Icons"
const BurgerMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Icons.menu className="h-6 md:hidden w-6" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          {siteConfig.mainNav.map((navItem, index) => (
            <Link
              key={index}
              href={navItem.href}
              className="block px-2 py-1 text-lg"
            >
              {navItem.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default BurgerMenu
