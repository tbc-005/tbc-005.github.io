import { d as defineComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, n as normalizeClass, t as toDisplayString, F as Fragment, r as renderList, e as createTextVNode, f as createVNode } from "./index-BMcdV4Dz.js";
const _hoisted_1$1 = { class: "skill-card" };
const _hoisted_2$1 = { class: "flex items-center mb-4" };
const _hoisted_3$1 = { class: "text-xl font-bold ml-4" };
const _hoisted_4 = { class: "space-y-2 mb-6" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SkillCategory",
  props: {
    category: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", {
            class: normalizeClass(["w-12 h-12 rounded-xl bg-gradient-to-br", __props.category.color])
          }, null, 2),
          createBaseVNode("h3", _hoisted_3$1, toDisplayString(__props.category.title), 1)
        ]),
        createBaseVNode("ul", _hoisted_4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.category.skills, (skill) => {
            return openBlock(), createElementBlock("li", {
              key: skill,
              class: "flex items-center"
            }, [
              _cache[0] || (_cache[0] = createBaseVNode("div", { class: "w-2 h-2 rounded-full bg-blue-400 mr-3" }, null, -1)),
              createBaseVNode("span", null, toDisplayString(skill), 1)
            ]);
          }), 128))
        ]),
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "text-sm text-gray-400" }, [
          createTextVNode(" 掌握程度: "),
          createBaseVNode("span", { class: "text-green-400 font-semibold" }, "精通")
        ], -1))
      ]);
    };
  }
});
const _hoisted_1 = { class: "pt-20 min-h-screen" };
const _hoisted_2 = { class: "container mx-auto px-6" };
const _hoisted_3 = { class: "grid md:grid-cols-2 lg:grid-cols-3 gap-8" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SkillsView",
  setup(__props) {
    const skillCategories = [
      {
        title: "前端框架",
        skills: ["Vue 3", "React", "TypeScript", "Nuxt.js", "Next.js"],
        color: "from-blue-500 to-cyan-500",
        icon: "Code"
      },
      {
        title: "UI/UX设计",
        skills: ["Tailwind CSS", "Figma", "Framer Motion", "Storybook", "Design Systems"],
        color: "from-purple-500 to-pink-500",
        icon: "Palette"
      },
      {
        title: "3D图形",
        skills: ["Three.js", "WebGL", "GSAP", "Shader编程", "性能优化"],
        color: "from-green-500 to-emerald-500",
        icon: "Cube"
      },
      {
        title: "工具链",
        skills: ["Vite", "Webpack", "ESLint", "Prettier", "Git", "Docker"],
        color: "from-orange-500 to-red-500",
        icon: "Wrench"
      },
      {
        title: "测试",
        skills: ["Vitest", "Jest", "Cypress", "Testing Library", "E2E测试"],
        color: "from-yellow-500 to-amber-500",
        icon: "TestTube"
      },
      {
        title: "部署运维",
        skills: ["Vercel", "Netlify", "CI/CD", "监控", "性能分析"],
        color: "from-indigo-500 to-blue-500",
        icon: "Server"
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[0] || (_cache[0] = createBaseVNode("h1", { class: "text-4xl font-bold mb-8 gradient-text" }, "技能展示", -1)),
          _cache[1] || (_cache[1] = createBaseVNode("p", { class: "text-gray-300 mb-12 max-w-3xl" }, " 展示现代前端开发的全栈技能，包括框架、工具、设计模式和最佳实践。 ", -1)),
          createBaseVNode("div", _hoisted_3, [
            (openBlock(), createElementBlock(Fragment, null, renderList(skillCategories, (category) => {
              return createVNode(_sfc_main$1, {
                key: category.title,
                category
              }, null, 8, ["category"]);
            }), 64))
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=SkillsView-CawzWaFG.js.map
