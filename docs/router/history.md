# 历史项目页面

整个页面的主要元素是历史项目列表，由`v-for`渲染。

页面的滚动效果主要由`InvertBackgroundDirection`函数实现，
它被绑定到了背景的`transitionend`事件上。在到达一边之后，
该函数会反转背景的目标位置。 
