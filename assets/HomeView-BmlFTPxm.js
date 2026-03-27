import { c as createLucideIcon, d as defineComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, n as normalizeClass, t as toDisplayString, e as createTextVNode, f as createVNode, u as unref, F as Fragment, r as renderList, g as useRouter, h as createStaticVNode, C as Code, B as Briefcase, i as ref } from "./index-BMcdV4Dz.js";
/**
 * @license lucide-vue-next v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ArrowRight = createLucideIcon("ArrowRightIcon", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const _hoisted_1$5 = { class: "skill-card group" };
const _hoisted_2$5 = { class: "flex items-center justify-between mb-4" };
const _hoisted_3$5 = { class: "text-2xl font-bold" };
const _hoisted_4$3 = { class: "text-xl font-semibold mb-2" };
const _hoisted_5$3 = { class: "mt-4 h-2 bg-gray-700 rounded-full overflow-hidden" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TechCard",
  props: {
    tech: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$5, [
          createBaseVNode("div", {
            class: normalizeClass(["w-12 h-12 rounded-lg bg-gradient-to-br", __props.tech.color])
          }, null, 2),
          createBaseVNode("span", _hoisted_3$5, toDisplayString(__props.tech.icon), 1)
        ]),
        createBaseVNode("h3", _hoisted_4$3, toDisplayString(__props.tech.name), 1),
        _cache[0] || (_cache[0] = createBaseVNode("p", { class: "text-gray-400 text-sm" }, [
          createTextVNode(" 掌握程度："),
          createBaseVNode("span", { class: "text-blue-400 font-semibold" }, "精通")
        ], -1)),
        createBaseVNode("div", _hoisted_5$3, [
          createBaseVNode("div", {
            class: normalizeClass(["h-full bg-gradient-to-r transition-all duration-1000", __props.tech.color]),
            style: { width: "90%" }
          }, null, 2)
        ])
      ]);
    };
  }
});
const _hoisted_1$4 = { class: "glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300" };
const _hoisted_2$4 = { class: "w-16 h-16 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mb-6" };
const _hoisted_3$4 = { class: "text-gray-300 leading-relaxed" };
const _hoisted_4$2 = { class: "mt-6 pt-6 border-t border-gray-700" };
const _hoisted_5$2 = { class: "text-sm font-semibold hover:underline flex items-center" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "FeatureCard",
  props: {
    feature: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$4, [
          createBaseVNode("div", {
            class: normalizeClass(["w-10 h-10 rounded-lg", __props.feature.color])
          }, null, 2)
        ]),
        createBaseVNode("h3", {
          class: normalizeClass(["text-2xl font-bold mb-4", __props.feature.color])
        }, toDisplayString(__props.feature.title), 3),
        createBaseVNode("p", _hoisted_3$4, toDisplayString(__props.feature.description), 1),
        createBaseVNode("div", _hoisted_4$2, [
          createBaseVNode("button", _hoisted_5$2, [
            _cache[0] || (_cache[0] = createTextVNode(" 了解更多 ", -1)),
            createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-2" })
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$3 = { class: "text-center mb-12" };
const _hoisted_2$3 = { class: "text-3xl md:text-4xl font-bold mb-4 gradient-text" };
const _hoisted_3$3 = { class: "text-gray-300 max-w-2xl mx-auto" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SectionTitle",
  props: {
    title: {},
    subtitle: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("h2", _hoisted_2$3, toDisplayString(__props.title), 1),
        createBaseVNode("p", _hoisted_3$3, toDisplayString(__props.subtitle), 1)
      ]);
    };
  }
});
const _hoisted_1$2 = { class: "grid md:grid-cols-2 lg:grid-cols-4 gap-6" };
const _hoisted_2$2 = { class: "text-xl font-bold mb-2" };
const _hoisted_3$2 = { class: "text-gray-400 text-sm" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SkillsPreview",
  setup(__props) {
    const skills = [
      {
        name: "Vue 3",
        description: "Composition API + TypeScript",
        color: "from-green-500 to-emerald-600"
      },
      {
        name: "Three.js",
        description: "3D图形和交互",
        color: "from-purple-500 to-pink-600"
      },
      {
        name: "TypeScript",
        description: "类型安全和现代语法",
        color: "from-blue-500 to-cyan-600"
      },
      {
        name: "Tailwind CSS",
        description: "实用优先的CSS框架",
        color: "from-cyan-500 to-blue-600"
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        (openBlock(), createElementBlock(Fragment, null, renderList(skills, (skill) => {
          return createBaseVNode("div", {
            key: skill.name,
            class: "skill-card text-center"
          }, [
            createBaseVNode("div", {
              class: normalizeClass(["w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br", skill.color])
            }, null, 2),
            createBaseVNode("h3", _hoisted_2$2, toDisplayString(skill.name), 1),
            createBaseVNode("p", _hoisted_3$2, toDisplayString(skill.description), 1)
          ]);
        }), 64))
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "grid md:grid-cols-2 lg:grid-cols-3 gap-8" };
const _hoisted_2$1 = ["onClick"];
const _hoisted_3$1 = { class: "text-xl font-bold mb-2" };
const _hoisted_4$1 = { class: "text-gray-300 mb-4" };
const _hoisted_5$1 = { class: "flex flex-wrap gap-2" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProjectsPreview",
  setup(__props) {
    const router = useRouter();
    const projects = [
      {
        title: "CodeCanvas 3D",
        description: "交互式3D作品集展示",
        technologies: ["Vue 3", "Three.js", "TypeScript"],
        color: "from-blue-500 to-purple-600",
        link: "/"
      },
      {
        title: "数据可视化平台",
        description: "实时数据分析和图表展示",
        technologies: ["React", "D3.js", "Node.js"],
        color: "from-green-500 to-teal-600",
        link: "/data"
      },
      {
        title: "电商管理系统",
        description: "全栈电商平台解决方案",
        technologies: ["Vue 3", "Express", "PostgreSQL"],
        color: "from-orange-500 to-red-600",
        link: "/ecommerce"
      }
    ];
    const goToProject = (project) => {
      router.push(project.link);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(), createElementBlock(Fragment, null, renderList(projects, (project) => {
          return createBaseVNode("div", {
            key: project.title,
            class: "glass-effect rounded-2xl p-6 cursor-pointer hover:scale-105 transition-transform duration-300",
            onClick: ($event) => goToProject(project)
          }, [
            createBaseVNode("div", {
              class: normalizeClass(["w-12 h-12 rounded-lg bg-gradient-to-br mb-4", project.color])
            }, null, 2),
            createBaseVNode("h3", _hoisted_3$1, toDisplayString(project.title), 1),
            createBaseVNode("p", _hoisted_4$1, toDisplayString(project.description), 1),
            createBaseVNode("div", _hoisted_5$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(project.technologies, (tech) => {
                return openBlock(), createElementBlock("span", {
                  key: tech,
                  class: "text-xs px-3 py-1 rounded-full glass-effect"
                }, toDisplayString(tech), 1);
              }), 128))
            ]),
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "mt-4 text-sm text-indigo-400 flex items-center" }, [
              createTextVNode(" 点击查看详情 "),
              createBaseVNode("svg", {
                class: "w-4 h-4 ml-1",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createBaseVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M13 7l5 5m0 0l-5 5m5-5H6"
                })
              ])
            ], -1))
          ], 8, _hoisted_2$1);
        }), 64))
      ]);
    };
  }
});
const _hoisted_1 = { class: "pt-20" };
const _hoisted_2 = { class: "relative min-h-screen flex items-center overflow-hidden" };
const _hoisted_3 = { class: "container mx-auto px-6 relative z-10" };
const _hoisted_4 = { class: "max-w-6xl mx-auto" };
const _hoisted_5 = { class: "text-center mb-16" };
const _hoisted_6 = { class: "flex flex-wrap justify-center gap-4 mb-12" };
const _hoisted_7 = { class: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-20" };
const _hoisted_8 = { class: "grid md:grid-cols-3 gap-8" };
const _hoisted_9 = {
  id: "skills-preview",
  class: "py-20"
};
const _hoisted_10 = { class: "container mx-auto px-6" };
const _hoisted_11 = {
  id: "projects-preview",
  class: "py-20 bg-gray-800/30"
};
const _hoisted_12 = { class: "container mx-auto px-6" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HomeView",
  setup(__props) {
    const techStack = [
      { name: "Vue 3", color: "from-green-500 to-emerald-600", icon: "Vue" },
      { name: "TypeScript", color: "from-blue-500 to-cyan-600", icon: "TS" },
      { name: "Three.js", color: "from-purple-500 to-pink-600", icon: "3D" },
      { name: "Tailwind CSS", color: "from-cyan-500 to-blue-600", icon: "CSS" }
    ];
    const features = [
      {
        icon: "Cube",
        title: "3D交互体验",
        description: "使用Three.js构建的沉浸式3D场景，支持第一人称视角探索",
        color: "text-blue-400"
      },
      {
        icon: "ChartBar",
        title: "数据可视化",
        description: "实时GitHub数据、技能雷达图、项目热图等数据可视化展示",
        color: "text-purple-400"
      },
      {
        icon: "DeviceMobile",
        title: "全响应式设计",
        description: "完美适配桌面、平板、手机等多种设备，提供一致的用户体验",
        color: "text-green-400"
      }
    ];
    const scrollToSkills = () => {
      const element = document.getElementById("skills-preview");
      element?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToProjects = () => {
      const element = document.getElementById("projects-preview");
      element?.scrollIntoView({ behavior: "smooth" });
    };
    const hover3D = ref(false);
    const explore3DWorld = () => {
      alert("🎮 准备进入CodeCanvas 3D世界！\n\n这是一个使用Vue 3 + Three.js构建的交互式3D作品集。\n\n功能包括：\n• 第一人称视角探索\n• 交互式技能展示\n• 项目画廊\n• 数据可视化\n\n点击确定继续探索！");
      const cube = document.querySelector(".perspective-1000");
      if (cube) {
        cube.classList.add("scale-110");
        setTimeout(() => {
          cube.classList.remove("scale-110");
        }, 300);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("section", _hoisted_2, [
          _cache[6] || (_cache[6] = createBaseVNode("div", { class: "absolute inset-0 z-0" }, [
            createBaseVNode("div", { class: "absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" }),
            createBaseVNode("div", { class: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" })
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                _cache[4] || (_cache[4] = createStaticVNode('<h1 class="text-5xl md:text-7xl font-bold mb-6"><span class="gradient-text">CodeCanvas 3D</span><br><span class="text-4xl md:text-6xl">交互式开发者作品集</span></h1><p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"> 一个融合了 <span class="text-blue-400 font-semibold">Vue 3</span>、 <span class="text-purple-400 font-semibold">Three.js</span> 和 <span class="text-green-400 font-semibold">现代前端技术</span> 的沉浸式3D作品集，展示前沿开发技能和项目经验。 </p>', 2)),
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("button", {
                    onClick: scrollToSkills,
                    class: "px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-300 flex items-center"
                  }, [
                    createVNode(unref(Code), { class: "w-6 h-6 mr-2" }),
                    _cache[2] || (_cache[2] = createTextVNode(" 探索技能世界 ", -1))
                  ]),
                  createBaseVNode("button", {
                    onClick: scrollToProjects,
                    class: "px-8 py-4 glass-effect rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-300 flex items-center"
                  }, [
                    createVNode(unref(Briefcase), { class: "w-6 h-6 mr-2" }),
                    _cache[3] || (_cache[3] = createTextVNode(" 查看项目展示 ", -1))
                  ])
                ])
              ]),
              createBaseVNode("div", {
                class: normalizeClass(["relative h-[500px] rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20 mb-16 cursor-pointer group transition-all duration-500 dark:border-blue-500/30 dark:shadow-blue-500/20", { "border-blue-400/50 shadow-blue-500/40 scale-[1.02] dark:border-blue-400/50 dark:shadow-blue-500/40": hover3D.value }]),
                onClick: explore3DWorld,
                onMouseenter: _cache[0] || (_cache[0] = ($event) => hover3D.value = true),
                onMouseleave: _cache[1] || (_cache[1] = ($event) => hover3D.value = false)
              }, [..._cache[5] || (_cache[5] = [
                createStaticVNode('<div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900/50"></div><div class="absolute inset-0 opacity-20" style="background-image:linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),\n                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px);background-size:40px 40px;"></div><div class="absolute inset-0 flex items-center justify-center"><div class="text-center"><div class="relative w-48 h-48 mx-auto mb-8 perspective-1000"><div class="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl animate-spin-slow shadow-2xl shadow-blue-500/50"></div><div class="absolute inset-3 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-inner"></div><div class="absolute inset-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-md animate-spin-slow" style="animation-direction:reverse;animation-duration:6s;"></div><div class="absolute inset-9 flex items-center justify-center"><div class="text-center"><span class="text-5xl block mb-2 animate-pulse">🧊</span><span class="text-xs font-bold text-cyan-300">3D CUBE</span></div></div><div class="absolute -inset-1 border-2 border-blue-400/30 rounded-xl animate-pulse"></div></div><p class="text-2xl font-bold mb-2 gradient-text">CodeCanvas 3D世界</p><p class="text-gray-300 mb-4">交互式3D作品集展示</p><div class="inline-flex items-center space-x-4 text-sm text-gray-400"><div class="flex items-center"><span class="bg-gray-800 px-2 py-1 rounded mr-2">WASD</span><span>移动</span></div><div class="flex items-center"><span class="bg-gray-800 px-2 py-1 rounded mr-2">鼠标</span><span>视角</span></div><div class="flex items-center"><span class="bg-gray-800 px-2 py-1 rounded mr-2">空格</span><span>跳跃</span></div></div></div></div><div class="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-float shadow-lg shadow-blue-400"></div><div class="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-float shadow-lg shadow-purple-400" style="animation-delay:0.5s;"></div><div class="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-float shadow-lg shadow-cyan-400" style="animation-delay:1s;"></div><div class="absolute top-1/2 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-float" style="animation-delay:1.5s;"></div><div class="absolute bottom-1/3 right-1/4 w-3 h-3 bg-green-400 rounded-full animate-float" style="animation-delay:2s;"></div><div class="absolute top-10 left-10"><div class="text-sm font-bold text-blue-300/70 rotate-12">VUE 3</div></div><div class="absolute top-10 right-10"><div class="text-sm font-bold text-purple-300/70 -rotate-12">THREE.JS</div></div><div class="absolute bottom-10 left-10"><div class="text-sm font-bold text-cyan-300/70 rotate-6">WEBGL</div></div><div class="absolute bottom-10 right-10"><div class="text-sm font-bold text-pink-300/70 -rotate-6">3D</div></div><div class="absolute inset-0" style="background:linear-gradient(\n                to bottom,\n                transparent 0%,\n                rgba(59, 130, 246, 0.1) 50%,\n                transparent 100%\n              );animation:scan 4s linear infinite;"></div><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div><div class="absolute top-1/3 left-1/3 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div><div class="absolute bottom-1/3 right-1/3 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl"></div><div class="absolute bottom-4 left-1/2 -translate-x-1/2"><div class="flex items-center space-x-2 text-xs text-gray-400 animate-pulse"><span class="w-2 h-2 bg-green-400 rounded-full"></span><span>点击探索3D世界</span></div></div>', 17)
              ])], 34),
              createBaseVNode("div", _hoisted_7, [
                (openBlock(), createElementBlock(Fragment, null, renderList(techStack, (tech) => {
                  return createVNode(_sfc_main$5, {
                    key: tech.name,
                    tech
                  }, null, 8, ["tech"]);
                }), 64))
              ]),
              createBaseVNode("div", _hoisted_8, [
                (openBlock(), createElementBlock(Fragment, null, renderList(features, (feature) => {
                  return createVNode(_sfc_main$4, {
                    key: feature.title,
                    feature
                  }, null, 8, ["feature"]);
                }), 64))
              ])
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_9, [
          createBaseVNode("div", _hoisted_10, [
            createVNode(_sfc_main$3, {
              title: "核心技能展示",
              subtitle: "掌握现代前端开发的全栈技能"
            }),
            createVNode(_sfc_main$2)
          ])
        ]),
        createBaseVNode("section", _hoisted_11, [
          createBaseVNode("div", _hoisted_12, [
            createVNode(_sfc_main$3, {
              title: "精选项目",
              subtitle: "从概念到部署的完整项目经验"
            }),
            createVNode(_sfc_main$1)
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=HomeView-BmlFTPxm.js.map
