import mangoBerryImage from "@/assets/mango-berry-cup.jpg";
import tropicalGoldImage from "@/assets/tropical-gold-cup.jpg";

export const products = [
  {
    id: "mango-berry",
    name: "Fresh Cup No. 01",
    kicker: "Product name coming soon",
    description: "A colorful fresh-fruit blend, cut daily and layered by hand. Final name and recipe details are coming soon.",
    ingredients: "Seasonal fruit selection · Final recipe coming soon",
    price: 8.5,
    image: mangoBerryImage,
    accent: "berry" as const,
  },
  {
    id: "tropical-gold",
    name: "Fresh Cup No. 02",
    kicker: "Product name coming soon",
    description: "A bright fresh-fruit blend with a clean finish. Final name and recipe details are coming soon.",
    ingredients: "Seasonal fruit selection · Final recipe coming soon",
    price: 9,
    image: tropicalGoldImage,
    accent: "leaf" as const,
  },
] as const;

export const formatPrice = (price: number) => `$${price.toFixed(2)}`;