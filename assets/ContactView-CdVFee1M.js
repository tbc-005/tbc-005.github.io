import { d as defineComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, n as normalizeClass, t as toDisplayString, F as Fragment, r as renderList, w as withModifiers, h as createStaticVNode, k as createCommentVNode, i as ref, f as createVNode } from "./index-BMcdV4Dz.js";
const _hoisted_1$1 = { class: "flex items-start space-x-4" };
const _hoisted_2$1 = { class: "text-xl" };
const _hoisted_3$1 = { class: "font-semibold mb-1" };
const _hoisted_4$1 = { class: "text-gray-300" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ContactItem",
  props: {
    item: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", {
          class: normalizeClass(["p-3 rounded-xl glass-effect", __props.item.color])
        }, [
          createBaseVNode("span", _hoisted_2$1, toDisplayString(__props.item.icon), 1)
        ], 2),
        createBaseVNode("div", null, [
          createBaseVNode("h4", _hoisted_3$1, toDisplayString(__props.item.title), 1),
          createBaseVNode("p", _hoisted_4$1, toDisplayString(__props.item.value), 1)
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "pt-20 min-h-screen" };
const _hoisted_2 = { class: "container mx-auto px-6" };
const _hoisted_3 = { class: "grid lg:grid-cols-2 gap-12" };
const _hoisted_4 = { class: "space-y-8" };
const _hoisted_5 = { class: "mt-12" };
const _hoisted_6 = { class: "flex space-x-4" };
const _hoisted_7 = ["href", "aria-label"];
const _hoisted_8 = { class: "text-xl" };
const _hoisted_9 = { class: "glass-effect rounded-2xl p-8" };
const _hoisted_10 = { class: "glass-effect rounded-2xl p-8 max-w-sm mx-4 text-center" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContactView",
  setup(__props) {
    const showModal = ref(false);
    const handleSubmit = () => {
      showModal.value = true;
    };
    const contactItems = [
      {
        icon: "✉️",
        title: "邮箱",
        value: "2159875009@qq.com",
        color: "text-blue-400"
      },
      {
        icon: "📱",
        title: "电话",
        value: "155-4226-9049",
        color: "text-green-400"
      },
      {
        icon: "📍",
        title: "位置",
        value: "中国 · 上海浦东新区",
        color: "text-purple-400"
      }
    ];
    const socialLinks = [
      { name: "GitHub", icon: "🐙", url: "https://github.com/tbc-005" },
      { name: "作品集", icon: "🎨", url: "https://tbc-005.github.io" }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[5] || (_cache[5] = createBaseVNode("h1", { class: "text-4xl font-bold mb-8 gradient-text" }, "联系我", -1)),
          _cache[6] || (_cache[6] = createBaseVNode("p", { class: "text-gray-300 mb-12 max-w-3xl" }, " 如果您对我的项目感兴趣或有合作机会，欢迎通过以下方式联系。 ", -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", null, [
              createBaseVNode("div", _hoisted_4, [
                (openBlock(), createElementBlock(Fragment, null, renderList(contactItems, (item) => {
                  return createVNode(_sfc_main$1, {
                    key: item.title,
                    item
                  }, null, 8, ["item"]);
                }), 64))
              ]),
              createBaseVNode("div", _hoisted_5, [
                _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "text-xl font-bold mb-6" }, "社交媒体", -1)),
                createBaseVNode("div", _hoisted_6, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(socialLinks, (social) => {
                    return createBaseVNode("a", {
                      key: social.name,
                      href: social.url,
                      target: "_blank",
                      class: "p-3 rounded-lg glass-effect hover:bg-white/10 transition-colors",
                      "aria-label": social.name
                    }, [
                      createBaseVNode("span", _hoisted_8, toDisplayString(social.icon), 1)
                    ], 8, _hoisted_7);
                  }), 64))
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_9, [
              _cache[4] || (_cache[4] = createBaseVNode("h3", { class: "text-xl font-bold mb-6" }, "发送消息", -1)),
              createBaseVNode("form", {
                onSubmit: withModifiers(handleSubmit, ["prevent"]),
                class: "space-y-6"
              }, [..._cache[3] || (_cache[3] = [
                createStaticVNode('<div><label class="block text-sm font-medium mb-2">姓名</label><input type="text" class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none" placeholder="您的姓名"></div><div><label class="block text-sm font-medium mb-2">邮箱</label><input type="email" class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none" placeholder="your@email.com"></div><div><label class="block text-sm font-medium mb-2">消息</label><textarea rows="4" class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none" placeholder="请描述您的需求..."></textarea></div><button type="submit" class="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"> 发送消息 </button>', 4)
              ])], 32)
            ])
          ])
        ]),
        showModal.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "fixed inset-0 bg-black/60 flex items-center justify-center z-50",
          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => showModal.value = false, ["self"]))
        }, [
          createBaseVNode("div", _hoisted_10, [
            _cache[7] || (_cache[7] = createStaticVNode('<div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center"><svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><h3 class="text-2xl font-bold text-white mb-2">敬请期待</h3><p class="text-gray-400 mb-6">联系功能正在开发中...</p><p class="text-gray-500 text-sm">您可以直接通过邮箱或电话联系我 🎉</p>', 4)),
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => showModal.value = false),
              class: "mt-6 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
            }, " 知道了 ")
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=ContactView-CdVFee1M.js.map
