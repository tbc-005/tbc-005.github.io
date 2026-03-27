import { d as defineComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, t as toDisplayString, n as normalizeClass, j as computed, F as Fragment, r as renderList, h as createStaticVNode, f as createVNode } from "./index-BMcdV4Dz.js";
const _hoisted_1$1 = { class: "glass-effect rounded-2xl p-6" };
const _hoisted_2$1 = { class: "flex items-center justify-between mb-4" };
const _hoisted_3$1 = { class: "text-sm text-gray-400" };
const _hoisted_4 = { class: "text-3xl font-bold mt-2" };
const _hoisted_5 = { class: "flex items-center" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DataCard",
  props: {
    card: {}
  },
  setup(__props) {
    const props = __props;
    const changeColor = computed(() => {
      const change = props.card.change;
      if (change.startsWith("+")) return "text-green-400";
      return "text-red-400";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", null, [
            createBaseVNode("p", _hoisted_3$1, toDisplayString(__props.card.title), 1),
            createBaseVNode("p", _hoisted_4, toDisplayString(__props.card.value), 1)
          ]),
          createBaseVNode("div", {
            class: normalizeClass(["w-12 h-12 rounded-xl bg-gradient-to-br", __props.card.color])
          }, null, 2)
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("span", {
            class: normalizeClass(["text-sm", changeColor.value])
          }, toDisplayString(__props.card.change), 3),
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "text-gray-400 text-sm ml-2" }, "本月", -1))
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "pt-20 min-h-screen" };
const _hoisted_2 = { class: "container mx-auto px-6" };
const _hoisted_3 = { class: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DashboardView",
  setup(__props) {
    const dataCards = [
      {
        title: "总提交数",
        value: "1,248",
        change: "+12%",
        color: "from-blue-500 to-cyan-500",
        icon: "GitCommit"
      },
      {
        title: "项目数量",
        value: "15",
        change: "+3",
        color: "from-purple-500 to-pink-500",
        icon: "Briefcase"
      },
      {
        title: "代码行数",
        value: "85K",
        change: "+8%",
        color: "from-green-500 to-emerald-500",
        icon: "Code"
      },
      {
        title: "学习时长",
        value: "320h",
        change: "+15%",
        color: "from-orange-500 to-red-500",
        icon: "Clock"
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[0] || (_cache[0] = createBaseVNode("h1", { class: "text-4xl font-bold mb-8 gradient-text" }, "数据仪表盘", -1)),
          _cache[1] || (_cache[1] = createBaseVNode("p", { class: "text-gray-300 mb-12 max-w-3xl" }, " 实时数据统计和可视化，展示开发活动和技能成长。 ", -1)),
          createBaseVNode("div", _hoisted_3, [
            (openBlock(), createElementBlock(Fragment, null, renderList(dataCards, (card) => {
              return createVNode(_sfc_main$1, {
                key: card.title,
                card
              }, null, 8, ["card"]);
            }), 64))
          ]),
          _cache[2] || (_cache[2] = createStaticVNode('<div class="grid lg:grid-cols-2 gap-8"><div class="glass-effect rounded-2xl p-6"><h3 class="text-xl font-bold mb-6">GitHub贡献日历</h3><div class="h-64 flex items-center justify-center"><div class="text-center"><div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center"><span class="text-2xl">🐙</span></div><p class="text-gray-400">GitHub API集成中...</p></div></div></div><div class="glass-effect rounded-2xl p-6"><h3 class="text-xl font-bold mb-6">技能雷达图</h3><div class="h-64 flex items-center justify-center"><div class="text-center"><div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"><span class="text-2xl">📡</span></div><p class="text-gray-400">Chart.js集成中...</p></div></div></div></div>', 1))
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=DashboardView-hxmS8YPR.js.map
