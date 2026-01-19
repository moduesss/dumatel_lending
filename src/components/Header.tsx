import Container from "@/components/Container";
import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <header className="site-header">
      <Container>
        <div className="site-header__inner">
          <a className="site-header__brand" href="/">
            Dumatel
          </a>
          <nav className="site-header__nav" aria-label="Primary">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#security">Security</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="site-header__actions">
            <Button href="#pricing" variant="ghost">
              See pricing
            </Button>
            <Button href="#cta">Start free</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
