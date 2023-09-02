export type TId = string;

export type TypeBouquet = {
  id: TId;
  value: string;
};

export type CardBouquet = {
  id: TId;
  name: string;
  price: string;
  image: string;
};

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
