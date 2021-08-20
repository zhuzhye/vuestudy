import vNode from "./vNode.js";
// console.log(vNode("div", 1, 2, 3, 4));
//函数的功能非常简单，就是把传入的5个参数组合成对象返回
//编写一个低版本的h函数，这个函数必须接受三个参数，缺一不可
//相当于重载功能较弱
// h('div',{},'文字')
// h('div',{},[])
// h('div',{},h())
export default function (sel, data, c) {
  //检查参数的个数
  if (arguments.length != 3) {
    throw new Error("对不起，h函数必须传入3个参数");
  }
  //检查参数c类型
  if (typeof c == "string" || typeof c == "number") {
    //说明现在调用h函数是形态 1
    return vNode(sel, data, undefined, c, undefined);
  } else if (Array.isArray(c)) {
    //说明现在调用h函数是形态2
    let children = [];
    //遍历c
    for (let i = 0; i < c.length; i++) {
      if (!(typeof c[i] == "object" && c[i].hasOwnProperty("sel"))) {
        throw new Error("请传入正确的参数");
      }
      //这里不执行c函数，因为你的测试语句已经有了执行
      //此时只需要收集好就可以
      children.push(c[i]);
    }
    return vNode(sel, data, children, undefined, undefined);
    //循环结束了。就说明chilren收集完毕，此时需要返回虚拟节点，它有children属性
  } else if (typeof c == "object" && c.hasOwnProperty("sel")) {
      //说明现在调用h函数是形态3
      //及
      let children = [c]
      return vNode(sel,data,children,undefined,undefined)
  } else {
    throw new Error("请传入正确的参数");
  }
}
