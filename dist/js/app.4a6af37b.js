(function(e){function t(t){for(var n,i,s=t[0],r=t[1],a=t[2],u=0,b=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);d&&d(t);while(b.length)b.shift()();return l.push.apply(l,a||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],n=!0,s=1;s<o.length;s++){var r=o[s];0!==c[r]&&(n=!1)}n&&(l.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},c={app:0},l=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var d=r;l.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0802":function(e,t,o){"use strict";o("8c8d")},"1c5e":function(e,t,o){},"207c":function(e,t,o){},"36a3":function(e,t,o){},"38b9":function(e,t,o){},"48d1":function(e,t,o){"use strict";o("ad98")},5143:function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23");function c(e,t,o,c,l,i){var s=Object(n["p"])("tool-bar"),r=Object(n["p"])("control-balls"),a=Object(n["p"])("note"),d=Object(n["p"])("textfield-group-fixed"),u=Object(n["p"])("colors"),b=Object(n["p"])("table-setter");return Object(n["l"])(),Object(n["d"])(n["a"],null,[Object(n["e"])("div",{class:Object(n["j"])(["dark-filter",{darken:l.isDarkMode}])},null,2),Object(n["h"])(s,{isTouchMode:l.isTouchMode},null,8,["isTouchMode"]),Object(n["h"])(r,{isDarkMode:l.isDarkMode,isTouchMode:l.isTouchMode,isFullscreen:l.isFullscreen,onToggleDarkMode:i.toggleDarkMode,onToggleTouchMode:i.toggleTouchMode,onToggleFullscreen:i.toggleFullscreen},null,8,["isDarkMode","isTouchMode","isFullscreen","onToggleDarkMode","onToggleTouchMode","onToggleFullscreen"]),Object(n["h"])(a,{isFullscreen:l.isFullscreen,isTouchMode:l.isTouchMode},null,8,["isFullscreen","isTouchMode"]),Object(n["h"])(d),Object(n["h"])(u),Object(n["h"])(b)],64)}o("caad");var l=function(e){return Object(n["n"])("data-v-9e1a4476"),e=e(),Object(n["m"])(),e},i={class:"toolbar shadow-3"},s=l((function(){return Object(n["e"])("i",{class:"logo material-icons shadow-2"},"format_list_bulleted",-1)})),r={class:"tools"},a=l((function(){return Object(n["e"])("i",{class:"material-icons"},"add",-1)})),d=[a],u=l((function(){return Object(n["e"])("i",{class:"material-icons"},"remove",-1)})),b=[u],h=l((function(){return Object(n["e"])("i",{class:"material-icons"},"add_box",-1)})),f=[h],j=l((function(){return Object(n["e"])("i",{class:"material-icons"},"indeterminate_check_box",-1)})),O=[j],p=l((function(){return Object(n["e"])("i",{class:"material-icons"},"grid_on",-1)})),v=[p],m=l((function(){return Object(n["e"])("i",{class:"material-icons"},"color_lens",-1)})),T=[m],g=l((function(){return Object(n["e"])("i",{class:"material-icons"},"clear_all",-1)})),N=[g],k=l((function(){return Object(n["e"])("i",{class:"material-icons"},"vertical_align_bottom",-1)})),M=[k],C=l((function(){return Object(n["e"])("i",{class:"material-icons file"},[Object(n["g"])("input "),Object(n["e"])("input",{id:"file-uploader",type:"file",accept:"application/json"})],-1)})),y=[C];function S(e,t,o,c,l,a){return Object(n["l"])(),Object(n["d"])("div",i,[s,Object(n["e"])("div",r,[Object(n["e"])("div",{class:Object(n["j"])(["tool btn btn-shallow",{disabled:!a.selectedNode.location||"td"==a.selectedNode.tagName}]),onClick:t[0]||(t[0]=function(){return a.openTextfield&&a.openTextfield.apply(a,arguments)})},d,2),Object(n["e"])("div",{class:Object(n["j"])(["tool btn btn-shallow",{disabled:!a.selectedNode.location||"td"==a.selectedNode.tagName}]),onClick:t[1]||(t[1]=function(){return a.deleteNode&&a.deleteNode.apply(a,arguments)})},b,2),Object(n["u"])(Object(n["e"])("div",{class:Object(n["j"])(["tool btn btn-shallow",{disabled:!["floor","list","table"].includes(a.selectedNode.type)}]),onClick:t[2]||(t[2]=function(){return a.blockNodeInsert&&a.blockNodeInsert.apply(a,arguments)})},f,2),[[n["s"],o.isTouchMode]]),Object(n["u"])(Object(n["e"])("div",{class:Object(n["j"])(["tool btn btn-shallow",{disabled:!a.selectedNode.location}]),onClick:t[3]||(t[3]=function(){return a.nodeCancelSelect&&a.nodeCancelSelect.apply(a,arguments)})},O,2),[[n["s"],o.isTouchMode]]),Object(n["e"])("div",{class:Object(n["j"])(["tool btn btn-shallow",{disabled:"table"!=a.selectedNode.type}]),onClick:t[4]||(t[4]=function(){return a.tableSetOpen&&a.tableSetOpen.apply(a,arguments)})},v,2),Object(n["e"])("div",{class:Object(n["j"])(["tool btn btn-shallow",{disabled:!["basic-node","list-item"].includes(a.selectedNode.type)}]),onClick:t[5]||(t[5]=function(){return a.colorsOpen&&a.colorsOpen.apply(a,arguments)})},T,2),Object(n["e"])("div",{class:"tool btn btn-shallow",onClick:t[6]||(t[6]=function(){return a.clearNodes&&a.clearNodes.apply(a,arguments)})},N),Object(n["e"])("div",{class:"tool btn btn-shallow",onClick:t[7]||(t[7]=function(){return a.saveNote&&a.saveNote.apply(a,arguments)})},M),Object(n["e"])("div",{class:"tool btn btn-shallow",onClick:t[8]||(t[8]=function(){return a.readNote&&a.readNote.apply(a,arguments)})},y)])])}o("a434"),o("e9c4");var x={inject:["note"],computed:{getThisObj:function(){var e;if(this.location)return this.getNodeObj({location:this.location,callback:function(t,o){e=t[o]}}),e}},methods:{getNodeObj:function(e){var t=e.parentObj,o=void 0===t?this.note:t,n=e.location,c=e.num,l=void 0===c?0:c,i=e.callback;l==n.length-1?i&&i(o.CTS,n[l]):this.getNodeObj({parentObj:o.CTS[n[l]],location:n,num:l+1,callback:i})}}};const L=x;var w=L,F=o("1344"),_=new F["a"],D=o("21a6"),E=o.n(D),A={props:["isTouchMode"],inject:["note","selectedNode"],mixins:[w],mounted:function(){var e=this,t=document.querySelector("#file-uploader");t.addEventListener("change",(function(){var o=new FileReader;o.readAsText(t.files[0],"uft8"),o.onload=function(t){var o=t.target.result;e.note.CTS=JSON.parse(o)}})),_.on("textfield-return-toolBar",(function(t){e.insertNode(t)}))},methods:{openTextfield:function(){_.emit("note-offset"),_.emit("textfield-open","toolBar")},insertNode:function(e){var t=this.selectedNode.location;t&&this.getNodeObj({location:t,callback:function(t,o){t.splice(o+1,0,e)}})},deleteNode:function(){var e=this.selectedNode.location;this.selectedNode.location=null,this.selectedNode.type=null,this.selectedNode.tagName=null,this.getNodeObj({location:e,callback:function(e,t){e.splice(t,1)}})},blockNodeInsert:function(){_.emit("add-node")},nodeCancelSelect:function(){this.getNodeObj({location:this.selectedNode.location,callback:function(e,t){e[t].SL=!1}}),_.emit("remove-add-node"),this.selectedNode.tagName=null,this.selectedNode.location=null,this.selectedNode.type=null},tableSetOpen:function(){this.tableSetter=!0,_.emit("note-offset"),_.emit("tableSetter-open"),_.emit("colors-close"),_.emit("textfield-close")},colorsOpen:function(){_.emit("colors-open"),_.emit("note-offset")},clearNodes:function(){this.note.CTS=[]},openUploader:function(){},saveNote:function(){var e=new Blob([JSON.stringify(this.note.CTS)],{type:"text/plain;charset=utf-8"});E()(e,"myNote.json")},readNote:function(){var e=document.querySelector("#file-uploader");e.click()}}},I=(o("a35a"),o("6b0d")),$=o.n(I);const B=$()(A,[["render",S],["__scopeId","data-v-9e1a4476"]]);var P=B,V=function(e){return Object(n["n"])("data-v-0e23fad7"),e=e(),Object(n["m"])(),e},J=V((function(){return Object(n["e"])("div",{class:"block"},[Object(n["e"])("div",{class:"mask"}),Object(n["e"])("i",{class:"material-icons"},"apps")],-1)})),R={class:"material-icons"},U={class:"material-icons"},q=V((function(){return Object(n["e"])("i",{class:"material-icons"},"touch_app",-1)})),G=[q],H={class:"material-icons"},K={class:"material-icons"};function z(e,t,o,c,l,i){return Object(n["l"])(),Object(n["d"])("div",{class:Object(n["j"])(["controlballs",{fullscreen:o.isFullscreen}])},[J,Object(n["e"])("div",{class:"ball btn",onClick:t[0]||(t[0]=function(){return i.toggleDarkMode&&i.toggleDarkMode.apply(i,arguments)})},[Object(n["u"])(Object(n["e"])("i",R,"brightness_2",512),[[n["s"],!o.isDarkMode]]),Object(n["u"])(Object(n["e"])("i",U,"wb_sunny",512),[[n["s"],o.isDarkMode]])]),Object(n["e"])("div",{class:Object(n["j"])(["ball btn",{back:o.isTouchMode}]),onClick:t[1]||(t[1]=function(){return i.toggleTouchMode&&i.toggleTouchMode.apply(i,arguments)})},G,2),Object(n["e"])("div",{class:"ball btn",onClick:t[2]||(t[2]=function(){return i.toggleFullscreen&&i.toggleFullscreen.apply(i,arguments)})},[Object(n["u"])(Object(n["e"])("i",H,"fullscreen",512),[[n["s"],!o.isFullscreen]]),Object(n["u"])(Object(n["e"])("i",K,"fullscreen_exit",512),[[n["s"],o.isFullscreen]])])],2)}var Q={props:["isDarkMode","isTouchMode","isFullscreen"],methods:{toggleDarkMode:function(){this.$emit("toggleDarkMode")},toggleTouchMode:function(){this.$emit("toggleTouchMode")},toggleFullscreen:function(){this.$emit("toggleFullscreen")}}};o("fb1a");const W=$()(Q,[["render",z],["__scopeId","data-v-0e23fad7"]]);var X=W,Y=function(e){return Object(n["n"])("data-v-20c25819"),e=e(),Object(n["m"])(),e},Z=Y((function(){return Object(n["e"])("div",{class:"mask-outer"},[Object(n["e"])("div",{class:"mask"})],-1)})),ee=Y((function(){return Object(n["e"])("i",{class:"material-icons"},"add",-1)})),te=[ee];function oe(e,t,o,c,l,i){var s=Object(n["p"])("floor-block"),r=Object(n["p"])("node-renderer"),a=Object(n["p"])("textfield-group");return Object(n["l"])(),Object(n["d"])("div",{class:Object(n["j"])(["note-outer shadow-3",{offset:l.offset,fullscreen:o.isFullscreen}])},[Z,Object(n["e"])("div",{class:"note",ref:"note",onContextmenu:t[1]||(t[1]=Object(n["v"])((function(){}),["prevent"]))},[(Object(n["l"])(!0),Object(n["d"])(n["a"],null,Object(n["o"])(i.note.CTS,(function(e,t){return Object(n["l"])(),Object(n["d"])(n["a"],{key:e.id},["floor"==e.NT?(Object(n["l"])(),Object(n["c"])(s,{key:0,isTouchMode:o.isTouchMode,selected:e.SL,children:e.CTS,level:2,location:[t]},null,8,["isTouchMode","selected","children","location"])):(Object(n["l"])(),Object(n["c"])(r,{key:1,isTouchMode:o.isTouchMode,nodeObj:e,index:t,level:1,location:[]},null,8,["isTouchMode","nodeObj","index"]))],64)})),128)),Object(n["h"])(a,{ref:"textfield",isAdding:l.isNodeAdding,onToParent:i.closeNodeAdder},null,8,["isAdding","onToParent"]),Object(n["e"])("div",{class:Object(n["j"])(["btn btn-normal adder-btn",{disabled:l.isNodeAdding}]),onClick:t[0]||(t[0]=function(){return i.openNodeAdder&&i.openNodeAdder.apply(i,arguments)})},te,2)],544)],2)}o("99af");var ne=Object(n["e"])("div",{class:"mask"},null,-1);function ce(e,t,o,c,l,i){var s=Object(n["p"])("floor-block",!0),r=Object(n["p"])("node-renderer"),a=Object(n["p"])("block-controls");return Object(n["l"])(),Object(n["d"])("div",{class:Object(n["j"])(["floor shadow-2",{"shadow-6":o.selected,"touch-mode":o.isTouchMode}]),onMouseenter:t[0]||(t[0]=function(){return e.onMouseEnter&&e.onMouseEnter.apply(e,arguments)}),onMouseleave:t[1]||(t[1]=function(){return e.onMouseLeave&&e.onMouseLeave.apply(e,arguments)})},[ne,(Object(n["l"])(!0),Object(n["d"])(n["a"],null,Object(n["o"])(o.children,(function(t,c){return Object(n["l"])(),Object(n["d"])(n["a"],{key:t.id},["floor"==t.NT?(Object(n["l"])(),Object(n["c"])(s,{key:0,isTouchMode:o.isTouchMode,children:t.CTS,selected:t.SL,level:o.level+1,location:o.location.concat([c]),onMouseInChild:e.onMouseLeave},null,8,["isTouchMode","children","selected","level","location","onMouseInChild"])):(Object(n["l"])(),Object(n["c"])(r,{key:1,isTouchMode:o.isTouchMode,nodeObj:t,index:c,level:o.level,location:o.location},null,8,["isTouchMode","nodeObj","index","level","location"]))],64)})),128)),Object(n["h"])(a,{disabled:!e.hover,isTouchMode:o.isTouchMode,selected:o.selected,location:o.location,parentType:"floor"},null,8,["disabled","isTouchMode","selected","location"])],34)}function le(e,t,o,c,l,i){var s=Object(n["p"])("heading"),r=Object(n["p"])("list-block"),a=Object(n["p"])("table-block"),d=Object(n["p"])("basic-node");return"h"==o.nodeObj.NT?(Object(n["l"])(),Object(n["c"])(s,{key:0,level:o.level,content:o.nodeObj.CT,color:o.nodeObj.CL,selected:o.nodeObj.SL,location:o.location.concat([o.index])},null,8,["level","content","color","selected","location"])):"list"==o.nodeObj.NT?(Object(n["l"])(),Object(n["c"])(r,{key:1,isTouchMode:o.isTouchMode,isOrdered:o.nodeObj.OL,selected:o.nodeObj.SL,children:o.nodeObj.CTS,location:o.location.concat([o.index])},null,8,["isTouchMode","isOrdered","selected","children","location"])):"table"==o.nodeObj.NT?(Object(n["l"])(),Object(n["c"])(a,{key:2,isTouchMode:o.isTouchMode,selected:o.nodeObj.SL,children:o.nodeObj.CTS,location:o.location.concat([o.index])},null,8,["isTouchMode","selected","children","location"])):(Object(n["l"])(),Object(n["c"])(d,{key:3,tagName:o.nodeObj.NT,content:o.nodeObj.CT,color:o.nodeObj.CL,selected:o.nodeObj.SL,location:o.location.concat([o.index])},null,8,["tagName","content","color","selected","location"]))}var ie={data:function(){return{initialContent:this.content,editing:!1,dbClick:!1}},inject:["selectedNode"],props:["tagName","content","location","selected","color"],mixins:[w],computed:{fontColor:function(){return this.color?this.color:"#333"}},methods:{selectEvent:function(){this.selected?(_.emit("textfield-close"),_.emit("colors-close"),this.selectedNode.location=null,this.selectedNode.type=null,this.selectedNode.tagName=null,this.getThisObj.SL=!1):(this.selectedNode.location&&this.getNodeObj({location:this.selectedNode.location,callback:function(e,t){e[t].SL=!1}}),this.selectedNode.location=this.location,this.selectedNode.type="basic-node",this.selectedNode.tagName=this.tagName,this.getThisObj.SL=!0)}},render:function(){var e=this;return Object(n["i"])(this.tagName,{contentEditable:"hr"!=this.tagName,class:{selected:this.selected,editing:this.editing},style:{color:this.fontColor},onContextmenu:function(t){t.preventDefault(),e.selectEvent()},onClick:function(t){e.dbClick&&e.selectEvent(),e.dbClick=!0,setTimeout((function(){e.dbClick=!1}),300),e.initialContent=t.target.innerText,e.editing=!0},onBlur:function(t){var o=t.target.innerText;o!=e.initialContent&&(e.getThisObj.CT=o),e.editing=!1}},this.content)}};const se=ie;var re=se,ae={props:["level","content","location","selected","color"],components:[re],render:function(){var e;return e=this.level<6?"h"+this.level:"h5",Object(n["i"])(re,{tagName:e,content:this.content,color:this.color,selected:this.selected,location:this.location})}};const de=ae;var ue=de,be=Object(n["e"])("div",{class:"mask"},null,-1);function he(e,t,o,c,l,i){var s=Object(n["p"])("list-block",!0),r=Object(n["p"])("basic-node"),a=Object(n["p"])("list-child"),d=Object(n["p"])("block-controls");return Object(n["l"])(),Object(n["d"])("div",{class:Object(n["j"])(["list",{"shadow-6":o.selected,hover:e.hover||!o.selected,empty:!o.children.length,"touch-mode":o.isTouchMode}]),onMouseenter:t[0]||(t[0]=function(){return e.onMouseEnter&&e.onMouseEnter.apply(e,arguments)}),onMouseleave:t[1]||(t[1]=function(){return e.onMouseLeave&&e.onMouseLeave.apply(e,arguments)})},[be,Object(n["h"])(a,{ordered:o.isOrdered},{default:Object(n["t"])((function(){return[(Object(n["l"])(!0),Object(n["d"])(n["a"],null,Object(n["o"])(o.children,(function(t,c){return Object(n["l"])(),Object(n["d"])(n["a"],{key:t.id},["list"==t.NT?(Object(n["l"])(),Object(n["c"])(s,{key:0,isTouchMode:o.isTouchMode,isOrdered:t.OL,selected:t.SL,children:t.CTS,location:o.location.concat([c]),onMouseInChild:e.onMouseLeave},null,8,["isTouchMode","isOrdered","selected","children","location","onMouseInChild"])):(Object(n["l"])(),Object(n["c"])(r,{key:1,tagName:"h"==t.NT?"h4":t.NT,content:t.CT,color:t.CL,selected:t.SL,location:o.location.concat([c])},null,8,["tagName","content","color","selected","location"]))],64)})),128))]})),_:1},8,["ordered"]),Object(n["h"])(d,{disabled:!e.hover,isTouchMode:o.isTouchMode,selected:o.selected,location:o.location,parentType:"list"},null,8,["disabled","isTouchMode","selected","location"])],34)}var fe=function(e){return Object(n["n"])("data-v-15127978"),e=e(),Object(n["m"])(),e},je=fe((function(){return Object(n["e"])("i",{class:"material-icons"},"add",-1)})),Oe=[je],pe={class:"checkbox"},ve=["checked"],me=fe((function(){return Object(n["e"])("i",{class:"checkbox-icon"},null,-1)}));function Te(e,t,o,c,l,i){return Object(n["l"])(),Object(n["d"])("div",{class:Object(n["j"])(["controls",{disabled:o.disabled&&!o.isTouchMode,"touch-mode":o.isTouchMode}])},[Object(n["e"])("div",{class:"btn btn-normal adder-btn",onClick:t[0]||(t[0]=function(){return i.addNode&&i.addNode.apply(i,arguments)})},Oe),Object(n["e"])("label",pe,[Object(n["e"])("input",{type:"checkbox",ref:"checkbox",checked:o.selected,onChange:t[1]||(t[1]=function(){return i.selectEvent&&i.selectEvent.apply(i,arguments)})},null,40,ve),me])],2)}var ge={props:["isTouchMode","disabled","selected","location","parentType"],inject:["selectedNode"],mixins:[w],methods:{selectEvent:function(){var e=this,t=this.$refs.checkbox.checked;this.getThisObj.SL=t,t?(_.on("add-node",(function(){var t=JSON.stringify(e.selectedNode.location),o=JSON.stringify(e.location);t==o&&e.addNode()})),_.on("remove-add-node",(function(){_.off("add-node"),_.off("remove-add-node")})),this.selectedNode.location&&this.getNodeObj({location:this.selectedNode.location,callback:function(e,t){e[t].SL=!1,_.emit()}}),this.selectedNode.location=this.location,this.selectedNode.type=this.parentType):(_.emit("remove-add-node"),this.selectedNode.location=null,this.selectedNode.type=null)},addNode:function(){var e=this;if("table"==this.parentType){for(var t=this.getThisObj.CTS[0].length,o=[],n=0;n<t;n++)o.push("");this.getThisObj.CTS.push(o)}else _.emit("note-offset"),_.emit("textfield-open",this.parentType),_.on("textfield-return-"+this.parentType,(function(t){t&&e.getThisObj.CTS.push(t),_.off("textfield-return-"+e.parentType)}))}}};o("7891");const Ne=$()(ge,[["render",Te],["__scopeId","data-v-15127978"]]);var ke=Ne,Me={data:function(){return{hover:!1,setTimeout:null}},methods:{onMouseEnter:function(){var e=this;this.setTimeout=setTimeout((function(){e.hover=!0}),400),this.location.length>1&&this.$emit("mouse-in-child")},onMouseLeave:function(){clearTimeout(this.setTimeout),this.selected||(this.hover=!1)}}};const Ce=Me;var ye=Ce,Se={name:"list-block",components:{BasicNode:re,BlockControls:ke,listChild:{props:["ordered"],render:function(){return Object(n["i"])(this.ordered?"ol":"ul",this.$slots.default())}}},props:["isTouchMode","children","isOrdered","location","selected"],mixins:[ye]};const xe=$()(Se,[["render",he]]);var Le=xe,we=Object(n["e"])("div",{class:"mask"},null,-1);function Fe(e,t,o,c,l,i){var s=Object(n["p"])("table-row"),r=Object(n["p"])("block-controls");return Object(n["l"])(),Object(n["d"])("div",{class:Object(n["j"])(["table shadow-2",{"shadow-6":o.selected,"touch-mode":o.isTouchMode,hover:e.hover&&!o.isTouchMode}]),onMouseenter:t[0]||(t[0]=function(){return e.onMouseEnter&&e.onMouseEnter.apply(e,arguments)}),onMouseleave:t[1]||(t[1]=function(){return e.onMouseLeave&&e.onMouseLeave.apply(e,arguments)})},[we,Object(n["e"])("table",null,[Object(n["e"])("tbody",null,[(Object(n["l"])(!0),Object(n["d"])(n["a"],null,Object(n["o"])(o.children,(function(e,t){return Object(n["l"])(),Object(n["c"])(s,{key:e.id,children:e,location:o.location.concat(t)},null,8,["children","location"])})),128))])]),Object(n["h"])(r,{isTouchMode:o.isTouchMode,disabled:!e.hover,selected:o.selected,location:o.location,parentType:"table"},null,8,["isTouchMode","disabled","selected","location"])],34)}var _e=["onBlur"];function De(e,t,o,c,l,i){return Object(n["l"])(),Object(n["d"])("tr",null,[(Object(n["l"])(!0),Object(n["d"])(n["a"],null,Object(n["o"])(o.children,(function(e,o){return Object(n["l"])(),Object(n["d"])("td",{key:e.id,onClick:t[0]||(t[0]=function(e){return i.edit(e)}),onBlur:function(e){return i.finishEdit(e,o)},contenteditable:"true"},Object(n["q"])(e),41,_e)})),128))])}var Ee={mixins:[w],props:["children","location"],methods:{edit:function(e){var t=e.target;t.classList.add("editing")},finishEdit:function(e,t){var o=e.target;o.classList.remove("editing");var n=o.innerText;this.getThisObj[t]=n}}};const Ae=$()(Ee,[["render",De]]);var Ie=Ae,$e={props:["isTouchMode","selected","children","location"],mixins:[ye],components:{TableRow:Ie,BlockControls:ke}};const Be=$()($e,[["render",Fe]]);var Pe=Be,Ve={components:{Heading:ue,BasicNode:re,ListBlock:Le,TableBlock:Pe},props:["isTouchMode","nodeObj","index","location","level"]};const Je=$()(Ve,[["render",le]]);var Re=Je,Ue={name:"floor-block",components:{BlockControls:ke,NodeRenderer:Re},props:["isTouchMode","level","location","children","selected"],mixins:[ye]};const qe=$()(Ue,[["render",ce]]);var Ge=qe,He={class:"selector",ref:"selector"},Ke=Object(n["f"])('<option value="h">标题</option><option value="p">段落</option><option value="hr">割线</option><option value="floor">层次</option><option value="ol">序列</option><option value="ul">乱列</option><option value="table">表格</option>',7),ze=[Ke],Qe={class:"textfield",contenteditable:"true",ref:"inputter"},We=Object(n["e"])("i",{class:"material-icons"},"close",-1),Xe=[We];function Ye(e,t,o,c,l,i){return Object(n["l"])(),Object(n["d"])("div",{class:Object(n["j"])(["textfield-group shadow-2",{disabled:!o.isAdding}])},[Object(n["e"])("select",He,ze,512),Object(n["e"])("div",Qe,null,512),Object(n["e"])("div",{class:"textfield-closer closer",onClick:t[0]||(t[0]=function(e){return i.closeNodeAdder()})},Xe)],2)}var Ze={methods:{returnObj:function(e,t){if("/"==t)return null;var o={NT:e,SL:!1};switch(e){case"h":case"p":case"li":o.CT=t,o.CL=null;break;case"hr":break;case"floor":o.CTS=[],t&&o.CTS.push({NT:"h",CT:t,CL:null,SL:!1});break;case"ol":o.NT="list",o.CTS=[],o.OL=!0;break;case"ul":o.NT="list",o.CTS=[],o.OL=!1;break;case"table":o.CTS=[["","","",""],["","","",""]];break}return o}}};const et=Ze;var tt=et,ot={props:["isAdding"],mixins:[tt],methods:{focus:function(){var e=this.$refs.inputter;e.focus()},closeNodeAdder:function(){var e=this.$refs.selector,t=this.$refs.inputter,o=e.value,n=t.innerText,c=this.returnObj(o,n);this.$emit("toParent",c),t.blur(),t.innerText=""}}};const nt=$()(ot,[["render",Ye]]);var ct=nt,lt={components:{FloorBlock:Ge,NodeRenderer:Re,TextfieldGroup:ct},data:function(){return{isNodeAdding:!1,offset:!1}},props:["isFullscreen","isTouchMode"],inject:["note"],created:function(){var e=this;addEventListener("keydown",(function(t){var o=t.altKey,n=t.key;o&&"a"==n&&(t.preventDefault(),e.openNodeAdder())}))},mounted:function(){var e=this;_.on("note-offset",(function(){e.offset=!0})),_.on("note-offset-cancel",(function(){e.offset=!1}))},methods:{openNodeAdder:function(){this.isNodeAdding=!0,this.$refs.textfield.focus()},closeNodeAdder:function(e){this.isNodeAdding=!1,console.log(e),e&&this.note.CTS.push(e)}},watch:{isFullscreen:function(e,t){var o=this;e!=t&&(this.$refs.note.style.display="none",setTimeout((function(){o.$refs.note.style.display="block"}),1200))}}};o("b1f1");const it=$()(lt,[["render",oe],["__scopeId","data-v-20c25819"]]);var st=it,rt={class:"selector",ref:"selector"},at=Object(n["e"])("option",{value:"h"},"标题",-1),dt={value:"p"},ut=Object(n["e"])("option",{value:"hr"},"割线",-1),bt={value:"floor"},ht=Object(n["e"])("option",{value:"ol"},"序列",-1),ft=Object(n["e"])("option",{value:"ul"},"乱列",-1),jt={value:"li"},Ot={value:"table"},pt={class:"textfield",contenteditable:"true",ref:"inputter"},vt=Object(n["e"])("i",{class:"material-icons"},"close",-1),mt=[vt];function Tt(e,t,o,c,l,i){return Object(n["l"])(),Object(n["d"])("div",{class:Object(n["j"])(["textfield-group fixed-component fixed",{disabled:!l.isInputting}])},[Object(n["e"])("select",rt,[at,Object(n["u"])(Object(n["e"])("option",dt,"段落",512),[[n["s"],"list"!=l.commandFrom&&"li"!=i.selectedNode.tagName]]),ut,Object(n["u"])(Object(n["e"])("option",bt,"层次",512),[[n["s"],"list"!=l.commandFrom&&"li"!=i.selectedNode.tagName]]),ht,ft,Object(n["u"])(Object(n["e"])("option",jt,"列项",512),[[n["s"],"list"==l.commandFrom||"li"==i.selectedNode.tagName]]),Object(n["u"])(Object(n["e"])("option",Ot,"表格",512),[[n["s"],"list"!=l.commandFrom&&"li"!=i.selectedNode.tagName]])],512),Object(n["e"])("div",pt,null,512),Object(n["e"])("div",{class:"textfield-closer closer",onClick:t[0]||(t[0]=function(){return i.closeTextfield&&i.closeTextfield.apply(i,arguments)})},mt)],2)}var gt={data:function(){return{isInputting:!1,commandFrom:""}},inject:["selectedNode"],mixins:[tt],mounted:function(){var e=this;_.on("textfield-open",(function(t){_.emit("colors-close"),_.emit("tableSetter-close"),e.commandFrom=t,e.isInputting=!0,e.$refs.inputter.focus()})),_.on("textfield-close",(function(){e.commandFrom=null,e.isInputting=!1}))},methods:{closeTextfield:function(){this.isInputting=!1,_.emit("note-offset-cancel");var e=this.$refs.selector.value,t=this.$refs.inputter.innerText,o=this.returnObj(e,t);_.emit("textfield-return-"+this.commandFrom,o),_.emit("textfield-return"),this.$refs.inputter.blur(),this.$refs.inputter.innerText=""}}};const Nt=$()(gt,[["render",Tt]]);var kt=Nt,Mt=function(e){return Object(n["n"])("data-v-0597ac2e"),e=e(),Object(n["m"])(),e},Ct=["onClick"],yt={class:"input-group"},St=Mt((function(){return Object(n["e"])("div",{class:"hint"},"#",-1)})),xt=Mt((function(){return Object(n["e"])("i",{class:"material-icons"},"close",-1)})),Lt=[xt];function wt(e,t,o,c,l,i){return Object(n["l"])(),Object(n["d"])("div",{class:Object(n["j"])(["colors fixed-component",{disabled:l.disabled}])},[(Object(n["l"])(!0),Object(n["d"])(n["a"],null,Object(n["o"])(l.colors,(function(e){return Object(n["l"])(),Object(n["d"])("div",{key:e.id,class:"color btn btn-shallow",style:Object(n["k"])({"background-color":e}),onClick:function(t){return i.setColor(e)}},null,12,Ct)})),128)),Object(n["e"])("div",yt,[St,Object(n["u"])(Object(n["e"])("input",{class:"inputter",placeholder:"******",type:"text",maxlength:"8","onUpdate:modelValue":t[0]||(t[0]=function(e){return l.colorValue=e})},null,512),[[n["r"],l.colorValue]])]),Object(n["e"])("div",{class:"closer",onClick:t[1]||(t[1]=function(){return i.close&&i.close.apply(i,arguments)})},Lt)],2)}var Ft={data:function(){return{disabled:!0,colors:["#D50000","#FFD600","#333"],colorValue:"",timeout:null,targetNode:null}},inject:["selectedNode"],mixins:[w],mounted:function(){var e=this;_.on("colors-open",(function(){_.emit("textfield-closes"),_.emit("tableSetter-close"),e.disabled=!1,e.getNodeObj({location:e.selectedNode.location,callback:function(t,o){e.targetNode=t[o]}})})),_.on("colors-close",(function(){e.disabled=!0,e.targetNode=null}))},methods:{setColor:function(e){this.targetNode.CL=e},close:function(){_.emit("colors-close"),_.emit("note-offset-cancel")}},watch:{colorValue:function(e){var t=this;clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.setColor("#"+e)}),600)}}};o("a5c0");const _t=$()(Ft,[["render",wt],["__scopeId","data-v-0597ac2e"]]);var Dt=_t,Et=function(e){return Object(n["n"])("data-v-41b0083b"),e=e(),Object(n["m"])(),e},At={class:"input-group"},It=Et((function(){return Object(n["e"])("i",{class:"hint material-icons"},"view_headline",-1)})),$t={class:"input-group"},Bt=Et((function(){return Object(n["e"])("i",{class:"hint material-icons"},"view_column",-1)})),Pt=Et((function(){return Object(n["e"])("i",{class:"material-icons"},"check",-1)})),Vt=[Pt],Jt=Et((function(){return Object(n["e"])("i",{class:"material-icons"},"close",-1)})),Rt=[Jt];function Ut(e,t,o,c,l,i){return Object(n["l"])(),Object(n["d"])("div",{class:Object(n["j"])(["table-setter fixed-component",{disabled:!l.show}])},[Object(n["e"])("div",At,[It,Object(n["u"])(Object(n["e"])("input",{class:"inputter",type:"text",placeholder:" > 0 ","onUpdate:modelValue":t[0]||(t[0]=function(e){return l.row=e})},null,512),[[n["r"],l.row]])]),Object(n["e"])("div",$t,[Bt,Object(n["u"])(Object(n["e"])("input",{class:"inputter",type:"text",placeholder:" > 0 ",maxlength:"3","onUpdate:modelValue":t[1]||(t[1]=function(e){return l.col=e})},null,512),[[n["r"],l.col]])]),Object(n["e"])("div",{class:"closer",onClick:t[2]||(t[2]=function(){return i.tableSet&&i.tableSet.apply(i,arguments)})},Vt),Object(n["e"])("div",{class:"closer",onClick:t[3]||(t[3]=function(){return i.close&&i.close.apply(i,arguments)})},Rt)],2)}var qt=o("b85c"),Gt={inject:["selectedNode"],mixins:[w],data:function(){return{row:1,col:1,show:!1,targetNode:null,timeout:null}},mounted:function(){var e=this;_.on("tableSetter-open",(function(){e.show=!0})),_.on("tableSetter-close",(function(){e.show=!1})),addEventListener("keydown",(function(t){"Enter"==t.key&&e.tableSet()}))},methods:{tableSet:function(){var e=this.targetNode.CTS.length,t=this.targetNode.CTS[0].length,o=Math.abs(this.row-e),n=Math.abs(this.col-t);if(this.col>t){var c,l=Object(qt["a"])(this.targetNode.CTS);try{for(l.s();!(c=l.n()).done;)for(var i=c.value,s=0;s<n;s++)i.push("")}catch(O){l.e(O)}finally{l.f()}}else{var r,a=Object(qt["a"])(this.targetNode.CTS);try{for(a.s();!(r=a.n()).done;)for(var d=r.value,u=0;u<n;u++)d.pop()}catch(O){a.e(O)}finally{a.f()}}if(this.row>e){for(var b=[],h=0;h<this.col;h++)b.push("");for(var f=0;f<o;f++)this.targetNode.CTS.push(b)}else for(var j=0;j<o;j++)this.targetNode.CTS.pop()},close:function(){_.emit("note-offset-cancel"),this.show=!1}},watch:{show:function(e){var t=this;e?(this.getNodeObj({location:this.selectedNode.location,callback:function(e,o){t.targetNode=e[o]}}),this.row=this.targetNode.CTS.length,this.col=this.targetNode.CTS[0].length):this.targetNode=null},row:function(e){var t=this;e<1?this.timeout=setTimeout((function(){t.row=1}),1e3):clearTimeout(this.timeout)},col:function(e){var t=this;e<1?this.timeout=setTimeout((function(){t.col=1}),1e3):clearTimeout(this.timeout)}}};o("48d1");const Ht=$()(Gt,[["render",Ut],["__scopeId","data-v-41b0083b"]]);var Kt=Ht,zt={CTS:[{NT:"h",CT:"这是一个大标题",CL:null,SL:!1},{NT:"hr",SL:!1},{NT:"p",CT:"这是一个段落",CL:null,SL:!1},{NT:"floor",SL:!1,CTS:[{NT:"h",CT:"这是层次中的大标题",CL:null,SL:!1},{NT:"p",CT:"这是一个段落",CL:null,SL:!1},{NT:"floor",SL:!1,CTS:[{NT:"h",CT:"这是层次中的大标题",CL:null,SL:!1},{NT:"p",CT:"这是一个段落",CL:null,SL:!1}]}]},{NT:"list",OL:!0,SL:!1,CTS:[{NT:"li",CT:"这是一个列表项",CL:null,SL:!1},{NT:"li",CT:"这是一个列表项",CL:null,SL:!1}]},{NT:"table",SL:!1,CTS:[["表格项","表格项","表格项","表格项"],["表格项","表格项","表格项","表格项"]]}]},Qt={name:"App",components:{Note:st,ControlBalls:X,ToolBar:P,TableSetter:Kt,Colors:Dt,TextfieldGroupFixed:kt},data:function(){return{note:zt,selectedNode:{location:null,type:null,tagName:null},isDarkMode:!1,isTouchMode:!1,isFullscreen:!1}},provide:function(){return{note:this.note,selectedNode:this.selectedNode}},methods:{toggleDarkMode:function(){this.isDarkMode=!this.isDarkMode},toggleTouchMode:function(){this.isTouchMode=!this.isTouchMode},toggleFullscreen:function(){this.isFullscreen=!this.isFullscreen}}};o("0802");const Wt=$()(Qt,[["render",c]]);var Xt=Wt,Yt=(o("5143"),o("38b9"),o("afd3"),o("86be"),o("61fd"),o("8d2a"),o("cde1"),Object(n["b"])(Xt));Yt.mount("#app")},"61fd":function(e,t,o){},7891:function(e,t,o){"use strict";o("207c")},"86be":function(e,t,o){},"8c8d":function(e,t,o){},"8d2a":function(e,t,o){},"8f1d":function(e,t,o){},a35a:function(e,t,o){"use strict";o("e0c6")},a5c0:function(e,t,o){"use strict";o("36a3")},ad98:function(e,t,o){},afd3:function(e,t,o){},b1f1:function(e,t,o){"use strict";o("8f1d")},cde1:function(e,t,o){},e0c6:function(e,t,o){},fb1a:function(e,t,o){"use strict";o("1c5e")}});
//# sourceMappingURL=app.4a6af37b.js.map