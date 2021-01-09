(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{226:function(e,t,r){var o=r(11),n=r(227)(!0);o(o.S,"Object",{entries:function(e){return n(e)}})},227:function(e,t,r){var o=r(25),n=r(47),l=r(39),c=r(67).f;e.exports=function(e){return function(t){for(var r,d=l(t),v=n(d),m=v.length,i=0,f=[];m>i;)r=v[i++],o&&!c.call(d,r)||f.push(e?[r,d[r]]:d[r]);return f}}},231:function(e,t,r){var content=r(379);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(54).default)("6689f397",content,!0,{sourceMap:!1})},368:function(e,t,r){"use strict";r.r(t);r(9);var o=r(232),n=o.b.reactiveData,l={extends:o.a,mixins:[n],props:{expenses:{type:Object,required:!0,default:function(){return{cogs:10,sga:20,nonOperatingExpense:30,extraordinaryLoss:0,corporateTax:20}}},revenue:{type:Object,required:!0,default:function(){return{sales:50,nonOperatingIncome:50,extraordinaryGain:0}}},netIncome:{type:Number,required:!0},netLoss:{type:Number,required:!0},options:{type:Object,requied:!1,default:function(){return{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}}}},data:function(){return{chartData:null}},mounted:function(){this.fillData(),this.renderChart(this.chartData,this.options)},methods:{fillData:function(){this.chartData={labels:["借方","貸方"],datasets:[{type:"bar",barPercentage:1.2,label:"利益",backgroundColor:"rgba(75, 192, 192, 0.2)",borderColor:"rgba(75, 192, 192, 1)",borderWidth:1,data:[this.netIncome,null]},{type:"bar",barPercentage:1.2,label:"法人税等",data:[this.expenses.corporateTax,null],backgroundColor:"rgba(255, 159, 64, 0.2)",borderColor:"rgba(255, 159, 64, 1)",borderWidth:1},{type:"bar",barPercentage:1.2,label:"特別損失",data:[this.expenses.extraordinaryLoss,null],backgroundColor:"rgba(255, 159, 64, 0.2)",borderColor:"rgba(255, 159, 64, 1)",borderWidth:1},{type:"bar",barPercentage:1.2,label:"営業外費用",data:[this.expenses.nonOperatingExpense,null],backgroundColor:"rgba(255, 159, 64, 0.2)",borderColor:"rgba(255, 159, 64, 1)",borderWidth:1},{type:"bar",barPercentage:1.2,label:"販管費",data:[this.expenses.sga,null],backgroundColor:"rgba(255, 159, 64, 0.2)",borderColor:"rgba(255, 159, 64, 1)",borderWidth:1},{type:"bar",barPercentage:1.2,label:"売上原価",data:[this.expenses.cogs,null],backgroundColor:"rgba(255, 159, 64, 0.2)",borderColor:"rgba(255, 159, 64, 1)",borderWidth:1},{type:"bar",barPercentage:1.2,label:"損失",data:[null,this.netLoss],backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1},{type:"bar",barPercentage:1.2,label:"特別利益",data:[null,this.revenue.extraordinaryGain],backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgba(54, 162, 235, 1)",borderWidth:1},{type:"bar",barPercentage:1.2,label:"営業外収益",data:[null,this.revenue.nonOperatingIncome],backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgba(54, 162, 235, 1)",borderWidth:1},{type:"bar",barPercentage:1.2,label:"売上高",data:[null,this.revenue.sales],backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgba(54, 162, 235, 1)",borderWidth:1}]}}}},c=r(46),component=Object(c.a)(l,void 0,void 0,!1,null,null,null);t.default=component.exports},378:function(e,t,r){"use strict";var o=r(231);r.n(o).a},379:function(e,t,r){(t=r(53)(!1)).push([e.i,"input[data-v-061d649e]:invalid{border:1px solid red}",""]),e.exports=t},382:function(e,t,r){"use strict";r.r(t);r(9);var o=r(30),n=(r(2),r(1),r(226),r(368)),l=r(223),c=r(225),d=r(224),v={components:{ProfitAndLoss:n.default,GlobalHeader:l.default,GlobalFooter:c.default,CorpDetail:d.default},data:function(){return{storageKeyName:"plData",expenses:{cogs:10,sga:20,nonOperatingExpense:30,extraordinaryLoss:0,corporateTax:20},revenue:{sales:50,nonOperatingIncome:50,extraordinaryGain:0},income:{netIncome:20},loss:{netLoss:0}}},created:function(){var e=localStorage.getItem(this.storageKeyName);if(e){var data=JSON.parse(e);this.expenses=data.expenses,this.revenue=data.revenue,this.income=data.income,this.loss=data.loss}},methods:{total:function(element){for(var e=0,t=0,r=Object.entries(element);t<r.length;t++){var n=Object(o.a)(r[t],2),l=(n[0],n[1]);e+=Number(l)}return e},updateChart:function(){this.$refs.pl.fillData();var e={expenses:this.expenses,revenue:this.revenue,income:this.income,loss:this.loss};localStorage.setItem(this.storageKeyName,JSON.stringify(e))},clearData:function(){this.expenses={cogs:0,sga:0,nonOperatingExpense:0,extraordinaryLoss:0,corporateTax:0},this.revenue={sales:0,nonOperatingIncome:0,extraordinaryGain:0},this.income={netIncome:0},this.loss={netLoss:0}}}},m=(r(378),r(46)),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("global-header"),e._v(" "),r("h2",{staticClass:"mt-5"},[e._v("損益計算書（P/L）")]),e._v(" "),r("corp-detail",{staticClass:"mt-5"}),e._v(" "),r("div",{staticClass:"row mt-5"},[r("profit-and-loss",{ref:"pl",staticClass:"col-md-8",attrs:{expenses:e.expenses,revenue:e.revenue,"net-income":e.total(e.income),"net-loss":e.total(e.loss)}}),e._v(" "),r("div",{staticClass:"col-md-4 my-auto"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[e._v("費用")]),e._v(" "),r("div",{staticClass:"col-6 text-right"},[e._v(e._s(e.total(e.expenses)))]),e._v(" "),r("ul",{staticClass:"mt-2"},[r("li",{staticClass:"row"},[r("label",{staticClass:"col-6 col-form-label"},[e._v("売上原価")]),e._v(" "),r("div",{staticClass:"col-6"},[r("b-form-input",{attrs:{type:"number",step:"1",min:"0"},model:{value:e.expenses.cogs,callback:function(t){e.$set(e.expenses,"cogs",e._n(t))},expression:"expenses.cogs"}})],1)]),e._v(" "),r("li",{staticClass:"row"},[r("label",{staticClass:"col-6 col-form-label"},[e._v("販管費")]),e._v(" "),r("div",{staticClass:"col-6"},[r("b-form-input",{attrs:{type:"number",step:"1",min:"0"},model:{value:e.expenses.sga,callback:function(t){e.$set(e.expenses,"sga",e._n(t))},expression:"expenses.sga"}})],1)]),e._v(" "),r("li",{staticClass:"row"},[r("label",{staticClass:"col-6 col-form-label"},[e._v("営業外費用")]),e._v(" "),r("div",{staticClass:"col-6"},[r("b-form-input",{attrs:{type:"number",step:"1",min:"0"},model:{value:e.expenses.nonOperatingExpense,callback:function(t){e.$set(e.expenses,"nonOperatingExpense",e._n(t))},expression:"expenses.nonOperatingExpense"}})],1)]),e._v(" "),r("li",{staticClass:"row"},[r("label",{staticClass:"col-6 col-form-label"},[e._v("特別損失")]),e._v(" "),r("div",{staticClass:"col-6"},[r("b-form-input",{attrs:{type:"number",step:"1",min:"0"},model:{value:e.expenses.extraordinaryLoss,callback:function(t){e.$set(e.expenses,"extraordinaryLoss",e._n(t))},expression:"expenses.extraordinaryLoss"}})],1)]),e._v(" "),r("li",{staticClass:"row"},[r("label",{staticClass:"col-6 col-form-label"},[e._v("法人税等")]),e._v(" "),r("div",{staticClass:"col-6"},[r("b-form-input",{attrs:{type:"number",step:"1",min:"0"},model:{value:e.expenses.corporateTax,callback:function(t){e.$set(e.expenses,"corporateTax",e._n(t))},expression:"expenses.corporateTax"}})],1)])])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[e._v("収益")]),e._v(" "),r("div",{staticClass:"col-6 text-right"},[e._v(e._s(e.total(e.revenue)))]),e._v(" "),r("ul",{staticClass:"mt-2"},[r("li",{staticClass:"row"},[r("label",{staticClass:"col-6 col-form-label"},[e._v("売上高")]),e._v(" "),r("div",{staticClass:"col-6"},[r("b-form-input",{attrs:{type:"number",step:"1",min:"0"},model:{value:e.revenue.sales,callback:function(t){e.$set(e.revenue,"sales",e._n(t))},expression:"revenue.sales"}})],1)]),e._v(" "),r("li",{staticClass:"row"},[r("label",{staticClass:"col-6 col-form-label"},[e._v("営業外収益")]),e._v(" "),r("div",{staticClass:"col-6"},[r("b-form-input",{attrs:{type:"number",step:"1",min:"0"},model:{value:e.revenue.nonOperatingIncome,callback:function(t){e.$set(e.revenue,"nonOperatingIncome",e._n(t))},expression:"revenue.nonOperatingIncome"}})],1)]),e._v(" "),r("li",{staticClass:"row"},[r("label",{staticClass:"col-6 col-form-label"},[e._v("特別利益")]),e._v(" "),r("div",{staticClass:"col-6"},[r("b-form-input",{attrs:{type:"number",step:"1",min:"0"},model:{value:e.revenue.extraordinaryGain,callback:function(t){e.$set(e.revenue,"extraordinaryGain",e._n(t))},expression:"revenue.extraordinaryGain"}})],1)])])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[e._v("利益")]),e._v(" "),r("div",{staticClass:"col-6 text-right"},[e._v(e._s(e.total(e.income)))]),e._v(" "),r("ul",[r("li",{staticClass:"row"},[r("label",{staticClass:"col-6 col-form-label"},[e._v("当期純利益")]),e._v(" "),r("div",{staticClass:"col-6"},[r("b-form-input",{attrs:{type:"number",step:"1",min:"0"},model:{value:e.income.netIncome,callback:function(t){e.$set(e.income,"netIncome",e._n(t))},expression:"income.netIncome"}})],1)])])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[e._v("損失")]),e._v(" "),r("div",{staticClass:"col-6 text-right"},[e._v(e._s(e.total(e.loss)))]),e._v(" "),r("ul",[r("li",{staticClass:"row"},[r("label",{staticClass:"col-6 col-form-label"},[e._v("当期純損失")]),e._v(" "),r("div",{staticClass:"col-6"},[r("b-form-input",{attrs:{type:"number",step:"1",min:"0"},model:{value:e.loss.netLoss,callback:function(t){e.$set(e.loss,"netLoss",e._n(t))},expression:"loss.netLoss"}})],1)])])]),e._v(" "),r("div",{staticClass:"row mt-3"},[r("b-button",{staticClass:"mx-auto",attrs:{variant:"outline-primary"},on:{click:function(t){return e.updateChart()}}},[e._v("反映")]),e._v(" "),r("b-button",{staticClass:"mx-auto",attrs:{variant:"outline-secondary"},on:{click:function(t){return e.clearData()}}},[e._v("クリア")])],1)])],1),e._v(" "),r("global-footer")],1)}),[],!1,null,"061d649e",null);t.default=component.exports;installComponents(component,{GlobalHeader:r(223).default,CorpDetail:r(224).default,ProfitAndLoss:r(368).default,GlobalFooter:r(225).default})}}]);