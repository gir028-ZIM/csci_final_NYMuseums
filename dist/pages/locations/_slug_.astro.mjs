import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CBYleNhd.mjs';
import 'piccolore';
import 'html-escaper';
import { m as museums, $ as $$Layout } from '../../chunks/museums_clean_C29eHb_Q.mjs';
import { $ as $$MuseumCard } from '../../chunks/MuseumCard_CmL7bFDU.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  const locs = [...new Set(museumList.map((m) => m.city))].sort();
  return locs.map((city) => ({
    params: { slug: city.toLowerCase().replace(/\s+/g, "-") },
    props: { city }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const rows = Array.isArray(museums) ? museums : museums.data || [];
  const museumList2 = rows.map((row) => ({
    the_geom: row.the_geom ?? row[8],
    name: row.name ?? row[9],
    tel: row.tel ?? row[10],
    url: row.url ?? row[11],
    address1: row.address1 ?? row[12] ?? row.adress1 ?? "",
    address2: row.address2 ?? row[13] ?? "",
    city: row.city ?? row[14] ?? "",
    zip: row.zip ?? row[15] ?? ""
  }));
  const locations = [...new Set(museumList2.map((m) => m.city))].sort();
  const { city } = Astro2.props;
  const locationMuseums = museumList2.filter((m) => m.city === city);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Museums in ${city} - NYC Museums Directory`, "data-astro-cid-g54tvpik": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-g54tvpik> <h1 data-astro-cid-g54tvpik>🏛️ ${city}</h1> <p data-astro-cid-g54tvpik>Museums and Cultural Institutions</p> </header> <nav data-astro-cid-g54tvpik> <ul data-astro-cid-g54tvpik> <li data-astro-cid-g54tvpik><a href="/" data-astro-cid-g54tvpik>Home</a></li> <li data-astro-cid-g54tvpik><a href="/locations/" data-astro-cid-g54tvpik>All Locations</a></li> </ul> </nav> <section class="location-title" data-astro-cid-g54tvpik> <h1 data-astro-cid-g54tvpik>${city}</h1> <p data-astro-cid-g54tvpik>Discover ${locationMuseums.length} museums in ${city}</p> </section> <section class="location-links" data-astro-cid-g54tvpik> <h3 data-astro-cid-g54tvpik>Other Locations</h3> <ul data-astro-cid-g54tvpik> ${locations.map((loc) => renderTemplate`<li data-astro-cid-g54tvpik> <a${addAttribute(`/locations/${loc.toLowerCase().replace(/\s+/g, "-")}/`, "href")} data-astro-cid-g54tvpik> ${loc} (${museumList2.filter((m) => m.city === loc).length})
</a> </li>`)} </ul> </section> <div class="museums-grid" data-astro-cid-g54tvpik> ${locationMuseums.map((museum) => renderTemplate`${renderComponent($$result2, "MuseumCard", $$MuseumCard, { "name": museum.name, "address1": museum.address1, "city": museum.city, "zip": museum.zip, "tel": museum.tel, "url": museum.url, "data-astro-cid-g54tvpik": true })}`)} </div> <footer data-astro-cid-g54tvpik> <p data-astro-cid-g54tvpik>&copy; 2025 NYC Museums Directory | Data from NYC OpenData</p> </footer> ` })} `;
}, "/workspaces/csci_final_NYMuseums/src/pages/locations/[slug].astro", void 0);

const $$file = "/workspaces/csci_final_NYMuseums/src/pages/locations/[slug].astro";
const $$url = "/locations/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
