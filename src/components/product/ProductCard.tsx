import React from "react"
import Link from "next/link"
import { ROUTES } from "@/constants/route"
import { ProductCardProps } from "@/types"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const ProductCard = (props: ProductCardProps) => {
  return (
    <Link
      href={ROUTES.HOME}
      className="outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg"
    >
      <Card className="flex flex-col justify-between h-full">
        <CardHeader className="flex gap-4 items-center">
          <Avatar>
            <AvatarImage src={`/img/${props.data.image}`} alt="recipe image" />
            <AvatarFallback>{props.data.title.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{props.data.title}</CardTitle>
            <CardDescription>{props.data.time} mins to cook.</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p>{props.data.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>View recipe</Button>
          {props.data.vegan && <Badge variant="secondary">Vegan !!!</Badge>}
        </CardFooter>
      </Card>
    </Link>
  )
}

export default ProductCard
