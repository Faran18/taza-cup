import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, MessageCircle } from "lucide-react";
import logoAsset from "@/assets/taza-cup-logo.png.asset.json";
import mangoBerryImage from "@/assets/mango-berry-cup.jpg";
import { Button } from "@/components/ui/button";

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
        <a href="#fresh" className="scroll-cue"><ArrowDown /> Discover Taza</a>
      </div>
      <div className="hero-art">
        <div className="hero-sun" aria-hidden="true" />
        <img src={logoAsset.url} alt="A colorful Taza Cup filled with fresh fruit" />
      </div>
      <span className="hero-index">01 — 04</span>
    </section>
    <section id="fresh" className="tagline-band">
      <p className="eyebrow">A little cup of good</p>
      <h2>Fresh. Fruity.<br/><em>Made for You.</em></h2>
      <div className="tagline-actions">
        <Button asChild variant="order" size="lg"><Link to="/products">Checkout Our Products <ArrowRight /></Link></Button>
        <Button variant="line" size="lg" onClick={() => window.alert("Chat is coming soon.")}><MessageCircle /> Chat with Us</Button>
      </div>
    </section>
    <section className="animation-placeholder" data-animation-placeholder="cup-assembly">
      <div><span>Reserved canvas</span><strong>Custom cup animation</strong><p>Cup drop · fruit fall · lid close · logo stamp</p></div>
    </section>
    <section className="home-feature">
      <div className="feature-image"><img src={mangoBerryImage} alt="Mango Berry fruit cup" width={1200} height={1400} loading="lazy" /></div>
      <div className="feature-copy"><p className="eyebrow">The first pour</p><h2>Mango meets berry.</h2><p>Sweet mango, jewel-bright berries, and banana come together in the cup that started it all.</p><Button asChild variant="cream" size="lg"><Link to="/products">Meet the cups <ArrowRight /></Link></Button></div>
    </section>
  </>;
}