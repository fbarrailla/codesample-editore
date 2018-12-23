(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(n,e,t){n.exports=t(614)},614:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"code",function(){return h}),t.d(r,"language",function(){return b}),t.d(r,"background",function(){return x}),t.d(r,"customBackground",function(){return w});var a={};t.r(a),t.d(a,"editCode",function(){return E}),t.d(a,"setLanguage",function(){return j}),t.d(a,"setBackground",function(){return O}),t.d(a,"setCustomBackground",function(){return k});var o={};t.r(o),t.d(o,"getCustomBackground",function(){return B}),t.d(o,"isCustomBackground",function(){return S}),t.d(o,"getBackgroundColor",function(){return L}),t.d(o,"isBackgroundImage",function(){return R});var u=t(0),c=t.n(u),i=t(14),l=t.n(i),d=t(3),f=t(2),g=t(161),s=t.n(g),v=t(173),m=localStorage.getItem("appState"),p=m?JSON.parse(m):{code:"// Type code here",language:"javascript",background:"rgb(158, 173, 175)",customBackground:"#808080"},h=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.code||"// Type code here",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(e.type){case"EDIT_CODE":return e.payload;default:return n}},b=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.language,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(e.type){case"SET_LANGUAGE":return e.payload;default:return n}},x=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.background,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(e.type){case"SET_BACKGROUND":return e.payload;default:return n}},w=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.customBackground,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(e.type){case"SET_CUSTOM_BACKGROUND":return e.payload;default:return n}},E=function(n){return{type:"EDIT_CODE",payload:n}},j=function(n){return{type:"SET_LANGUAGE",payload:n}},O=function(n){return{type:"SET_BACKGROUND",payload:n}},k=function(n){return{type:"SET_CUSTOM_BACKGROUND",payload:n}},y=t(53),C=function(n){return n.background},B=function(n){return n.customBackground},S=Object(y.a)(C,function(n){return"custom"===n}),L=Object(y.a)(C,S,B,function(n,e,t){return e?/^-img/.test(t)?"transparent":t:n}),R=Object(y.a)(S,B,function(n,e){return n&&/^img-/.test(e)}),I=Object(v.a)({reducers:r,actions:a,selectors:o}),U=I.useStore,A=I.StoreProvider;function T(){var n=Object(d.a)(["\n  font-size: 28px;\n  height: 38px;\n  line-height: 38px;\n"]);return T=function(){return n},n}var G=f.default.h1(T());function D(){var n=Object(d.a)(["\n  margin-top: 20px;\n  background-color: rgba(26, 35, 39);\n  flex: 1;\n  color: white;\n  font-family: 'Fira Mono', monospace;\n  font-size: 16px;\n  border: none;\n  resize: none;\n  outline: none;\n  padding: 30px 20px;\n"]);return D=function(){return n},n}function z(){var n=Object(d.a)(["\n  color: rgb(157, 173, 175);\n"]);return z=function(){return n},n}function N(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 4;\n  background-color: rgb(38, 50, 56);\n  padding: 20px;\n"]);return N=function(){return n},n}var P=f.default.div(N()),_=Object(f.default)(G)(z()),F=f.default.textarea(D()),M=function(){var n=U(),e=n.state,t=n.dispatch,r=Object(u.useRef)();Object(u.useEffect)(function(){r.current.focus()},[]);return c.a.createElement(P,null,c.a.createElement(_,null,"Editor"),c.a.createElement(F,{value:e.code,onChange:function(n){return t.editCode(n.target.value)},ref:r,spellCheck:!1}))},J=t(12),K=t(164),W=t.n(K),q=t(51),Y=t.n(q),$=t(170),H=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:512;/^data/.test(n)&&(n=n.substring(31));for(var r=atob(n),a=[],o=0;o<r.length;o+=t){for(var u=r.slice(o,o+t),c=new Array(u.length),i=0;i<u.length;i++)c[i]=u.charCodeAt(i);var l=new Uint8Array(c);a.push(l)}return new Blob(a,{type:e})},Q=function(){var n=function(){var n=document.createElement("canvas"),e=n.getContext("2d");return{canvas:!!e,imageData:!!e.getImageData,dataURL:!!n.toDataURL,btoa:!!window.btoa}}();function e(n,e,t){var r=n.width,a=n.height;void 0==e&&(e=r),void 0==t&&(t=a);var o=document.createElement("canvas"),u=o.getContext("2d");return o.width=e,o.height=t,u.drawImage(n,0,0,r,a,0,0,e,t),o}function t(n,t,r,a){return(n=e(n,r,a)).toDataURL(t)}function r(n,e){var t,r=document.createElement("a");if(document.body.appendChild(r),r.download=e,window.URL&&URL.createObjectURL)t=URL.createObjectURL;else{if(!window.webkitURL)return alert("Impossible to save screenshot. You can use your OS to take it manually ;)");t=webkitURL.createObjectURL}r.href=t(H(n,"application/octet-stream")),r.click()}function a(n){var e=document.createElement("img");return e.src=n,e}function o(n){return"image/"+(n=n.toLowerCase().replace(/jpg/i,"jpeg")).match(/png|jpeg|bmp|gif/)[0]}function u(n){if(!window.btoa)throw"btoa undefined";var e="";if("string"==typeof n)e=n;else for(var t=0;t<n.length;t++)e+=String.fromCharCode(n[t]);return btoa(e)}function c(n){var e=n.width,t=n.height;return n.getContext("2d").getImageData(0,0,e,t)}function i(n,e){return n}var l=function(n){var e=n.width,t=n.height,r=e*t*3,a=r+54,o=[66,77,255&a,a>>8&255,a>>16&255,a>>24&255,0,0,0,0,54,0,0,0],c=[40,0,0,0,255&e,e>>8&255,e>>16&255,e>>24&255,255&t,t>>8&255,t>>16&255,t>>24&255,1,0,24,0,0,0,0,0,255&r,r>>8&255,r>>16&255,r>>24&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],i=(4-3*e%4)%4,l=n.data,d="",f=e<<2,g=t,s=String.fromCharCode;do{for(var v=f*(g-1),m="",p=0;p<e;p++){var h=p<<2;m+=s(l[v+h+2])+s(l[v+h+1])+s(l[v+h])}for(var b=0;b<i;b++)m+=String.fromCharCode(0);d+=m}while(--g);return u(o.concat(c))+u(d)},d=function(a,u,d,f,g){if(n.canvas&&n.dataURL)if("string"==typeof a&&(a=document.getElementById(a)),void 0==g&&(g="png"),g=o(g),/bmp/.test(g)){var s=c(e(a,d,f));r(i(l(s)),u)}else{r(t(a,g,d,f).replace(g,"image/octet-stream"),u)}},f=function(r,u,d,f){if(n.canvas&&n.dataURL){if("string"==typeof r&&(r=document.getElementById(r)),void 0==f&&(f="png"),f=o(f),/bmp/.test(f)){var g=c(e(r,u,d));return a(i(l(g)))}return a(t(r,f,u,d))}};return{saveAsImage:d,saveAsPNG:function(n,e,t,r){return d(n,e,t,r,"png")},saveAsJPEG:function(n,e,t,r){return d(n,e,t,r,"jpeg")},saveAsGIF:function(n,e,t,r){return d(n,e,t,r,"gif")},saveAsBMP:function(n,e,t,r){return d(n,e,t,r,"bmp")},convertToImage:f,convertToPNG:function(n,e,t){return f(n,e,t,"png")},convertToJPEG:function(n,e,t){return f(n,e,t,"jpeg")},convertToGIF:function(n,e,t){return f(n,e,t,"gif")},convertToBMP:function(n,e,t){return f(n,e,t,"bmp")}}}(),V=t(90);function X(){var n=Object(d.a)(["\n  margin: 0 7px 0 10px;\n  font-size: 15px;\n"]);return X=function(){return n},n}function Z(){var n=Object(d.a)(["\n  width: 130px;\n"]);return Z=function(){return n},n}function nn(){var n=Object(d.a)(["\n  width: 120px;\n"]);return nn=function(){return n},n}var en=Object(f.default)(V.a)(nn()),tn=Object(f.default)(V.a)(Z()),rn=f.default.label(X()),an=[{label:"Grey",value:"rgb(158, 173, 175)"},{label:"White",value:"rgb(255, 255, 255)"},{label:"Pink",value:"rgb(253, 168, 196)"},{label:"Custom",value:"custom"}],on=Y.a.supportedLanguages.map(function(n){return{label:n,value:n}}),un=function(){var n=U(),e=n.state,t=n.dispatch,r={label:e.language,value:e.language},a=an.find(function(n){return n.value===e.background});return c.a.createElement(c.a.Fragment,null,c.a.createElement(rn,{htmlFor:"background"},"Background"),c.a.createElement(en,{id:"background",value:a,onChange:function(n){return t.setBackground(n.value)},options:an}),c.a.createElement(rn,{htmlFor:"language"},"Language"),c.a.createElement(tn,{id:"language",value:r,onChange:function(n){return t.setLanguage(n.value)},options:on}))},cn=t(177),ln=t(167),dn=t(175),fn=t(168),gn=t.n(fn).a.open("bgImage-store",1,function(n){n.createObjectStore("bgImage")}),sn=function(n){return gn.then(function(e){return e.transaction("bgImage").objectStore("bgImage").get(n)})},vn=function(n,e){return gn.then(function(t){var r=t.transaction("bgImage","readwrite");return r.objectStore("bgImage").put(e,n),r.complete})};function mn(){var n=Object(d.a)(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  right: 20px;\n  top: 20px;\n"]);return mn=function(){return n},n}function pn(){var n=Object(d.a)(["\n  border: 0;\n  padding: 5px 10px;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  font-family: inherit;\n  border-radius: 3px;\n  outline: none;\n\n  + button {\n    margin-left: 10px;\n  }\n"]);return pn=function(){return n},n}function hn(){var n=Object(d.a)(["\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  justify-content: flex-end;\n  margin: 10px;\n"]);return hn=function(){return n},n}var bn=f.default.div(hn()),xn=f.default.button(pn()),wn=f.default.div(mn()),En=function(){var n=Object(u.useRef)(),e=U(),t=e.select,r=e.dispatch,a=Object(u.useState)(!1),o=Object(J.a)(a,2),i=o[0],l=o[1],d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=Object(u.useState)(function(){var n=document.createElement("input");return n.type="file",n}),t=Object(J.a)(e,1)[0];return Object(u.useEffect)(function(){var e=function(e){var r=Object(dn.a)(t.files)[0];if(r){var a=new FileReader;a.onload=function(e){n(e.target.result)},a.readAsDataURL(r)}t.value=null};return t.addEventListener("change",e),function(){return t.removeEventListener("change",e)}},[]),function(){t.click()}}(function(n){var e=+new Date;(function(n,e){return vn(n,e)})(e,n).then(function(){return r.setCustomBackground("img-".concat(e))})});if(Object(cn.a)(n,function(){l(!1)}),!t.isCustomBackground())return null;var f=t.getCustomBackground();return i?c.a.createElement(wn,{ref:n},c.a.createElement(ln.ChromePicker,{color:/^#/.test(f)&&f,onChangeComplete:function(n){return r.setCustomBackground(n.hex)}})):c.a.createElement(bn,null,c.a.createElement(xn,{onClick:function(){return l(!0)}},"Color"),c.a.createElement(xn,{onClick:function(){return d()}},"Image"))};function jn(){var n=Object(d.a)(["\n  padding: 0 15px 15px 15px;\n  max-height: 70vh;\n  overflow: auto;\n"]);return jn=function(){return n},n}function On(){var n=Object(d.a)(["\n  width: 16px;\n  height: 16px;\n  border-radius: 8px;\n  background-color: ",";\n  margin: 5px;\n"]);return On=function(){return n},n}function kn(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  height: 45px;\n  align-items: center;\n  padding: 0 10px;\n"]);return kn=function(){return n},n}function yn(){var n=Object(d.a)(["\n  position: absolute;\n  min-width: 300px;\n  max-width: 500px;\n  background-color: rgb(38, 50, 56);\n  border-radius: 6px;\n  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.55);\n  z-index: 1;\n  user-select: none;\n"]);return yn=function(){return n},n}var Cn=f.default.div(yn()),Bn=f.default.div(kn()),Sn=f.default.div(On(),function(n){return n.color}),Ln=f.default.div(jn()),Rn=function(n){var e=n.children;return c.a.createElement(Cn,null,c.a.createElement(Bn,null,c.a.createElement(Sn,{color:"rgb(252, 96, 92)"}),c.a.createElement(Sn,{color:"rgb(253, 188, 64)"}),c.a.createElement(Sn,{color:"rgb(52, 200, 74)"})),c.a.createElement(Ln,null,e))},In=t(169),Un=t.n(In);var An=function(n){var e=n.data,t=n.width,r=n.height,a=Object(u.useRef)(),o=Object(u.useState)({width:t,height:r}),i=Object(J.a)(o,2),l=i[0],d=i[1],f=Object(u.useState)(null),g=Object(J.a)(f,2),s=g[0],v=g[1];Object(u.useEffect)(function(){var n=document.createElement("img");n.src=e,n.onload=v(n)},[]),Object(u.useEffect)(function(){a.current.getContext("2d").clearRect(0,0,l.width,l.height),d({width:t,height:r})},[t,r]),Object(u.useEffect)(function(){s&&requestAnimationFrame(m)},[l.with,l.height,s]);var m=function(){var n=a.current,e=n.getContext("2d"),t=n.getBoundingClientRect(),r=t.width,o=t.height,u=function(n,e,t,r,a,o){var u,c,i,l,d,f,g,s;return o=o||.5,(g=(c=t)-(u=n))<(s=(d=r)-(l=e))?(f=d,i=u+u*(100*s/l)/100):(i=c,f=l+l*(100*g/u)/100),{width:i,height:f,offsetLeft:v((c-i)*(a=a||.5)),offsetTop:v((d-f)*o)};function v(n){return(+(n>=0)||-1)*Math.round(Math.abs(n))}}(s.width,s.height,r,o,.5,.5),c=u.offsetLeft,i=u.offsetTop,l=u.width,d=u.height;e.drawImage(s,c,i,l,d)};return c.a.createElement("canvas",{ref:a,width:l.width,height:l.height})};function Tn(){var n=Object(d.a)(["\n  z-index: 2;\n"]);return Tn=function(){return n},n}function Gn(){var n=Object(d.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 0;\n"]);return Gn=function(){return n},n}function Dn(){var n=Object(d.a)(["\n  position: relative;\n  display: flex;\n  flex: 1;\n  margin-top: 20px;\n  align-items: center;\n  justify-content: center;\n  background-size: cover;\n\n  // Syntax highlighter overrides\n  pre {\n    background-color: transparent !important;\n    padding: 0 !important;\n    border: none !important;\n    box-shadow: none !important;\n    span {\n      text-shadow: none !important;\n    }\n  }\n"]);return Dn=function(){return n},n}function zn(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  z-index: 10;\n"]);return zn=function(){return n},n}function Nn(){var n=Object(d.a)(["\n  border: 1px solid hsl(0, 0%, 70%);\n  background: white;\n  padding: 10px;\n  height: 38px;\n  line-height: 20px;\n  vertical-align: middle;\n  border-radius: 4px;\n  font-size: 20px;\n  cursor: pointer;\n  margin-left: 10px;\n"]);return Nn=function(){return n},n}function Pn(){var n=Object(d.a)(["\n  flex: 1;\n"]);return Pn=function(){return n},n}function _n(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 6;\n  padding: 20px;\n  background-color: white;\n"]);return _n=function(){return n},n}var Fn=f.default.div(_n()),Mn=Object(f.default)(G)(Pn()),Jn=f.default.button(Nn()),Kn=f.default.div(zn()),Wn=f.default.div(Dn()),qn=f.default.div(Gn()),Yn=f.default.div(Tn()),$n=function(){var n=U(),e=n.state,t=n.select,r=Object(u.useState)(null),a=Object(J.a)(r,2),o=a[0],i=a[1],l=Object(u.useRef)(),d=function(n){var e=Object(u.useState)({}),t=Object(J.a)(e,2),r=t[0],a=t[1];return Object(u.useEffect)(function(){a(n.current.getBoundingClientRect());var e=Un()(function(){a(n.current.getBoundingClientRect())},300);return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[n]),r}(l),f=d.width,g=d.height;return Object(u.useEffect)(function(){var n;t.isBackgroundImage()?(n=+e.customBackground.substring(4),sn(n)).then(function(n){return i(n)}):i(null)},[e.background,e.customBackground]),c.a.createElement(Fn,null,c.a.createElement(Kn,null,c.a.createElement(Mn,null,"Preview"),c.a.createElement(un,null),c.a.createElement(Jn,{title:"capture",onClick:function(){return n=l.current,void W()(n,{ignoreElements:function(n){return n.classList.contains("bg-settings")},logging:!1}).then(function(e){var t=n.getBoundingClientRect(),r=t.width,a=t.height;Q.saveAsPNG(e,"code-".concat(+new Date,".png"),2*r,2*a)});var n}},c.a.createElement("span",{role:"img","aria-label":"Capture icon"},"\ud83d\udcf8"))),c.a.createElement(Wn,{ref:l,style:{background:t.isBackgroundImage()?"transparent":t.getBackgroundColor()}},c.a.createElement(Yn,{className:"bg-settings"},c.a.createElement(En,null)),c.a.createElement(Rn,null,c.a.createElement(Y.a,{language:e.language,style:$.tomorrow,wrapLines:!1},e.code)),o&&c.a.createElement(qn,null,c.a.createElement(An,{data:o,width:f,height:g}))))},Hn=function(){var n=U().state;return Object(u.useEffect)(function(){localStorage.setItem("appState",JSON.stringify(n))},[n]),null};function Qn(){var n=Object(d.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: row;\n"]);return Qn=function(){return n},n}function Vn(){var n=Object(d.a)(["\n  ",";\n  body {\n    font-family: 'Roboto', sans-serif;\n  }\n"]);return Vn=function(){return n},n}var Xn=Object(f.createGlobalStyle)(Vn(),s.a),Zn=f.default.div(Qn()),ne=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(Xn,null),c.a.createElement(A,null,c.a.createElement(Hn,null),c.a.createElement(Zn,null,c.a.createElement(M,null),c.a.createElement($n,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=t(171),te=t(172),re=t.n(te);Object(ee.registerLanguage)("jsx",re.a),l.a.render(c.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[178,2,1]]]);
//# sourceMappingURL=main.d69eb9b4.chunk.js.map