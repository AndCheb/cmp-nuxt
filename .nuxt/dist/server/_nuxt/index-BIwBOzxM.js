import { ref, useSSRContext, mergeProps } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import __nuxt_component_0$3 from "./server-placeholder-BHj5cdzH.js";
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
      _push(`<button class="video-about" type="button" data-v-af913957> О сервисе <span data-v-af913957>(1 мин. 27 сек.)</span></button><!--]-->`);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-6deb8a60><h1 data-v-6deb8a60>Проверьте штрафы и зарегистрируйтесь в 1 клик</h1><form action="#" data-v-6deb8a60><label class="number" data-v-6deb8a60><p data-v-6deb8a60>Номер автомобиля</p><input class="${ssrRenderClass({ warning: notFilled.value && !carNumber.value })}" type="text"${ssrRenderAttr("value", carNumber.value)} data-v-6deb8a60></label><label class="region" data-v-6deb8a60><p data-v-6deb8a60>Регион</p><input class="${ssrRenderClass({ warning: notFilled.value && !region.value })}" type="text"${ssrRenderAttr("value", region.value)} data-v-6deb8a60></label><label class="registration" data-v-6deb8a60><p data-v-6deb8a60>Свидетельство о регистрации ТС</p><input class="${ssrRenderClass({ warning: notFilled.value && !certificate.value })}" type="text"${ssrRenderAttr("value", certificate.value)} data-v-6deb8a60></label><button class="button check" type="submit" data-v-6deb8a60> Проверить штрафы </button>`);
      _push(ssrRenderComponent(_component_AboutService, null, null, _parent));
      _push(`<small data-v-6deb8a60>Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту</small></form></div>`);
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
const _imports_0 = "" + __buildAssetsURL("layout.D7DV5ezP.png");
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
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-e2e79db4><div class="container" data-v-e2e79db4><h2 class="title" data-v-e2e79db4> Плюсы использования сервиса «Компас» для анализа штрафов </h2><ul class="list" data-v-e2e79db4><li class="item" data-v-e2e79db4><h3 class="headline" data-v-e2e79db4>Неограниченый автопарк</h3><p class="text" data-v-e2e79db4> Можно добавить неограниченное количество машин и водителей </p></li><li class="item" data-v-e2e79db4><h3 class="headline" data-v-e2e79db4>Сокращение затрат до 50%</h3><p class="text" data-v-e2e79db4> Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке </p></li><li class="item" data-v-e2e79db4><h3 class="headline" data-v-e2e79db4>Безопасность</h3><p class="text" data-v-e2e79db4> Данные передаются в зашифрованном виде, они доступны только получателю </p></li><li class="item" data-v-e2e79db4><h3 class="headline" data-v-e2e79db4>Уведомление о погашении</h3><p class="text" data-v-e2e79db4> Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП </p></li><li class="item" data-v-e2e79db4><h3 class="headline" data-v-e2e79db4>Квитанция об оплате</h3><p class="text" data-v-e2e79db4> После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате. </p></li><li class="item" data-v-e2e79db4><h3 class="headline" data-v-e2e79db4>Все история сохраняется по каждой машине</h3><p class="text" data-v-e2e79db4> Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам </p></li></ul></div></section>`);
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
  }, _attrs))} data-v-c6d5327c><h2 class="title" data-v-c6d5327c>Документы</h2>`);
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
export {
  index as default
};
//# sourceMappingURL=index-BIwBOzxM.js.map
