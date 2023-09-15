export type Order = { // fromDB
  id: number;
  userId: number;
  productIds?: { id: number }[];
};

export type OrderResponse = {
  id: number;
  userId: number;
  productIds?: number[];
};