import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { products, formatPrice } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { useOrderPanel } from "@/components/order-panel";

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [
    { title: "Fresh Fruit Cups — Taza Cup" }, { name: "description", content: "Preview two fresh, hand-layered fruit cups from Taza Cup." },
    { property: "og:title", content: "Fresh Fruit Cups — Taza Cup" }, { property: "og:description", content: "Two bright, hand-layered fruit cups made fresh." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ProductsPage,
});

function ProductsPage() {
  const { openOrderPanel } = useOrderPanel();
  return <div className="page-shell products-page">
    <header className="page-intro"><p className="eyebrow">Choose your favorite</p><h1>Two cups.<br/><em>All fruit.</em></h1><p>Nothing hidden. Just fresh fruit, cut daily and layered to make every spoonful count.</p></header>
    <div className="product-list">
      {products.map((product, index) => <article key={product.id} className={`product-row ${index % 2 ? "reverse" : ""}`}>
        <div className={`product-photo ${product.accent}`}><span>0{index + 1}</span><img src={product.image} alt={product.name} width={1200} height={1400} loading="lazy" /></div>
        <div className="product-detail"><p className="eyebrow">{product.kicker}</p><h2>{product.name}</h2><p className="product-description">{product.description}</p><p className="ingredients">{product.ingredients}</p><div className="product-buy"><strong>{formatPrice(product.price)}</strong><Button type="button" variant="order" size="lg" onClick={() => openOrderPanel(product.id)}>Add to order <ArrowRight /></Button></div></div>
      </article>)}
    </div>
  </div>;
}