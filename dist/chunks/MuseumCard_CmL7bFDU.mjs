import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './astro/server_CBYleNhd.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$MuseumCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MuseumCard;
  const { name, address1, city, zip, tel, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card" data-astro-cid-r6lu55a3> <div class="card-header" data-astro-cid-r6lu55a3> <h3 data-astro-cid-r6lu55a3>${name}</h3> </div> <div class="card-body" data-astro-cid-r6lu55a3> <p class="address" data-astro-cid-r6lu55a3> <strong data-astro-cid-r6lu55a3>${address1}</strong> </p> <p class="city-zip" data-astro-cid-r6lu55a3>${city}, ${zip}</p> <p class="tel" data-astro-cid-r6lu55a3> <a${addAttribute(`tel:${tel}`, "href")} data-astro-cid-r6lu55a3>${tel}</a> </p> </div> <div class="card-footer" data-astro-cid-r6lu55a3> <a${addAttribute(url, "href")} target="_blank" class="visit-btn" data-astro-cid-r6lu55a3>Visit Website</a> </div> </div> `;
}, "/workspaces/csci_final_NYMuseums/src/components/MuseumCard.astro", void 0);

export { $$MuseumCard as $ };
