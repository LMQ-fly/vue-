(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b308c"],{"273d":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("van-nav-bar",{attrs:{title:e.$route.name,"left-text":"返回","left-arrow":""},on:{"click-left":function(t){return e.$router.push("/my")}}}),a("van-form",{on:{submit:e.onSubmit}},[a("van-field",{attrs:{name:"username",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("van-field",{attrs:{type:"password",name:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("div",{staticStyle:{margin:"16px"}},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v(" 提交 ")])],1)],1)],1)},r=[],s=a("d399"),o={data:function(){return{username:"",password:""}},methods:{onSubmit:function(e){var t=this,a="path"in t.$route.query?t.$route.query.path:"/my";this.$axios.get("login",{params:e}).then((function(e){console.log(e),"200"==e.data?Object(s["a"])({message:"登陆成功",onOpened:function(){t.$store.state.username=t.username,t.$router.push(a)}}):Object(s["a"])("登陆失败")}))}}},u=o,l=a("2877"),i=Object(l["a"])(u,n,r,!1,null,"9a2b967a",null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0b308c.ac00f22a.js.map