export interface ProductCardItem {
    title: string
    image: string
    time: number
    description: string
    vegan: boolean
    id: string
}
export interface ProductCardProps {
    data: ProductCardItem
}