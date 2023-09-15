export type TId = string;

export type TypeBouquet = {
  id: TId;
  value: string;
};

export type Bouquet = {
  id: TId;
  type: string;
  name: string;
  price: string;
  image: string[];
  description: string;
};

export type CardBouquet = Omit<Bouquet, "description" | "type">;

export type Advantage = {
  name: string;
  description: string;
};

export type RadioOptionType = {
  value: string;
  title: string;
};

export type Delivery = "pickup" | "courier";

export type Auth = {
  password: string;
};

export type FileData = {
  src: string;
  name: string;
  size: number;
};

export type UserType = "admin" | "user";

export type FilterParams = {
  lower_price: number;
  upper_price: number;
  type: string;
  name: string;
};

export type BouquetOrder = {
  item: Bouquet;
  count: number;
};

export type BouquetsOrder = {
  [key: string]: BouquetOrder;
};
