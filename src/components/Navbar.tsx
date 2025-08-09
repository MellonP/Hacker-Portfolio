import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="font-semibold text-primary hover-scale">Nexus</Link>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-secondary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <Menu className="h-5 w-5" />
        </button>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.label}>
              <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <ul className="md:hidden border-t border-border bg-background/80">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
