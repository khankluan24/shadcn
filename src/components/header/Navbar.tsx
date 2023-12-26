import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Button } from "../ui/button"

const Navbar = () => {
  const renderNavItems = siteConfig.mainNav.map((navItem, index) => (
    <Button asChild key={index} variant="ghost">
      <Link
        href={navItem.href}
        className="text-sm font-medium transition-colors"
      >
        {navItem.title}
      </Link>
    </Button>
  ))
  return (
    <nav className="mx-6 lg:flex items-center space-x-4 lg:space-x-6 hidden md:block">
      {renderNavItems}
    </nav>
  )
}

export default Navbar
