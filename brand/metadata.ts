export const brandMetadata = {
  /*
   * ---------------------------------------------------------------------------
   * Business
   * ---------------------------------------------------------------------------
   */

  businessName: "Chaos to Calm Cleaning Co.",

  legalName: "Chaos to Calm Cleaning Co.",

  tagline: "Helping busy households create calmer, cleaner homes.",

  description:
    "Professional home cleaning in Bexhill, Hastings and the surrounding areas that helps you reclaim your time and enjoy a calmer home. Book trusted domestic cleaning services online with Chaos to Calm Cleaning Co.",

  /*
   * ---------------------------------------------------------------------------
   * Contact
   * ---------------------------------------------------------------------------
   */

  website: "https://www.chaostocalmcleaningco.co.uk",

  email: "roxannesmoothy@outlook.com",

  phone: "+44758120986",

  /*
   * ---------------------------------------------------------------------------
   * SEO
   * ---------------------------------------------------------------------------
   */

  locale: "en_GB",

  country: "GB",

  keywords: [
    "home cleaning",
    "domestic cleaning",
    "house cleaning",
    "cleaning company",
    "cleaner",
    "cleaning services",
    "weekly cleaner",
    "fortnightly cleaner",
    "deep cleaning",
    "one-off cleaning",
    "recurring cleaning",
    "Bexhill cleaner",
    "Hastings cleaner",
    "Battle cleaner",
    "St Leonards cleaner",
    "East Sussex cleaner",
    "Chaos to Calm Cleaning Co.",
  ],

  /*
   * ---------------------------------------------------------------------------
   * Service Area
   * ---------------------------------------------------------------------------
   */

  serviceAreas: [
    "Bexhill",
    "Hastings",
    "Battle",
    "St Leonards",
  ],

  location: {
    region: "East Sussex",

    country: "United Kingdom",

    latitude: null as number | null,

    longitude: null as number | null,
  },

  /*
   * ---------------------------------------------------------------------------
   * Business Hours
   * ---------------------------------------------------------------------------
   */

  openingHours: {
    monday: "08:00-19:00",
    tuesday: "08:00-19:00",
    wednesday: "08:00-19:00",
    thursday: "08:00-19:00",
    friday: "08:00-19:00",
    saturday: "08:00-19:00",
    sunday: "08:00-19:00",
  },

  /*
   * ---------------------------------------------------------------------------
   * Pricing
   * ---------------------------------------------------------------------------
   */

  pricing: {
    currency: "GBP",

    hourlyRate: 20,
  },

  /*
   * ---------------------------------------------------------------------------
   * Booking Configuration
   * ---------------------------------------------------------------------------
   */

  booking: {
    timezone: "Europe/London",

    minimumBookingHours: 2,

    minimumNoticeHours: 24,

    recurringBookings: true,

    allowDeposit: true,

    allowFullPayment: true,

    maxAdvanceBookingDays: 180,
  },

  /*
   * ---------------------------------------------------------------------------
   * Social Media
   * ---------------------------------------------------------------------------
   */

  socials: {
    facebook: "",

    instagram: "",

    tiktok: "",

    linkedin: "",
  },

  /*
   * ---------------------------------------------------------------------------
   * Branding
   * ---------------------------------------------------------------------------
   */

  themeColor: "#FCFBF8",

  primaryColor: "#7A9B76",

  accentColor: "#D98C8C",
  /*
   * ---------------------------------------------------------------------------
   * Assets
   * ---------------------------------------------------------------------------
   */

  icons: {
    favicon: "/favicon.ico",

    appleTouchIcon: "/apple-touch-icon.png",

    favicon32: "/favicon-32x32.png",

    favicon16: "/favicon-16x16.png",
  },

  openGraph: {
    image: "/og-image.png",
  },

  manifest: "/site.webmanifest",
} as const;

export type BrandMetadata = typeof brandMetadata;
