import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";
//创建出patch函数
const patch=init([classModule,propsModule,styleModule,eventListenersModule])

//创建虚拟dom节点
var myVnode=h('a',{props:{href:'https://www.baidu.com'}},'百度')
console.log(myVnode);

var myVnode2=h('ul',
[
    h('li','苹果'),
    h('li','香蕉'),
    h('li','橘子'),
    h('li','西瓜')
]
)

//让虚拟dom节点上树
const container= document.getElementById('container')
patch(container,myVnode2)