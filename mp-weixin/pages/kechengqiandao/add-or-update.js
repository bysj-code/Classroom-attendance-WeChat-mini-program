(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/kechengqiandao/add-or-update"],{"2e30":function(e,n,r){},"4c98":function(e,n,r){"use strict";(function(e){r("b2fb");t(r("66fd"));var n=t(r("9559"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])},"4f2b":function(e,n,r){"use strict";r.d(n,"b",(function(){return a})),r.d(n,"c",(function(){return i})),r.d(n,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(r.bind(null,"0d22"))}},a=function(){var e=this,n=e.$createElement;e._self._c},i=[]},5773:function(e,n,r){"use strict";r.r(n);var t=r("7e0d"),a=r.n(t);for(var i in t)"default"!==i&&function(e){r.d(n,e,(function(){return t[e]}))}(i);n["default"]=a.a},"7e0d":function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=a(r("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,r,t,a,i,u){try{var o=e[i](u),c=o.value}catch(s){return void r(s)}o.done?n(c):Promise.resolve(c).then(t,a)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var u=e.apply(n,r);function o(e){i(u,t,a,o,c,"next",e)}function c(e){i(u,t,a,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("0d22"))}.bind(null,r)).catch(r.oe)},c={data:function(){return{cross:"",userface:"",faceMatchFlag:!1,ruleForm:{kechengmingcheng:"",kechengleixing:"",qiandaoshijian:"",beizhu:"",tupian:"",jiaoshigonghao:"",xuehao:"",xingming:"",sfsh:"",shhf:"",userid:""},user:{},ro:{kechengmingcheng:!1,kechengleixing:!1,qiandaoshijian:!1,beizhu:!1,tupian:!1,jiaoshigonghao:!1,xuehao:!1,xingming:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var r=this;return u(t.default.mark((function a(){var i,u,o,c;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r.ruleForm.qiandaoshijian=r.$utils.getCurDateTime(),i=e.getStorageSync("nowTable"),a.next=4,r.$api.session(i);case 4:if(u=a.sent,r.user=u.data,r.userface=r.user.touxiang,r.ruleForm.xuehao=r.user.xuehao,r.ro.xuehao=!0,r.ruleForm.xingming=r.user.xingming,r.ro.xingming=!0,r.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(r.ruleForm.refid=n.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=19;break}return r.ruleForm.id=n.id,a.next=17,r.$api.info("kechengqiandao",r.ruleForm.id);case 17:u=a.sent,r.ruleForm=u.data;case 19:if(r.cross=n.cross,!n.cross){a.next=63;break}o=e.getStorageSync("crossObj"),a.t0=t.default.keys(o);case 23:if((a.t1=a.t0()).done){a.next=63;break}if(c=a.t1.value,"kechengmingcheng"!=c){a.next=29;break}return r.ruleForm.kechengmingcheng=o[c],r.ro.kechengmingcheng=!0,a.abrupt("continue",23);case 29:if("kechengleixing"!=c){a.next=33;break}return r.ruleForm.kechengleixing=o[c],r.ro.kechengleixing=!0,a.abrupt("continue",23);case 33:if("qiandaoshijian"!=c){a.next=37;break}return r.ruleForm.qiandaoshijian=o[c],r.ro.qiandaoshijian=!0,a.abrupt("continue",23);case 37:if("beizhu"!=c){a.next=41;break}return r.ruleForm.beizhu=o[c],r.ro.beizhu=!0,a.abrupt("continue",23);case 41:if("tupian"!=c){a.next=45;break}return r.ruleForm.tupian=o[c],r.ro.tupian=!0,a.abrupt("continue",23);case 45:if("jiaoshigonghao"!=c){a.next=49;break}return r.ruleForm.jiaoshigonghao=o[c],r.ro.jiaoshigonghao=!0,a.abrupt("continue",23);case 49:if("xuehao"!=c){a.next=53;break}return r.ruleForm.xuehao=o[c],r.ro.xuehao=!0,a.abrupt("continue",23);case 53:if("xingming"!=c){a.next=57;break}return r.ruleForm.xingming=o[c],r.ro.xingming=!0,a.abrupt("continue",23);case 57:if("userid"!=c){a.next=61;break}return r.ruleForm.userid=o[c],r.ro.userid=!0,a.abrupt("continue",23);case 61:a.next=23;break;case 63:r.styleChange();case 64:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},qiandaoshijianConfirm:function(e){console.log(e),this.ruleForm.qiandaoshijian=e.result,this.$forceUpdate()},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(t.default.mark((function r(){var a,i,u,o,c,s,l,f,d,g,h,m;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n.faceMatchFlag){r.next=13;break}return a={face1:n.userface.replace("upload/",""),face2:n.ruleForm.tupian.replace("upload/","")},r.next=4,n.$api.faceMatch(a);case 4:if(i=r.sent,!(i.data&&i.data.score>=60)){r.next=11;break}return n.faceMatchFlag=!0,n.$utils.msg("匹配成功"),r.abrupt("return");case 11:return n.$utils.msg("匹配失败"),r.abrupt("return");case 13:if(!n.cross){r.next=29;break}if(s=e.getStorageSync("statusColumnName"),l=e.getStorageSync("statusColumnValue"),""==s){r.next=29;break}if(f=e.getStorageSync("crossObj"),s.startsWith("[")){r.next=25;break}for(d in f)d==s&&(f[d]=l);return g=e.getStorageSync("crossTable"),r.next=23,n.$api.update("".concat(g),f);case 23:r.next=29;break;case 25:u=Number(e.getStorageSync("userid")),o=f["id"],c=e.getStorageSync("statusColumnName"),c=c.replace(/\[/,"").replace(/\]/,"");case 29:if(!o||!u){r.next=51;break}return n.ruleForm.crossuserid=u,n.ruleForm.crossrefid=o,h={page:1,limit:10,crossuserid:u,crossrefid:o},r.next=35,n.$api.list("kechengqiandao",h);case 35:if(m=r.sent,!(m.data.total>=c)){r.next=41;break}return n.$utils.msg(e.getStorageSync("tips")),r.abrupt("return",!1);case 41:if(!n.ruleForm.id){r.next=46;break}return r.next=44,n.$api.update("kechengqiandao",n.ruleForm);case 44:r.next=48;break;case 46:return r.next=48,n.$api.add("kechengqiandao",n.ruleForm);case 48:n.$utils.msgBack("提交成功");case 49:r.next=59;break;case 51:if(!n.ruleForm.id){r.next=56;break}return r.next=54,n.$api.update("kechengqiandao",n.ruleForm);case 54:r.next=58;break;case 56:return r.next=58,n.$api.add("kechengqiandao",n.ruleForm);case 58:n.$utils.msgBack("提交成功");case 59:case"end":return r.stop()}}),r)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,r=n.getFullYear(),t=n.getMonth()+1,a=n.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(r,"-").concat(t,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,r("543d")["default"])},9559:function(e,n,r){"use strict";r.r(n);var t=r("4f2b"),a=r("5773");for(var i in a)"default"!==i&&function(e){r.d(n,e,(function(){return a[e]}))}(i);r("e3da");var u,o=r("f0c5"),c=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"870d32ee",null,!1,t["a"],u);n["default"]=c.exports},e3da:function(e,n,r){"use strict";var t=r("2e30"),a=r.n(t);a.a}},[["4c98","common/runtime","common/vendor"]]]);