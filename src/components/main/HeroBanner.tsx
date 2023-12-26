import React from "react"

import { Icons } from "../Icons"
import { Button } from "../ui/button"

const HeroBanner = () => {
  return (
    <section className="space-y-10 pb-10" id="hero-banner">
      <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
        <div className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-[url('/img/hero-1920x1080.jpg')]">
          <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
            <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-4 rounded-lg">
              Featured Products
              <Button size="lg" className="w-full py-6 text-xl">
                <Icons.shoppingCart className="mr-2" />
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
