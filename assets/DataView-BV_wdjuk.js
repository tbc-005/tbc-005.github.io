import { d as defineComponent, a as createElementBlock, b as createBaseVNode, t as toDisplayString, u as unref, F as Fragment, r as renderList, h as createStaticVNode, k as createCommentVNode, p as normalizeStyle, i as ref, g as useRouter, o as openBlock, n as normalizeClass } from "./index-BMcdV4Dz.js";
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
const _hoisted_13 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" };
const _hoisted_14 = { class: "glass-effect rounded-xl p-6" };
const _hoisted_15 = { class: "flex items-center justify-between" };
const _hoisted_16 = { class: "text-2xl font-bold text-white mt-1" };
const _hoisted_17 = { class: "glass-effect rounded-xl p-6" };
const _hoisted_18 = { class: "flex items-center justify-between" };
const _hoisted_19 = { class: "text-2xl font-bold text-white mt-1" };
const _hoisted_20 = { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" };
const _hoisted_21 = { class: "border border-white/10 rounded-xl p-6" };
const _hoisted_22 = { class: "h-64 flex items-end justify-around gap-3" };
const _hoisted_23 = { class: "text-xs text-gray-400" };
const _hoisted_24 = { class: "border border-white/10 rounded-xl p-6" };
const _hoisted_25 = { class: "space-y-4" };
const _hoisted_26 = { class: "w-20 text-sm text-gray-400" };
const _hoisted_27 = { class: "flex-1 h-6 bg-white/10 rounded-full overflow-hidden" };
const _hoisted_28 = { class: "text-xs text-white font-medium" };
const _hoisted_29 = {
  key: 1,
  class: "p-6"
};
const _hoisted_30 = { class: "grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6" };
const _hoisted_31 = { class: "border border-white/10 rounded-xl p-6" };
const _hoisted_32 = { class: "flex items-center justify-between mb-4" };
const _hoisted_33 = { class: "text-2xl font-bold text-cyan-400" };
const _hoisted_34 = { class: "h-2 bg-white/10 rounded-full overflow-hidden" };
const _hoisted_35 = { class: "border border-white/10 rounded-xl p-6" };
const _hoisted_36 = { class: "flex items-center justify-between mb-4" };
const _hoisted_37 = { class: "text-2xl font-bold text-purple-400" };
const _hoisted_38 = { class: "h-2 bg-white/10 rounded-full overflow-hidden" };
const _hoisted_39 = { class: "border border-white/10 rounded-xl p-6" };
const _hoisted_40 = { class: "flex items-center justify-between mb-4" };
const _hoisted_41 = { class: "text-2xl font-bold text-orange-400" };
const _hoisted_42 = { class: "h-2 bg-white/10 rounded-full overflow-hidden" };
const _hoisted_43 = { class: "border border-white/10 rounded-xl p-6" };
const _hoisted_44 = { class: "space-y-2 max-h-64 overflow-y-auto" };
const _hoisted_45 = { class: "text-gray-400 flex-1 truncate" };
const _hoisted_46 = { class: "text-gray-500" };
const _hoisted_47 = {
  key: 2,
  class: "p-6"
};
const _hoisted_48 = { class: "overflow-x-auto" };
const _hoisted_49 = { class: "w-full" };
const _hoisted_50 = { class: "divide-y divide-white/10" };
const _hoisted_51 = { class: "py-4 text-gray-400" };
const _hoisted_52 = { class: "py-4 text-white font-medium" };
const _hoisted_53 = { class: "py-4 text-green-400" };
const _hoisted_54 = { class: "py-4 text-cyan-400" };
const _hoisted_55 = { class: "py-4 text-white" };
const _hoisted_56 = { class: "py-4" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DataView",
  setup(__props) {
    const router = useRouter();
    const currentTime = (/* @__PURE__ */ new Date()).toLocaleString("zh-CN");
    const tabs = [
      { id: "overview", name: "数据概览" },
      { id: "realtime", name: "实时监控" },
      { id: "reports", name: "数据报表" }
    ];
    const activeTab = ref("overview");
    const visitData = [1200, 1890, 2100, 1750, 2400, 2800, 3200];
    const maxVisit = Math.max(...visitData);
    const visitLabels = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
    const userDistribution = [
      { name: "北京", percent: 32 },
      { name: "上海", percent: 28 },
      { name: "广州", percent: 18 },
      { name: "深圳", percent: 14 },
      { name: "其他", percent: 8 }
    ];
    const regionColors = [
      "bg-gradient-to-r from-cyan-500 to-blue-500",
      "bg-gradient-to-r from-blue-500 to-indigo-500",
      "bg-gradient-to-r from-indigo-500 to-purple-500",
      "bg-gradient-to-r from-purple-500 to-pink-500",
      "bg-gradient-to-r from-pink-500 to-red-500"
    ];
    const cpuUsage = ref(42);
    const memoryUsage = ref(68);
    const diskUsage = ref(35);
    const requestLogs = ref([
      { method: "GET", path: "/api/users/profile", time: "10:23:45", status: 200 },
      { method: "POST", path: "/api/data/analytics", time: "10:23:44", status: 201 },
      { method: "GET", path: "/api/dashboard/stats", time: "10:23:43", status: 200 },
      { method: "PUT", path: "/api/settings", time: "10:23:42", status: 204 },
      { method: "GET", path: "/api/reports/monthly", time: "10:23:41", status: 200 },
      { method: "DELETE", path: "/api/cache", time: "10:23:40", status: 204 },
      { method: "GET", path: "/api/metrics", time: "10:23:39", status: 200 }
    ]);
    const reports = ref([
      { date: "2026-03-27", visits: 38456, newUsers: 1234, activeUsers: 8956, avgResponse: 38, errorRate: 0.2 },
      { date: "2026-03-26", visits: 35234, newUsers: 1089, activeUsers: 8234, avgResponse: 42, errorRate: 0.3 },
      { date: "2026-03-25", visits: 32987, newUsers: 987, activeUsers: 7890, avgResponse: 45, errorRate: 0.5 },
      { date: "2026-03-24", visits: 34123, newUsers: 1123, activeUsers: 8123, avgResponse: 40, errorRate: 0.2 },
      { date: "2026-03-23", visits: 31567, newUsers: 956, activeUsers: 7654, avgResponse: 44, errorRate: 0.4 },
      { date: "2026-03-22", visits: 30234, newUsers: 876, activeUsers: 7234, avgResponse: 48, errorRate: 0.6 },
      { date: "2026-03-21", visits: 34567, newUsers: 1234, activeUsers: 8456, avgResponse: 39, errorRate: 0.2 }
    ]);
    setInterval(() => {
      cpuUsage.value = Math.floor(Math.random() * 30) + 30;
      memoryUsage.value = Math.floor(Math.random() * 20) + 60;
      diskUsage.value = Math.floor(Math.random() * 10) + 30;
      requestLogs.value.unshift({
        method: ["GET", "POST", "PUT", "DELETE"][Math.floor(Math.random() * 4)],
        path: ["/api/users", "/api/data", "/api/stats", "/api/metrics"][Math.floor(Math.random() * 4)],
        time: (/* @__PURE__ */ new Date()).toLocaleTimeString("zh-CN"),
        status: Math.floor(Math.random() * 100) + 100
      });
      requestLogs.value = requestLogs.value.slice(0, 10);
    }, 3e3);
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
                _cache[1] || (_cache[1] = createBaseVNode("h1", { class: "text-xl font-bold text-white" }, "数据可视化平台", -1))
              ]),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("span", _hoisted_6, toDisplayString(unref(currentTime)), 1),
                _cache[2] || (_cache[2] = createBaseVNode("div", { class: "w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-medium" }, " 田 ", -1))
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
                      activeTab.value === tab.id ? "border-cyan-500 text-cyan-400" : "border-transparent text-gray-400 hover:text-white hover:border-white/20"
                    ])
                  }, toDisplayString(tab.name), 11, _hoisted_11);
                }), 64))
              ])
            ]),
            activeTab.value === "overview" ? (openBlock(), createElementBlock("div", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("div", null, [
                      _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-sm font-medium text-gray-400" }, "总访问量", -1)),
                      createBaseVNode("p", _hoisted_16, toDisplayString(268547 .toLocaleString()), 1),
                      _cache[4] || (_cache[4] = createBaseVNode("p", { class: "text-sm text-green-400 mt-1" }, "↑ 12.8%", -1))
                    ]),
                    _cache[5] || (_cache[5] = createBaseVNode("div", { class: "w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center" }, [
                      createBaseVNode("svg", {
                        class: "w-6 h-6 text-cyan-400",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        }),
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        })
                      ])
                    ], -1))
                  ])
                ]),
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("div", _hoisted_18, [
                    createBaseVNode("div", null, [
                      _cache[6] || (_cache[6] = createBaseVNode("p", { class: "text-sm font-medium text-gray-400" }, "活跃用户", -1)),
                      createBaseVNode("p", _hoisted_19, toDisplayString(18432 .toLocaleString()), 1),
                      _cache[7] || (_cache[7] = createBaseVNode("p", { class: "text-sm text-green-400 mt-1" }, "↑ 8.3%", -1))
                    ]),
                    _cache[8] || (_cache[8] = createBaseVNode("div", { class: "w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center" }, [
                      createBaseVNode("svg", {
                        class: "w-6 h-6 text-blue-400",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        })
                      ])
                    ], -1))
                  ])
                ]),
                _cache[9] || (_cache[9] = createStaticVNode('<div class="glass-effect rounded-xl p-6"><div class="flex items-center justify-between"><div><p class="text-sm font-medium text-gray-400">平均响应</p><p class="text-2xl font-bold text-white mt-1">42ms</p><p class="text-sm text-green-400 mt-1">↓ 15.2%</p></div><div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center"><svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div></div></div><div class="glass-effect rounded-xl p-6"><div class="flex items-center justify-between"><div><p class="text-sm font-medium text-gray-400">系统健康度</p><p class="text-2xl font-bold text-white mt-1">99.8%</p><p class="text-sm text-green-400 mt-1">稳定</p></div><div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center"><svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div></div></div>', 2))
              ]),
              createBaseVNode("div", _hoisted_20, [
                createBaseVNode("div", _hoisted_21, [
                  _cache[10] || (_cache[10] = createBaseVNode("h3", { class: "text-lg font-semibold text-white mb-4" }, "访问趋势（近7天）", -1)),
                  createBaseVNode("div", _hoisted_22, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(visitData, (val, idx) => {
                      return createBaseVNode("div", {
                        key: idx,
                        class: "flex flex-col items-center gap-2 flex-1"
                      }, [
                        createBaseVNode("div", {
                          class: "w-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t transition-all hover:from-cyan-400 hover:to-blue-400",
                          style: normalizeStyle({ height: val / unref(maxVisit) * 200 + "px" })
                        }, null, 4),
                        createBaseVNode("span", _hoisted_23, toDisplayString(visitLabels[idx]), 1)
                      ]);
                    }), 64))
                  ])
                ]),
                createBaseVNode("div", _hoisted_24, [
                  _cache[11] || (_cache[11] = createBaseVNode("h3", { class: "text-lg font-semibold text-white mb-4" }, "用户分布", -1)),
                  createBaseVNode("div", _hoisted_25, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(userDistribution, (region, idx) => {
                      return createBaseVNode("div", {
                        key: region.name,
                        class: "flex items-center gap-4"
                      }, [
                        createBaseVNode("div", _hoisted_26, toDisplayString(region.name), 1),
                        createBaseVNode("div", _hoisted_27, [
                          createBaseVNode("div", {
                            class: normalizeClass(["h-full rounded-full transition-all flex items-center justify-end pr-2", regionColors[idx]]),
                            style: normalizeStyle({ width: region.percent + "%" })
                          }, [
                            createBaseVNode("span", _hoisted_28, toDisplayString(region.percent) + "%", 1)
                          ], 6)
                        ])
                      ]);
                    }), 64))
                  ])
                ])
              ])
            ])) : createCommentVNode("", true),
            activeTab.value === "realtime" ? (openBlock(), createElementBlock("div", _hoisted_29, [
              createBaseVNode("div", _hoisted_30, [
                createBaseVNode("div", _hoisted_31, [
                  createBaseVNode("div", _hoisted_32, [
                    _cache[12] || (_cache[12] = createBaseVNode("h3", { class: "text-white font-medium" }, "CPU 使用率", -1)),
                    createBaseVNode("span", _hoisted_33, toDisplayString(cpuUsage.value) + "%", 1)
                  ]),
                  createBaseVNode("div", _hoisted_34, [
                    createBaseVNode("div", {
                      class: "h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all",
                      style: normalizeStyle({ width: cpuUsage.value + "%" })
                    }, null, 4)
                  ])
                ]),
                createBaseVNode("div", _hoisted_35, [
                  createBaseVNode("div", _hoisted_36, [
                    _cache[13] || (_cache[13] = createBaseVNode("h3", { class: "text-white font-medium" }, "内存使用率", -1)),
                    createBaseVNode("span", _hoisted_37, toDisplayString(memoryUsage.value) + "%", 1)
                  ]),
                  createBaseVNode("div", _hoisted_38, [
                    createBaseVNode("div", {
                      class: "h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all",
                      style: normalizeStyle({ width: memoryUsage.value + "%" })
                    }, null, 4)
                  ])
                ]),
                createBaseVNode("div", _hoisted_39, [
                  createBaseVNode("div", _hoisted_40, [
                    _cache[14] || (_cache[14] = createBaseVNode("h3", { class: "text-white font-medium" }, "磁盘使用率", -1)),
                    createBaseVNode("span", _hoisted_41, toDisplayString(diskUsage.value) + "%", 1)
                  ]),
                  createBaseVNode("div", _hoisted_42, [
                    createBaseVNode("div", {
                      class: "h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all",
                      style: normalizeStyle({ width: diskUsage.value + "%" })
                    }, null, 4)
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_43, [
                _cache[15] || (_cache[15] = createBaseVNode("h3", { class: "text-lg font-semibold text-white mb-4" }, "实时请求日志", -1)),
                createBaseVNode("div", _hoisted_44, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(requestLogs.value, (log, idx) => {
                    return openBlock(), createElementBlock("div", {
                      key: idx,
                      class: "flex items-center gap-4 text-sm py-2 border-b border-white/5"
                    }, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-2 py-0.5 rounded text-xs font-medium",
                          log.method === "GET" ? "bg-green-500/20 text-green-400" : log.method === "POST" ? "bg-blue-500/20 text-blue-400" : "bg-yellow-500/20 text-yellow-400"
                        ])
                      }, toDisplayString(log.method), 3),
                      createBaseVNode("span", _hoisted_45, toDisplayString(log.path), 1),
                      createBaseVNode("span", _hoisted_46, toDisplayString(log.time), 1),
                      createBaseVNode("span", {
                        class: normalizeClass(log.status < 400 ? "text-green-400" : "text-red-400")
                      }, toDisplayString(log.status) + "ms", 3)
                    ]);
                  }), 128))
                ])
              ])
            ])) : createCommentVNode("", true),
            activeTab.value === "reports" ? (openBlock(), createElementBlock("div", _hoisted_47, [
              _cache[17] || (_cache[17] = createStaticVNode('<div class="flex justify-between items-center mb-6"><h3 class="text-lg font-semibold text-white">月度数据报表</h3><button class="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg> 导出报表 </button></div>', 1)),
              createBaseVNode("div", _hoisted_48, [
                createBaseVNode("table", _hoisted_49, [
                  _cache[16] || (_cache[16] = createBaseVNode("thead", null, [
                    createBaseVNode("tr", { class: "text-left text-sm text-gray-400 border-b border-white/10" }, [
                      createBaseVNode("th", { class: "pb-3 font-medium" }, "日期"),
                      createBaseVNode("th", { class: "pb-3 font-medium" }, "访问量"),
                      createBaseVNode("th", { class: "pb-3 font-medium" }, "新增用户"),
                      createBaseVNode("th", { class: "pb-3 font-medium" }, "活跃用户"),
                      createBaseVNode("th", { class: "pb-3 font-medium" }, "平均响应"),
                      createBaseVNode("th", { class: "pb-3 font-medium" }, "错误率")
                    ])
                  ], -1)),
                  createBaseVNode("tbody", _hoisted_50, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(reports.value, (report) => {
                      return openBlock(), createElementBlock("tr", {
                        key: report.date,
                        class: "text-sm"
                      }, [
                        createBaseVNode("td", _hoisted_51, toDisplayString(report.date), 1),
                        createBaseVNode("td", _hoisted_52, toDisplayString(report.visits.toLocaleString()), 1),
                        createBaseVNode("td", _hoisted_53, "+" + toDisplayString(report.newUsers.toLocaleString()), 1),
                        createBaseVNode("td", _hoisted_54, toDisplayString(report.activeUsers.toLocaleString()), 1),
                        createBaseVNode("td", _hoisted_55, toDisplayString(report.avgResponse) + "ms", 1),
                        createBaseVNode("td", _hoisted_56, [
                          createBaseVNode("span", {
                            class: normalizeClass(report.errorRate < 1 ? "text-green-400" : "text-red-400")
                          }, toDisplayString(report.errorRate) + "%", 3)
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ])
            ])) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=DataView-BV_wdjuk.js.map
