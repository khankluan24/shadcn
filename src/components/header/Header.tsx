import React from "react"
import Link from "next/link"
import { ROUTES } from "@/constants/route"

import { Icons } from "../Icons"
import ProfileButton from "../ProfileButton"
import { ThemeToggle } from "../ThemeToggle"
import { Button } from "../ui/button"
import Container from "../ui/container"
import BurgerMenu from "./BurgerMenu"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            {/* Burger menu */}
            <BurgerMenu />
            <Link href={ROUTES.HOME} className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold uppercase">store name</h1>
            </Link>
          </div>
          {/* Nav */}
          <Navbar />
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              aria-label="Shopping Cart"
            >
              <Icons.shoppingCart className="h-6 w-6" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <ThemeToggle class="mr-6" />
            <ProfileButton />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
