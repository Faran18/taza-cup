import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Taza Cup — Fresh Fruit, Made for You" },
    { name: "description", content: "Freshly cut, joyfully layered fruit cups from Taza Cup." },
    { property: "og:title", content: "Taza Cup — Fresh Fruit, Made for You" },
    { property: "og:description", content: "Freshly cut, joyfully layered fruit cups from Taza Cup." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

function HomePage() {
  return <>
    <section className="home-hero">
      <div className="hero-copy">
        <p className="eyebrow">Fruit, done properly</p>
        <h1>Fresh fruit.<br/><em>Full of joy.</em></h1>
        <p className="hero-note">Hand-cut. Generously layered. Ready whenever you need something bright.</p>
        <a href="#how-it-works" className="scroll-cue"><ArrowDown /> Discover Taza</a>
      </div>
      <div className="hero-animation-placeholder" data-animation-placeholder="cup-assembly">
        <span>Reserved animation space</span>
        <strong>Cup assembly animation</strong>
        <p>Cup drop · fruit fall · lid close · logo stamp</p>
      </div>
    </section>
    <section id="how-it-works" className="how-story">
      <div className="how-story-heading">
        <span className="leaf-mark leaf-mark-large" aria-hidden="true" />
        <p className="eyebrow">Made your way</p>
        <h2>Three little steps.<br/><em>One joyful cup.</em></h2>
      </div>
      <ol className="how-story-steps">
        <li className="how-step how-step-choose"><span className="step-number">01</span><div><span className="leaf-mark" aria-hidden="true"/><strong>Choose <em>the one</em></strong><p>Start with whichever bright, fresh cup catches your eye.</p></div></li>
        <li className="how-step how-step-customize"><span className="step-number">02</span><div><span className="leaf-mark" aria-hidden="true"/><strong>Make it <em>yours</em></strong><p>Adjust the details so every spoonful suits your taste.</p></div></li>
        <li className="how-step how-step-collect"><span className="step-number">03</span><div><span className="leaf-mark" aria-hidden="true"/><strong>Collect <em>the joy</em></strong><p>We cut, layer, and finish your cup fresh for pickup.</p></div></li>
      </ol>
    </section>
    <section className="home-catalog">
      <header className="catalog-intro"><div><p className="eyebrow">A first taste</p><h2>Meet the first<br/><em>two cups.</em></h2></div><div><p>Names and recipes are still being perfected. For now, explore two fresh combinations taking shape.</p><Button asChild variant="ghost"><Link to="/products">View full collection <ArrowRight /></Link></Button></div></header>
      <div className="catalog-grid">
        {products.map((product, index) => <ProductCard key={product.id} product={product} index={index} featured={index === 0} />)}
      </div>
    </section>
  </>;
}