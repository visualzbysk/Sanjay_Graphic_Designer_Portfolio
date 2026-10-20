// Central portfolio data. Images are the user's original artwork, cut from the
// supplied reference screenshots and hosted on the asset CDN.
const assets = import.meta.glob<{ default: { url: string } }>("../assets/works/*.asset.json", {
  eager: true,
});
export const img = (name: string): string => {
  const mod = assets[`../assets/works/${name}.jpg.asset.json`];
  if (!mod) throw new Error(`Missing portfolio asset: ${name}`);
  return mod.default.url;
};

export type Category = "posters" | "flyers" | "thumbnails" | "branding" | "social" | "print";
/** Presentation shape, matching the reference grid proportions. */
export type Shape = "poster" | "thumb" | "brand" | "social" | "print";

export interface Project {
  id: string;
  category: Category;
  title: string;
  image: string;
  shape: Shape;
}

export const FILTERS: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "ALL" },
  { value: "posters", label: "POSTERS" },
  { value: "flyers", label: "FLYERS" },
  { value: "thumbnails", label: "THUMBNAILS" },
  { value: "branding", label: "BRANDING" },
  { value: "social", label: "SOCIAL MEDIA" },
  { value: "print", label: "PRINT DESIGN" },
];

const p = (category: Category, shape: Shape, rows: [string, string][]): Project[] =>
  rows.map(([id, title]) => ({ id, category, shape, title, image: img(id) }));

export const PROJECTS: Project[] = [
  ...p("posters", "poster", [
    ["poster-music-poster", "MUSIC POSTER"],
    ["poster-artist-poster", "ARTIST POSTER"],
    ["poster-manipulation", "MANIPULATION"],
    ["poster-music-campaign-1", "MUSIC CAMPAIGN"],
    ["poster-music-campaign-2", "MUSIC CAMPAIGN"],
    ["poster-gaming-poster", "GAMING POSTER"],
    ["poster-live-concert", "LIVE CONCERT POSTER"],
    ["poster-branding-poster", "BRANDING POSTER"],
  ]),
  ...p("flyers", "poster", [
    ["flyer-cafe-opening", "CAFE OPENING FLYERS"],
    ["flyer-food-offer", "FOOD OFFER FLYERS"],
    ["flyer-gym-shop", "GYM SHOP FLYERS"],
    ["flyer-workshop", "WORKSHOP FLYERS"],
    ["flyer-music-fest", "MUSIC FEST FLYERS"],
  ]),
  ...p("thumbnails", "thumb", [
    ["thumb-gaming", "GAMING THUMBNAIL"],
    ["thumb-youtube-milestone", "YOUTUBE MILESTONE THUMBNAIL"],
    ["thumb-live-stream", "LIVE STREAM THUMBNAIL"],
    ["thumb-short-film", "SHORT FILM SERIES THUMBNAIL"],
    ["thumb-tech-stack", "TECH STACK THUMBNAIL"],
    ["thumb-food-challenge", "FOOD CHALLENGE VIDEO THUMBNAIL"],
    ["thumb-brand-redesign", "BRAND REDESIGN THUMBNAIL"],
    ["thumb-travel-vlog", "TRAVEL VLOG THUMBNAIL"],
  ]),
  ...p("branding", "brand", [
    ["brand-tea-logo", "TEA BRAND LOGO"],
    ["brand-tea-mockup", "TEA BRAND MOCKUP"],
    ["brand-juice-logo", "JUICE BRAND LOGO"],
    ["brand-juice-mockup", "JUICE BRAND MOCKUP"],
    ["brand-clothing-logo", "CLOTHING BRAND LOGO"],
    ["brand-clothing-mockup", "CLOTHING BRAND MOCKUP"],
    ["brand-cashew-logo", "CASHEW BRAND LOGO"],
    ["brand-cashew-mockup", "CASHEW BRAND MOCKUP"],
  ]),
  ...p("social", "social", [
    ["social-cafe", "CAFE SOCIAL MEDIA POST"],
    ["social-festival", "FESTIVAL EVENT SOCIAL MEDIA POST"],
    ["social-sports-shoe", "SPORTS SHOE LAUNCH POST"],
    ["social-beauty", "BEAUTY BRAND SOCIAL MEDIA POST"],
    ["social-youtube-milestone", "YOUTUBE MILESTONE POST"],
    ["social-hotel", "HOTEL SOCIAL MEDIA POST"],
    ["social-travel", "TRAVEL DESTINATION POST"],
    ["social-smartphone", "SMARTPHONE LAUNCH POST"],
  ]),
  ...p("print", "print", [
    ["print-business-card", "SA DESIGNS BUSINESS CARD"],
    ["print-table-tent", "SAFFRON TABLE TENT"],
    ["print-menu", "THAMIRAI RESTAURANT MENU"],
    ["print-catalogue", "NOVA LIVING PRODUCT CATALOGUE"],
    ["print-brochure", "THE AARA RESORT BROCHURE"],
    ["print-packaging", "NOVA ROAST COFFEE PACKAGING"],
  ]),
];

// export const filterProjects = (f: Category | "all") =>
//   f === "all" ? PROJECTS : PROJECTS.filter((x) => x.category === f);

const FEATURED_IDS = [
  // 2 Posters
  "poster-music-poster",
  "poster-branding-poster",
  "poster-live-concert",

  // 2 Flyers
  "flyer-gym-shop",
  "flyer-food-offer",
  "flyer-cafe-opening",

  // 1 thumbnails
  "thumb-gaming",

  // 1 Branding
  "brand-clothing-logo",

  // 1 Social Media
  "social-beauty",

  // 1 Print Design
  "print-business-card",
];

export const filterProjects = (f: Category | "all") =>
  f === "all"
    ? PROJECTS.filter((project) => FEATURED_IDS.includes(project.id))
    : PROJECTS.filter((project) => project.category === f);