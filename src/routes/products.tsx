import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [
    { title: "Fresh Fruit Cups — Taza Cup" }, { name: "description", content: "Preview two fresh, hand-layered fruit cups from Taza Cup." },
    { property: "og:title", content: "Fresh Fruit Cups — Taza Cup" }, { property: "og:description", content: "Two bright, hand-layered fruit cups made fresh." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ProductsPage,
});

function ProductsPage() {
  return <div className="page-shell products-page">
    <header className="page-intro"><p className="eyebrow">Choose your favorite</p><h1>Two cups.<br/><em>All fruit.</em></h1><p>Nothing hidden. Just fresh fruit, cut daily and layered to make every spoonful count.</p></header>
    <div className="catalog-grid products-catalog-grid">
      {products.map((product, index) => <ProductCard key={product.id} product={product} index={index} featured={index === 0} />)}
    </div>
  </div>;
}