(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{359:function(t,e,r){"use strict";r.r(e);var o=r(360),l=o.b.reactiveProp,n={extends:o.a,mixins:[l],props:{chartData:{type:Object,default:function(){return{labels:["借方","貸方"],datasets:[{type:"bar",barPercentage:1.2,label:"利益",backgroundColor:"rgba(75, 192, 192, 0.2)",borderColor:"rgba(75, 192, 192, 1)",borderWidth:1,data:[0,null]},{type:"bar",barPercentage:1.2,label:"費用",data:[0,null],backgroundColor:"rgba(255, 159, 64, 0.2)",borderColor:"rgba(255, 159, 64, 1)",borderWidth:1},{type:"bar",barPercentage:1.2,label:"損失",data:[null,0],backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1},{type:"bar",barPercentage:1.2,label:"収益",data:[null,0],backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgba(54, 162, 235, 1)",borderWidth:1}]}}},options:{type:Object,requied:!1,default:function(){return{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}}}},mounted:function(){this.renderChart(this.chartData,this.options)}},c=r(46),component=Object(c.a)(n,void 0,void 0,!1,null,null,null);e.default=component.exports},370:function(t,e,r){"use strict";r.r(e);var o={components:{ProfitAndLoss:r(359).default},data:function(){return{datacollection:null,netIncome:20,expenses:80,revenue:100,netLoss:0}},mounted:function(){this.fillData()},methods:{fillData:function(){this.datacollection={labels:["借方","貸方"],datasets:[{type:"bar",barPercentage:1.2,label:"利益",backgroundColor:"rgba(75, 192, 192, 0.2)",borderColor:"rgba(75, 192, 192, 1)",borderWidth:1,data:[this.netIncome,null]},{type:"bar",barPercentage:1.2,label:"費用",data:[this.expenses,null],backgroundColor:"rgba(255, 159, 64, 0.2)",borderColor:"rgba(255, 159, 64, 1)",borderWidth:1},{type:"bar",barPercentage:1.2,label:"損失",data:[null,this.netLoss],backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1},{type:"bar",barPercentage:1.2,label:"収益",data:[null,this.revenue],backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgba(54, 162, 235, 1)",borderWidth:1}]}}}},l=r(46),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h2",{staticClass:"mt-5"},[t._v("損益計算書（P/L）")]),t._v(" "),r("div",{staticClass:"row mt-4"},[r("div",{staticClass:"col-4 my-auto"},[r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-6 col-form-label"},[t._v("利益")]),t._v(" "),r("b-form-input",{staticClass:"col-6",attrs:{type:"number"},model:{value:t.netIncome,callback:function(e){t.netIncome=e},expression:"netIncome"}})],1),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-6 col-form-label"},[t._v("費用")]),t._v(" "),r("b-form-input",{staticClass:"col-6",attrs:{type:"number"},model:{value:t.expenses,callback:function(e){t.expenses=e},expression:"expenses"}})],1),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-6 col-form-label"},[t._v("収益")]),t._v(" "),r("b-form-input",{staticClass:"col-6",attrs:{type:"number"},model:{value:t.revenue,callback:function(e){t.revenue=e},expression:"revenue"}})],1),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-6 col-form-label"},[t._v("損失")]),t._v(" "),r("b-form-input",{staticClass:"col-6",attrs:{type:"number"},model:{value:t.netLoss,callback:function(e){t.netLoss=e},expression:"netLoss"}})],1),t._v(" "),r("div",{staticClass:"row mt-3"},[r("b-button",{staticClass:"mx-auto",attrs:{variant:"outline-primary"},on:{click:function(e){return t.fillData()}}},[t._v("\n          反映\n        ")])],1)]),t._v(" "),r("profit-and-loss",{staticClass:"col-8",attrs:{"chart-data":t.datacollection}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProfitAndLoss:r(359).default})}}]);