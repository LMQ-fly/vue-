(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-80946668"],{"13d5":function(t,s,i){"use strict";var e=i("23e7"),a=i("d58f").left,r=i("a640"),n=i("ae40"),c=r("reduce"),d=n("reduce",{1:0});e({target:"Array",proto:!0,forced:!c||!d},{reduce:function(t){return a(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"7db0":function(t,s,i){"use strict";var e=i("23e7"),a=i("b727").find,r=i("44d2"),n=i("ae40"),c="find",d=!0,l=n(c);c in[]&&Array(1)[c]((function(){d=!1})),e({target:"Array",proto:!0,forced:d||!l},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r(c)},"958b":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("van-nav-bar",{attrs:{title:t.$route.name,"left-text":"返回","left-arrow":""},on:{"click-left":t.cartvue}}),i("div",{on:{click:t.addressfun}},[i("van-contact-card",{attrs:{type:t.cardType,name:t.name,tel:t.tel,"add-text":"添加联系人",editable:!1}})],1),t._l(t.lists,(function(t,s){return i("div",{key:s},[i("van-card",{attrs:{num:t.num,price:t.price,desc:"① 骁龙865旗舰平台，双模5G，用久了也不卡\n        ② 向往的生活同款手机，1亿像素8K电影相机\n        ③ 6.67英寸 AMOLED 双曲面屏幕，刷新屏幕新体验",title:t.name,thumb:"//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494372.61732687.jpg"}})],1)})),i("van-submit-bar",{attrs:{price:100*t.total,"button-text":"提交订单"},on:{submit:t.onsubmit}}),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)],2)},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"insurance"},[i("div",{staticClass:"i1"},[i("img",{attrs:{src:"//s1.mi.com/m/images/m/insurance.png",alt:""}})]),i("div",{staticClass:"i2"},[i("div",[t._v("意外保护 124元起")])]),i("div",{staticClass:"i3"},[i("div",{staticStyle:{"margin-left":"5px"}},[t._v("选购")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"insurance"},[i("div",{staticClass:"i1"},[i("img",{attrs:{src:"//s1.mi.com/m/images/m/insurance.png",alt:""}})]),i("div",{staticClass:"i2"},[i("div",[t._v("延长保修服务 79元")])]),i("div",{staticClass:"i3"},[i("div",[t._v("选购")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"insurance"},[i("div",{staticClass:"i1"},[i("img",{attrs:{src:"//s1.mi.com/m/images/m/insurance.png",alt:""}})]),i("div",{staticClass:"i2"},[i("div",[t._v("云空间服务 6元起")])]),i("div",{staticClass:"i3"},[i("div",{staticStyle:{"margin-left":"7px"}},[t._v("选购")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"insurance"},[i("div",{staticClass:"i1"},[i("img",{attrs:{src:"//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560222533.85047588.jpg",alt:""}})]),i("div",{staticClass:"i2"},[i("div",[t._v("小米[小爱老师]白色")])]),i("div",{staticClass:"i3"},[i("div",{staticStyle:{"margin-left":"-2px"}},[t._v("399 加价购")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"insurance"},[i("div",{staticClass:"i1"},[i("img",{attrs:{src:"//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560222533.85047588.jpg",alt:""}})]),i("div",{staticClass:"i2"},[i("div",[t._v("小米 [小爱老师] 4G")])]),i("div",{staticClass:"i3"},[i("div",{staticStyle:{"margin-left":"-2px"}},[t._v("799 加价购")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"insurance"},[i("p",{staticStyle:{color:"#999999"}},[t._v("温馨提示：产品是否购买成功，以最终下单为准，请尽快结算")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("img",{attrs:{src:"//i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg",alt:""}})])}],r=(i("7db0"),i("13d5"),i("b0c0"),{data:function(){return{name:"",tel:""}},methods:{sum:function(){this.total=this.lists.reduce((function(t,s){return s.isSelect?t+parseInt(s.price)*parseInt(s.num):t}),0)},addressfun:function(){0==this.$store.state.address.lists.length?this.$router.push("/addressAdd"):this.$router.push("/address")},cartvue:function(){var t={orderId:(new Date).getTime(),address:this.address,goodsList:this.lists,dateTime:new Date,type:1};this.$store.commit("order/add",t),this.$store.state.cart.lists=[],this.$store.state.cart.num=0,this.$router.push("/cart"),this.$store.state.vanTabbar=!0},onsubmit:function(){var t={orderId:(new Date).getTime(),address:this.address,goodsList:this.lists,dateTime:new Date,type:2};this.$store.commit("order/add",t),this.$store.state.cart.lists=[],this.$store.state.cart.num=0,this.$router.push("/orderList/orderAll")}},computed:{cardType:function(){return 0==this.$store.state.address.lists.length?"add":"edit"}},created:function(){var t=this.$store.state.address.lists.find((function(t){return t.isDefault}));t&&(this.name=t.name,this.tel=t.tel,this.address=t),this.lists=this.$store.state.cart.lists,this.sum(),this.$store.state.vanTabbar=!1}}),n=r,c=(i("f0fe"),i("2877")),d=Object(c["a"])(n,e,a,!1,null,"75a571ff",null);s["default"]=d.exports},cd5d:function(t,s,i){},d58f:function(t,s,i){var e=i("1c0b"),a=i("7b0b"),r=i("44ad"),n=i("50c4"),c=function(t){return function(s,i,c,d){e(i);var l=a(s),o=r(l),u=n(l.length),m=t?u-1:0,v=t?-1:1;if(c<2)while(1){if(m in o){d=o[m],m+=v;break}if(m+=v,t?m<0:u<=m)throw TypeError("Reduce of empty array with no initial value")}for(;t?m>=0:u>m;m+=v)m in o&&(d=i(d,o[m],m,l));return d}};t.exports={left:c(!1),right:c(!0)}},f0fe:function(t,s,i){"use strict";var e=i("cd5d"),a=i.n(e);a.a}}]);
//# sourceMappingURL=chunk-80946668.f697fdfa.js.map