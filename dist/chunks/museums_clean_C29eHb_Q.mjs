import { c as createComponent, a as createAstro, d as addAttribute, e as renderHead, f as renderSlot, b as renderTemplate } from './astro/server_CBYleNhd.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title || "NYC Museums"}</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/workspaces/csci_final_NYMuseums/src/layouts/Layout.astro", void 0);

const museums = [
	{
		name: "Metropolitan Museum of Art",
		tel: "(212) 535-7710",
		url: "https://www.metmuseum.org/",
		address1: "1000 5th Ave",
		address2: "",
		city: "New York",
		zip: "10028",
		the_geom: "POINT(-73.963244 40.779437)",
		lat: 40.779437,
		lon: -73.963244
	},
	{
		name: "American Museum of Natural History",
		tel: "(212) 769-5100",
		url: "https://www.amnh.org/",
		address1: "Central Park West & 79th St",
		address2: "",
		city: "New York",
		zip: "10024",
		the_geom: "POINT(-73.973988 40.781324)",
		lat: 40.781324,
		lon: -73.973988
	},
	{
		name: "Museum of Modern Art (MoMA)",
		tel: "(212) 708-9400",
		url: "https://www.moma.org/",
		address1: "11 W 53rd St",
		address2: "",
		city: "New York",
		zip: "10019",
		the_geom: "POINT(-73.977622 40.761433)",
		lat: 40.761433,
		lon: -73.977622
	}
];

export { $$Layout as $, museums as m };
