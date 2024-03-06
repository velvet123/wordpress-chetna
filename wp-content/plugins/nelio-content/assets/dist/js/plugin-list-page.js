(()=>{var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t),e.d(t,{initPage:()=>h});const n=window.wp.element,a=window.wp.domReady;var o=e.n(a);const i=window.wp.components,l=window.wp.apiFetch;var r=e.n(l);const c=window.wp.i18n,u=window.lodash,s=window.NelioContent.components;var d=function(){return d=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},d.apply(this,arguments)},v=function(e){var t=e.isSubscribed,a=m(e),o=a.isModalOpen,l=a.openModal,r=a.closeModal,u=a.mainActionLabel,v=a.isDeactivating,p=a.deactivate,f=a.cleanAndDeactivate,g=a.reason,h=a.setReason;return n.createElement("div",{className:"nelio-content-deactivation"},n.createElement(i.Button,{className:"nelio-content-deactivation__button",onClick:l,variant:"link"},(0,c._x)("Deactivate","command","nelio-content")),o&&n.createElement(i.Modal,{title:(0,c._x)("Nelio Content Deactivation","text","nelio-content"),isDismissible:!v,shouldCloseOnEsc:!v,shouldCloseOnClickOutside:!v,onRequestClose:r},"temporary-deactivation"===g.value?n.createElement(n.Fragment,null,n.createElement(s.RadioControl,{selected:g.value,options:b,onChange:function(e){return x(e)&&h({value:e,details:""})},disabled:v}),n.createElement("br",null)):n.createElement(n.Fragment,null,n.createElement("p",null,(0,c._x)("If you have a moment, please share why you are deactivating Nelio Content:","user","nelio-content")),n.createElement(s.RadioControl,{className:"nelio-content-deactivation__options",selected:g.value,options:_,onChange:function(e){return x(e)&&h({value:e,details:""})},extraValue:g.details,onExtraChange:function(e){return h(d(d({},g),{details:e}))},disabled:v})),t&&"temporary-deactivation"!==g.value&&n.createElement("p",{className:"nelio-content-deactivation__subscription-warning"},n.createElement(i.Dashicon,{icon:"warning"}),n.createElement("span",null,(0,c._x)("Please keep in mind your subscription to Nelio Content will remain active after removing the plugin from this site. If you want to unsubscribe from our service, you can do so from the plugin’s Account page before you deactivate the plugin.","user","nelio-content"))),n.createElement("div",{className:"nelio-content-deactivation__actions"},"temporary-deactivation"===g.value||v?n.createElement("span",null):n.createElement(i.Button,{variant:"link",disabled:v,onClick:function(){return f()}},(0,c._x)("Just Delete Data","command","nelio-content")),n.createElement(i.Button,{variant:"primary",disabled:v||"clean-stuff"===g.value,onClick:function(){return"temporary-deactivation"===g.value?p():f(g.details?"".concat(g.value,": ").concat(g.details):g.value)}},u))))},m=function(e){var t=e.cleanNonce,a=e.deactivationUrl,o=(0,n.useState)(g),i=o[0],l=o[1],c=function(){window.location.href=a},u=function(){return l(d(d({},g),{isModalOpen:!1}))},s="temporary-deactivation"===i.reason.value?p(i.isDeactivating):f(i.isDeactivating);return{isModalOpen:i.isModalOpen,openModal:function(){return l(d(d({},g),{isModalOpen:!0}))},closeModal:u,isDeactivating:i.isDeactivating,mainActionLabel:s,deactivate:function(){l(d(d({},i),{reason:g.reason,isDeactivating:!0})),c()},cleanAndDeactivate:function(e){l(d(d({},i),{isDeactivating:!0})),r()({path:"/nelio-content/v1/plugin/clean",method:"POST",data:{reason:e,_nonce:t}}).then(c,u)},reason:i.reason,setReason:function(e){return l(d(d({},i),{reason:e}))}}},p=function(e){return e?(0,c._x)("Deactivating…","text","nelio-content"):(0,c._x)("Deactivate","command","nelio-content")},f=function(e){return e?(0,c._x)("Deleting Data…","text","nelio-content"):(0,c._x)("Submit and Delete Data","command","nelio-content")},g={isModalOpen:!1,isDeactivating:!1,reason:{value:"temporary-deactivation",details:""}},b=[{value:"temporary-deactivation",label:(0,c._x)("It’s a temporary deactivation","text","nelio-content")},{value:"clean-stuff",label:(0,c._x)("Delete Nelio Content’s data and deactivate plugin","text","nelio-content")}],_=[{value:"plugin-no-longer-needed",label:(0,c._x)("I no longer need the plugin","text","nelio-content")},{value:"plugin-doesnt-work",label:(0,c._x)("I couldn’t get the plugin to work","text","nelio-content"),extra:(0,c._x)("What went wrong?","text","nelio-content")},{value:"better-plugin-found",label:(0,c._x)("I found a better plugin","text","nelio-content"),extra:(0,c._x)("What’s the plugin’s name?","text","nelio-content")},{value:"other",label:(0,c._x)("Other","text","nelio-content"),extra:(0,c._x)("Please share the reason…","user","nelio-content")}],x=function(e){return(0,u.map)(b,"value").includes(e)};function h(e){o()((function(){var t=e.isSubscribed,a=e.cleanNonce,o=e.deactivationUrl,l=document.querySelector(".nelio-content-deactivate-link");l&&(0,n.render)(n.createElement(i.SlotFillProvider,null,n.createElement(v,{isSubscribed:t,deactivationUrl:o,cleanNonce:a}),n.createElement(i.Popover.Slot,null)),l)}))}})();var n=NelioContent="undefined"==typeof NelioContent?{}:NelioContent;for(var a in t)n[a]=t[a];t.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})})();