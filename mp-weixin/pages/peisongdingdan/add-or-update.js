(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/peisongdingdan/add-or-update"],{"05c7":function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(i("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,e,i,t,r,a,u){try{var o=n[a](u),s=o.value}catch(g){return void i(g)}o.done?e(s):Promise.resolve(s).then(t,r)}function u(n){return function(){var e=this,i=arguments;return new Promise((function(t,r){var u=n.apply(e,i);function o(n){a(u,t,r,o,s,"next",n)}function s(n){a(u,t,r,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("205a"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{ruleForm:{dingdanbianhao:this.getUUID(),shangpinmingcheng:"",shangpinleixing:"",zhanghao:"",zongjiage:"",peisongfei:"",goumairiqi:"",yonghuming:"",xingming:"",shouji:"",dizhi:"",peisongzhuangtai:"",peisongneirong:"",gonghao:"",qishouxingming:"",sfsh:"",shhf:"",userid:""},peisongzhuangtaiOptions:[],peisongzhuangtaiIndex:0,user:{},ro:{dingdanbianhao:!1,shangpinmingcheng:!1,shangpinleixing:!1,zhanghao:!1,zongjiage:!1,peisongfei:!1,goumairiqi:!1,yonghuming:!1,xingming:!1,shouji:!1,dizhi:!1,peisongzhuangtai:!1,peisongneirong:!1,gonghao:!1,qishouxingming:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var e=u(t.default.mark((function e(i){var r,a,u,o;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(a=e.sent,this.user=a.data,this.ruleForm.gonghao=this.user.gonghao,this.ruleForm.qishouxingming=this.user.qishouxingming,this.peisongzhuangtaiOptions="备货中,已取货,配送中,已送达".split(","),this.ruleForm.userid=n.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!i.id){e.next=16;break}return this.ruleForm.id=i.id,e.next=14,this.$api.info("peisongdingdan",this.ruleForm.id);case 14:a=e.sent,this.ruleForm=a.data;case 16:if(!i.cross){e.next=87;break}u=n.getStorageSync("crossObj"),e.t0=t.default.keys(u);case 19:if((e.t1=e.t0()).done){e.next=87;break}if(o=e.t1.value,"dingdanbianhao"!=o){e.next=25;break}return this.ruleForm.dingdanbianhao=u[o],this.ro.dingdanbianhao=!0,e.abrupt("continue",19);case 25:if("shangpinmingcheng"!=o){e.next=29;break}return this.ruleForm.shangpinmingcheng=u[o],this.ro.shangpinmingcheng=!0,e.abrupt("continue",19);case 29:if("shangpinleixing"!=o){e.next=33;break}return this.ruleForm.shangpinleixing=u[o],this.ro.shangpinleixing=!0,e.abrupt("continue",19);case 33:if("zhanghao"!=o){e.next=37;break}return this.ruleForm.zhanghao=u[o],this.ro.zhanghao=!0,e.abrupt("continue",19);case 37:if("zongjiage"!=o){e.next=41;break}return this.ruleForm.zongjiage=u[o],this.ro.zongjiage=!0,e.abrupt("continue",19);case 41:if("peisongfei"!=o){e.next=45;break}return this.ruleForm.peisongfei=u[o],this.ro.peisongfei=!0,e.abrupt("continue",19);case 45:if("goumairiqi"!=o){e.next=49;break}return this.ruleForm.goumairiqi=u[o],this.ro.goumairiqi=!0,e.abrupt("continue",19);case 49:if("yonghuming"!=o){e.next=53;break}return this.ruleForm.yonghuming=u[o],this.ro.yonghuming=!0,e.abrupt("continue",19);case 53:if("xingming"!=o){e.next=57;break}return this.ruleForm.xingming=u[o],this.ro.xingming=!0,e.abrupt("continue",19);case 57:if("shouji"!=o){e.next=61;break}return this.ruleForm.shouji=u[o],this.ro.shouji=!0,e.abrupt("continue",19);case 61:if("dizhi"!=o){e.next=65;break}return this.ruleForm.dizhi=u[o],this.ro.dizhi=!0,e.abrupt("continue",19);case 65:if("peisongzhuangtai"!=o){e.next=69;break}return this.ruleForm.peisongzhuangtai=u[o],this.ro.peisongzhuangtai=!0,e.abrupt("continue",19);case 69:if("peisongneirong"!=o){e.next=73;break}return this.ruleForm.peisongneirong=u[o],this.ro.peisongneirong=!0,e.abrupt("continue",19);case 73:if("gonghao"!=o){e.next=77;break}return this.ruleForm.gonghao=u[o],this.ro.gonghao=!0,e.abrupt("continue",19);case 77:if("qishouxingming"!=o){e.next=81;break}return this.ruleForm.qishouxingming=u[o],this.ro.qishouxingming=!0,e.abrupt("continue",19);case 81:if("userid"!=o){e.next=85;break}return this.ruleForm.userid=u[o],this.ro.userid=!0,e.abrupt("continue",19);case 85:e.next=19;break;case 87:this.styleChange();case 88:case"end":return e.stop()}}),e,this)})));function i(n){return e.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},peisongzhuangtaiChange:function(n){this.peisongzhuangtaiIndex=n.target.value,this.ruleForm.peisongzhuangtai=this.peisongzhuangtaiOptions[this.peisongzhuangtaiIndex]},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.shangpinmingcheng){n.next=3;break}return this.$utils.msg("商品名称不能为空"),n.abrupt("return");case 3:if(this.ruleForm.shangpinleixing){n.next=6;break}return this.$utils.msg("商品类型不能为空"),n.abrupt("return");case 6:if(this.ruleForm.peisongfei){n.next=9;break}return this.$utils.msg("配送费不能为空"),n.abrupt("return");case 9:if(!this.ruleForm.peisongfei||this.$validate.isIntNumer(this.ruleForm.peisongfei)){n.next=12;break}return this.$utils.msg("配送费应输入整数"),n.abrupt("return");case 12:if(this.ruleForm.dizhi){n.next=15;break}return this.$utils.msg("地址不能为空"),n.abrupt("return");case 15:if(!this.ruleForm.id){n.next=20;break}return n.next=18,this.$api.update("peisongdingdan",this.ruleForm);case 18:n.next=22;break;case 20:return n.next=22,this.$api.add("peisongdingdan",this.ruleForm);case 22:this.$utils.msgBack("提交成功");case 23:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,r=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(i,"-").concat(t,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,i("543d")["default"])},"0b5f":function(n,e,i){"use strict";i.r(e);var t=i("a6bf"),r=i("55ae");for(var a in r)"default"!==a&&function(n){i.d(e,n,(function(){return r[n]}))}(a);i("1e0e");var u,o=i("f0c5"),s=Object(o["a"])(r["default"],t["b"],t["c"],!1,null,"0557f69c",null,!1,t["a"],u);e["default"]=s.exports},"1e0e":function(n,e,i){"use strict";var t=i("4938"),r=i.n(t);r.a},4938:function(n,e,i){},"55ae":function(n,e,i){"use strict";i.r(e);var t=i("05c7"),r=i.n(t);for(var a in t)"default"!==a&&function(n){i.d(e,n,(function(){return t[n]}))}(a);e["default"]=r.a},"9d9b":function(n,e,i){"use strict";(function(n){i("7027"),i("921b");t(i("66fd"));var e=t(i("0b5f"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])},a6bf:function(n,e,i){"use strict";var t,r=function(){var n=this,e=n.$createElement;n._self._c},a=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return t}))}},[["9d9b","common/runtime","common/vendor"]]]);