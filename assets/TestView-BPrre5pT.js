import { d as defineComponent, a as createElementBlock, b as createBaseVNode, h as createStaticVNode, g as useRouter, o as openBlock } from "./index-BMcdV4Dz.js";
const _hoisted_1 = { class: "min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TestView",
  setup(__props) {
    const router = useRouter();
    const goToHome = () => {
      router.push("/");
    };
    const checkConsole = () => {
      alert("请按 F12 打开开发者工具，查看 Console 标签页");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", { class: "max-w-4xl mx-auto" }, [
          _cache[1] || (_cache[1] = createStaticVNode('<h1 class="text-4xl font-bold text-white mb-6"> 🎉 CodeCanvas 3D - 测试页面 </h1><div class="bg-green-900/30 border border-green-500 rounded-xl p-6 mb-8"><div class="flex items-center"><div class="w-4 h-4 bg-green-500 rounded-full mr-3 animate-pulse"></div><span class="text-green-400 font-semibold">✅ 项目运行正常</span></div><p class="text-gray-300 mt-2"> 服务器已启动，Vue 3 + TypeScript + Tailwind CSS 正常工作 </p></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"><div class="bg-blue-900/30 border border-blue-500 rounded-xl p-4 text-center"><div class="text-2xl mb-2">⚡</div><div class="font-bold text-blue-300">Vue 3</div></div><div class="bg-purple-900/30 border border-purple-500 rounded-xl p-4 text-center"><div class="text-2xl mb-2">📘</div><div class="font-bold text-purple-300">TypeScript</div></div><div class="bg-green-900/30 border border-green-500 rounded-xl p-4 text-center"><div class="text-2xl mb-2">🎨</div><div class="font-bold text-green-300">Tailwind</div></div><div class="bg-orange-900/30 border border-orange-500 rounded-xl p-4 text-center"><div class="text-2xl mb-2">🚀</div><div class="font-bold text-orange-300">Vite</div></div></div><div class="bg-gray-800/50 rounded-xl p-6 mb-8"><h2 class="text-xl font-bold text-white mb-4">访问地址</h2><div class="space-y-3"><div class="flex items-center"><div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div><code class="bg-gray-900 px-3 py-1 rounded text-blue-300">http://localhost:5173</code></div><div class="flex items-center"><div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div><code class="bg-gray-900 px-3 py-1 rounded text-green-300">http://127.0.0.1:5173</code></div><div class="flex items-center"><div class="w-3 h-3 bg-purple-500 rounded-full mr-3"></div><code class="bg-gray-900 px-3 py-1 rounded text-purple-300">http://192.168.71.15:5173</code></div></div></div>', 4)),
          createBaseVNode("div", { class: "bg-gray-800/50 rounded-xl p-6" }, [
            _cache[0] || (_cache[0] = createBaseVNode("h2", { class: "text-xl font-bold text-white mb-4" }, "下一步操作", -1)),
            createBaseVNode("div", { class: "space-y-4" }, [
              createBaseVNode("button", {
                onClick: goToHome,
                class: "w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity"
              }, " 查看完整网站 "),
              createBaseVNode("button", {
                onClick: checkConsole,
                class: "w-full bg-gray-700 text-white font-semibold py-3 rounded-xl hover:bg-gray-600 transition-colors"
              }, " 检查控制台错误 (F12) ")
            ])
          ]),
          _cache[2] || (_cache[2] = createBaseVNode("div", { class: "mt-8 text-center text-gray-400 text-sm" }, [
            createBaseVNode("p", null, "如果页面空白，请按 F12 打开开发者工具，查看 Console 标签页的错误信息"),
            createBaseVNode("p", { class: "mt-2" }, "然后告诉我具体的错误信息，我来修复")
          ], -1))
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=TestView-BPrre5pT.js.map
