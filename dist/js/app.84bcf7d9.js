(function(e){function t(t){for(var n,a,s=t[0],l=t[1],u=t[2],b=0,d=[];b<s.length;b++)a=s[b],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);i&&i(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==c[l]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},c={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var i=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0670":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function c(e,t,r,c,o,a){var s=Object(n["i"])("Postres");return Object(n["e"])(),Object(n["c"])(s,{msg:"Como Leer un Archivo JSON con Vue JS 3 y Axios 0.21.1"})}var o=Object(n["k"])("data-v-a79428fa");Object(n["g"])("data-v-a79428fa");var a={class:"container"},s={class:"row-12"},l=Object(n["d"])("thead",{class:"thead-dark"},[Object(n["d"])("tr",null,[Object(n["d"])("th",{scope:"col"},"Nombre"),Object(n["d"])("th",{scope:"col"},"Precio"),Object(n["d"])("th",{scope:"col"},"Stock"),Object(n["d"])("th",{scope:"col"},"Categoría"),Object(n["d"])("th",{scope:"col"},"Imagen")])],-1);Object(n["f"])();var u=o((function(e,t,r,c,o,u){return Object(n["e"])(),Object(n["c"])("div",a,[Object(n["d"])("div",s,[Object(n["d"])("h1",null,Object(n["j"])(r.msg),1),Object(n["d"])("table",{class:"table mt-3",items:o.postres,fields:o.fields},[l,Object(n["d"])("tbody",null,[(Object(n["e"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(o.postres,(function(e){return Object(n["e"])(),Object(n["c"])("tr",{key:e.id},[Object(n["d"])("td",null,Object(n["j"])(e.nombre),1),Object(n["d"])("td",null,Object(n["j"])(e.precio),1),Object(n["d"])("td",null,Object(n["j"])(e.stock),1),Object(n["d"])("td",null,Object(n["j"])(e.url),1),Object(n["d"])("td",null,[Object(n["d"])("img",{src:"upload/"+e.img,class:"img-fluid ancho",alt:e.nombre},null,8,["src","alt"])])])})),128))])],8,["items","fields"])])])})),i=r("bc3a"),b=r.n(i),d=b.a.create({baseURL:"http://127.0.0.1:8080/"}),p={name:"Postres",props:{msg:String},data:function(){return{fields:["nombre","precio","stock","url","img"],id:"",nombre:"",precio:"",stock:"",url:"",img:"",postres:[]}},mounted:function(){var e=this;d.get("https://nubecolectiva.com/api/v1/postres").then((function(t){e.postres=t.data.postres,console.log(e.postres)}))}};r("de90");p.render=u,p.__scopeId="data-v-a79428fa";var f=p,j={name:"App",components:{Postres:f}};r("efa4");j.render=c;var O=j;r("ab8b"),r("3e48");Object(n["b"])(O).mount("#app")},b3e3:function(e,t,r){},de90:function(e,t,r){"use strict";r("0670")},efa4:function(e,t,r){"use strict";r("b3e3")}});
//# sourceMappingURL=app.84bcf7d9.js.map