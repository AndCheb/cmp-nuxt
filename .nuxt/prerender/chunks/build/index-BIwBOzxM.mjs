import { a as buildAssetsURL } from '../_/renderer.mjs';
import { useSSRContext, ref, mergeProps } from 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/vue/server-renderer/index.mjs';
import __nuxt_component_0$3 from './server-placeholder-BHj5cdzH.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/h3/dist/index.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/devalue/index.js';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/ufo/dist/index.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/ofetch/dist/node.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/destr/dist/index.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/hookable/dist/index.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/klona/dist/index.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/scule/dist/index.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/defu/dist/defu.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/ohash/dist/index.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/unstorage/dist/index.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/arc/Projects/Alpha/COMPAS/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/pathe/dist/index.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/unhead/dist/index.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/unctx/dist/index.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main$6 = {
  __name: "AboutService",
  __ssrInlineRender: true,
  setup(__props) {
    const viedoIsOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (viedoIsOpen.value) {
        _push(`<div class="video-container" data-v-af913957><div class="video" data-v-af913957><iframe src="https://www.youtube.com/embed/2EmYw-O-WLI?si=7ql26orEvorAJKmQ" frameborder="0" allowfullscreen data-v-af913957></iframe><button class="close-video" type="button" data-v-af913957>X</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="video-about" type="button" data-v-af913957> \u041E \u0441\u0435\u0440\u0432\u0438\u0441\u0435 <span data-v-af913957>(1 \u043C\u0438\u043D. 27 \u0441\u0435\u043A.)</span></button><!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutService.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-af913957"]]);
const _sfc_main$5 = {
  __name: "VerificationForm",
  __ssrInlineRender: true,
  setup(__props) {
    const carNumber = ref("");
    const region = ref("");
    const certificate = ref("");
    const notFilled = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AboutService = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-6deb8a60><h1 data-v-6deb8a60>\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0448\u0442\u0440\u0430\u0444\u044B \u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C \u0432 1 \u043A\u043B\u0438\u043A</h1><form action="#" data-v-6deb8a60><label class="number" data-v-6deb8a60><p data-v-6deb8a60>\u041D\u043E\u043C\u0435\u0440 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F</p><input class="${ssrRenderClass({ warning: notFilled.value && !carNumber.value })}" type="text"${ssrRenderAttr("value", carNumber.value)} data-v-6deb8a60></label><label class="region" data-v-6deb8a60><p data-v-6deb8a60>\u0420\u0435\u0433\u0438\u043E\u043D</p><input class="${ssrRenderClass({ warning: notFilled.value && !region.value })}" type="text"${ssrRenderAttr("value", region.value)} data-v-6deb8a60></label><label class="registration" data-v-6deb8a60><p data-v-6deb8a60>\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0422\u0421</p><input class="${ssrRenderClass({ warning: notFilled.value && !certificate.value })}" type="text"${ssrRenderAttr("value", certificate.value)} data-v-6deb8a60></label><button class="button check" type="submit" data-v-6deb8a60> \u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0448\u0442\u0440\u0430\u0444\u044B </button>`);
      _push(ssrRenderComponent(_component_AboutService, null, null, _parent));
      _push(`<small data-v-6deb8a60>\u041D\u0430\u0436\u0438\u043C\u0430\u044F \xAB\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0448\u0442\u0440\u0430\u0444\u044B\xBB \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u043E\u0444\u0435\u0440\u0442\u0443</small></form></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VerificationForm.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-6deb8a60"]]);
const _imports_0 = "" + buildAssetsURL("layout.D7DV5ezP.png");
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "image-wrapper" }, _attrs))} data-v-4bcc6eaa><img${ssrRenderAttr("src", _imports_0)} alt="layout" width="532" height="335" data-v-4bcc6eaa></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoPicture.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-4bcc6eaa"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_VerificationForm = __nuxt_component_0$1;
  const _component_DemoPicture = __nuxt_component_1$1;
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-9f093797><div class="section-wrapper" data-v-9f093797>`);
  _push(ssrRenderComponent(_component_VerificationForm, null, null, _parent));
  _push(ssrRenderComponent(_component_DemoPicture, null, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Information.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-9f093797"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-e2e79db4><div class="container" data-v-e2e79db4><h2 class="title" data-v-e2e79db4> \u041F\u043B\u044E\u0441\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \xAB\u041A\u043E\u043C\u043F\u0430\u0441\xBB \u0434\u043B\u044F \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0448\u0442\u0440\u0430\u0444\u043E\u0432 </h2><ul class="list" data-v-e2e79db4><li class="item" data-v-e2e79db4><h3 class="headline" data-v-e2e79db4>\u041D\u0435\u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u043F\u0430\u0440\u043A</h3><p class="text" data-v-e2e79db4> \u041C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0435\u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043C\u0430\u0448\u0438\u043D \u0438 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 </p></li><li class="item" data-v-e2e79db4><h3 class="headline" data-v-e2e79db4>\u0421\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u0437\u0430\u0442\u0440\u0430\u0442 \u0434\u043E 50%</h3><p class="text" data-v-e2e79db4> \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0431\u044B\u0441\u0442\u0440\u043E \u0443\u0437\u043D\u0430\u0435\u0442\u0435 \u043E \u0448\u0442\u0440\u0430\u0444\u0430\u0445 \u0432 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435, \u0442\u0435\u043C \u0441\u0430\u043C\u044B\u043C \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u0432\u0440\u0435\u043C\u044F \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u043F\u043E \u0441\u043A\u0438\u0434\u043A\u0435 </p></li><li class="item" data-v-e2e79db4><h3 class="headline" data-v-e2e79db4>\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C</h3><p class="text" data-v-e2e79db4> \u0414\u0430\u043D\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u0441\u044F \u0432 \u0437\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u043C \u0432\u0438\u0434\u0435, \u043E\u043D\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044E </p></li><li class="item" data-v-e2e79db4><h3 class="headline" data-v-e2e79db4>\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u043E \u043F\u043E\u0433\u0430\u0448\u0435\u043D\u0438\u0438</h3><p class="text" data-v-e2e79db4> \u041C\u044B \u043E\u043F\u043E\u0432\u0435\u0441\u0442\u0438\u043C \u0432\u0430\u0441 \u043E \u0442\u043E\u043C, \u0447\u0442\u043E \u0448\u0442\u0440\u0430\u0444 \u0431\u044B\u043B \u043F\u043E\u0433\u0430\u0448\u0435\u043D \u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0432 \u0413\u0418\u0421 \u0413\u041C\u041F </p></li><li class="item" data-v-e2e79db4><h3 class="headline" data-v-e2e79db4>\u041A\u0432\u0438\u0442\u0430\u043D\u0446\u0438\u044F \u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u0435</h3><p class="text" data-v-e2e79db4> \u041F\u043E\u0441\u043B\u0435 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u043E\u043F\u043B\u0430\u0442\u044B \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043A\u0430\u0440\u0442\u043E\u0439 \u043D\u0430 \u0412\u0430\u0448\u0443 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443 \u043F\u0440\u0438\u0434\u0435\u0442 \u043A\u0432\u0438\u0442\u0430\u043D\u0446\u0438\u044F \u043E\u0431 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u0435. </p></li><li class="item" data-v-e2e79db4><h3 class="headline" data-v-e2e79db4>\u0412\u0441\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u043F\u043E \u043A\u0430\u0436\u0434\u043E\u0439 \u043C\u0430\u0448\u0438\u043D\u0435</h3><p class="text" data-v-e2e79db4> \u0412\u0441\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u0448\u0442\u0440\u0430\u0444\u043E\u0432 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u043F\u043E \u043C\u0430\u0448\u0438\u043D\u0435 \u0438 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044E, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443 \u043F\u043E \u0448\u0442\u0440\u0430\u0444\u0430\u043C </p></li></ul></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Advantages.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-e2e79db4"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_el_carousel = __nuxt_component_0$3;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "container",
    id: "docs"
  }, _attrs))} data-v-c6d5327c><h2 class="title" data-v-c6d5327c>\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B</h2>`);
  _push(ssrRenderComponent(_component_el_carousel, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Documentation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c6d5327c"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Information = __nuxt_component_0;
  const _component_Advantages = __nuxt_component_1;
  const _component_Documentation = __nuxt_component_2;
  _push(`<main${ssrRenderAttrs(_attrs)}><div class="wrapper">`);
  _push(ssrRenderComponent(_component_Information, null, null, _parent));
  _push(ssrRenderComponent(_component_Advantages, null, null, _parent));
  _push(ssrRenderComponent(_component_Documentation, null, null, _parent));
  _push(`</div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BIwBOzxM.mjs.map
