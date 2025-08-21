import { w as slot } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  $$payload.out.push(`<main class="main svelte-rckyv0"><!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!----></main>`);
}
export {
  _layout as default
};
