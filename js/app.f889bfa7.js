(function(e){function t(t){for(var o,i,c=t[0],l=t[1],s=t[2],u=0,v=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&v.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(v.length)v.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/loginqr-tantan/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-system-bar",{attrs:{app:""}},[n("v-spacer"),n("v-icon",[e._v("mdi-square")]),n("v-icon",[e._v("mdi-circle")]),n("v-icon",[e._v("mdi-triangle")])],1),n("v-app-bar",{attrs:{app:"","clipped-right":"",flat:""}},[n("b",[e._v("Login con TanTan")])]),n("v-navigation-drawer",{attrs:{app:"",width:"300"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-navigation-drawer",{attrs:{absolute:"",color:"grey lighten-3","mini-variant":""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-avatar",{staticClass:"d-block text-center mx-auto mt-4",attrs:{color:"grey darken-1",size:"36"}}),n("v-divider",{staticClass:"mx-3 my-5"})],1),n("v-sheet",{attrs:{color:"grey lighten-5",height:"128",width:"100%"}}),n("v-list",{staticClass:"pl-14",attrs:{shaped:""}})],1),n("v-navigation-drawer",{attrs:{app:"",clipped:"",right:""}},[n("v-list")],1),n("v-main",["login"===e.state?n("v-card",{staticClass:"mx-auto"},[n("v-card-text",{staticClass:"text--primary d-flex justify-center"},[e.token?n("vue-qrcode",{attrs:{color:{dark:"#F38027"},value:e.token}}):e._e()],1),n("v-card-text",[n("v-form",{ref:"form"},[n("v-text-field",{attrs:{counter:10,label:"Socket server URL",required:""},model:{value:e.socket_url,callback:function(t){e.socket_url=t},expression:"socket_url"}}),n("v-text-field",{attrs:{counter:10,label:"Client ID",required:""},model:{value:e.client_id,callback:function(t){e.client_id=t},expression:"client_id"}}),n("v-text-field",{attrs:{label:"Token",required:""},model:{value:e.token,callback:function(t){e.token=t},expression:"token"}}),n("v-btn",{on:{click:e.recconectWebsocket}},[e._v("Generar QR")])],1)],1)],1):e._e(),n("br"),"home"===e.state?n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("div",{staticClass:"overline mb-4"},[e._v(" welcome ")]),n("v-list-item-title",{staticClass:"headline mb-1"},[e._v(" "+e._s(e.user_data.username)+" ")]),n("v-list-item-subtitle",[e._v("Greyhound divisely hello coldly fonwderfully")])],1),n("v-list-item-avatar",{attrs:{tile:"",size:"80",color:"red"}})],1),n("v-card-actions",[n("v-btn",{attrs:{outlined:"",rounded:"",color:"red"},on:{click:function(t){e.state="login"}}},[e._v(" Logout ")])],1)],1):e._e(),n("v-dialog",{attrs:{width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2"},[e._v(" Scan QR Code ")]),e.dialog?n("StreamBarcodeReader",{on:{decode:e.onDecode,loaded:e.onLoaded}}):e._e(),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""}},[e._v(" Close ")])],1)],1)],1)],1),n("v-bottom-navigation",[n("v-btn",{attrs:{value:"recent"}},[n("span",[e._v("Login")]),n("v-icon",[e._v("mdi-lock")])],1),n("v-btn",{attrs:{value:"favorites"},on:{click:function(t){e.dialog=!0}}},[n("span",[e._v("Scan")]),n("v-icon",[e._v("mdi-qrcode")])],1),n("v-btn",{attrs:{value:"nearby"}},[n("span",[e._v("Home")]),n("v-icon",[e._v("mdi-home")])],1)],1)],1)},r=[],i=(n("ac1f"),n("1276"),n("96cf"),n("1da1")),c=n("f337"),l=n("9a13"),s=n("bc3a"),d=n.n(s),u=n("83cf"),v="47a84ce2-9cc2-4597-a335-7888a8d6c9c8",f="ws://qrlogin-test.tantan.solutions",p=d.a.create({baseURL:"https://qrlogin-test.tantan.solutions",mode:"cors",withCredentials:!0}),g={data:function(){return{client_id:v,socket_url:f,token:"",state:"login",drawer:null,dialog:!1,user_data:{},value:null,result:""}},components:{StreamBarcodeReader:c["a"],VueQrcode:l["a"]},created:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{recconectWebsocket:function(){var e=this,t=this.socket_url+"/login/stream/?client_id="+this.client_id;console.log("Connecting to "+t),o["a"].use(u["a"],t,{reconnectEnabled:!1,reconnectInterval:1e3}),this.$socketClient.onOpen=function(){console.log("socket connected")},this.$socketClient.onMessage=function(t){var n=JSON.parse(t.data);switch(console.log(n),n.action){case"qrcode":e.token=n.qr_data;break;case"authorized":e.state="home",e.user_data=n.user_info;break;default:break}},this.$socketClient.onClose=function(){console.log("socket closed")},this.$socketClient.onError=function(){console.log("socket error")}},handleLogin:function(e,t){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n.dialog=!1,console.log(e),o.next=4,p.post("/api/v1/login/qrcode/",{user_id:t,token:e});case 4:case"end":return o.stop()}}),o)})))()},onDecode:function(e){if(e){var t=e.split("https://loginqr.tantan.solutions/")[1];console.log(t),this.dialog=!1,this.handleLogin(t,1)}},onLoaded:function(){console.log("loaded")}}},m=g,b=n("2877"),h=n("6544"),k=n.n(h),_=n("7496"),w=n("40dc"),y=n("8212"),x=n("b81c"),V=n("8336"),C=n("b0af"),O=n("99d9"),S=n("169a"),j=n("ce7e"),q=n("4bd4"),L=n("132d"),R=n("8860"),T=n("da13"),A=n("8270"),I=n("5d23"),B=n("f6c4"),P=n("f774"),D=n("8dd9"),M=n("2fa4"),N=n("afd9"),$=n("8654"),F=Object(b["a"])(m,a,r,!1,null,null,null),E=F.exports;k()(F,{VApp:_["a"],VAppBar:w["a"],VAvatar:y["a"],VBottomNavigation:x["a"],VBtn:V["a"],VCard:C["a"],VCardActions:O["a"],VCardText:O["b"],VCardTitle:O["c"],VDialog:S["a"],VDivider:j["a"],VForm:q["a"],VIcon:L["a"],VList:R["a"],VListItem:T["a"],VListItemAvatar:A["a"],VListItemContent:I["a"],VListItemSubtitle:I["b"],VListItemTitle:I["c"],VMain:B["a"],VNavigationDrawer:P["a"],VSheet:D["a"],VSpacer:M["a"],VSystemBar:N["a"],VTextField:$["a"]});var z=n("f309");o["a"].use(z["a"]);var J=new z["a"]({}),Q=n("9483");Object(Q["a"])("".concat("/loginqr-tantan/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({vuetify:J,render:function(e){return e(E)}}).$mount("#app")}});
//# sourceMappingURL=app.f889bfa7.js.map