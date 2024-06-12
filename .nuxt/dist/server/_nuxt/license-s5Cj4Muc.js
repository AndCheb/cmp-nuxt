import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "devalue";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "documents" }, _attrs))}><div class="wrapper"><div class="bread-crumbs">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "docs-link",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Главная страница`);
      } else {
        return [
          createTextVNode("Главная страница")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="docs-dot"></span>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "docs-link",
    to: "/#docs"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Документы`);
      } else {
        return [
          createTextVNode("Документы")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="docs-dot"></span><p class="docs-link-current">Лицензионный договор</p></div><h1 class="docs-title">Лицензионный договор</h1><h2 class="docs-title topic">Заголовок 1</h2><p class="docs-text"> Представленная тележка-дозатор обеспечивает высококачественную обработку любых территорий сыпучими противогололедными реагентами самых разных типов, включая такие тяжелые, как гранитная и мраморная крошка, песок и пескосоляные смеси. Тележка прекрасно подходит для использования во дворах многоквартирных домов, обработки территорий промышленных предприятий, востребована владельцами магазинов, различных коммерческих компаний. Кроме того, она может использоваться для высева семян на газонах, теннисных кортах и других территориях. </p><p class="docs-text"> Представленная тележка-дозатор обеспечивает высококачественную обработку любых территорий сыпучими противогололедными реагентами самых разных типов, включая такие тяжелые, как гранитная и мраморная крошка, песок и пескосоляные смеси. </p><h2 class="docs-title docs-topic">Заголовок 2</h2><p class="docs-text"> Представленная тележка-дозатор обеспечивает высококачественную обработку любых территорий сыпучими противогололедными реагентами самых разных типов, включая такие тяжелые, как гранитная и мраморная крошка, песок и пескосоляные смеси. </p><h2 class="docs-title docs-topic">Заголовок 3</h2><p class="docs-text"> Представленная тележка-дозатор обеспечивает высококачественную обработку любых территорий сыпучими противогололедными реагентами самых разных типов, включая такие тяжелые, как гранитная и мраморная крошка, песок и пескосоляные смеси. Тележка прекрасно подходит для использования во дворах многоквартирных домов, обработки территорий промышленных предприятий, востребована владельцами магазинов, различных коммерческих компаний. Кроме того, она может использоваться для высева семян на газонах, теннисных кортах и других территориях. </p><p class="docs-text"> Представленная тележка-дозатор обеспечивает высококачественную обработку любых территорий сыпучими противогололедными реагентами самых разных типов, включая такие тяжелые, как гранитная и мраморная крошка, песок и пескосоляные смеси. </p></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/license.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const license = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  license as default
};
//# sourceMappingURL=license-s5Cj4Muc.js.map
