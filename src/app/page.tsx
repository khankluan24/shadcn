import { ProductCardItem } from "@/types"

import Container from "@/components/ui/container"
import HeroBanner from "@/components/main/HeroBanner"
import ProductList from "@/components/product/ProductList"

const fetchRecipes = async (): Promise<ProductCardItem[]> => {
  const result = await fetch("http://localhost:3001/recipes")
  await new Promise<void>((resolve, reject) => {
    setTimeout(resolve, 3000)
  })
  return result.json()
}
export default async function Home() {
  const recipes = await fetchRecipes()
  return (
    <Container>
      <HeroBanner />
      <main>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList items={recipes} />
        </div>
      </main>
    </Container>
  )
}
