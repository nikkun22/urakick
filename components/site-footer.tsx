export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p className="font-mono tracking-wider">
          <span className="neon-text font-bold">URAKICK</span> /{" "}
          <span>裏キック団</span>
        </p>
        <p className="font-mono tracking-wider">
          © {new Date().getFullYear()} URAKICK. All transmissions encrypted.
        </p>
      </div>
    </footer>
  );
}
