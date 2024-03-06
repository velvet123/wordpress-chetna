(()=>{var e={4184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&e.push(a)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{initPage:()=>ie});var e={};n.r(e),n.d(e,{getEditingFeedId:()=>E,getEditingFeedName:()=>m,getEditingFeedTwitter:()=>h,getFeedUrl:()=>v,isAddingAFeed:()=>p,isDeletingAFeed:()=>y,isDeletingFeed:()=>w,isSavingAFeed:()=>g});var t={};n.r(t),n.d(t,{closeEditor:()=>F,markAsAddingFeed:()=>b,markAsDeleting:()=>D,markAsSaving:()=>T,openEditor:()=>S,setEditingFeedName:()=>N,setEditingFeedTwitter:()=>A,setNewFeedUrl:()=>_});var i={};n.r(i),n.d(i,{addFeed:()=>M,deleteFeed:()=>B,saveFeed:()=>P});const o=window.wp.element,a=window.wp.data,l=window.lodash;var d="nelio-content/feed-settings",c={addFeedForm:{url:"",isAddingFeed:!1},feedEditor:void 0,feedsBeingDeleted:[]},u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},u.apply(this,arguments)},s=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))};const f=window.NelioContent.utils;function v(e){return e.addFeedForm.url}function p(e){return e.addFeedForm.isAddingFeed}function E(e){var t;return null===(t=e.feedEditor)||void 0===t?void 0:t.feedId}function m(e){var t,n;return null!==(n=null===(t=e.feedEditor)||void 0===t?void 0:t.feedName)&&void 0!==n?n:""}function h(e){var t,n;return null!==(n=null===(t=e.feedEditor)||void 0===t?void 0:t.feedTwitter)&&void 0!==n?n:""}function g(e){var t;return!!(null===(t=e.feedEditor)||void 0===t?void 0:t.isSaving)}function w(e,t){return e.feedsBeingDeleted.includes(t)}function y(e){return!(0,f.isEmpty)(e.feedsBeingDeleted)}function _(e){return{type:"SET_NEW_FEED_URL",url:e}}function b(e){return{type:"MARK_AS_ADDING_FEED",isAddingFeed:e}}function S(e,t){return{type:"OPEN_EDITOR",feedId:e,feedName:t.name,feedTwitter:t.twitter}}function F(){return{type:"CLOSE_EDITOR"}}function N(e){return{type:"SET_EDITING_FEED_NAME",feedName:e}}function A(e){return{type:"SET_EDITING_FEED_TWITTER",feedTwitter:e}}function T(e){return{type:"MARK_AS_SAVING",isSaving:e}}function D(e,t){return{type:"MARK_AS_DELETING",feedId:e,isDeleting:t}}const x=window.wp.apiFetch;var I=n.n(x);const k=window.wp.url,O=window.NelioContent.data;var R=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{d(r.next(e))}catch(e){o(e)}}function l(e){try{d(r.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}d((r=r.apply(e,t||[])).next())}))},C=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(l){return function(d){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&l[0]?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,r=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==l[0]&&2!==l[0])){a=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){a.label=l[1];break}if(6===l[0]&&a.label<i[1]){a.label=i[1],i=l;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(l);break}i[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(e,a)}catch(e){l=[6,e],r=0}finally{n=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,d])}}};function M(e){return R(this,void 0,void 0,(function(){var t;return C(this,(function(n){switch(n.label){case 0:(0,a.dispatch)(d).markAsAddingFeed(!0),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,I()({path:"/nelio-content/v1/feeds/",method:"POST",data:{url:e}})];case 2:return t=n.sent(),(0,a.dispatch)(O.STORE_NAME).receiveFeeds(t),(0,a.dispatch)(d).setNewFeedUrl(""),[3,4];case 3:return n.sent(),[3,4];case 4:return 1===(0,a.select)(O.STORE_NAME).getFeeds().length?(window.location.reload(),[2]):((0,a.dispatch)(d).markAsAddingFeed(!1),[2])}}))}))}function P(e,t){var n=t.name,r=t.twitter;return R(this,void 0,void 0,(function(){var t;return C(this,(function(i){switch(i.label){case 0:(0,a.dispatch)(d).markAsSaving(!0),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,I()({path:"/nelio-content/v1/feeds/",method:"PUT",data:{id:e,name:n||void 0,twitter:r||void 0}})];case 2:return t=i.sent(),(0,a.dispatch)(O.STORE_NAME).receiveFeeds(t),[3,4];case 3:return i.sent(),[3,4];case 4:return(0,a.dispatch)(d).closeEditor(),(0,a.dispatch)(d).markAsSaving(!1),[2]}}))}))}function B(e){return R(this,void 0,void 0,(function(){var t;return C(this,(function(n){switch(n.label){case 0:(0,a.dispatch)(d).markAsDeleting(e,!0),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,I()({path:(0,k.addQueryArgs)("/nelio-content/v1/feeds/",{id:e}),method:"DELETE"})];case 2:return n.sent(),(0,a.dispatch)(O.STORE_NAME).removeFeed(e),[3,4];case 3:return n.sent(),[3,4];case 4:return t=(0,a.select)(O.STORE_NAME).getFeeds(),(0,f.isEmpty)(t)?(window.location.reload(),[2]):((0,a.dispatch)(d).markAsDeleting(e,!1),[2])}}))}))}var G=function(){return G=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},G.apply(this,arguments)},j=G(G({},t),i);(0,a.registerStore)(d,{reducer:function(e,t){var n;return void 0===e&&(e=c),null!==(n=function(e,t){switch(t.type){case"SET_NEW_FEED_URL":return u(u({},e),{addFeedForm:u(u({},e.addFeedForm),{url:t.url})});case"MARK_AS_ADDING_FEED":return u(u({},e),{addFeedForm:u(u({},e.addFeedForm),{isAddingFeed:!!t.isAddingFeed})});case"OPEN_EDITOR":return u(u({},e),{feedEditor:{isSaving:!1,feedId:t.feedId,feedName:t.feedName,feedTwitter:t.feedTwitter}});case"CLOSE_EDITOR":return u(u({},e),{feedEditor:void 0});case"SET_EDITING_FEED_NAME":return e.feedEditor?u(u({},e),{feedEditor:u(u({},e.feedEditor),{feedName:t.feedName})}):e;case"SET_EDITING_FEED_TWITTER":return e.feedEditor?u(u({},e),{feedEditor:u(u({},e.feedEditor),{feedTwitter:t.feedTwitter})}):e;case"MARK_AS_SAVING":return e.feedEditor?u(u({},e),{feedEditor:u(u({},e.feedEditor),{isSaving:t.isSaving})}):e;case"MARK_AS_DELETING":return u(u({},e),{feedsBeingDeleted:t.isDeleting?(0,l.uniq)(s(s([],e.feedsBeingDeleted,!0),[t.feedId],!1)):(0,l.without)(e.feedsBeingDeleted,t.feedId)})}}(e,t))&&void 0!==n?n:e},controls:a.controls,actions:j,selectors:e});const U=window.wp.components,L=window.wp.i18n;var K=n(4184),W=n.n(K);const q=window.NelioContent.components;var V=function(e){var t=e.feedId,n=(0,a.useSelect)((function(e){return e(O.STORE_NAME).getFeed(t)})),r=null!=n?n:{},i=r.name,l=void 0===i?"":i,c=r.url,u=r.icon,s=r.twitter,f=void 0===s?"":s,v=(0,a.useSelect)((function(e){return e(d).isAddingAFeed()})),p=(0,a.useSelect)((function(e){return e(d).isDeletingFeed(t)})),E=(0,a.useDispatch)(d),m=E.openEditor,h=E.deleteFeed;return o.createElement("div",{className:W()({"nelio-content-feed":!0,"nelio-content-feed--is-deleting":p})},o.createElement("div",{className:"nelio-content-feed__name"},l),o.createElement("div",{className:"nelio-content-feed__url"},p?o.createElement("span",null,c):o.createElement(U.ExternalLink,{href:c},c)),!!f&&o.createElement("div",{className:"nelio-content-feed__twitter"},"X (Twitter): ",p?o.createElement("span",null,f.substring(1)):o.createElement(U.ExternalLink,{href:"https://twitter.com/".concat(f.substring(1))},f.substring(1))),o.createElement("div",{className:"nelio-content-feed__icon"},o.createElement("div",{className:"nelio-content-feed__actual-icon",style:{backgroundColor:u?"transparent":void 0,backgroundImage:u?"url(".concat(u,")"):void 0}})),p?o.createElement("div",{className:"nelio-content-feed__feedback"},o.createElement(q.DeleteButton,{isDeleting:!0,onClick:function(){}})):o.createElement("div",{className:"nelio-content-feed__actions"},o.createElement(U.Button,{variant:"link",disabled:v,onClick:function(){return m(t,{name:l,twitter:f})}},(0,L._x)("Edit","command","nelio-content"))," | ",o.createElement(q.DeleteButton,{onClick:function(){return h(t)},disabled:v})))},H=function(){var e=(0,a.useSelect)((function(e){return e(O.STORE_NAME).getFeedIds()}));return(0,f.isEmpty)(e)?o.createElement("div",{className:"nelio-content-empty-feed-list"},(0,L._x)("Add your first RSS feed using the form above","user","nelio-content")):o.createElement("div",{className:"nelio-content-feed-list"},e.map((function(e){return o.createElement(V,{key:e,feedId:e})})))},X=function(){var e=Q(),t=e[0],n=e[1],r=z(),i=r[0],a=r[1],d=(0,f.isUrl)((0,l.trim)(t));return o.createElement("div",{className:"nelio-content-new-feed-form"},o.createElement(U.TextControl,{className:"nelio-content-new-feed-form__input-text",value:t,onChange:n,disabled:i,placeholder:(0,L._x)("Write the URL of an RSS feed…","user","nelio-content")}),o.createElement(U.Button,{className:"nelio-content-new-feed-form__add-button",variant:"primary",isBusy:i,onClick:a,disabled:i||!d},i?(0,L._x)("Adding…","text","nelio-content"):(0,L._x)("Add","command","nelio-content")))},Q=function(){return[(0,a.useSelect)((function(e){return e(d).getFeedUrl()})),(0,a.useDispatch)(d).setNewFeedUrl]},z=function(){var e=(0,a.useSelect)((function(e){return e(d).isAddingAFeed()})),t=Q()[0],n=(0,a.useDispatch)(d).addFeed;return[e,function(){return e=void 0,r=void 0,o=function(){var e;return function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(l){return function(d){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&l[0]?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,r=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==l[0]&&2!==l[0])){a=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){a.label=l[1];break}if(6===l[0]&&a.label<i[1]){a.label=i[1],i=l;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(l);break}i[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(e,a)}catch(e){l=[6,e],r=0}finally{n=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,d])}}}(this,(function(r){return e=(0,l.trim)(t),(0,f.isUrl)(e)?[2,n(e)]:[2]}))},new((i=void 0)||(i=Promise))((function(t,n){function a(e){try{d(o.next(e))}catch(e){n(e)}}function l(e){try{d(o.throw(e))}catch(e){n(e)}}function d(e){var n;e.done?t(e.value):(n=e.value,n instanceof i?n:new i((function(e){e(n)}))).then(a,l)}d((o=o.apply(e,r||[])).next())}));var e,r,i,o}]},J=function(){var e=Y(),t=e[0],n=e[1],r=Z(),i=r[0],c=r[1],u=$(),s=u[0],v=u[1],p=ee(),E=te(),m=(0,a.useDispatch)(d).closeEditor;if(!p)return null;var h=function(e,t){return(0,f.isEmpty)((0,l.trim)(e))?(0,L._x)("Feed title is missing","text","nelio-content"):(0,f.isValidTwitterHandler)(t)?"":(0,L._x)("Invalid twitter handler","text","nelio-content")}(t,i);return o.createElement(U.Modal,{title:(0,L._x)("Edit Feed","text","nelio-content"),className:"nelio-content-edit-feed-modal",isDismissible:!s,shouldCloseOnEsc:!s,shouldCloseOnClickOutside:!s,onRequestClose:function(){return!s&&m()}},o.createElement(U.TextControl,{required:!0,label:(0,L._x)("Title","text","nelio-content"),disabled:s,value:t,onChange:n,placeholder:(0,L._x)("Name this feed…","user","nelio-content")}),o.createElement(U.TextControl,{label:(0,L._x)("X Handler","text","nelio-content"),disabled:s,value:i,onChange:c,placeholder:(0,L._x)("@username","text","nelio-content")}),o.createElement("div",{className:"nelio-content-edit-feed-modal__actions"},o.createElement(q.SaveButton,{variant:"primary",isUpdate:!0,isSaving:s,disabled:!E,error:h,onClick:v})))},Y=function(){return[(0,a.useSelect)((function(e){return e(d).getEditingFeedName()})),(0,a.useDispatch)(d).setEditingFeedName]},Z=function(){return[(0,a.useSelect)((function(e){return e(d).getEditingFeedTwitter()})),(0,a.useDispatch)(d).setEditingFeedTwitter]},$=function(){var e=ne(),t=Y()[0],n=Z()[0],r=(0,a.useSelect)((function(e){return e(d).isSavingAFeed()})),i=(0,a.useDispatch)(d).saveFeed;return[r,function(){return r=void 0,o=void 0,l=function(){return function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(l){return function(d){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&l[0]?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,r=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==l[0]&&2!==l[0])){a=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){a.label=l[1];break}if(6===l[0]&&a.label<i[1]){a.label=i[1],i=l;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(l);break}i[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(e,a)}catch(e){l=[6,e],r=0}finally{n=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,d])}}}(this,(function(r){return[2,e?i(e,{name:t,twitter:n}):void 0]}))},new((a=void 0)||(a=Promise))((function(e,t){function n(e){try{d(l.next(e))}catch(e){t(e)}}function i(e){try{d(l.throw(e))}catch(e){t(e)}}function d(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(n,i)}d((l=l.apply(r,o||[])).next())}));var r,o,a,l}]},ee=function(){return!!ne()},te=function(){var e=Y()[0],t=Z()[0],n=ne(),r=(0,a.useSelect)((function(e){var t=e(O.STORE_NAME).getFeed;return n?t(n):void 0})),i=(null==r?void 0:r.name)||"",o=(null==r?void 0:r.twitter)||"";return e!==i||t!==o},ne=function(){return(0,a.useSelect)((function(e){return e(d).getEditingFeedId()}))},re=function(){return o.createElement("div",{className:"nelio-content-feed-settings-layout"},o.createElement(o.StrictMode,null,o.createElement(U.SlotFillProvider,null,o.createElement(X,null),o.createElement(H,null),o.createElement(J,null),o.createElement(U.Popover.Slot,null))))};function ie(e){var t=document.getElementById(e);(0,o.render)(o.createElement(re,null),t)}})();var i=NelioContent="undefined"==typeof NelioContent?{}:NelioContent;for(var o in r)i[o]=r[o];r.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})();