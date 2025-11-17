import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useRouterState } from "@tanstack/react-router";
import type { FC } from "react";

type NavItem = {
  id: string;
  path: string;
  label: (tr: any) => string;
};

const navItems: NavItem[] = [
  { id: "home", path: "/", label: (tr) => tr.nav.home },
  { id: "gallery", path: "/gallery", label: (tr) => tr.nav.gallery },
  { id: "property", path: "/property", label: (tr) => tr.nav.property },
  { id: "location", path: "/location", label: (tr) => tr.nav.location },
  { id: "contact", path: "/contact", label: (tr) => tr.nav.contact },
];

const Header: FC = () => {
  const { t } = useLanguage();
  const routerState = useRouterState();

  return (
    <header className="sticky top-0 z-40 border-b border-forest bg-[--color-bg]/95 backdrop-blur-sm">
      <div className="page-container flex h-20 items-center justify-between gap-6">
        {/* Brand */}
        <div className="font-[--font-display] text-base md:text-lg lg:text-xl uppercase tracking-[0.25em] text-forest">
          Kråksjö säteri
        </div>

        {/* Nav + language */}
        <div className="flex items-center gap-6 md:gap-10">
          <nav
            aria-label="Huvudnavigation"
            className="hidden items-center gap-5 md:flex"
          >
            {navItems.map((item) => {
              const isActive = routerState.location.pathname === item.path;

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "text-xs md:text-sm lg:text-base uppercase tracking-[0.2em]",
                    "border-b-2 border-transparent pb-1",
                    "text-ink hover:text-forest hover:border-forest",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg]",
                    isActive ? "text-forest border-forest" : "",
                  ].join(" ")}
                >
                  {t(item.label)}
                </Link>
              );
            })}
          </nav>

          {/* Language toggle */}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
