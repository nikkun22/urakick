import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-base font-bold tracking-wide">
              <span className="text-kick-soft">URAKICK</span>
              <span className="ml-2 text-sm text-muted-foreground">裏キック団</span>
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              ふわっち発・Kickを盛り上げる配信者集団
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <Link href="/members" className="hover:text-[var(--accent-kick)]">
              MEMBERS
            </Link>
            <Link href="/rules" className="hover:text-[var(--accent-kick)]">
              RULES
            </Link>
            <Link href="/contact" className="hover:text-[var(--accent-kick)]">
              CONTACT
            </Link>
            <Link href="/about" className="hover:text-[var(--accent-kick)]">
              ABOUT
            </Link>
          </nav>
        </div>
        <p className="text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} URAKICK / 裏キック団
        </p>
      </div>
    </footer>
  );
}
