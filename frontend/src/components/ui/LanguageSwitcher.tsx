import { useLanguage } from "@/contexts/LanguageContext";
import type { FC } from "react";

const languages = [
  { code: "sv", label: "SV" },
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
] as const;

export const LanguageSwitcher: FC = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="radiogroup"
      aria-label="Språk / Language"
      className="inline-flex items-center rounded-full border border-forest/70 bg-[--color-bg] px-1 py-1 text-xs md:text-sm"
    >
      {languages.map((item) => {
        const isActive = lang === item.code;

        return (
          <button
            key={item.code}
            type="button"
            role="radio"
            aria-checked={isActive ? "true" : "false"}
            onClick={() => setLang(item.code)}
            className={[
              "min-w-[2.5rem] px-3 py-1 rounded-full uppercase tracking-[0.15em]",
              "transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg]",
              isActive
                ? "bg-forest text-[--color-bg]"
                : "text-ink hover:bg-forest/10",
            ].join(" ")}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};
