(this["webpackJsonpredux-training"]=this["webpackJsonpredux-training"]||[]).push([[0],{29:function(e,t,a){},36:function(e,t,a){},4:function(e,t,a){e.exports={row:"Counter_row__2LokB",value:"Counter_value__CyY_d",button:"Counter_button__Ly1i1",textbox:"Counter_textbox__2Mp0P",asyncButton:"Counter_asyncButton__22leT Counter_button__Ly1i1"}},55:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(10),s=a.n(o),r=(a(29),a(5)),i=(a.p,a(6)),u=a(14),d=a.n(u),l=a(24),h=a(7);function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var m=Object(h.b)("counter/fetchCount",function(){var e=Object(l.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j=Object(h.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(m.pending,(function(e){e.status="loading"})).addCase(m.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),f=j.actions,p=(f.increment,f.decrement,f.incrementByAmount,j.reducer),v=(a(4),a(1));a(36);var g=a(3),O=a(15),x=a.n(O);var y=function(){var e=Object(n.useState)("goa"),t=Object(r.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),s=Object(r.a)(o,2),i=s[0],u=s[1],d=Object(n.useState)(0),l=Object(r.a)(d,2),h=l[0],b=l[1];Object(n.useEffect)((function(){var e={access_key:"05098d664e7c7e941d6a624fc28b5fef",query:a};x.a.get("http://api.positionstack.com/v1/forward",{params:e}).then((function(e){console.log(e.data),u(e.data)})).catch((function(e){console.log(e)}))}),[a]),Object(n.useEffect)((function(){if(i){console.log(i.data[0].latitude),console.log(i.data[0].longitude);var e={method:"GET",url:"https://api.ambeedata.com/weather/latest/by-lat-lng",params:{lat:i.data[0].latitude,lng:i.data[0].longitude},headers:{"x-api-key":"7b361cdd02714c0848654f475fc61c37999401dadee274ab4e564dba8f104d4c","Content-type":"application/json"}};x.a.request(e).then((function(e){console.log(e.data),b(e.data)})).catch((function(e){console.error(e)}))}}),[i]),i&&console.log(i);var m=Object(g.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;if("INCREMENT"===t.type)return e+1}));return m.subscribe((function(){console.log(m.getState())})),m.dispatch({type:"INCREMENT"}),Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)("main",{children:[Object(v.jsx)("h1",{className:"main-heading",children:"Weather"}),Object(v.jsxs)("div",{className:"search-city",children:[Object(v.jsx)("input",{className:"searchPlace",type:"text",placeholder:a}),Object(v.jsx)("button",{className:"search-btn",onClick:function(){var e=document.querySelector(".searchPlace");console.log(e.value),c(e.value)},children:"search"})]}),i&&h?Object(v.jsxs)("div",{className:"forecast-details",children:[Object(v.jsx)("img",{className:"weather-image",src:"https://assetambee.s3-us-west-2.amazonaws.com/weatherIcons/PNG/".concat(h.data.icon,".png"),alt:""}),Object(v.jsxs)("div",{className:"degree-details",children:[Object(v.jsxs)("div",{className:"celcius",children:[Math.round(5*(h.data.temperature-32)/9*10)/10,"\u2103"]}),Object(v.jsxs)("div",{className:"humidity",children:["Humidity : ",h.data.humidity]}),Object(v.jsxs)("div",{className:"wind",children:["Wind : ",h.data.windSpeed]})]}),Object(v.jsxs)("div",{className:"forecast-city",children:[Object(v.jsx)("div",{className:"weather-place",children:i.data[0].label}),Object(v.jsx)("div",{className:"weather-type",children:h.data.summary})]})]}):""]})})},w=Object(h.a)({reducer:{counter:p}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(i.a,{store:w,children:Object(v.jsx)(y,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.fca4f700.chunk.js.map