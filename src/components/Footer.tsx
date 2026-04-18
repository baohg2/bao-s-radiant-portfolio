/**
 * Footer — minimal sign-off with quick links.
 */
const Footer = () => (
  <footer className="border-t border-border/60 bg-background/60 px-6 py-10 backdrop-blur">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
      <p>
        © {new Date().getFullYear()} <span className="font-medium text-foreground">Bao Haong</span>.
        Crafted with care.
      </p>
      <p className="font-mono text-xs uppercase tracking-wider">
        Built with React · Tailwind · ✨
      </p>
    </div>
  </footer>
);

export default Footer;
