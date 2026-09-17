import mangoBerryImage from "@/assets/mango-berry-cup.jpg";
import tropicalGoldImage from "@/assets/tropical-gold-cup.jpg";

export const products = [
  {
    id: "mango-berry",
    name: "Mango Berry Cup",
    kicker: "Bright · Juicy · Familiar",
    description: "Golden mango, strawberries, blueberries, grapes, and banana — cut fresh and layered by hand.",
    ingredients: "Mango · Strawberry · Blueberry · Grape · Banana",
    price: 8.5,
    image: mangoBerryImage,
    accent: "berry" as const,
  },
  {
    id: "tropical-gold",
    name: "Tropical Gold Cup",
    kicker: "Sunny · Zesty · Lush",
    description: "Pineapple, mango, kiwi, green grapes, and passion fruit for a clean tropical finish.",
    ingredients: "Pineapple · Mango · Kiwi · Grape · Passion fruit",
    price: 9,
    image: tropicalGoldImage,
    accent: "leaf" as const,
  },
] as const;

export const formatPrice = (price: number) => `$${price.toFixed(2)}`;