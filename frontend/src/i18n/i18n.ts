export type Language = "sv" | "de" | "en";

type TranslationTree = {
  home: {
    heroTitle: string;
    heroSubtitle: string;
    overviewTitle: string;
    overviewP1: string;
    overviewP2: string;
    ctaDiscover: string;
    ctaReadyTitle: string;
    ctaContact: string;
  };
  nav: {
    home: string;
    gallery: string;
    property: string;
    location: string;
    contact: string;
  };
  footer: {
    taglineTitle: string;
    taglineBody: string;
    navigation: string;
    contact: string;
    businessName: string;
    address: string;
    region: string;
    emailLabel: string;
    orgNumberLabel: string;
    rightsReserved: string;
    languagesLine: string;
  };
};

const translations: Record<Language, TranslationTree> = {
  sv: {
    home: {
      heroTitle: "Kråksjö säteri",
      heroSubtitle: "En stillsam skogsretreat för människor som vill andas ut.",
      overviewTitle: "En tillflyktsort i skogen",
      overviewP1:
        "Beläget djupt inne i en orörd skog erbjuder Kråksjö säteri en enastående tillflyktsort från vardagen.",
      overviewP2:
        "Vakna till fågelsång, andas in den rena skogsluften och återanknyt till det som verkligen betyder något.",
      ctaDiscover: "Upptäck mer",
      ctaReadyTitle: "Redo för din skogsretreat?",
      ctaContact: "Hör av dig",
    },
    nav: {
      home: "Hem",
      gallery: "Galleri",
      property: "Huset",
      location: "Plats",
      contact: "Kontakt",
    },
    footer: {
      taglineTitle: "Skogsretreat i brutal stil",
      taglineBody: "En enkel, ärlig UI för ett stillsamt ställe: skog, tystnad, sjö – och precis lagom mycket teknik.",
      navigation: "Navigation",
      contact: "Kontakt",
      businessName: "Kråksjö Säteri",
      address: "Kråksjö",
      region: "Småland, Sverige",
      emailLabel: "E-post",
      orgNumberLabel: "Org.nr",
      rightsReserved: "Alla rättigheter förbehållna",
      languagesLine: "Språk: Svenska · Deutsch · English",
    },
  },
  de: {
    home: {
      heroTitle: "Kråksjö Gutshof",
      heroSubtitle:
        "Ein ruhiger Rückzugsort im Wald für Menschen, die durchatmen möchten.",
      overviewTitle: "Ein Zufluchtsort im Wald",
      overviewP1:
        "Tief im unberührten Wald gelegen, bietet Kråksjö Gutshof einen außergewöhnlichen Rückzugsort vom Alltag.",
      overviewP2:
        "Wachen Sie mit Vogelgesang auf, atmen Sie die klare Waldluft und verbinden Sie sich mit dem, was wirklich zählt.",
      ctaDiscover: "Mehr entdecken",
      ctaReadyTitle: "Bereit für Ihren Waldrückzug?",
      ctaContact: "Kontakt aufnehmen",
    },
    nav: {
      home: "Start",
      gallery: "Galerie",
      property: "Haus",
      location: "Lage",
      contact: "Kontakt",
    },
    footer: {
      taglineTitle: "Waldrückzug im Brutalismus-Stil",
      taglineBody: "Eine einfache, ehrliche UI für einen ruhigen Ort: Wald, Stille, See – und genau die richtige Menge Technik.",
      navigation: "Navigation",
      contact: "Kontakt",
      businessName: "Kråksjö Gutshof",
      address: "Kråksjö",
      region: "Småland, Schweden",
      emailLabel: "E-Mail",
      orgNumberLabel: "Org.Nr.",
      rightsReserved: "Alle Rechte vorbehalten",
      languagesLine: "Sprachen: Svenska · Deutsch · English",
    },
  },
  en: {
    home: {
      heroTitle: "Kråksjö Manor",
      heroSubtitle:
        "A tranquil forest retreat for people who need to exhale.",
      overviewTitle: "A retreat in the woods",
      overviewP1:
        "Tucked deep inside untouched forest, Kråksjö Manor offers an extraordinary escape from everyday life.",
      overviewP2:
        "Wake up to birdsong, breathe in the clear forest air, and reconnect with what truly matters.",
      ctaDiscover: "Discover more",
      ctaReadyTitle: "Ready for your forest retreat?",
      ctaContact: "Get in touch",
    },
    nav: {
      home: "Home",
      gallery: "Gallery",
      property: "Property",
      location: "Location",
      contact: "Contact",
    },
    footer: {
      taglineTitle: "Forest retreat in brutalist style",
      taglineBody: "A simple, honest UI for a tranquil place: forest, silence, lake – and just the right amount of technology.",
      navigation: "Navigation",
      contact: "Contact",
      businessName: "Kråksjö Manor",
      address: "Kråksjö",
      region: "Småland, Sweden",
      emailLabel: "Email",
      orgNumberLabel: "Org. No.",
      rightsReserved: "All rights reserved",
      languagesLine: "Languages: Svenska · Deutsch · English",
    },
  },
};

export { translations };

