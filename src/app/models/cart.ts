import { Amiibo } from "./amiibo";

export interface Cart {
  items: Array<CartItem>;
  total: number;
}

interface CartItem {
  item: Amiibo;
  quantity: number;
}
