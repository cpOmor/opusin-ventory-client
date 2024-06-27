
export type TAddProduct = {
    user_id?: string;
    product_name: string;
    product_image: string;
    quantity: number;
    color?: string;
    size?: string;
    category: string;
    brand: string;
    compatibility: string;
    price: number;
    interface: string;
    condition: 'new' | 'used';
    capacity: number;
  };