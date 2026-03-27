import { d as defineComponent, a as createElementBlock, b as createBaseVNode, t as toDisplayString, u as unref, F as Fragment, r as renderList, l as withDirectives, v as vModelText, e as createTextVNode, k as createCommentVNode, m as vModelSelect, h as createStaticVNode, i as ref, j as computed, g as useRouter, o as openBlock, n as normalizeClass, p as normalizeStyle } from "./index-BMcdV4Dz.js";
const _hoisted_1 = { class: "min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" };
const _hoisted_2 = { class: "glass-effect border-b border-white/10" };
const _hoisted_3 = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_4 = { class: "flex justify-between items-center h-16" };
const _hoisted_5 = { class: "flex items-center gap-4" };
const _hoisted_6 = { class: "text-sm text-gray-400" };
const _hoisted_7 = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" };
const _hoisted_8 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" };
const _hoisted_9 = { class: "glass-effect rounded-xl p-6" };
const _hoisted_10 = { class: "flex items-center justify-between" };
const _hoisted_11 = { class: "text-2xl font-bold text-white mt-1" };
const _hoisted_12 = { class: "text-sm text-green-400 mt-1" };
const _hoisted_13 = { class: "glass-effect rounded-xl p-6" };
const _hoisted_14 = { class: "flex items-center justify-between" };
const _hoisted_15 = { class: "text-2xl font-bold text-white mt-1" };
const _hoisted_16 = { class: "glass-effect rounded-xl p-6" };
const _hoisted_17 = { class: "flex items-center justify-between" };
const _hoisted_18 = { class: "text-2xl font-bold text-white mt-1" };
const _hoisted_19 = { class: "text-sm text-blue-400 mt-1" };
const _hoisted_20 = { class: "glass-effect rounded-xl p-6" };
const _hoisted_21 = { class: "flex items-center justify-between" };
const _hoisted_22 = { class: "text-2xl font-bold text-white mt-1" };
const _hoisted_23 = { class: "text-sm text-purple-400 mt-1" };
const _hoisted_24 = { class: "glass-effect rounded-xl mb-6" };
const _hoisted_25 = { class: "border-b border-white/10" };
const _hoisted_26 = { class: "flex -mb-px" };
const _hoisted_27 = ["onClick"];
const _hoisted_28 = {
  key: 0,
  class: "p-6"
};
const _hoisted_29 = { class: "flex justify-between items-center mb-6" };
const _hoisted_30 = { class: "relative" };
const _hoisted_31 = { class: "overflow-x-auto" };
const _hoisted_32 = { class: "w-full" };
const _hoisted_33 = { class: "divide-y divide-white/10" };
const _hoisted_34 = { class: "py-4" };
const _hoisted_35 = { class: "flex items-center gap-3" };
const _hoisted_36 = { class: "font-medium text-white" };
const _hoisted_37 = { class: "text-gray-500 text-xs" };
const _hoisted_38 = { class: "py-4 text-gray-400" };
const _hoisted_39 = { class: "py-4 font-medium text-white" };
const _hoisted_40 = { class: "py-4" };
const _hoisted_41 = { class: "py-4" };
const _hoisted_42 = { class: "py-4" };
const _hoisted_43 = { class: "flex items-center gap-2" };
const _hoisted_44 = ["onClick"];
const _hoisted_45 = ["onClick"];
const _hoisted_46 = {
  key: 1,
  class: "p-6"
};
const _hoisted_47 = { class: "overflow-x-auto" };
const _hoisted_48 = { class: "w-full" };
const _hoisted_49 = { class: "divide-y divide-white/10" };
const _hoisted_50 = { class: "py-4 font-mono text-indigo-400" };
const _hoisted_51 = { class: "py-4 text-gray-400" };
const _hoisted_52 = { class: "py-4 text-gray-400" };
const _hoisted_53 = { class: "py-4 font-medium text-white" };
const _hoisted_54 = { class: "py-4" };
const _hoisted_55 = { class: "py-4 text-gray-500" };
const _hoisted_56 = { class: "py-4" };
const _hoisted_57 = ["onChange"];
const _hoisted_58 = {
  key: 2,
  class: "p-6"
};
const _hoisted_59 = { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" };
const _hoisted_60 = { class: "border border-white/10 rounded-xl p-6" };
const _hoisted_61 = { class: "h-48 flex items-end justify-around gap-2" };
const _hoisted_62 = { class: "text-xs text-gray-400" };
const _hoisted_63 = { class: "border border-white/10 rounded-xl p-6" };
const _hoisted_64 = { class: "space-y-4" };
const _hoisted_65 = { class: "flex justify-between text-sm mb-1" };
const _hoisted_66 = { class: "text-gray-400" };
const _hoisted_67 = { class: "font-medium text-white" };
const _hoisted_68 = { class: "h-2 bg-white/10 rounded-full overflow-hidden" };
const _hoisted_69 = {
  key: 0,
  class: "fixed inset-0 bg-black/50 flex items-center justify-center z-50"
};
const _hoisted_70 = { class: "glass-effect rounded-xl shadow-xl w-full max-w-md mx-4" };
const _hoisted_71 = { class: "px-6 py-4 border-b border-white/10 flex justify-between items-center" };
const _hoisted_72 = { class: "text-lg font-semibold text-white" };
const _hoisted_73 = { class: "p-6 space-y-4" };
const _hoisted_74 = { class: "grid grid-cols-2 gap-4" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EcommerceView",
  setup(__props) {
    const router = useRouter();
    const currentTime = (/* @__PURE__ */ new Date()).toLocaleString("zh-CN");
    const tabs = [
      { id: "products", name: "商品管理" },
      { id: "orders", name: "订单管理" },
      { id: "overview", name: "数据概览" }
    ];
    const activeTab = ref("products");
    const stats = {
      todaySales: 12856,
      salesGrowth: 12.5,
      pendingOrders: 23,
      totalProducts: 156,
      activeProducts: 142,
      totalUsers: 2847,
      activeUsers: 1832
    };
    const products = ref([
      { id: "P001", name: "iPhone 15 Pro Max", category: "电子产品", price: 9999, stock: 45, status: "在售" },
      { id: "P002", name: "MacBook Air M3", category: "电子产品", price: 8999, stock: 28, status: "在售" },
      { id: "P003", name: "AirPods Pro 2", category: "电子产品", price: 1899, stock: 120, status: "在售" },
      { id: "P004", name: "Nike Air Jordan 1", category: "服装", price: 1499, stock: 8, status: "在售" },
      { id: "P005", name: "雅诗兰黛小棕瓶", category: "美妆", price: 899, stock: 0, status: "下架" },
      { id: "P006", name: "小米手环 8", category: "电子产品", price: 299, stock: 256, status: "在售" }
    ]);
    const orders = ref([
      { id: "ORD2026032701", buyer: "张三", product: "iPhone 15 Pro Max", amount: 9999, status: "已完成", time: "2026-03-27 10:23" },
      { id: "ORD2026032702", buyer: "李四", product: "MacBook Air M3", amount: 8999, status: "处理中", time: "2026-03-27 11:45" },
      { id: "ORD2026032703", buyer: "王五", product: "AirPods Pro 2", amount: 1899, status: "待支付", time: "2026-03-27 14:12" },
      { id: "ORD2026032704", buyer: "赵六", product: "Nike Air Jordan 1", amount: 1499, status: "已取消", time: "2026-03-27 15:30" },
      { id: "ORD2026032705", buyer: "钱七", product: "小米手环 8", amount: 299, status: "处理中", time: "2026-03-27 16:55" }
    ]);
    const salesChart = [65, 85, 72, 98, 110, 95, 88];
    const salesLabels = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
    const categorySales = [
      { name: "电子产品", percent: 48 },
      { name: "服装", percent: 22 },
      { name: "美妆", percent: 15 },
      { name: "家居", percent: 10 },
      { name: "食品", percent: 5 }
    ];
    const searchQuery = ref("");
    const filteredProducts = computed(() => {
      if (!searchQuery.value) return products.value;
      return products.value.filter(
        (p) => p.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
    const showAddModal = ref(false);
    const editingProduct = ref(null);
    const productForm = ref({
      name: "",
      category: "电子产品",
      price: 0,
      stock: 0
    });
    const editProduct = (product) => {
      editingProduct.value = product;
      productForm.value = { ...product };
      showAddModal.value = true;
    };
    const saveProduct = () => {
      if (editingProduct.value) {
        const idx = products.value.findIndex((p) => p.id === editingProduct.value.id);
        if (idx !== -1) {
          products.value[idx] = { ...productForm.value, id: editingProduct.value.id, status: productForm.value.stock > 0 ? "在售" : "下架" };
        }
      } else {
        products.value.push({
          id: "P" + Date.now().toString().slice(-3),
          ...productForm.value,
          status: productForm.value.stock > 0 ? "在售" : "下架"
        });
      }
      closeModal();
    };
    const deleteProduct = (id) => {
      if (confirm("确定要删除该商品吗？")) {
        products.value = products.value.filter((p) => p.id !== id);
      }
    };
    const closeModal = () => {
      showAddModal.value = false;
      editingProduct.value = null;
      productForm.value = { name: "", category: "电子产品", price: 0, stock: 0 };
    };
    const updateOrderStatus = (order, event) => {
      const target = event.target;
      order.status = target.value;
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
                }, [..._cache[6] || (_cache[6] = [
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
                _cache[7] || (_cache[7] = createBaseVNode("h1", { class: "text-xl font-bold text-white" }, "电商管理系统", -1))
              ]),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("span", _hoisted_6, "最后更新: " + toDisplayString(unref(currentTime)), 1),
                _cache[8] || (_cache[8] = createBaseVNode("div", { class: "w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium" }, " 田 ", -1))
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", null, [
                  _cache[9] || (_cache[9] = createBaseVNode("p", { class: "text-sm font-medium text-gray-400" }, "今日销售额", -1)),
                  createBaseVNode("p", _hoisted_11, "¥" + toDisplayString(stats.todaySales.toLocaleString()), 1),
                  createBaseVNode("p", _hoisted_12, "↑ " + toDisplayString(stats.salesGrowth) + "%", 1)
                ]),
                _cache[10] || (_cache[10] = createBaseVNode("div", { class: "w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center" }, [
                  createBaseVNode("svg", {
                    class: "w-6 h-6 text-green-400",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createBaseVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    })
                  ])
                ], -1))
              ])
            ]),
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("div", null, [
                  _cache[11] || (_cache[11] = createBaseVNode("p", { class: "text-sm font-medium text-gray-400" }, "待处理订单", -1)),
                  createBaseVNode("p", _hoisted_15, toDisplayString(stats.pendingOrders), 1),
                  _cache[12] || (_cache[12] = createBaseVNode("p", { class: "text-sm text-orange-400 mt-1" }, "需尽快处理", -1))
                ]),
                _cache[13] || (_cache[13] = createBaseVNode("div", { class: "w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center" }, [
                  createBaseVNode("svg", {
                    class: "w-6 h-6 text-orange-400",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createBaseVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    })
                  ])
                ], -1))
              ])
            ]),
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("div", _hoisted_17, [
                createBaseVNode("div", null, [
                  _cache[14] || (_cache[14] = createBaseVNode("p", { class: "text-sm font-medium text-gray-400" }, "商品总数", -1)),
                  createBaseVNode("p", _hoisted_18, toDisplayString(stats.totalProducts), 1),
                  createBaseVNode("p", _hoisted_19, "在售: " + toDisplayString(stats.activeProducts), 1)
                ]),
                _cache[15] || (_cache[15] = createBaseVNode("div", { class: "w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center" }, [
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
                      d: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    })
                  ])
                ], -1))
              ])
            ]),
            createBaseVNode("div", _hoisted_20, [
              createBaseVNode("div", _hoisted_21, [
                createBaseVNode("div", null, [
                  _cache[16] || (_cache[16] = createBaseVNode("p", { class: "text-sm font-medium text-gray-400" }, "用户总数", -1)),
                  createBaseVNode("p", _hoisted_22, toDisplayString(stats.totalUsers.toLocaleString()), 1),
                  createBaseVNode("p", _hoisted_23, "活跃: " + toDisplayString(stats.activeUsers), 1)
                ]),
                _cache[17] || (_cache[17] = createBaseVNode("div", { class: "w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center" }, [
                  createBaseVNode("svg", {
                    class: "w-6 h-6 text-purple-400",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createBaseVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    })
                  ])
                ], -1))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_24, [
            createBaseVNode("div", _hoisted_25, [
              createBaseVNode("nav", _hoisted_26, [
                (openBlock(), createElementBlock(Fragment, null, renderList(tabs, (tab) => {
                  return createBaseVNode("button", {
                    key: tab.id,
                    onClick: ($event) => activeTab.value = tab.id,
                    class: normalizeClass([
                      "px-6 py-4 text-sm font-medium transition-colors border-b-2",
                      activeTab.value === tab.id ? "border-indigo-500 text-indigo-400" : "border-transparent text-gray-400 hover:text-white hover:border-white/20"
                    ])
                  }, toDisplayString(tab.name), 11, _hoisted_27);
                }), 64))
              ])
            ]),
            activeTab.value === "products" ? (openBlock(), createElementBlock("div", _hoisted_28, [
              createBaseVNode("div", _hoisted_29, [
                createBaseVNode("div", _hoisted_30, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                    type: "text",
                    placeholder: "搜索商品...",
                    class: "w-64 pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  }, null, 512), [
                    [vModelText, searchQuery.value]
                  ]),
                  _cache[18] || (_cache[18] = createBaseVNode("svg", {
                    class: "w-5 h-5 text-gray-400 absolute left-3 top-2.5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createBaseVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    })
                  ], -1))
                ]),
                createBaseVNode("button", {
                  onClick: _cache[1] || (_cache[1] = ($event) => showAddModal.value = true),
                  class: "px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                }, [..._cache[19] || (_cache[19] = [
                  createBaseVNode("svg", {
                    class: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createBaseVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M12 4v16m8-8H4"
                    })
                  ], -1),
                  createTextVNode(" 添加商品 ", -1)
                ])])
              ]),
              createBaseVNode("div", _hoisted_31, [
                createBaseVNode("table", _hoisted_32, [
                  _cache[23] || (_cache[23] = createBaseVNode("thead", null, [
                    createBaseVNode("tr", { class: "text-left text-sm text-gray-400 border-b border-white/10" }, [
                      createBaseVNode("th", { class: "pb-3 font-medium" }, "商品"),
                      createBaseVNode("th", { class: "pb-3 font-medium" }, "分类"),
                      createBaseVNode("th", { class: "pb-3 font-medium" }, "价格"),
                      createBaseVNode("th", { class: "pb-3 font-medium" }, "库存"),
                      createBaseVNode("th", { class: "pb-3 font-medium" }, "状态"),
                      createBaseVNode("th", { class: "pb-3 font-medium" }, "操作")
                    ])
                  ], -1)),
                  createBaseVNode("tbody", _hoisted_33, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(filteredProducts.value, (product) => {
                      return openBlock(), createElementBlock("tr", {
                        key: product.id,
                        class: "text-sm"
                      }, [
                        createBaseVNode("td", _hoisted_34, [
                          createBaseVNode("div", _hoisted_35, [
                            _cache[20] || (_cache[20] = createBaseVNode("div", { class: "w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400" }, [
                              createBaseVNode("svg", {
                                class: "w-5 h-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createBaseVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                })
                              ])
                            ], -1)),
                            createBaseVNode("div", null, [
                              createBaseVNode("p", _hoisted_36, toDisplayString(product.name), 1),
                              createBaseVNode("p", _hoisted_37, "ID: " + toDisplayString(product.id), 1)
                            ])
                          ])
                        ]),
                        createBaseVNode("td", _hoisted_38, toDisplayString(product.category), 1),
                        createBaseVNode("td", _hoisted_39, "¥" + toDisplayString(product.price.toLocaleString()), 1),
                        createBaseVNode("td", _hoisted_40, [
                          createBaseVNode("span", {
                            class: normalizeClass(product.stock > 10 ? "text-green-400" : product.stock > 0 ? "text-orange-400" : "text-red-400")
                          }, toDisplayString(product.stock), 3)
                        ]),
                        createBaseVNode("td", _hoisted_41, [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              "px-2 py-1 text-xs font-medium rounded-full",
                              product.status === "在售" ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"
                            ])
                          }, toDisplayString(product.status), 3)
                        ]),
                        createBaseVNode("td", _hoisted_42, [
                          createBaseVNode("div", _hoisted_43, [
                            createBaseVNode("button", {
                              onClick: ($event) => editProduct(product),
                              class: "p-1.5 text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10 rounded transition-colors"
                            }, [..._cache[21] || (_cache[21] = [
                              createBaseVNode("svg", {
                                class: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createBaseVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                })
                              ], -1)
                            ])], 8, _hoisted_44),
                            createBaseVNode("button", {
                              onClick: ($event) => deleteProduct(product.id),
                              class: "p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors"
                            }, [..._cache[22] || (_cache[22] = [
                              createBaseVNode("svg", {
                                class: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createBaseVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                })
                              ], -1)
                            ])], 8, _hoisted_45)
                          ])
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ])
            ])) : createCommentVNode("", true),
            activeTab.value === "orders" ? (openBlock(), createElementBlock("div", _hoisted_46, [
              createBaseVNode("div", _hoisted_47, [
                createBaseVNode("table", _hoisted_48, [
                  _cache[25] || (_cache[25] = createBaseVNode("thead", null, [
                    createBaseVNode("tr", { class: "text-left text-sm text-gray-400 border-b border-white/10" }, [
                      createBaseVNode("th", { class: "pb-3 font-medium" }, "订单号"),
                      createBaseVNode("th", { class: "pb-3 font-medium" }, "买家"),
                      createBaseVNode("th", { class: "pb-3 font-medium" }, "商品"),
                      createBaseVNode("th", { class: "pb-3 font-medium" }, "金额"),
                      createBaseVNode("th", { class: "pb-3 font-medium" }, "状态"),
                      createBaseVNode("th", { class: "pb-3 font-medium" }, "时间"),
                      createBaseVNode("th", { class: "pb-3 font-medium" }, "操作")
                    ])
                  ], -1)),
                  createBaseVNode("tbody", _hoisted_49, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(orders.value, (order) => {
                      return openBlock(), createElementBlock("tr", {
                        key: order.id,
                        class: "text-sm"
                      }, [
                        createBaseVNode("td", _hoisted_50, toDisplayString(order.id), 1),
                        createBaseVNode("td", _hoisted_51, toDisplayString(order.buyer), 1),
                        createBaseVNode("td", _hoisted_52, toDisplayString(order.product), 1),
                        createBaseVNode("td", _hoisted_53, "¥" + toDisplayString(order.amount.toLocaleString()), 1),
                        createBaseVNode("td", _hoisted_54, [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              "px-2 py-1 text-xs font-medium rounded-full",
                              order.status === "已完成" ? "bg-green-500/20 text-green-400" : order.status === "处理中" ? "bg-blue-500/20 text-blue-400" : order.status === "待支付" ? "bg-yellow-500/20 text-yellow-400" : "bg-red-500/20 text-red-400"
                            ])
                          }, toDisplayString(order.status), 3)
                        ]),
                        createBaseVNode("td", _hoisted_55, toDisplayString(order.time), 1),
                        createBaseVNode("td", _hoisted_56, [
                          order.status !== "已完成" && order.status !== "已取消" ? (openBlock(), createElementBlock("select", {
                            key: 0,
                            onChange: ($event) => updateOrderStatus(order, $event),
                            class: "text-sm bg-white/5 border border-white/10 text-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-indigo-500"
                          }, [..._cache[24] || (_cache[24] = [
                            createBaseVNode("option", {
                              value: "",
                              disabled: "",
                              selected: ""
                            }, "更新状态", -1),
                            createBaseVNode("option", { value: "处理中" }, "处理中", -1),
                            createBaseVNode("option", { value: "已完成" }, "已完成", -1),
                            createBaseVNode("option", { value: "已取消" }, "已取消", -1)
                          ])], 40, _hoisted_57)) : createCommentVNode("", true)
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ])
            ])) : createCommentVNode("", true),
            activeTab.value === "overview" ? (openBlock(), createElementBlock("div", _hoisted_58, [
              createBaseVNode("div", _hoisted_59, [
                createBaseVNode("div", _hoisted_60, [
                  _cache[26] || (_cache[26] = createBaseVNode("h3", { class: "text-lg font-semibold text-white mb-4" }, "销售趋势", -1)),
                  createBaseVNode("div", _hoisted_61, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(salesChart, (val, idx) => {
                      return createBaseVNode("div", {
                        key: idx,
                        class: "flex flex-col items-center gap-2"
                      }, [
                        createBaseVNode("div", {
                          class: "w-12 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t transition-all hover:from-indigo-400 hover:to-purple-400",
                          style: normalizeStyle({ height: val + "px" })
                        }, null, 4),
                        createBaseVNode("span", _hoisted_62, toDisplayString(salesLabels[idx]), 1)
                      ]);
                    }), 64))
                  ])
                ]),
                createBaseVNode("div", _hoisted_63, [
                  _cache[27] || (_cache[27] = createBaseVNode("h3", { class: "text-lg font-semibold text-white mb-4" }, "分类销售占比", -1)),
                  createBaseVNode("div", _hoisted_64, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(categorySales, (cat) => {
                      return createBaseVNode("div", {
                        key: cat.name
                      }, [
                        createBaseVNode("div", _hoisted_65, [
                          createBaseVNode("span", _hoisted_66, toDisplayString(cat.name), 1),
                          createBaseVNode("span", _hoisted_67, toDisplayString(cat.percent) + "%", 1)
                        ]),
                        createBaseVNode("div", _hoisted_68, [
                          createBaseVNode("div", {
                            class: "h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all",
                            style: normalizeStyle({ width: cat.percent + "%" })
                          }, null, 4)
                        ])
                      ]);
                    }), 64))
                  ])
                ])
              ])
            ])) : createCommentVNode("", true)
          ])
        ]),
        showAddModal.value ? (openBlock(), createElementBlock("div", _hoisted_69, [
          createBaseVNode("div", _hoisted_70, [
            createBaseVNode("div", _hoisted_71, [
              createBaseVNode("h3", _hoisted_72, toDisplayString(editingProduct.value ? "编辑商品" : "添加商品"), 1),
              createBaseVNode("button", {
                onClick: closeModal,
                class: "text-gray-400 hover:text-white"
              }, [..._cache[28] || (_cache[28] = [
                createBaseVNode("svg", {
                  class: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M6 18L18 6M6 6l12 12"
                  })
                ], -1)
              ])])
            ]),
            createBaseVNode("div", _hoisted_73, [
              createBaseVNode("div", null, [
                _cache[29] || (_cache[29] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-400 mb-1" }, "商品名称", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => productForm.value.name = $event),
                  type: "text",
                  class: "w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                }, null, 512), [
                  [vModelText, productForm.value.name]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[31] || (_cache[31] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-400 mb-1" }, "分类", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => productForm.value.category = $event),
                  class: "w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                }, [..._cache[30] || (_cache[30] = [
                  createStaticVNode('<option value="电子产品" class="bg-gray-900">电子产品</option><option value="服装" class="bg-gray-900">服装</option><option value="食品" class="bg-gray-900">食品</option><option value="家居" class="bg-gray-900">家居</option><option value="美妆" class="bg-gray-900">美妆</option>', 5)
                ])], 512), [
                  [vModelSelect, productForm.value.category]
                ])
              ]),
              createBaseVNode("div", _hoisted_74, [
                createBaseVNode("div", null, [
                  _cache[32] || (_cache[32] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-400 mb-1" }, "价格", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => productForm.value.price = $event),
                    type: "number",
                    class: "w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  }, null, 512), [
                    [
                      vModelText,
                      productForm.value.price,
                      void 0,
                      { number: true }
                    ]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[33] || (_cache[33] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-400 mb-1" }, "库存", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => productForm.value.stock = $event),
                    type: "number",
                    class: "w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  }, null, 512), [
                    [
                      vModelText,
                      productForm.value.stock,
                      void 0,
                      { number: true }
                    ]
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", { class: "px-6 py-4 bg-white/5 rounded-b-xl flex justify-end gap-3" }, [
              createBaseVNode("button", {
                onClick: closeModal,
                class: "px-4 py-2 text-gray-300 bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 font-medium"
              }, "取消"),
              createBaseVNode("button", {
                onClick: saveProduct,
                class: "px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:opacity-90 font-medium"
              }, "保存")
            ])
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=EcommerceView-CIrVEYIe.js.map
