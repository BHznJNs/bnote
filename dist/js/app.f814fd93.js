(function(e){function t(t){for(var o,l,r=t[0],a=t[1],d=t[2],u=0,f=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&f.push(c[l][0]),c[l]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);s&&s(t);while(f.length)f.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var a=n[r];0!==c[a]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},c={app:0},i=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var s=a;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1378:function(e,t,n){},2319:function(e,t,n){},"2d96":function(e,t,n){},"2e40":function(e,t,n){},3237:function(e,t,n){},"38b9":function(e,t,n){},"3bc7":function(e,t,n){"use strict";n("4583")},4583:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function c(e,t,n,c,i,l){var r=Object(o["o"])("tool-bar"),a=Object(o["o"])("note"),d=Object(o["o"])("textfield-group-fixed");return Object(o["k"])(),Object(o["d"])(o["a"],null,[Object(o["h"])(r,{ref:"toolBar",onToParent:l.fromToolBar},null,8,["onToParent"]),Object(o["h"])(a,{isInputting:i.isTextfieldInputting},null,8,["isInputting"]),Object(o["h"])(d,{isInputting:i.isTextfieldInputting,onToParent:l.closeTextfieldGroup},null,8,["isInputting","onToParent"])],64)}var i=n("6e4d"),l=n.n(i),r=function(e){return Object(o["m"])("data-v-f36122c2"),e=e(),Object(o["l"])(),e},a={id:"toolbar",class:"mdui-shadow-3"},d=r((function(){return Object(o["e"])("img",{id:"logo",class:"mdui-shadow-2",src:l.a,draggable:"false"},null,-1)})),s={class:"tools"},u=r((function(){return Object(o["e"])("i",{class:"material-icons"},"add",-1)})),f=[u],p=r((function(){return Object(o["e"])("i",{class:"material-icons"},"remove",-1)})),b=[p],v=r((function(){return Object(o["e"])("i",{class:"material-icons"},"vertical_align_bottom",-1)})),j=[v],h=r((function(){return Object(o["e"])("i",{class:"material-icons file"},[Object(o["g"])("input "),Object(o["e"])("input",{id:"file-uploader",type:"file",accept:"application/json"})],-1)})),O=[h];function g(e,t,n,c,i,l){var r=this;return Object(o["k"])(),Object(o["d"])("div",a,[d,Object(o["e"])("div",s,[Object(o["e"])("div",{class:Object(o["j"])(["tool mdui-shadow-1",{disabled:!l.selectedEl.length}]),onClick:t[0]||(t[0]=function(e){return r.$emit("toParent","insert-node")})},f,2),Object(o["e"])("div",{class:Object(o["j"])(["tool mdui-shadow-1",{disabled:!l.selectedEl.length}]),onClick:t[1]||(t[1]=function(){return l.deleteNode&&l.deleteNode.apply(l,arguments)})},b,2),Object(o["e"])("div",{class:"tool mdui-shadow-1",onClick:t[2]||(t[2]=function(){return l.saveNote&&l.saveNote.apply(l,arguments)})},j),Object(o["e"])("div",{class:"tool mdui-shadow-1",onClick:t[3]||(t[3]=function(){return l.readNote&&l.readNote.apply(l,arguments)})},O)])])}n("a434"),n("e9c4");var m=n("21a6"),N=n.n(m),k={methods:{getNodeEl:function(e){var t=e.nodeEl,n=void 0===t?this.note:t,o=e.location,c=e.num,i=void 0===c?0:c,l=e.callback;if(i==o.length-1)l&&l(n.contents,o[i]);else{var r=i+1;this.getNodeEl({nodeEl:n.contents[o[i]][1],location:o,num:r,callback:l})}}}};const x=k;var y=x,T={inject:["note","selectedEl"],mixins:[y],mounted:function(){var e=this,t=document.querySelector("#file-uploader");t.addEventListener("change",(function(){var n=new FileReader;n.readAsText(t.files[0],"uft8"),n.onload=function(t){var n=t.target.result;e.note.contents=JSON.parse(n)}}))},methods:{insertNode:function(e){if(e[1]){var t=this.selectedEl[0];t&&this.getNodeEl({location:t,callback:function(n,o){"floor"==e[0]&&(e[1].level=t.length),n.splice(o+1,0,e)}})}},deleteNode:function(){var e=this.selectedEl.pop();this.getNodeEl({location:e,callback:function(e,t){e.splice(t,1)}})},saveNote:function(){var e=new Blob([JSON.stringify(this.note.contents)],{type:"text/plain;charset=utf-8"});N()(e,"myNote.json")},readNote:function(){var e=document.querySelector("#file-uploader");e.click()}}},E=(n("3bc7"),n("6b0d")),w=n.n(E);const A=w()(T,[["render",g],["__scopeId","data-v-f36122c2"]]);var I=A,P=function(e){return Object(o["m"])("data-v-343af674"),e=e(),Object(o["l"])(),e},_=P((function(){return Object(o["e"])("i",{class:"material-icons"},"add",-1)})),C=[_];function S(e,t,n,c,i,l){var r=Object(o["o"])("floor"),a=Object(o["o"])("note-node"),d=Object(o["o"])("textfield-group");return Object(o["k"])(),Object(o["d"])("div",{class:Object(o["j"])(["note-outer mdui-shadow-3",{"is-inputting":n.isInputting}])},[Object(o["e"])("div",{class:"note",onContextmenu:t[1]||(t[1]=Object(o["p"])((function(){}),["prevent"]))},[(Object(o["k"])(!0),Object(o["d"])(o["a"],null,Object(o["n"])(l.note.contents,(function(e,t){return Object(o["k"])(),Object(o["d"])(o["a"],{key:e.id},["floor"==e[0]?(Object(o["k"])(),Object(o["c"])(r,{key:0,children:e[1],location:[t]},null,8,["children","location"])):(Object(o["k"])(),Object(o["c"])(a,{key:1,tagName:"h"==e[0]?e[0]+(l.note.level+1):e[0],content:e[1],location:[t]},null,8,["tagName","content","location"]))],64)})),128)),Object(o["h"])(d,{isAdding:i.isNodeAdding,onToParent:l.closeNodeAdder},null,8,["isAdding","onToParent"]),Object(o["e"])("button",{class:Object(o["j"])(["adder-btn mdui-btn mdui-btn-raised",{disabled:i.isNodeAdding}]),onClick:t[0]||(t[0]=function(){return l.openNodeAdder&&l.openNodeAdder.apply(l,arguments)})},C,2)],32)],2)}n("caad"),n("2532"),n("fb6a"),n("ac1f"),n("1276");var B={data:function(){return{initialContent:this.content,editing:!1}},inject:["note","selectedEl"],props:["tagName","content","location"],mixins:[y],computed:{selected:function(){return this.content.includes("*")}},render:function(){var e=this;return Object(o["i"])(this.tagName,{contentEditable:!0,class:{selected:this.selected,editing:this.editing},onContextmenu:function(t){t.preventDefault(),e.getNodeEl({location:e.location,callback:function(t,n){e.selected?(e.selectedEl.pop(),t[n][1]=t[n][1].slice(0,-1)):(e.selectedEl.length&&e.getNodeEl({location:e.selectedEl.pop(),callback:function(e,t){e[t][1]=e[t][1].split("*")[0]}}),e.selectedEl.push(e.location),t[n][1]+="*")}})},onClick:function(t){e.initialContent=t.target.innerText,e.editing=!0},onBlur:function(t){var n=t.target.innerText;n!=e.initialContent&&e.getNodeEl({callback:function(e){e[1]=n}}),e.editing=!1}},this.content.split("*")[0])}};const G=B;var J=G,M=(n("99af"),function(e){return Object(o["m"])("data-v-00f9fb8c"),e=e(),Object(o["l"])(),e}),$={class:"floor mdui-shadow-2"},q=M((function(){return Object(o["e"])("div",{class:"mask"},null,-1)}));function F(e,t,n,c,i,l){var r=Object(o["o"])("floor",!0),a=Object(o["o"])("note-node");return Object(o["k"])(),Object(o["d"])("div",$,[q,(Object(o["k"])(!0),Object(o["d"])(o["a"],null,Object(o["n"])(n.children.contents,(function(e,t){return Object(o["k"])(),Object(o["d"])(o["a"],{key:e.id},["floor"==e[0]?(Object(o["k"])(),Object(o["c"])(r,{key:0,children:e[1],location:n.location.concat([t])},null,8,["children","location"])):(Object(o["k"])(),Object(o["c"])(a,{key:1,tagName:"h"==e[0]?e[0]+(n.children.level+1):e[0],content:e[1],location:n.location.concat([t])},null,8,["tagName","content","location"]))],64)})),128))])}var D={name:"floor",components:{NoteNode:J},props:["children","location"],inject:["note"]};n("b235");const L=w()(D,[["render",F],["__scopeId","data-v-00f9fb8c"]]);var K=L,R=Object(o["f"])('<select class="selector"><option value="h">标题</option><option value="p">段落</option><option value="floor">层次</option></select><div class="textfield" contenteditable="true"></div>',2),z=Object(o["e"])("i",{class:"material-icons"},"close",-1),H=[z];function Q(e,t,n,c,i,l){return Object(o["k"])(),Object(o["d"])("div",{class:Object(o["j"])(["textfield-group",{disabled:!n.isAdding}]),tabindex:"999"},[R,Object(o["e"])("button",{class:"textfield-closer",onClick:t[0]||(t[0]=function(e){return l.closeNodeAdder(e)})},H)],2)}var U={methods:{closeNodeAdder:function(e){var t=e.target,n=t.parentNode.children[0],o=t.parentNode.children[1],c=n.value,i=o.innerText;"floor"==c&&(i={level:null,contents:[]}),this.$emit("toParent",[c,i]),o.blur(),o.innerText=""}},props:["isAdding"]};const V=w()(U,[["render",Q]]);var W=V,X={components:{NoteNode:J,Floor:K,TextfieldGroup:W},data:function(){return{isNodeAdding:!1}},props:["isInputting"],inject:["note"],created:function(){var e=this;addEventListener("keydown",(function(t){var n=t.altKey,o=t.key;n&&"a"==o&&(t.preventDefault(),e.openNodeAdder())}))},methods:{openNodeAdder:function(){var e=document.querySelector(".note > .textfield-group > .textfield");this.isNodeAdding=!0,e.focus()},closeNodeAdder:function(e){e[1]&&("floor"==e[0]&&(e[1].level=1),this.note.contents.push(e)),this.isNodeAdding=!1}}};n("9ed6");const Y=w()(X,[["render",S],["__scopeId","data-v-343af674"]]);var Z=Y,ee=Object(o["f"])('<select class="selector"><option value="h">标题</option><option value="p">段落</option><option value="floor">层次</option></select><div class="textfield" contenteditable="true"></div>',2),te=Object(o["e"])("i",{class:"material-icons"},"close",-1),ne=[te];function oe(e,t,n,c,i,l){return Object(o["k"])(),Object(o["d"])("div",{class:Object(o["j"])(["textfield-group fixed mdui-shadow-3",{disabled:!n.isInputting}]),tabindex:"999"},[ee,Object(o["e"])("button",{class:"textfield-closer",onClick:t[0]||(t[0]=function(e){return l.closeNodeAdder(e)})},ne)],2)}var ce={methods:{closeNodeAdder:function(e){var t=e.target,n=t.parentNode.children[0],o=t.parentNode.children[1],c=n.value,i=o.innerText;"floor"==c&&(i={level:null,contents:[]}),this.$emit("toParent",[c,i]),o.blur(),o.innerText=""}},props:["isInputting"]};const ie=w()(ce,[["render",oe]]);var le=ie,re={level:0,contents:[["h","这是一个大标题"],["p","这是一个段落"],["floor",{level:1,contents:[["h","这是层次中的大标题"],["p","这是一个段落"],["floor",{level:2,contents:[["h","这是层次中的大标题"],["p","这是一个段落"]]}]]}]]},ae={name:"App",components:{Note:Z,ToolBar:I,TextfieldGroupFixed:le},data:function(){return{note:re,command:"",selectedEl:[],isTextfieldInputting:!1}},provide:function(){return{note:this.note,selectedEl:this.selectedEl}},methods:{fromToolBar:function(e){this.command=e,this.isTextfieldInputting=!0},closeTextfieldGroup:function(e){switch(this.command){case"insert-node":this.isTextfieldInputting=!1,this.$refs.toolBar.insertNode(e);break}}}};n("9230");const de=w()(ae,[["render",c]]);var se=de;n("1378"),n("2d96"),n("38b9"),n("86be"),n("2e40");Object(o["b"])(se).mount("#app")},"6e4d":function(e,t,n){e.exports=n.p+"img/note.d54d2722.svg"},"86be":function(e,t,n){},9230:function(e,t,n){"use strict";n("2319")},"9ed6":function(e,t,n){"use strict";n("3237")},b235:function(e,t,n){"use strict";n("ba0a")},ba0a:function(e,t,n){}});
//# sourceMappingURL=app.f814fd93.js.map