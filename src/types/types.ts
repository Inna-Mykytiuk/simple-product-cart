interface BaseProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
}

interface ProductProps extends BaseProduct {
  productId: number;
  quantity: number;
}

interface ProductItemProps extends BaseProduct {
  description: string;
}

interface CartItemProps extends BaseProduct {
  productId: number;
  quantity: number;
}

export type { BaseProduct, ProductProps, CartItemProps, ProductItemProps };