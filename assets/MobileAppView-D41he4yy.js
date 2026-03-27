import { d as defineComponent, a as createElementBlock, b as createBaseVNode, t as toDisplayString, u as unref, F as Fragment, r as renderList, h as createStaticVNode, k as createCommentVNode, w as withModifiers, i as ref, g as useRouter, o as openBlock, n as normalizeClass } from "./index-BMcdV4Dz.js";
const _hoisted_1 = { class: "min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" };
const _hoisted_2 = { class: "glass-effect border-b border-white/10" };
const _hoisted_3 = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_4 = { class: "flex justify-between items-center h-16" };
const _hoisted_5 = { class: "flex items-center gap-4" };
const _hoisted_6 = { class: "text-sm text-gray-400" };
const _hoisted_7 = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" };
const _hoisted_8 = { class: "glass-effect rounded-xl mb-6" };
const _hoisted_9 = { class: "border-b border-white/10" };
const _hoisted_10 = { class: "flex -mb-px" };
const _hoisted_11 = ["onClick"];
const _hoisted_12 = {
  key: 0,
  class: "p-6"
};
const _hoisted_13 = { class: "flex justify-center mb-8" };
const _hoisted_14 = { class: "w-72 h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border border-gray-700" };
const _hoisted_15 = { class: "w-full h-full bg-gray-100 rounded-[2.5rem] overflow-hidden relative" };
const _hoisted_16 = { class: "p-4 pb-16 h-full overflow-y-auto" };
const _hoisted_17 = { class: "grid grid-cols-3 gap-3 mb-4" };
const _hoisted_18 = ["onClick"];
const _hoisted_19 = ["innerHTML"];
const _hoisted_20 = { class: "text-xs text-gray-700" };
const _hoisted_21 = { class: "bg-white rounded-xl shadow-sm p-3 space-y-3" };
const _hoisted_22 = ["onClick"];
const _hoisted_23 = { class: "flex-1" };
const _hoisted_24 = { class: "text-sm font-medium text-gray-900" };
const _hoisted_25 = { class: "text-xs text-gray-500" };
const _hoisted_26 = { class: "absolute bottom-0 left-0 right-0 bg-white border-t px-4 py-2 flex justify-between" };
const _hoisted_27 = ["onClick"];
const _hoisted_28 = ["innerHTML"];
const _hoisted_29 = { class: "text-xs mt-1" };
const _hoisted_30 = {
  key: 1,
  class: "p-6"
};
const _hoisted_31 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" };
const _hoisted_32 = ["innerHTML"];
const _hoisted_33 = { class: "text-white font-semibold mb-2" };
const _hoisted_34 = { class: "text-gray-400 text-sm" };
const _hoisted_35 = {
  key: 2,
  class: "p-6"
};
const _hoisted_36 = { class: "grid grid-cols-2 md:grid-cols-4 gap-6" };
const _hoisted_37 = { class: "text-2xl" };
const _hoisted_38 = { class: "text-white font-medium" };
const _hoisted_39 = { class: "text-gray-400 text-sm mt-1" };
const _hoisted_40 = { class: "glass-effect rounded-xl p-6" };
const _hoisted_41 = { class: "grid grid-cols-1 md:grid-cols-4 gap-6" };
const _hoisted_42 = { class: "text-center" };
const _hoisted_43 = { class: "text-3xl font-bold text-white" };
const _hoisted_44 = { class: "text-center" };
const _hoisted_45 = { class: "text-3xl font-bold text-green-400" };
const _hoisted_46 = { class: "text-center" };
const _hoisted_47 = { class: "text-3xl font-bold text-pink-400" };
const _hoisted_48 = { class: "text-center" };
const _hoisted_49 = { class: "text-3xl font-bold text-emerald-400" };
const _hoisted_50 = { class: "bg-white rounded-2xl w-64 overflow-hidden shadow-2xl" };
const _hoisted_51 = { class: "p-4 border-b" };
const _hoisted_52 = { class: "font-bold text-gray-900" };
const _hoisted_53 = { class: "p-4" };
const _hoisted_54 = { class: "text-gray-600 text-sm" };
const _hoisted_55 = {
  key: 1,
  class: "fixed top-20 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg z-50 animate-bounce"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MobileAppView",
  setup(__props) {
    const router = useRouter();
    const currentTime = (/* @__PURE__ */ new Date()).toLocaleString("zh-CN");
    const tabs = [
      { id: "preview", name: "应用预览" },
      { id: "features", name: "功能列表" },
      { id: "tech", name: "技术栈" }
    ];
    const activeTab = ref("preview");
    const appFeatures = [
      { name: "首页", color: "bg-gradient-to-br from-pink-500 to-rose-600", icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>' },
      { name: "消息", color: "bg-gradient-to-br from-blue-500 to-indigo-600", icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>' },
      { name: "我的", color: "bg-gradient-to-br from-purple-500 to-pink-600", icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>' }
    ];
    const appList = [
      { title: "运动记录", subtitle: "今日跑步 5.2km", color: "bg-gradient-to-br from-amber-400 to-orange-500" },
      { title: "健康监测", subtitle: "心率 72 次/分", color: "bg-gradient-to-br from-green-400 to-emerald-500" },
      { title: "我的钱包", subtitle: "余额 ¥8,456.00", color: "bg-gradient-to-br from-cyan-400 to-blue-500" }
    ];
    const bottomNav = ref([
      { name: "首页", active: true, icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>' },
      { name: "发现", active: false, icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>' },
      { name: "消息", active: false, icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>' },
      { name: "我的", active: false, icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>' }
    ]);
    const features = [
      { title: "JWT 认证", desc: "Access Token + Refresh Token 双令牌机制，支持单点登录、设备管理", color: "bg-gradient-to-br from-pink-500 to-rose-600", icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>' },
      { title: "WebSocket 实时通信", desc: "心跳检测、自动重连、消息队列、离线消息同步", color: "bg-gradient-to-br from-blue-500 to-indigo-600", icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>' },
      { title: " gestes 手势识别", desc: "长按、滑动、缩放、旋转，支持自定义手势绑定", color: "bg-gradient-to-br from-purple-500 to-pink-600", icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"/>' },
      { title: "SQLite 本地数据库", desc: "加密存储、离线优先、主动同步，支持海量数据缓存", color: "bg-gradient-to-br from-green-500 to-emerald-600", icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>' },
      { title: "视频通话", desc: "声网/腾讯云 RTC，1080P 高清、美颜、屏幕共享", color: "bg-gradient-to-br from-cyan-500 to-blue-600", icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>' },
      { title: "性能监控", desc: "友盟 + Firebase，卡顿分析、内存泄漏检测、用户路径分析", color: "bg-gradient-to-br from-orange-500 to-red-600", icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>' }
    ];
    const techStack = [
      { name: "React Native", version: "0.76.6", color: "bg-gradient-to-br from-blue-500 to-cyan-500", icon: "RN" },
      { name: "TypeScript", version: "5.4.5", color: "bg-gradient-to-br from-blue-600 to-blue-800", icon: "TS" },
      { name: "Redux Toolkit", version: "2.2.8", color: "bg-gradient-to-br from-purple-500 to-pink-600", icon: "RTK" },
      { name: "Node.js", version: "20.14 LTS", color: "bg-gradient-to-br from-green-500 to-emerald-600", icon: "N" }
    ];
    const downloads = {
      total: "2,847,392",
      rating: "4.9",
      ios: "1,342,856",
      android: "1,504,536"
    };
    const showModal = ref(false);
    const modalData = ref({ title: "", content: "" });
    const toastMessage = ref("");
    const showToast = ref(false);
    const showAppModal = (item) => {
      modalData.value = {
        title: item.name,
        content: `您点击了 ${item.name} 功能，该功能正在开发中...`
      };
      showModal.value = true;
    };
    const showAppToast = (item) => {
      toastMessage.value = `正在打开 ${item.title || item.name}...`;
      showToast.value = true;
      setTimeout(() => {
        showToast.value = false;
      }, 2e3);
    };
    const handleNavClick = (nav) => {
      bottomNav.value.forEach((n) => n.active = false);
      nav.active = true;
      showAppToast({ title: nav.name });
    };
    const closeModal = () => {
      showModal.value = false;
    };
    const goBack = () => {
      router.push("/projects");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("header", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", { class: "flex items-center gap-4" }, [
                createBaseVNode("button", {
                  onClick: goBack,
                  class: "p-2 hover:bg-white/10 rounded-lg transition-colors"
                }, [..._cache[0] || (_cache[0] = [
                  createBaseVNode("svg", {
                    class: "w-5 h-5 text-white",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createBaseVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M15 19l-7-7 7-7"
                    })
                  ], -1)
                ])]),
                _cache[1] || (_cache[1] = createBaseVNode("h1", { class: "text-xl font-bold text-white" }, "移动端应用", -1))
              ]),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("span", _hoisted_6, toDisplayString(unref(currentTime)), 1),
                _cache[2] || (_cache[2] = createBaseVNode("div", { class: "w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white font-medium" }, " 田 ", -1))
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("nav", _hoisted_10, [
                (openBlock(), createElementBlock(Fragment, null, renderList(tabs, (tab) => {
                  return createBaseVNode("button", {
                    key: tab.id,
                    onClick: ($event) => activeTab.value = tab.id,
                    class: normalizeClass([
                      "px-6 py-4 text-sm font-medium transition-colors border-b-2",
                      activeTab.value === tab.id ? "border-pink-500 text-pink-400" : "border-transparent text-gray-400 hover:text-white hover:border-white/20"
                    ])
                  }, toDisplayString(tab.name), 11, _hoisted_11);
                }), 64))
              ])
            ]),
            activeTab.value === "preview" ? (openBlock(), createElementBlock("div", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("div", _hoisted_15, [
                    _cache[5] || (_cache[5] = createStaticVNode('<div class="bg-white px-6 py-2 flex justify-between items-center text-xs"><span class="font-medium">9:41</span><div class="flex items-center gap-1"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z"></path></svg><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.34C7 21.4 7.6 22 8.33 22h7.34c.73 0 1.33-.6 1.33-1.33V5.33C17 4.6 16.4 4 15.67 4z"></path></svg></div></div>', 1)),
                    createBaseVNode("div", _hoisted_16, [
                      _cache[4] || (_cache[4] = createBaseVNode("div", { class: "flex items-center justify-between mb-4" }, [
                        createBaseVNode("h2", { class: "text-lg font-bold text-gray-900" }, "我的应用"),
                        createBaseVNode("div", { class: "w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-600" })
                      ], -1)),
                      createBaseVNode("div", _hoisted_17, [
                        (openBlock(), createElementBlock(Fragment, null, renderList(appFeatures, (item) => {
                          return createBaseVNode("div", {
                            key: item.name,
                            class: "flex flex-col items-center p-3 bg-white rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow active:scale-95",
                            onClick: ($event) => showAppModal(item)
                          }, [
                            createBaseVNode("div", {
                              class: normalizeClass(["w-10 h-10 rounded-xl flex items-center justify-center mb-2", item.color])
                            }, [
                              (openBlock(), createElementBlock("svg", {
                                class: "w-5 h-5 text-white",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                innerHTML: item.icon
                              }, null, 8, _hoisted_19))
                            ], 2),
                            createBaseVNode("span", _hoisted_20, toDisplayString(item.name), 1)
                          ], 8, _hoisted_18);
                        }), 64))
                      ]),
                      createBaseVNode("div", _hoisted_21, [
                        (openBlock(), createElementBlock(Fragment, null, renderList(appList, (item) => {
                          return createBaseVNode("div", {
                            key: item.title,
                            class: "flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg p-2 -mx-2 transition-colors",
                            onClick: ($event) => showAppToast(item)
                          }, [
                            createBaseVNode("div", {
                              class: normalizeClass(["w-12 h-12 rounded-lg", item.color])
                            }, null, 2),
                            createBaseVNode("div", _hoisted_23, [
                              createBaseVNode("p", _hoisted_24, toDisplayString(item.title), 1),
                              createBaseVNode("p", _hoisted_25, toDisplayString(item.subtitle), 1)
                            ]),
                            _cache[3] || (_cache[3] = createBaseVNode("svg", {
                              class: "w-5 h-5 text-gray-400",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createBaseVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M9 5l7 7-7 7"
                              })
                            ], -1))
                          ], 8, _hoisted_22);
                        }), 64))
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_26, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(bottomNav.value, (nav) => {
                        return openBlock(), createElementBlock("div", {
                          key: nav.name,
                          class: normalizeClass(["flex flex-col items-center cursor-pointer transition-colors", nav.active ? "text-pink-500" : "text-gray-400"]),
                          onClick: ($event) => handleNavClick(nav)
                        }, [
                          (openBlock(), createElementBlock("svg", {
                            class: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            innerHTML: nav.icon
                          }, null, 8, _hoisted_28)),
                          createBaseVNode("span", _hoisted_29, toDisplayString(nav.name), 1)
                        ], 10, _hoisted_27);
                      }), 128))
                    ])
                  ])
                ])
              ])
            ])) : createCommentVNode("", true),
            activeTab.value === "features" ? (openBlock(), createElementBlock("div", _hoisted_30, [
              createBaseVNode("div", _hoisted_31, [
                (openBlock(), createElementBlock(Fragment, null, renderList(features, (feature) => {
                  return createBaseVNode("div", {
                    key: feature.title,
                    class: "border border-white/10 rounded-xl p-5 hover:bg-white/5 transition-colors"
                  }, [
                    createBaseVNode("div", {
                      class: normalizeClass(["w-12 h-12 rounded-xl flex items-center justify-center mb-4", feature.color])
                    }, [
                      (openBlock(), createElementBlock("svg", {
                        class: "w-6 h-6 text-white",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        innerHTML: feature.icon
                      }, null, 8, _hoisted_32))
                    ], 2),
                    createBaseVNode("h3", _hoisted_33, toDisplayString(feature.title), 1),
                    createBaseVNode("p", _hoisted_34, toDisplayString(feature.desc), 1)
                  ]);
                }), 64))
              ])
            ])) : createCommentVNode("", true),
            activeTab.value === "tech" ? (openBlock(), createElementBlock("div", _hoisted_35, [
              createBaseVNode("div", _hoisted_36, [
                (openBlock(), createElementBlock(Fragment, null, renderList(techStack, (tech) => {
                  return createBaseVNode("div", {
                    key: tech.name,
                    class: "glass-effect rounded-xl p-6 text-center hover:scale-105 transition-transform"
                  }, [
                    createBaseVNode("div", {
                      class: normalizeClass(["w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-3", tech.color])
                    }, [
                      createBaseVNode("span", _hoisted_37, toDisplayString(tech.icon), 1)
                    ], 2),
                    createBaseVNode("h3", _hoisted_38, toDisplayString(tech.name), 1),
                    createBaseVNode("p", _hoisted_39, toDisplayString(tech.version), 1)
                  ]);
                }), 64))
              ])
            ])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_40, [
            _cache[10] || (_cache[10] = createBaseVNode("h3", { class: "text-lg font-semibold text-white mb-6" }, "下载统计", -1)),
            createBaseVNode("div", _hoisted_41, [
              createBaseVNode("div", _hoisted_42, [
                createBaseVNode("p", _hoisted_43, toDisplayString(downloads.total), 1),
                _cache[6] || (_cache[6] = createBaseVNode("p", { class: "text-gray-400 text-sm mt-1" }, "总下载量", -1))
              ]),
              createBaseVNode("div", _hoisted_44, [
                createBaseVNode("p", _hoisted_45, toDisplayString(downloads.rating), 1),
                _cache[7] || (_cache[7] = createBaseVNode("p", { class: "text-gray-400 text-sm mt-1" }, "应用评分", -1))
              ]),
              createBaseVNode("div", _hoisted_46, [
                createBaseVNode("p", _hoisted_47, toDisplayString(downloads.ios), 1),
                _cache[8] || (_cache[8] = createBaseVNode("p", { class: "text-gray-400 text-sm mt-1" }, "iOS 下载", -1))
              ]),
              createBaseVNode("div", _hoisted_48, [
                createBaseVNode("p", _hoisted_49, toDisplayString(downloads.android), 1),
                _cache[9] || (_cache[9] = createBaseVNode("p", { class: "text-gray-400 text-sm mt-1" }, "Android 下载", -1))
              ])
            ])
          ])
        ]),
        showModal.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
          onClick: withModifiers(closeModal, ["self"])
        }, [
          createBaseVNode("div", _hoisted_50, [
            createBaseVNode("div", _hoisted_51, [
              createBaseVNode("h3", _hoisted_52, toDisplayString(modalData.value.title), 1)
            ]),
            createBaseVNode("div", _hoisted_53, [
              createBaseVNode("p", _hoisted_54, toDisplayString(modalData.value.content), 1)
            ]),
            createBaseVNode("div", { class: "p-4 bg-gray-50" }, [
              createBaseVNode("button", {
                onClick: closeModal,
                class: "w-full py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-lg font-medium"
              }, " 知道了 ")
            ])
          ])
        ])) : createCommentVNode("", true),
        showToast.value ? (openBlock(), createElementBlock("div", _hoisted_55, toDisplayString(toastMessage.value), 1)) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=MobileAppView-D41he4yy.js.map
