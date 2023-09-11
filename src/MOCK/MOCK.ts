import { CardBouquet, TypeBouquet } from "../types/types";

export const typesBouquet: TypeBouquet[] = [
  {
    id: "0",
    value: "type 1",
  },
  {
    id: "1",
    value: "type 2",
  },
  {
    id: "2",
    value: "type 3",
  },
  {
    id: "3",
    value: "type 4",
  },
];

export const bouquetImages: string[] = [
  "https://piratebrowser.com/wp-content/uploads/2021/10/flowers-1000x600.jpg",
  "https://ph0.qna.center/storage/photos/mihail2978/1872984.jpg",
  "https://img4.goodfon.ru/original/800x480/1/88/rozy-buket-buket-na-stole-rozovaia-roza.jpg",
  "https://malinkakat.ru/noname/imgbig/malinkakat_ru_11827.jpg",
  "https://balthazar.club/uploads/posts/2022-10/thumbs/1666322171_28-balthazar-club-p-sedobnie-buketi-oboi-30.jpg",
];

export const cardBouquet: CardBouquet = {
  id: "0",
  image: [
    "https://piratebrowser.com/wp-content/uploads/2021/10/flowers-1000x600.jpg",
  ],
  name: "super name 1",
  price: "1000",
};

export const cardBouquetArr: CardBouquet[] = [
  {
    id: "0",
    image: [
      "https://piratebrowser.com/wp-content/uploads/2021/10/flowers-1000x600.jpg",
    ],
    name: "super name 2",
    price: "500",
  },
  {
    id: "1",
    image: ["https://ph0.qna.center/storage/photos/mihail2978/1872984.jpg"],
    name: "super name 3",
    price: "700",
  },
  {
    id: "2",
    image: [
      "https://img4.goodfon.ru/original/800x480/1/88/rozy-buket-buket-na-stole-rozovaia-roza.jpg",
    ],
    name: "super name 4",
    price: "1000",
  },
  {
    id: "3",
    image: ["https://malinkakat.ru/noname/imgbig/malinkakat_ru_11827.jpg"],
    name: "super name 5",
    price: "900",
  },
];
