interface Product {
  price: number
  rating: {
    rate: number
    count: number
  }
  description: string
  title: string
  image: string
}

export type { Product }
