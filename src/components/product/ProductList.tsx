import { ProductCardItem } from "@/types"

import ProductCard from "./ProductCard"

interface ProductListProps {
  items: ProductCardItem[]
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
  )
}

export default ProductList
