export type TSellInfo = {
  user_id?: string;
  product_id?: string;
  quantity: number;
  date: string;
  buyerName: string;
};

export type TInitialState = {
  user: TSellInfo;
};
