export type Order = {
  id: number | null;
  user_id: number;
  status: string;
  // items: OrderItem[];
  // total: number;
};

export interface OrderItem {
  name: string;
  quan: number;
}
