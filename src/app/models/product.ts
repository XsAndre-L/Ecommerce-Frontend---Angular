export type Product = {
  // type is better because it allows intellicence to see the type
  id: number | null;
  name: string;
  description: string;
  price: number;
  category: string;
  imgPath?: string;
};
