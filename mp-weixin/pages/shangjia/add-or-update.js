(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangjia/add-or-update"],{"05e0":function(n,e,t){"use strict";var i=t("c4a9"),a=t.n(i);a.a},"2e4a":function(n,e,t){"use strict";(function(n){t("7027"),t("921b");i(t("66fd"));var e=i(t("7f35"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"5f44":function(n,e,t){"use strict";t.r(e);var i=t("edb6"),a=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,(function(){return i[n]}))}(r);e["default"]=a.a},"7f35":function(n,e,t){"use strict";t.r(e);var i=t("d7ce"),a=t("5f44");for(var r in a)"default"!==r&&function(n){t.d(e,n,(function(){return a[n]}))}(r);t("05e0");var u,o=t("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"7473e38c",null,!1,i["a"],u);e["default"]=s.exports},c4a9:function(n,e,t){},d7ce:function(n,e,t){"use strict";var i,a=function(){var n=this,e=n.$createElement;n._self._c},r=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return i}))},edb6:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(t("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,e,t,i,a,r,u){try{var o=n[r](u),s=o.value}catch(c){return void t(c)}o.done?e(s):Promise.resolve(s).then(i,a)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(i,a){var u=n.apply(e,t);function o(n){r(u,i,a,o,s,"next",n)}function s(n){r(u,i,a,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("205a"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{zhanghao:"",mima:"",dianpumingcheng:"",shangjiaxingming:"",xingbie:"",touxiang:"",youxiang:"",lianxidianhua:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{zhanghao:!1,mima:!1,dianpumingcheng:!1,shangjiaxingming:!1,xingbie:!1,touxiang:!1,youxiang:!1,lianxidianhua:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var e=u(i.default.mark((function e(t){var a,r,u,o;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.getStorageSync("nowTable"),e.next=3,this.$api.session(a);case 3:if(r=e.sent,this.user=r.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=n.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!t.id){e.next=14;break}return this.ruleForm.id=t.id,e.next=12,this.$api.info("shangjia",this.ruleForm.id);case 12:r=e.sent,this.ruleForm=r.data;case 14:if(!t.cross){e.next=53;break}u=n.getStorageSync("crossObj"),e.t0=i.default.keys(u);case 17:if((e.t1=e.t0()).done){e.next=53;break}if(o=e.t1.value,"zhanghao"!=o){e.next=23;break}return this.ruleForm.zhanghao=u[o],this.ro.zhanghao=!0,e.abrupt("continue",17);case 23:if("mima"!=o){e.next=27;break}return this.ruleForm.mima=u[o],this.ro.mima=!0,e.abrupt("continue",17);case 27:if("dianpumingcheng"!=o){e.next=31;break}return this.ruleForm.dianpumingcheng=u[o],this.ro.dianpumingcheng=!0,e.abrupt("continue",17);case 31:if("shangjiaxingming"!=o){e.next=35;break}return this.ruleForm.shangjiaxingming=u[o],this.ro.shangjiaxingming=!0,e.abrupt("continue",17);case 35:if("xingbie"!=o){e.next=39;break}return this.ruleForm.xingbie=u[o],this.ro.xingbie=!0,e.abrupt("continue",17);case 39:if("touxiang"!=o){e.next=43;break}return this.ruleForm.touxiang=u[o],this.ro.touxiang=!0,e.abrupt("continue",17);case 43:if("youxiang"!=o){e.next=47;break}return this.ruleForm.youxiang=u[o],this.ro.youxiang=!0,e.abrupt("continue",17);case 47:if("lianxidianhua"!=o){e.next=51;break}return this.ruleForm.lianxidianhua=u[o],this.ro.lianxidianhua=!0,e.abrupt("continue",17);case 51:e.next=17;break;case 53:this.styleChange();case 54:case"end":return e.stop()}}),e,this)})));function t(n){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(n){this.xingbieIndex=n.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.touxiang=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.zhanghao){n.next=3;break}return this.$utils.msg("账号不能为空"),n.abrupt("return");case 3:if(this.ruleForm.mima){n.next=6;break}return this.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if(!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){n.next=9;break}return this.$utils.msg("邮箱应输入邮件格式"),n.abrupt("return");case 9:if(!this.ruleForm.lianxidianhua||this.$validate.isMobile(this.ruleForm.lianxidianhua)){n.next=12;break}return this.$utils.msg("联系电话应输入手机格式"),n.abrupt("return");case 12:if(!this.ruleForm.id){n.next=17;break}return n.next=15,this.$api.update("shangjia",this.ruleForm);case 15:n.next=19;break;case 17:return n.next=19,this.$api.add("shangjia",this.ruleForm);case 19:this.$utils.msgBack("提交成功");case 20:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,a=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(t,"-").concat(i,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,t("543d")["default"])}},[["2e4a","common/runtime","common/vendor"]]]);