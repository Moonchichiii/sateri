import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "@tanstack/react-router";
import type { FC } from "react";

const Footer: FC = () => {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t-4 border-forest bg-[--color-bg] text-ink">
      <div className="page-container py-10 md:py-14">
        {/* Top grid */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-14">
          {/* Brand / tagline */}
          <section aria-labelledby="footer-brand" className="space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted">
              Kråksjö säteri
            </p>
            <h2
              id="footer-brand"
              className="font-[--font-display] text-2xl md:text-3xl lg:text-4xl text-forest leading-tight"
            >
              Your Beautiful Countryside Estate
            </h2>
            <p className="max-w-xs text-sm md:text-base leading-relaxed">
              Experience tranquility and nature at its finest in our historic countryside setting.
            </p>
          </section>

          {/* Navigation block */}
          <nav aria-label="Footer navigation" className="space-y-4 md:border-l md:border-forest/40 md:pl-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted">
              Navigation
            </p>
            <div className="flex flex-col space-y-2 text-sm md:text-base">
              <Link
                to="/"
                className="uppercase tracking-[0.16em] font-semibold hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg]"
              >
                Home
              </Link>
              {/* Commented out until these routes are implemented
              <Link
                to="/gallery"
                className="uppercase tracking-[0.16em] font-semibold hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg]"
              >
                Gallery
              </Link>
              <Link
                to="/property"
                className="uppercase tracking-[0.16em] font-semibold hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg]"
              >
                Property
              </Link>
              <Link
                to="/location"
                className="uppercase tracking-[0.16em] font-semibold hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg]"
              >
                Location
              </Link>
              <Link
                to="/contact"
                className="uppercase tracking-[0.16em] font-semibold hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg]"
              >
                Contact
              </Link>
              */}
            </div>
          </nav>

          {/* Contact / legal */}
          <section
            aria-labelledby="footer-contact"
            className="space-y-4 md:border-l md:border-forest/40 md:pl-8"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted">
              Contact
            </p>
            <div className="space-y-2 text-sm md:text-base">
              <p>Kråksjö Säteri AB</p>
              <p>Sätervägen 1</p>
              <p>123 45 Kråksjö, Sweden</p>

              <p className="mt-2">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@kraksjo-sateri.example"
                  className="underline underline-offset-2 hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg]"
                >
                  info@kraksjo-sateri.example
                </a>
              </p>

              <p className="text-xs text-muted">
                Org. nr: 123456-7890
              </p>
            </div>
          </section>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-forest/30 pt-4 text-[11px] md:text-xs uppercase tracking-[0.2em] text-muted flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} Kråksjö Säteri · All rights reserved
          </p>
          <p>Swedish & English</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
