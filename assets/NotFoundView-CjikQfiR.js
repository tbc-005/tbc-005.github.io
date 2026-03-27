import { d as defineComponent, a as createElementBlock, b as createBaseVNode, f as createVNode, q as withCtx, s as resolveComponent, g as useRouter, o as openBlock, e as createTextVNode } from "./index-BMcdV4Dz.js";
const _hoisted_1 = { class: "min-h-screen flex items-center justify-center" };
const _hoisted_2 = { class: "text-center" };
const _hoisted_3 = { class: "space-x-4" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NotFoundView",
  setup(__props) {
    const router = useRouter();
    const goBack = () => {
      router.go(-1);
    };
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[1] || (_cache[1] = createBaseVNode("div", { class: "text-9xl font-bold gradient-text mb-8" }, "404", -1)),
          _cache[2] || (_cache[2] = createBaseVNode("h1", { class: "text-3xl font-bold mb-4" }, "页面未找到", -1)),
          _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-gray-300 mb-8 max-w-md mx-auto" }, " 抱歉，您访问的页面不存在或已被移动。 ", -1)),
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_router_link, {
              to: "/",
              class: "inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            }, {
              default: withCtx(() => [..._cache[0] || (_cache[0] = [
                createTextVNode(" 返回首页 ", -1)
              ])]),
              _: 1
            }),
            createBaseVNode("button", {
              onClick: goBack,
              class: "inline-block px-6 py-3 glass-effect rounded-lg font-semibold hover:bg-white/10 transition-colors"
            }, " 返回上一页 ")
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=NotFoundView-CjikQfiR.js.map
