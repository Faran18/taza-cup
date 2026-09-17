import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/taza-cup-logo.png.asset.json";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link to="/" className="brand-lockup" aria-label="Taza Cup home">
        <img src={logoAsset.url} alt="" className="brand-mark" />
        <span>TAZA <small>CUP</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => (
          <Link key={link.to} to={link.to} activeOptions={{ exact: link.to === "/" }} activeProps={{ className: "active" }}>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <Button asChild variant="order" size="sm" className="header-order">
          <Link to="/orders" search={{ product: undefined }}><ShoppingBag /> Order</Link>
        </Button>
        <Button className="menu-button" variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <Link to="/orders" search={{ product: undefined }} onClick={() => setOpen(false)}>Place an order</Link>
        </nav>
      )}
    </header>
  );
}