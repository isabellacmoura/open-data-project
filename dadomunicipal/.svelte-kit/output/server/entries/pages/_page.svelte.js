import { y as bind_props, v as pop, t as push, z as ensure_array_like } from "../../chunks/index.js";
import "papaparse";
import { j as fallback } from "../../chunks/utils2.js";
import "d3";
import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function InteractiveMap($$payload, $$props) {
  push();
  let selectedMunicipio = fallback($$props["selectedMunicipio"], "");
  {
    console.log("selectedMunicipio mudou:", selectedMunicipio);
  }
  $$payload.out.push(`<div class="interactive-map-container svelte-gouuy3">`);
  {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="loading svelte-gouuy3"><p>Carregando mapa interativo...</p> <p>Isso pode demorar alguns segundos devido ao tamanho do arquivo.</p></div>`);
  }
  $$payload.out.push(`<!--]--> <div class="map-wrapper svelte-gouuy3"></div> <div class="zoom-controls svelte-gouuy3"><button class="zoom-btn svelte-gouuy3">+</button> <button class="zoom-btn svelte-gouuy3">−</button> <button class="zoom-btn svelte-gouuy3">⌂</button></div> <div class="legend-container svelte-gouuy3"><div class="legend-item svelte-gouuy3"><div class="legend-color color-beige svelte-gouuy3"></div> <span>Sem RAI e sem portal</span></div> <div class="legend-item svelte-gouuy3"><div class="legend-color color-light-purple-gray svelte-gouuy3"></div> <span>Município com Responsável de Acesso à Informação</span></div> <div class="legend-item svelte-gouuy3"><div class="legend-color color-red svelte-gouuy3"></div> <span>Município com RAI e Portal de Dados Abertos</span></div> <div class="legend-item svelte-gouuy3"><div class="legend-color color-orange svelte-gouuy3"></div> <span>Município com Portal de Dados Abertos e sem RAI</span></div></div></div>`);
  bind_props($$props, { selectedMunicipio });
  pop();
}
function _page($$payload, $$props) {
  push();
  let nome = "";
  let sugestoes = [];
  let selectedMunicipio = "";
  $$payload.out.push(`<div class="dashboard-container svelte-1nrlwwx"><div class="search-section svelte-1nrlwwx"><h2 class="svelte-1nrlwwx">Dados nos municípios</h2> <div class="search-input-container svelte-1nrlwwx"><input type="text"${attr("value", nome)} placeholder="Nome do município..." class="search-input svelte-1nrlwwx"/> <button class="search-btn svelte-1nrlwwx">Pesquisar</button></div> `);
  if (sugestoes.length > 0) {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(sugestoes);
    $$payload.out.push(`<ul class="sugestoes svelte-1nrlwwx"><!--[-->`);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let sugestao = each_array[$$index];
      $$payload.out.push(`<li class="svelte-1nrlwwx">${escape_html(sugestao.MUNICIPIO)}</li>`);
    }
    $$payload.out.push(`<!--]--></ul>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> <div class="map-section svelte-1nrlwwx">`);
  InteractiveMap($$payload, { selectedMunicipio });
  $$payload.out.push(`<!----></div></div>`);
  pop();
}
export {
  _page as default
};
