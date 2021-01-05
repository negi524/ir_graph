(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{229:function(t,n,e){var content=e(376);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(54).default)("1db613c4",content,!0,{sourceMap:!1})},366:function(t,n,e){"use strict";e.r(n);e(9);var l=e(231),r=l.b.reactiveData,o={extends:l.a,mixins:[r],props:{beginningCache:{type:Number,required:!0,default:100},operatingActivities:{type:Number,required:!0,default:40},investmentActivities:{type:Number,required:!0,default:60},financingActivities:{type:Number,required:!0,default:30},options:{type:Object,required:!1,default:function(){return{responsive:!0,maintainAspectRaito:!1,legend:{display:!1},scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}}}},data:function(){return{plusColor:{background:"rgba(54, 162, 235, 0.2)",border:"rgba(54, 162, 235, 1)"},minusColor:{background:"rgba(255, 99, 132, 0.2)",border:"rgba(255,99,132,1)"},chartData:null}},computed:{hiddenOperatingAmount:function(){var t=this.beginningCache+this.operatingActivities;return this.beginningCache*t<0?null:this.beginningCache*this.operatingActivities>0?this.beginningCache:t},displayOperatingActivities:function(){var t={plus:0,minus:0},n=this.beginningCache+this.operatingActivities,e=this.beginningCache<=0&&n>0,l=this.beginningCache>0&&n<=0,r=this.beginningCache<0&&n<0;return e?(t.plus=n,t.minus=this.beginningCache):l?(t.plus=this.beginningCache,t.minus=n):r?t.minus=-1*Math.abs(this.operatingActivities):t.plus=Math.abs(this.operatingActivities),t},hiddenInvestmentAmount:function(){var t=this.beginningCache+this.operatingActivities,n=t+this.investmentActivities;return t*n<0?null:t*this.investmentActivities>0?t:n},displayInvestmentActivities:function(){var t={plus:0,minus:0},n=this.beginningCache+this.operatingActivities,e=n+this.investmentActivities,l=n>0&&e<=0,r=n<=0&&e<=0;return n<=0&&e>0?(t.plus=e,t.minus=n):l?(t.plus=n,t.minus=e):r?t.minus=-1*Math.abs(this.investmentActivities):t.plus=Math.abs(this.investmentActivities),t},hiddenFinancingAmount:function(){var t=this.beginningCache+this.operatingActivities+this.investmentActivities,n=t+this.financingActivities;return t*n<0?null:t*this.financingActivities>0?t:n},displayFinancingActivities:function(){var t={plus:0,minus:0},n=this.beginningCache+this.operatingActivities+this.investmentActivities,e=n+this.financingActivities,l=n>0&&e<=0,r=n<=0&&e<=0;return n<=0&&e>0?(t.plus=e,t.minus=n):l?(t.plus=n,t.minus=e):r?t.minus=-1*Math.abs(this.financingActivities):t.plus=Math.abs(this.financingActivities),t},endCache:function(){return this.beginningCache+this.operatingActivities+this.investmentActivities+this.financingActivities}},mounted:function(){this.fillData(),this.renderChart(this.chartData,this.options)},methods:{fillData:function(){this.chartData={labels:["期首現金","営業活動","投資活動","財務活動","期末現金"],datasets:[{label:"期首現金",data:[this.beginningCache,null,null,null,null],backgroundColor:"rgba(75, 192, 192, 0.2)",borderColor:"rgba(75, 192, 192, 1)",borderWidth:1},{label:"営業活動の非表示要素",data:[null,this.hiddenOperatingAmount,null,null,null],backgroundColor:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)"},{label:"営業活動",data:[null,this.displayOperatingActivities.plus,null,null,null],backgroundColor:this.operatingActivities>0?this.plusColor.background:this.minusColor.background,borderColor:this.operatingActivities>0?this.plusColor.border:this.minusColor.border,borderWidth:1},{label:"営業活動",data:[null,this.displayOperatingActivities.minus,null,null,null],backgroundColor:this.operatingActivities>0?this.plusColor.background:this.minusColor.background,borderColor:this.operatingActivities>0?this.plusColor.border:this.minusColor.border,borderWidth:1},{label:"投資活動の非表示要素",data:[null,null,this.hiddenInvestmentAmount,null,null],backgroundColor:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)"},{label:"投資活動",data:[null,null,this.displayInvestmentActivities.plus,null,null],backgroundColor:this.investmentActivities>0?this.plusColor.background:this.minusColor.background,borderColor:this.investmentActivities>0?this.plusColor.border:this.minusColor.border,borderWidth:1},{label:"投資活動",data:[null,null,this.displayInvestmentActivities.minus,null,null],backgroundColor:this.investmentActivities>0?this.plusColor.background:this.minusColor.background,borderColor:this.investmentActivities>0?this.plusColor.border:this.minusColor.border,borderWidth:1},{label:"財務活動の非表示要素",data:[null,null,null,this.hiddenFinancingAmount,null],backgroundColor:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)"},{label:"財務活動",data:[null,null,null,this.displayFinancingActivities.plus,null],backgroundColor:this.financingActivities>0?this.plusColor.background:this.minusColor.background,borderColor:this.financingActivities>0?this.plusColor.border:this.minusColor.border,borderWidth:1},{label:"財務活動",data:[null,null,null,this.displayFinancingActivities.minus,null],backgroundColor:this.financingActivities>0?this.plusColor.background:this.minusColor.background,borderColor:this.financingActivities>0?this.plusColor.border:this.minusColor.border,borderWidth:1},{label:"期末現金",data:[null,null,null,null,this.endCache],backgroundColor:"rgba(75, 192, 192, 0.2)",borderColor:"rgba(75, 192, 192, 1)",borderWidth:1}]}}}},c=e(46),component=Object(c.a)(o,void 0,void 0,!1,null,null,null);n.default=component.exports},375:function(t,n,e){"use strict";var l=e(229);e.n(l).a},376:function(t,n,e){(n=e(53)(!1)).push([t.i,"input[data-v-8397a228]:invalid{border:1px solid red}@media (min-width:897px){.cs-input__item[data-v-8397a228]{display:flex;justify-content:space-between;margin-top:5px}.cs-input__label[data-v-8397a228]{width:120px;margin:auto 0}.cache-flow-graph[data-v-8397a228]{max-width:610px}}@media (max-width:896px){.cs-input__item[data-v-8397a228]{display:flex;justify-content:space-between}.cs-input__label[data-v-8397a228]{width:120px;margin:auto 0}}",""]),t.exports=n},380:function(t,n,e){"use strict";e.r(n);e(9);var l=e(223),r=e(224),o=e(366),c={components:{GlobalHeader:l.default,GlobalFooter:r.default,CacheFlow:o.default},data:function(){return{storageKeyName:"csData",beginningCache:100,operatingActivities:40,investmentActivities:-170,financingActivities:40}},computed:{total:function(){return Number(this.beginningCache)+Number(this.operatingActivities)+Number(this.investmentActivities)+Number(this.financingActivities)}},created:function(){var t=localStorage.getItem(this.storageKeyName);if(t){var data=JSON.parse(t);this.beginningCache=data.beginningCache,this.operatingActivities=data.operatingActivities,this.investmentActivities=data.investmentActivities,this.financingActivities=data.financingActivities}},methods:{updateChart:function(){this.$refs.cf.fillData();var t={beginningCache:this.beginningCache,operatingActivities:this.operatingActivities,investmentActivities:this.investmentActivities,financingActivities:this.financingActivities};localStorage.setItem(this.storageKeyName,JSON.stringify(t))},clearData:function(){this.beginningCache=0,this.operatingActivities=0,this.investmentActivities=0,this.financingActivities=0}}},h=(e(375),e(46)),component=Object(h.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("global-header"),t._v(" "),e("h2",{staticClass:"mt-5"},[t._v("キャッシュフロー計算書（C/S）")]),t._v(" "),e("div",{staticClass:"row mt-4"},[e("cache-flow",{ref:"cf",staticClass:"cache-flow-graph col-md-8",attrs:{"beginning-cache":Number(t.beginningCache),"operating-activities":Number(t.operatingActivities),"investment-activities":Number(t.investmentActivities),"financing-activities":Number(t.financingActivities)}}),t._v(" "),e("div",{staticClass:"col-md-4 my-auto cs-input"},[e("div",{staticClass:"cs-input__item"},[e("label",{staticClass:"cs-input__label"},[t._v("期首現金")]),t._v(" "),e("b-form-input",{staticClass:"cs-input__form",attrs:{type:"number",step:"1"},model:{value:t.beginningCache,callback:function(n){t.beginningCache=t._n(n)},expression:"beginningCache"}})],1),t._v(" "),e("div",{staticClass:"cs-input__item"},[e("label",{staticClass:"cs-input__label"},[t._v("営業活動")]),t._v(" "),e("b-form-input",{staticClass:"cs-input__form",attrs:{type:"number",step:"1"},model:{value:t.operatingActivities,callback:function(n){t.operatingActivities=t._n(n)},expression:"operatingActivities"}})],1),t._v(" "),e("div",{staticClass:"cs-input__item"},[e("label",{staticClass:"cs-input__label"},[t._v("投資活動")]),t._v(" "),e("b-form-input",{staticClass:"cs-input__form",attrs:{type:"number",step:"1"},model:{value:t.investmentActivities,callback:function(n){t.investmentActivities=t._n(n)},expression:"investmentActivities"}})],1),t._v(" "),e("div",{staticClass:"cs-input__item"},[e("label",{staticClass:"cs-input__label"},[t._v("財務活動")]),t._v(" "),e("b-form-input",{staticClass:"cs-input__form",attrs:{type:"number",step:"1"},model:{value:t.financingActivities,callback:function(n){t.financingActivities=t._n(n)},expression:"financingActivities"}})],1),t._v(" "),e("div",{staticClass:"cs-input__item"},[e("div",[t._v("期末現金")]),t._v(" "),e("div",[t._v(t._s(t.total))])]),t._v(" "),e("div",{staticClass:"row mt-4"},[e("b-button",{staticClass:"mx-auto",attrs:{variant:"outline-primary"},on:{click:function(n){return t.updateChart()}}},[t._v("反映")]),t._v(" "),e("b-button",{staticClass:"mx-auto",attrs:{variant:"outline-secondary"},on:{click:function(n){return t.clearData()}}},[t._v("クリア")])],1)])],1),t._v(" "),e("global-footer")],1)}),[],!1,null,"8397a228",null);n.default=component.exports;installComponents(component,{GlobalHeader:e(223).default,CacheFlow:e(366).default,GlobalFooter:e(224).default})}}]);