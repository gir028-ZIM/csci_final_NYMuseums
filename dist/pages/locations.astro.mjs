import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CBYleNhd.mjs';
import 'piccolore';
import 'html-escaper';
import { m as museums, $ as $$Layout } from '../chunks/museums_clean_C29eHb_Q.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Locations = createComponent(($$result, $$props, $$slots) => {
  const rows = Array.isArray(museums) ? museums : museums.data || [];
  const museumList = rows.map((row) => ({
    the_geom: row.the_geom ?? row[8],
    name: row.name ?? row[9],
    tel: row.tel ?? row[10],
    url: row.url ?? row[11],
    address1: row.address1 ?? row[12] ?? row.adress1 ?? "",
    address2: row.address2 ?? row[13] ?? "",
    city: row.city ?? row[14] ?? "",
    zip: row.zip ?? row[15] ?? ""
  }));
  const locations = [...new Set(museumList.map((m) => m.city))].sort();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Locations - NYC Museums Directory", "data-astro-cid-4jb2nhgl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-4jb2nhgl> <h1 data-astro-cid-4jb2nhgl>🗺️ Locations</h1> <p data-astro-cid-4jb2nhgl>Browse museums by NYC location</p> </header> <nav data-astro-cid-4jb2nhgl> <ul data-astro-cid-4jb2nhgl> <li data-astro-cid-4jb2nhgl><a href="/" data-astro-cid-4jb2nhgl>Home</a></li> <li data-astro-cid-4jb2nhgl><a href="/locations/" data-astro-cid-4jb2nhgl>All Locations</a></li> </ul> </nav> <section class="page-title" data-astro-cid-4jb2nhgl> <h1 data-astro-cid-4jb2nhgl>All Locations</h1> <p data-astro-cid-4jb2nhgl>Click on a location to see all museums</p> </section> <div class="locations-grid" data-astro-cid-4jb2nhgl> ${locations.map((city) => {
    const count = museumList.filter((m) => m.city === city).length;
    const slug = city.toLowerCase().replace(/\s+/g, "-");
    return renderTemplate`<a${addAttribute(`/locations/${slug}/`, "href")} class="location-card" data-astro-cid-4jb2nhgl> <h2 data-astro-cid-4jb2nhgl>${city}</h2> <div class="count" data-astro-cid-4jb2nhgl>${count} Museums</div> </a>`;
  })} </div> <footer data-astro-cid-4jb2nhgl> <p data-astro-cid-4jb2nhgl>&copy; 2025 NYC Museums Directory | Data from NYC OpenData</p> </footer> ` })} `;
}, "/workspaces/csci_final_NYMuseums/src/pages/locations.astro", void 0);

const $$file = "/workspaces/csci_final_NYMuseums/src/pages/locations.astro";
const $$url = "/locations";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Locations,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
