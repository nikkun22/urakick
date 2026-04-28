import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "HOME" },
  { href: "/members", label: "MEMBERS" },
  { href: "/rules", label: "RULES" },
  { href: "/contact", label: "CONTACT" },
  { href: "/about", label: "ABOUT" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-kick-soft text-xl font-black tracking-widest">
            URAKICK
          </span>
          <span className="hidden text-xs text-muted-foreground sm:inline">
            裏キック団
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded px-2 py-1 text-xs font-medium tracking-wider text-muted-foreground transition-colors hover:text-[var(--accent-kick)] sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
