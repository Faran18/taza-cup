import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div><span className="footer-wordmark">TAZA</span><span className="footer-cup">CUP</span></div>
      <p>Fresh fruit, prepared with care.</p>
      <nav aria-label="Footer navigation">
        <Link to="/products">Products</Link><Link to="/about">Our story</Link><Link to="/contact">Contact</Link>
      </nav>
      <small>© 2026 Taza Cup. Fresh. Fruity. Made for You.</small>
    </footer>
  );
}