import h from "./mysnabbdom/h.js";
let myvnode = h("div", {}, [
  h("ul", {}, "你好"),
  h("ul", {}, "你好"),
  h("ul", {}, "你好"),
  h("ul", {}, [h("span", {}, "zi")]),
]);
// let myvnode = h(
//     "div",
//     {},

//     h("ul", {}, [h("span", {}, "zi")])
//   );
var myVnode2 = h("ul", {}, [
  h("li", {}, "苹果"),
  h("li", {}, "香蕉"),
  h("li", {}, "橘子"),
  h("li", {}, [h("div", {}, "hh"), h("div", {}, "xx")]),
]);
console.log(myVnode2);
