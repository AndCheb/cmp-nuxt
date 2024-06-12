import { mergeProps, useSSRContext } from 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/h3/dist/index.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/devalue/index.js';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/ufo/dist/index.mjs';
import 'file://C:/arc/Projects/Alpha/COMPAS/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><br><h1>\u0422\u0430\u0440\u0438\u0444\u044B</h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/rates.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rates = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { rates as default };
//# sourceMappingURL=rates-BmrUmB_z.mjs.map
