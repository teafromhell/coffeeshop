import morning from "../assets/morning.png";
import bold from "../assets/bold.png";
import everyday from "../assets/everyday.png";
import origin from "../assets/origin.png";
import { nanoid } from "nanoid";

export interface ICoffee {
  price: number;
  image: any;
  name: string;
  description: string;
  id: string;
}

export const coffee: ICoffee[] = [
  {
    image: morning,
    price: 99.0,
    name: "REVO morning",
    description: "Bitter, sweet aftertaste, floral scent",
    id: nanoid(),
  },
  {
    image: origin,
    price: 139.0,
    name: "REVO origin",
    description: "Sweet aftertaste, less bitter, strawberry sour taste",
    id: nanoid(),
  },

  {
    image: bold,
    price: 75.0,
    name: "REVO bold",
    description: "Bold, bitter, traditional",
    id: nanoid(),
  },
];

export const coffee2 = [
  {
    image: everyday,
    price: 85.0,
    name: "REVO everyday",
    description: "Balance, bitter aftertaste, chocolate taste",
    id: nanoid(),
  },
  {
    image: bold,
    price: 75.0,
    name: "REVO bold",
    description: "Bold, bitter, traditional",
    id: nanoid(),
  },
  {
    image: morning,
    price: 99.0,
    name: "REVO morning",
    description: "Bitter, sweet aftertaste, floral scent",
    id: nanoid(),
  },
];
