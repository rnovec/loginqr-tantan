(function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],u=0,v=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(v.length)v.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/loginqr-tantan/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-system-bar",{attrs:{app:""}},[a("v-spacer"),a("v-icon",[e._v("mdi-square")]),a("v-icon",[e._v("mdi-circle")]),a("v-icon",[e._v("mdi-triangle")])],1),a("v-app-bar",{attrs:{app:"","clipped-right":"",flat:""}},[a("b",[e._v("Login con TanTan")])]),a("v-navigation-drawer",{attrs:{app:"",width:"300"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-navigation-drawer",{attrs:{absolute:"",color:"grey lighten-3","mini-variant":""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-avatar",{staticClass:"d-block text-center mx-auto mt-4",attrs:{color:"grey darken-1",size:"36"}}),a("v-divider",{staticClass:"mx-3 my-5"})],1),a("v-sheet",{attrs:{color:"grey lighten-5",height:"128",width:"100%"}}),a("v-list",{staticClass:"pl-14",attrs:{shaped:""}})],1),a("v-navigation-drawer",{attrs:{app:"",clipped:"",right:""}},[a("v-list")],1),a("v-main",["login"===e.state?a("v-card",{staticClass:"mx-auto"},[a("v-card-text",{staticClass:"text--primary d-flex justify-center"},[e.token?a("vue-qrcode",{attrs:{color:{dark:"#F38027"},value:e.token}}):e._e()],1),a("v-card-text",[a("v-form",{ref:"form"},[a("v-text-field",{attrs:{counter:10,label:"Socket server URL",required:""},model:{value:e.socket_url,callback:function(t){e.socket_url=t},expression:"socket_url"}}),a("v-text-field",{attrs:{counter:10,label:"Client ID",required:""},model:{value:e.client_id,callback:function(t){e.client_id=t},expression:"client_id"}}),a("v-text-field",{attrs:{label:"Token",required:""},model:{value:e.token,callback:function(t){e.token=t},expression:"token"}}),a("v-btn",{on:{click:e.recconectWebsocket}},[e._v("Generar QR")])],1)],1)],1):e._e(),a("br"),"home"===e.state?a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500",outlined:""}},[e.user_data.scope_result?a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("div",{staticClass:"overline mb-4"},[e._v(" welcome ")]),a("v-list-item-title",{staticClass:"title"},[e._v(" "+e._s(e.user_data.scope_result.personal_data.first_name)+" "+e._s(e.user_data.scope_result.personal_data.last_name)+" ")]),a("v-list-item-subtitle",[e._v(e._s(e.user_data.scope_result.personal_data.email))]),a("v-list",e._l(e.user_data.scope_result,(function(t,n){return a("v-list-group",{key:t,attrs:{"no-action":""},scopedSlots:e._u([{key:"activator",fn:function(){return[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:e._s(n)}})],1)]},proxy:!0}],null,!0)},e._l(t,(function(t,n){return a("v-list-item",{key:t},[a("v-list-item-content",[a("v-list-item-title",[a("b",[e._v(e._s(t))]),e._v(" ("+e._s(n)+")")])],1)],1)})),1)})),1)],1),e.user_data.scope_result.biometrics?a("v-list-item-avatar",{attrs:{size:"80"}},[a("v-img",{attrs:{src:e.user_data.scope_result.biometrics.image}})],1):a("v-list-item-avatar",{attrs:{size:"80",rounded:"",color:"gray"}})],1):e._e(),a("v-card-actions",[a("v-btn",{attrs:{outlined:"",rounded:"",color:"red"},on:{click:function(t){e.state="login"}}},[e._v(" Logout ")])],1)],1):e._e(),a("v-dialog",{attrs:{width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2"},[e._v(" Scan QR Code ")]),e.dialog?a("StreamBarcodeReader",{on:{decode:e.onDecode,loaded:e.onLoaded}}):e._e(),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""}},[e._v(" Close ")])],1)],1)],1)],1),a("v-bottom-navigation",[a("v-btn",{attrs:{value:"recent"}},[a("span",[e._v("Login")]),a("v-icon",[e._v("mdi-lock")])],1),a("v-btn",{attrs:{value:"favorites"},on:{click:function(t){e.dialog=!0}}},[a("span",[e._v("Scan")]),a("v-icon",[e._v("mdi-qrcode")])],1),a("v-btn",{attrs:{value:"nearby"}},[a("span",[e._v("Home")]),a("v-icon",[e._v("mdi-home")])],1)],1)],1)},o=[],i=(a("ac1f"),a("1276"),a("96cf"),a("1da1")),s=a("f337"),c=a("9a13"),l=a("bc3a"),d=a.n(l),u=a("83cf"),v="47a84ce2-9cc2-4597-a335-7888a8d6c9c8",p="ws://3.16.112.239:8000",f=d.a.create({baseURL:"https://qrlogin-test.tantan.solutions",mode:"cors",withCredentials:!0}),g={data:function(){return{client_id:v,socket_url:p,token:"",state:"login",drawer:null,dialog:!1,user_data:{},value:null,result:""}},components:{StreamBarcodeReader:s["a"],VueQrcode:c["a"]},created:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{recconectWebsocket:function(){var e=this,t=this.socket_url+"/login/stream/?client_id="+this.client_id;console.log("Connecting to "+t),n["a"].use(u["a"],t,{reconnectEnabled:!1,reconnectInterval:1e3}),this.$socketClient.onOpen=function(){console.log("socket connected")},this.$socketClient.onMessage=function(t){var a=JSON.parse(t.data);switch(console.log(a),a.action){case"qrcode":e.token=a.qr_data;break;case"authorized":e.state="home",e.user_data=a.user_info;break;default:break}},this.$socketClient.onClose=function(){console.log("socket closed")},this.$socketClient.onError=function(){console.log("socket error")}},handleLogin:function(e,t){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a.dialog=!1,console.log(e),n.next=4,f.post("/api/v1/login/qrcode/",{user_data:t,token:e});case 4:case"end":return n.stop()}}),n)})))()},onDecode:function(e){if(e){var t=e.split("https://loginqr.tantan.solutions/")[1];console.log(t),this.dialog=!1,this.handleLogin(t,{biometrics:[]})}},onLoaded:function(){console.log("loaded")}}},m=g,_=a("2877"),b=a("6544"),h=a.n(b),k=a("7496"),w=a("40dc"),y=a("8212"),x=a("b81c"),V=a("8336"),C=a("b0af"),O=a("99d9"),S=a("169a"),L=a("ce7e"),j=a("4bd4"),q=a("132d"),R=a("adda"),T=a("8860"),I=a("56b0"),A=a("da13"),P=a("8270"),B=a("5d23"),D=a("f6c4"),M=a("f774"),N=a("8dd9"),$=a("2fa4"),F=a("afd9"),z=a("8654"),E=Object(_["a"])(m,r,o,!1,null,null,null),J=E.exports;h()(E,{VApp:k["a"],VAppBar:w["a"],VAvatar:y["a"],VBottomNavigation:x["a"],VBtn:V["a"],VCard:C["a"],VCardActions:O["a"],VCardText:O["b"],VCardTitle:O["c"],VDialog:S["a"],VDivider:L["a"],VForm:j["a"],VIcon:q["a"],VImg:R["a"],VList:T["a"],VListGroup:I["a"],VListItem:A["a"],VListItemAvatar:P["a"],VListItemContent:B["a"],VListItemSubtitle:B["b"],VListItemTitle:B["c"],VMain:D["a"],VNavigationDrawer:M["a"],VSheet:N["a"],VSpacer:$["a"],VSystemBar:F["a"],VTextField:z["a"]});var Q=a("f309");n["a"].use(Q["a"]);var G=new Q["a"]({}),U=a("9483");Object(U["a"])("".concat("/loginqr-tantan/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["a"].config.productionTip=!1,new n["a"]({vuetify:G,render:function(e){return e(J)}}).$mount("#app")}});
//# sourceMappingURL=app.dbd575b3.js.map