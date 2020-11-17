(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{223:function(t,e,l){var content=l(367);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(54).default)("4df0aa84",content,!0,{sourceMap:!1})},359:function(t,e,l){"use strict";l.r(e);var r=l(361),o=r.b.reactiveProp,c={extends:r.a,mixins:[o],props:{chartData:{type:Object,default:function(){return{labels:["運用状況","調達状況"],datasets:[{type:"bar",barPercentage:1.2,label:"資産",backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgba(54, 162, 235, 1)",borderWidth:1,data:[0,null]},{type:"bar",barPercentage:1.2,label:"純資産",data:[null,0],backgroundColor:"rgba(75, 192, 192, 0.2)",borderColor:"rgba(75, 192, 192, 1)",borderWidth:1},{type:"bar",barPercentage:1.2,label:"負債",data:[null,0],backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1}]}}},options:{type:Object,requied:!1,default:function(){return{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}}}},mounted:function(){this.renderChart(this.chartData,this.options)}},n=l(46),component=Object(n.a)(c,void 0,void 0,!1,null,null,null);e.default=component.exports},366:function(t,e,l){"use strict";var r=l(223);l.n(r).a},367:function(t,e,l){(e=l(53)(!1)).push([t.i,"input[data-v-cb59c90a]:invalid{border:1px solid red}",""]),t.exports=e},370:function(t,e,l){"use strict";l.r(e);var r=l(30),o=(l(2),l(1),l(225),{components:{BalanceSheet:l(359).default},data:function(){return{datacollection:null,assets:{currentAssets:80,fixedAssets:20},liabilities:{currentLiabilities:20,fixedLiabilities:10},netAssets:70}},mounted:function(){this.fillData()},methods:{total:function(element){for(var t=0,e=0,l=Object.entries(element);e<l.length;e++){var o=Object(r.a)(l[e],2),c=(o[0],o[1]);t+=parseInt(c,10)||0}return t},fillData:function(){this.datacollection={labels:["運用状況","調達状況"],datasets:[{type:"bar",barPercentage:1.2,label:"固定資産",backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgba(54, 162, 235, 1)",borderWidth:1,data:[this.assets.fixedAssets,null]},{type:"bar",barPercentage:1.2,label:"流動資産",backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgba(54, 162, 235, 1)",borderWidth:1,data:[this.assets.currentAssets,null]},{type:"bar",barPercentage:1.2,label:"純資産",data:[null,this.netAssets],backgroundColor:"rgba(75, 192, 192, 0.2)",borderColor:"rgba(75, 192, 192, 1)",borderWidth:1},{type:"bar",barPercentage:1.2,label:"固定負債",data:[null,this.liabilities.fixedLiabilities],backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1},{type:"bar",barPercentage:1.2,label:"流動負債",data:[null,this.liabilities.currentLiabilities],backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1}]}}}}),c=(l(366),l(46)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container"},[l("h2",{staticClass:"mt-5"},[t._v("貸借対照表（B/S）")]),t._v(" "),l("div",{staticClass:"row mt-4"},[l("balance-sheet",{staticClass:"col-md-8",attrs:{"chart-data":t.datacollection}}),t._v(" "),l("div",{staticClass:"col-md-4 my-auto"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-6"},[t._v("資産")]),t._v(" "),l("div",{staticClass:"col-6 text-right"},[t._v(t._s(t.total(t.assets)))]),t._v(" "),l("ul",{staticClass:"mt-2"},[l("li",{staticClass:"row"},[l("label",{staticClass:"col-6 col-form-label"},[t._v("流動資産")]),t._v(" "),l("div",{staticClass:"col-6"},[l("b-form-input",{attrs:{type:"number",step:"1",min:"0"},model:{value:t.assets.currentAssets,callback:function(e){t.$set(t.assets,"currentAssets",e)},expression:"assets.currentAssets"}})],1)]),t._v(" "),l("li",{staticClass:"row"},[l("label",{staticClass:"col-6 col-form-label"},[t._v("固定資産")]),t._v(" "),l("div",{staticClass:"col-6"},[l("b-form-input",{attrs:{type:"number",step:"1",min:"0"},model:{value:t.assets.fixedAssets,callback:function(e){t.$set(t.assets,"fixedAssets",e)},expression:"assets.fixedAssets"}})],1)])])]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-6"},[t._v("負債")]),t._v(" "),l("div",{staticClass:"col-6 text-right"},[t._v(t._s(t.total(t.liabilities)))]),t._v(" "),l("ul",[l("li",{staticClass:"row"},[l("label",{staticClass:"col-6 col-form-label"},[t._v("流動負債")]),t._v(" "),l("div",{staticClass:"col-6"},[l("b-form-input",{attrs:{type:"number",step:"1",min:"0"},model:{value:t.liabilities.currentLiabilities,callback:function(e){t.$set(t.liabilities,"currentLiabilities",e)},expression:"liabilities.currentLiabilities"}})],1)]),t._v(" "),l("li",{staticClass:"row"},[l("label",{staticClass:"col-6 col-form-label"},[t._v("固定負債")]),t._v(" "),l("div",{staticClass:"col-6"},[l("b-form-input",{attrs:{type:"number",step:"1",min:"0"},model:{value:t.liabilities.fixedLiabilities,callback:function(e){t.$set(t.liabilities,"fixedLiabilities",e)},expression:"liabilities.fixedLiabilities"}})],1)])])]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-6"},[t._v("純資産")]),t._v(" "),l("div",{staticClass:"col-6 text-right"},[t._v(t._s(parseInt(t.netAssets,10)?t.netAssets:0))]),t._v(" "),l("ul",[l("li",{staticClass:"row"},[l("label",{staticClass:"col-6 col-form-label"},[t._v("純資産")]),t._v(" "),l("div",{staticClass:"col-6"},[l("b-form-input",{attrs:{type:"number",step:"1",min:"0"},model:{value:t.netAssets,callback:function(e){t.netAssets=e},expression:"netAssets"}})],1)])])]),t._v(" "),l("div",{staticClass:"row mt-3"},[l("b-button",{staticClass:"mx-auto",attrs:{variant:"outline-primary"},on:{click:function(e){return t.fillData()}}},[t._v("反映")])],1)])],1)])}),[],!1,null,"cb59c90a",null);e.default=component.exports;installComponents(component,{BalanceSheet:l(359).default})}}]);