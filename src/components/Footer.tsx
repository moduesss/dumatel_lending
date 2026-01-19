import Container from "@/components/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__inner">
          <p>© {year} Dumatel. All rights reserved.</p>
          <nav className="site-footer__nav" aria-label="Footer">
            <a href="/">Privacy</a>
            <a href="/">Terms</a>
            <a href="/">Contact</a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
