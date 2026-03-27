import { d as defineComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, t as toDisplayString, n as normalizeClass, F as Fragment, r as renderList, e as createTextVNode, g as useRouter, j as computed, w as withModifiers, k as createCommentVNode, i as ref, f as createVNode } from "./index-BMcdV4Dz.js";
const _hoisted_1$1 = { class: "flex items-start justify-between mb-4" };
const _hoisted_2$1 = { class: "text-xl font-bold mb-2" };
const _hoisted_3$1 = { class: "flex items-center space-x-2" };
const _hoisted_4$1 = { class: "text-gray-300 mb-6" };
const _hoisted_5$1 = { class: "mb-6" };
const _hoisted_6 = { class: "flex flex-wrap gap-2" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProjectCard",
  props: {
    project: {}
  },
  emits: ["developing-click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const router = useRouter();
    const statusColor = computed(() => {
      const status = props.project.status;
      if (status === "已完成") return "bg-green-500/20 text-green-400";
      if (status === "进行中") return "bg-blue-500/20 text-blue-400";
      if (status === "规划中") return "bg-yellow-500/20 text-yellow-400";
      return "bg-gray-500/20 text-gray-400";
    });
    const handleClick = () => {
      if (props.project.link) {
        router.push(props.project.link);
      } else if (props.project.developing) {
        emit("developing-click", props.project.title);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300 cursor-pointer",
        onClick: handleClick
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", null, [
            createBaseVNode("h3", _hoisted_2$1, toDisplayString(__props.project.title), 1),
            createBaseVNode("div", _hoisted_3$1, [
              createBaseVNode("span", {
                class: normalizeClass(["text-xs px-2 py-1 rounded-full", statusColor.value])
              }, toDisplayString(__props.project.status), 3)
            ])
          ]),
          createBaseVNode("div", {
            class: normalizeClass(["w-10 h-10 rounded-lg bg-gradient-to-br", __props.project.color])
          }, null, 2)
        ]),
        createBaseVNode("p", _hoisted_4$1, toDisplayString(__props.project.description), 1),
        createBaseVNode("div", _hoisted_5$1, [
          createBaseVNode("div", _hoisted_6, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.project.technologies, (tech) => {
              return openBlock(), createElementBlock("span", {
                key: tech,
                class: "text-xs px-3 py-1 rounded-full glass-effect"
              }, toDisplayString(tech), 1);
            }), 128))
          ])
        ]),
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "flex space-x-3" }, [
          createBaseVNode("span", { class: "text-sm font-semibold flex items-center text-indigo-400" }, [
            createTextVNode(" 查看详情 "),
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
          ])
        ], -1))
      ]);
    };
  }
});
const _hoisted_1 = { class: "pt-20 min-h-screen" };
const _hoisted_2 = { class: "container mx-auto px-6" };
const _hoisted_3 = { class: "grid md:grid-cols-2 lg:grid-cols-3 gap-8" };
const _hoisted_4 = { class: "glass-effect rounded-2xl p-8 max-w-sm mx-4 text-center" };
const _hoisted_5 = { class: "text-2xl font-bold text-white mb-2" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProjectsView",
  setup(__props) {
    const showModal = ref(false);
    const developingProject = ref("");
    const projects = [
      {
        title: "CodeCanvas 3D",
        description: "交互式3D作品集，使用Vue 3和Three.js构建",
        technologies: ["Vue 3", "TypeScript", "Three.js", "Tailwind CSS"],
        status: "进行中",
        color: "from-blue-500 to-purple-600",
        link: "/"
      },
      {
        title: "数据可视化平台",
        description: "实时数据分析和可视化工具，支持多种图表类型",
        technologies: ["React", "D3.js", "Node.js", "MongoDB"],
        status: "已完成",
        color: "from-green-500 to-teal-600",
        link: "/data"
      },
      {
        title: "电商管理系统",
        description: "全栈电商平台，包含商品管理、订单处理和支付集成",
        technologies: ["Vue 3", "Express", "PostgreSQL", "Redis"],
        status: "已完成",
        color: "from-orange-500 to-red-600",
        link: "/ecommerce"
      },
      {
        title: "AI助手集成",
        description: "集成多种AI服务的智能助手平台",
        technologies: ["Next.js", "OpenAI API", "LangChain", "Supabase"],
        status: "规划中",
        color: "from-purple-500 to-pink-600",
        developing: true
      },
      {
        title: "移动端应用",
        description: "跨平台移动应用，支持iOS和Android",
        technologies: ["React Native", "Expo", "Firebase", "Redux"],
        status: "进行中",
        color: "from-cyan-500 to-blue-600",
        link: "/mobile"
      },
      {
        title: "DevOps工具链",
        description: "自动化部署和监控工具集合",
        technologies: ["Docker", "Kubernetes", "GitHub Actions", "Grafana"],
        status: "已完成",
        color: "from-gray-500 to-gray-700",
        developing: true
      }
    ];
    const showDeveloping = (title) => {
      developingProject.value = title;
      showModal.value = true;
    };
    const closeModal = () => {
      showModal.value = false;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[0] || (_cache[0] = createBaseVNode("h1", { class: "text-4xl font-bold mb-8 gradient-text" }, "项目展示", -1)),
          _cache[1] || (_cache[1] = createBaseVNode("p", { class: "text-gray-300 mb-12 max-w-3xl" }, " 从概念到部署的完整项目经验，展示实际开发能力和问题解决能力。 ", -1)),
          createBaseVNode("div", _hoisted_3, [
            (openBlock(), createElementBlock(Fragment, null, renderList(projects, (project) => {
              return createVNode(_sfc_main$1, {
                key: project.title,
                project,
                onDevelopingClick: showDeveloping
              }, null, 8, ["project"]);
            }), 64))
          ])
        ]),
        showModal.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "fixed inset-0 bg-black/60 flex items-center justify-center z-50",
          onClick: withModifiers(closeModal, ["self"])
        }, [
          createBaseVNode("div", _hoisted_4, [
            _cache[2] || (_cache[2] = createBaseVNode("div", { class: "w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center" }, [
              createBaseVNode("svg", {
                class: "w-10 h-10 text-white",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createBaseVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                })
              ])
            ], -1)),
            createBaseVNode("h3", _hoisted_5, toDisplayString(developingProject.value), 1),
            _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-gray-400 mb-6" }, "开发中，敬请期待...", -1)),
            _cache[4] || (_cache[4] = createBaseVNode("p", { class: "text-gray-500 text-sm" }, "正在努力实现中，即将上线 🎉", -1)),
            createBaseVNode("button", {
              onClick: closeModal,
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
//# sourceMappingURL=ProjectsView-RyCIUlke.js.map
