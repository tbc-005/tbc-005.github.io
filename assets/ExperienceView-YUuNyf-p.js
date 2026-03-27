import { d as defineComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, n as normalizeClass, t as toDisplayString, j as computed, F as Fragment, r as renderList, f as createVNode } from "./index-BMcdV4Dz.js";
const _hoisted_1$1 = { class: "relative pl-16" };
const _hoisted_2$1 = { class: "absolute left-6 -translate-x-1/2" };
const _hoisted_3$1 = { class: "glass-effect rounded-xl p-6" };
const _hoisted_4$1 = { class: "flex items-center justify-between mb-4" };
const _hoisted_5 = { class: "text-xl font-bold mt-2" };
const _hoisted_6 = { class: "text-gray-400" };
const _hoisted_7 = { class: "text-2xl font-bold gradient-text" };
const _hoisted_8 = { class: "text-gray-300" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TimelineItem",
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    const dotColor = computed(() => {
      const type = props.item.type;
      if (type === "work") return "bg-blue-500";
      if (type === "education") return "bg-green-500";
      return "bg-purple-500";
    });
    const typeColor = computed(() => {
      const type = props.item.type;
      if (type === "work") return "bg-blue-500/20 text-blue-400";
      if (type === "education") return "bg-green-500/20 text-green-400";
      return "bg-purple-500/20 text-purple-400";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", {
            class: normalizeClass(["w-4 h-4 rounded-full", dotColor.value])
          }, null, 2)
        ]),
        createBaseVNode("div", _hoisted_3$1, [
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("div", null, [
              createBaseVNode("span", {
                class: normalizeClass(["text-sm font-semibold px-3 py-1 rounded-full", typeColor.value])
              }, toDisplayString(__props.item.type === "work" ? "工作" : __props.item.type === "education" ? "教育" : "项目"), 3),
              createBaseVNode("h3", _hoisted_5, toDisplayString(__props.item.title), 1),
              createBaseVNode("p", _hoisted_6, toDisplayString(__props.item.company), 1)
            ]),
            createBaseVNode("span", _hoisted_7, toDisplayString(__props.item.year), 1)
          ]),
          createBaseVNode("p", _hoisted_8, toDisplayString(__props.item.description), 1),
          _cache[0] || (_cache[0] = createBaseVNode("div", { class: "mt-4 flex flex-wrap gap-2" }, [
            createBaseVNode("span", { class: "text-xs px-3 py-1 rounded-full glass-effect" }, "Vue 3"),
            createBaseVNode("span", { class: "text-xs px-3 py-1 rounded-full glass-effect" }, "TypeScript"),
            createBaseVNode("span", { class: "text-xs px-3 py-1 rounded-full glass-effect" }, "性能优化")
          ], -1))
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "pt-20 min-h-screen" };
const _hoisted_2 = { class: "container mx-auto px-6" };
const _hoisted_3 = { class: "relative" };
const _hoisted_4 = { class: "space-y-12" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ExperienceView",
  setup(__props) {
    const timelineItems = [
      {
        year: "2026",
        title: "前端开发工程师",
        company: "求职中",
        description: "积极寻找前端开发岗位，擅长Vue 3全家桶，期待加入有挑战性的团队",
        type: "work"
      },
      {
        year: "2025",
        title: "CodeCanvas 3D 项目开发",
        company: "个人项目",
        description: "独立开发交互式3D作品集，掌握Three.js、TypeScript、Tailwind CSS等技术",
        type: "project"
      },
      {
        year: "2024",
        title: "电商管理系统开发",
        company: "个人项目",
        description: "全栈开发电商平台，掌握Vue 3、Express、PostgreSQL、Redis等技术栈",
        type: "project"
      },
      {
        year: "2023",
        title: "软件技术专业学习",
        company: "沈阳职业技术学院",
        description: "系统学习软件开发技术，主修Vue.js、JavaScript、HTML5、CSS3等课程",
        type: "education"
      },
      {
        year: "2023",
        title: "前端开发学习",
        company: "自学",
        description: "开始系统学习前端开发，从HTML、CSS、JavaScript入门，逐步深入Vue.js生态",
        type: "education"
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[1] || (_cache[1] = createBaseVNode("h1", { class: "text-4xl font-bold mb-8 gradient-text" }, "经历时间线", -1)),
          _cache[2] || (_cache[2] = createBaseVNode("p", { class: "text-gray-300 mb-12 max-w-3xl" }, " 教育背景、实习经历和项目经验的时间线展示。 ", -1)),
          createBaseVNode("div", _hoisted_3, [
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600" }, null, -1)),
            createBaseVNode("div", _hoisted_4, [
              (openBlock(), createElementBlock(Fragment, null, renderList(timelineItems, (item) => {
                return createVNode(_sfc_main$1, {
                  key: item.title,
                  item
                }, null, 8, ["item"]);
              }), 64))
            ])
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=ExperienceView-YUuNyf-p.js.map
