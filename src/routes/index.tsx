import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
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
        <a href="#how-it-works" className="scroll-cue"><ArrowDown /> Discover Taza</a>
      </div>
      <div className="hero-animation-placeholder" data-animation-placeholder="cup-assembly">
        <span>Reserved animation space</span>
        <strong>Cup assembly animation</strong>
        <p>Cup drop · fruit fall · lid close · logo stamp</p>
      </div>
    </section>
    <section id="how-it-works" className="how-strip">
      <header><p className="eyebrow">Made your way</p><h2>From fresh fruit<br/>to your hands.</h2></header>
      <ol>
        <li><span>01</span><strong>Choose</strong><p>Pick the cup that catches your eye.</p></li>
        <li><span>02</span><strong>Customize</strong><p>Make the mix work for your taste.</p></li>
        <li><span>03</span><strong>Collect</strong><p>We cut, layer, and prepare it fresh.</p></li>
      </ol>
    </section>
    <section className="home-feature">
      <div className="feature-image"><img src={mangoBerryImage} alt="Fresh fruit cup placeholder" width={1200} height={1400} loading="lazy" /></div>
      <div className="feature-copy"><p className="eyebrow">A first look</p><h2>A fresh favorite is coming.</h2><p>Our first cup recipes are taking shape. Expect generous layers, vivid color, and fruit prepared with care.</p><Button asChild variant="cream" size="lg"><Link to="/products">Preview the cups <ArrowRight /></Link></Button></div>
    </section>
  </>;
}