import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CBYleNhd.mjs';
import 'piccolore';
import 'html-escaper';
import { m as museums, $ as $$Layout } from '../chunks/museums_clean_C29eHb_Q.mjs';
import { $ as $$MuseumCard } from '../chunks/MuseumCard_CmL7bFDU.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "NYC Museums Directory", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>🏛️ NYC Museums Directory</h1> <p data-astro-cid-j7pv25f6>Explore museums across all five boroughs</p> </header> <nav data-astro-cid-j7pv25f6> <ul data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6><a href="/" data-astro-cid-j7pv25f6>Home</a></li> <li data-astro-cid-j7pv25f6><a href="/locations/" data-astro-cid-j7pv25f6>By Location</a></li> </ul> </nav> <section class="stats" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Museums Found</h2> <p data-astro-cid-j7pv25f6>${museumList.length} Museums</p> </section> <div class="museums-grid" data-astro-cid-j7pv25f6> ${museumList.map((museum) => renderTemplate`${renderComponent($$result2, "MuseumCard", $$MuseumCard, { "name": museum.name, "address1": museum.address1, "city": museum.city, "zip": museum.zip, "tel": museum.tel, "url": museum.url, "data-astro-cid-j7pv25f6": true })}`)} </div> <footer data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>&copy; 2025 NYC Museums Directory | Data from NYC OpenData</p> </footer> ` })} `;
}, "/workspaces/csci_final_NYMuseums/src/pages/index.astro", void 0);

const $$file = "/workspaces/csci_final_NYMuseums/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
