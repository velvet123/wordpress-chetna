(()=>{var e={4184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{postQuickEditor:()=>i});var e={};n.r(e),n.d(e,{areReferencesDirty:()=>j,areTasksDirty:()=>C,getAllAttributes:()=>x,getAuthorId:()=>I,getDateValue:()=>V,getExtraInfoTab:()=>G,getId:()=>O,getPostStatus:()=>R,getPostTerms:()=>A,getPostTermsByTaxonomy:()=>w,getPostType:()=>N,getReferenceInput:()=>M,getReferences:()=>L,getTaskPresetSelection:()=>B,getTasks:()=>D,getTimeValue:()=>q,getTitle:()=>P,getValidationError:()=>J,isNewPost:()=>F,isPublished:()=>H,isSaving:()=>Y,isTaskPresetLoaderOpen:()=>U,isVisible:()=>K});var t={};n.r(t),n.d(t,{close:()=>le,markAsSaving:()=>fe,openNewPostEditor:()=>ue,openPostEditor:()=>ce,openTaskPresetLoader:()=>oe,selectTaskPresets:()=>ie,setAuthorId:()=>Z,setDateValue:()=>$,setExtraInfoTab:()=>de,setPostStatus:()=>X,setPostTerms:()=>W,setPostType:()=>Q,setReferenceInput:()=>ne,setReferences:()=>re,setTasks:()=>te,setTimeValue:()=>ee,setTitle:()=>z,setValidationError:()=>pe});var o={};n.r(o),n.d(o,{saveAndClose:()=>ge});var i={};n.r(i),n.d(i,{PostQuickEditor:()=>Gt,STORE_NAME:()=>m});const a=window.wp.element,s=window.wp.components,u=window.wp.data,c=window.wp.i18n,l=window.NelioContent.data,d=window.NelioContent.components,p=window.lodash,f=window.NelioContent.date;var m="nelio-content/post-quick-editor",E={error:"",extraInfoTab:"none",isPublished:!1,isSaving:!1,isVisible:!1},v={isOpen:!1,selection:[]},_=function(){return _=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},_.apply(this,arguments)},h={title:"",type:void 0,taxonomies:{},authorId:void 0,status:void 0,dateValue:"",timeValue:"",referenceInput:"",references:[],tasks:[]},T=function(e){return!("id"in e)||!e.id};function g(e){return void 0===e?"":"".concat(e)}var y=function(e){var t="";if("exact"===e.dateType)t+="0:"+e.dateValue;else{var n=Math.abs(Number.parseInt(e.dateValue)||0);t+="positive-days"===e.dateType||0===n?"2:"+(0,p.padStart)("".concat(n),5,"0"):"1:"+(0,p.padStart)("".concat(Math.abs(9999-n)),5,"0"),t+=":",t+=e.task}return t+=":".concat(e.task,":").concat(e.id),_(_({},e),{_sort:t})},S=function(){return S=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},S.apply(this,arguments)},k=function(){return k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},k.apply(this,arguments)};const b=(0,u.combineReducers)({attributes:function(e,t){var n;return void 0===e&&(e=h),null!==(n=function(e,t){var n,r,o,i,a;switch(t.type){case"OPEN_EDITOR":return _(_({},h),{id:T(t.post)?void 0:t.post.id,title:null!==(r=t.post.title)&&void 0!==r?r:h.title,type:null!==(o=t.post.type)&&void 0!==o?o:h.type,taxonomies:T(t.post)?h.taxonomies:t.post.taxonomies,authorId:null!==(i=t.post.author)&&void 0!==i?i:h.authorId,status:T(t.post)?h.status:t.post.status,dateValue:!T(t.post)&&t.post.date?(0,f.date)("Y-m-d",t.post.date):g(T(t.post)?t.post.dateValue:""),timeValue:!T(t.post)&&t.post.date?(0,f.date)("H:i",t.post.date):g(T(t.post)?t.post.timeValue:"")});case"SET_TITLE":return _(_({},e),{title:t.title});case"SET_POST_TYPE":return _(_({},e),{type:t.postType});case"SET_POST_STATUS":return _(_({},e),{status:t.postStatus});case"SET_POST_TERMS":return _(_({},e),{taxonomies:_(_({},e.taxonomies),(n={},n[t.taxonomy]=t.terms,n))});case"SET_AUTHOR":return _(_({},e),{authorId:t.authorId});case"SET_DATE":return _(_({},e),{dateValue:g(t.dateValue)});case"SET_TIME":return _(_({},e),{timeValue:g(t.timeValue)});case"SET_TASKS":return _(_({},e),{tasks:(a=t.tasks,(0,p.orderBy)(a.map(y),"_sort"))});case"SET_REFERENCE_INPUT":return _(_({},e),{referenceInput:t.url});case"SET_REFERENCES":return _(_({},e),{references:t.references})}}(e,t))&&void 0!==n?n:e},presetLoader:function(e,t){var n;return void 0===e&&(e=v),null!==(n=function(e,t){switch(t.type){case"OPEN_TASK_PRESET_LOADER":return S(S({},v),{isOpen:t.isOpen});case"SELECT_TASK_PRESETS":return e.isOpen?S(S({},e),{selection:t.selection}):e}}(e,t))&&void 0!==n?n:e},status:function(e,t){var n;return void 0===e&&(e=E),null!==(n=function(e,t){switch(t.type){case"OPEN_EDITOR":return k(k({},E),{isPublished:"status"in t.post&&"publish"===t.post.status,isVisible:!0});case"CLOSE_EDITOR":return E;case"SET_EXTRA_INFO_TAB":return k(k({},e),{extraInfoTab:t.tab});case"SET_VALIDATION_ERROR":return k(k({},e),{error:t.error});case"MARK_AS_SAVING":return k(k({},e),{isSaving:!!t.isSaving})}}(e,t))&&void 0!==n?n:e}});function x(e){return e.attributes}function O(e){return e.attributes.id}function P(e){return e.attributes.title||""}function N(e){return e.attributes.type}function R(e){return e.attributes.status}function A(e,t){var n;return null!==(n=e.attributes.taxonomies[t])&&void 0!==n?n:[]}function w(e){return e.attributes.taxonomies}function I(e){return e.attributes.authorId}function V(e){return e.attributes.dateValue}function q(e){return e.attributes.timeValue}function D(e){return e.attributes.tasks}function C(e,t){var n=e.attributes.tasks;return t=t.map((function(e){return(0,p.pick)(e,["id","task","dateType","dateValue","color","assigneeId"])})),n.length!==t.length||(0,p.some)(n,(function(e){var n=(0,p.find)(t,{id:e.id});return!n||!(0,p.isEqual)((0,p.pick)(e,(0,p.keys)(n)),n)}))}function M(e){return e.attributes.referenceInput}function L(e){return e.attributes.references}function j(e,t){var n=t.map((function(e){return e.url})),r=e.attributes.references;return n.length!==r.length||(0,p.some)(r,(function(e){return!n.includes(e.url)}))}function U(e){return e.presetLoader.isOpen}function B(e){return e.presetLoader.selection}function F(e){return!e.attributes.id}function H(e){return!!e.status.isPublished}function K(e){return!!e.status.isVisible}function Y(e){return!!e.status.isSaving}function G(e){return e.status.extraInfoTab||"none"}function J(e){return e.status.error}function z(e){return{type:"SET_TITLE",title:e}}function Q(e){return{type:"SET_POST_TYPE",postType:e}}function X(e){return{type:"SET_POST_STATUS",postStatus:e}}function W(e,t){return{type:"SET_POST_TERMS",taxonomy:e,terms:t}}function Z(e){return{type:"SET_AUTHOR",authorId:e}}function $(e){return{type:"SET_DATE",dateValue:e}}function ee(e){return{type:"SET_TIME",timeValue:e}}function te(e){return{type:"SET_TASKS",tasks:e}}function ne(e){return{type:"SET_REFERENCE_INPUT",url:e}}function re(e){return{type:"SET_REFERENCES",references:e}}function oe(e){return{type:"OPEN_TASK_PRESET_LOADER",isOpen:e}}function ie(e){return{type:"SELECT_TASK_PRESETS",selection:e}}const ae=window.NelioContent.utils;var se=function(){return se=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},se.apply(this,arguments)};function ue(e){return void 0===e&&(e={}),{type:"OPEN_EDITOR",post:se(se({},(0,ae.createPost)()),(0,p.omitBy)(e,p.isNil))}}function ce(e){return{type:"OPEN_EDITOR",post:e}}function le(){return{type:"CLOSE_EDITOR"}}function de(e){return{type:"SET_EXTRA_INFO_TAB",tab:e}}function pe(e){return{type:"SET_VALIDATION_ERROR",error:e}}function fe(e){return{type:"MARK_AS_SAVING",isSaving:e}}const me=window.wp.apiFetch;var Ee=n.n(me),ve=function(){return ve=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},ve.apply(this,arguments)},_e=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},he=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},Te=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function ge(){return _e(this,void 0,void 0,(function(){var e,t,n,r,o,i;return he(this,(function(a){switch(a.label){case 0:if((0,u.select)(m).isSaving())return[2];(0,u.dispatch)(m).markAsSaving(!0),a.label=1;case 1:return a.trys.push([1,5,,6]),e=(0,u.select)(m).getAllAttributes(),t=e.tasks,[4,ye(n=Te(e,["tasks"]))];case 2:return r=a.sent(),o=r.post,i=r.references,[4,Se(!n.id,o,t)];case 3:return a.sent(),(0,u.dispatch)(l.STORE_NAME).receivePosts(o),(0,u.dispatch)(l.STORE_NAME).receiveSuggestedReferences(o.id,i),[4,(0,u.dispatch)(l.STORE_NAME).reloadPostRelatedItems(o.id)];case 4:case 5:return a.sent(),[3,6];case 6:return(0,u.dispatch)(m).markAsSaving(!1),(0,u.dispatch)(m).close(),[2]}}))}))}function ye(e){return _e(this,void 0,void 0,(function(){var t,n;return he(this,(function(r){return t=e.id?"PUT":"POST",n=e.id?"/nelio-content/v1/post/".concat(e.id):"/nelio-content/v1/post",[2,Ee()({path:n,method:t,data:ve(ve({},(0,p.omitBy)(e,ae.isEmpty)),{references:e.references.map((function(e){return e.url}))})})]}))}))}function Se(e,t,n){return _e(this,void 0,void 0,(function(){var r,o,i,a,s;return he(this,(function(c){switch(c.label){case 0:return e?[3,2]:[4,(0,u.resolveSelect)(l.STORE_NAME).getTasksRelatedToPost(t.id)];case 1:return o=c.sent(),[3,3];case 2:o=[],c.label=3;case 3:if(r=o,!(0,u.select)(m).areTasksDirty(r))return[2];c.label=4;case 4:return c.trys.push([4,6,,7]),i=(0,u.select)(l.STORE_NAME).getSiteId(),a=(0,u.select)(l.STORE_NAME).getApiRoot(),s=(0,u.select)(l.STORE_NAME).getAuthenticationToken(),[4,Ee()({url:"".concat(a,"/site/").concat(i,"/task"),method:"POST",credentials:"omit",mode:"cors",headers:{Authorization:"Bearer ".concat(s)},data:{mode:"replace",postId:t.id,tasks:n.map((function(e){return ve(ve({},e),{baseDatetime:t.date||"none",assigneeId:e.assigneeId||t.author,postId:t.id,postType:t.type,postAuthor:t.author})}))}})];case 5:case 6:return c.sent(),[3,7];case 7:return r.map((function(e){var t=e.id;return(0,u.dispatch)(l.STORE_NAME).deleteTask(t)})),[2]}}))}))}var ke=function(){return ke=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},ke.apply(this,arguments)},be=ke(ke({},t),o);(0,u.registerStore)(m,{reducer:b,controls:u.controls,actions:be,selectors:e});var xe=[{title:(0,c._x)("Post Editor","text","nelio-content"),intro:(0,c._x)("Welcome to the post editor. This simple modal lets you quickly and efficiently create new posts or edit existing ones.","user","nelio-content")},{title:(0,c._x)("Title","text","nelio-content"),intro:(0,c._x)("Here you can set or change the post’s title.","user","nelio-content"),element:function(){return document.querySelector(".nelio-content-post-quick-editor__title")}},{title:(0,c._x)("Post Type","text","nelio-content"),intro:(0,c._x)("Use this selector to set its type to one of the post types enabled in Nelio Content’s advanced settings.","user","nelio-content"),active:function(){return!!document.querySelector(".nelio-content-post-quick-editor__type")},element:function(){return document.querySelector(".nelio-content-post-quick-editor__type")}},{title:(0,c._x)("Status","text","nelio-content"),intro:(0,c._x)("Use this selector to set the post’s status.","user","nelio-content"),active:function(){return!!document.querySelector(".nelio-content-post-quick-editor__status")},element:function(){return document.querySelector(".nelio-content-post-quick-editor__status")}},{title:(0,c._x)("Status","text","nelio-content"),intro:(0,c._x)("In multiauthor sites, you can select the author of any given post here.","user","nelio-content"),active:function(){return!!document.querySelector(".nelio-content-post-quick-editor__author")},element:function(){return document.querySelector(".nelio-content-post-quick-editor__author")}},{title:(0,c._x)("Date","text","nelio-content"),intro:(0,c._x)("You can also set the date in which the post is supposed to be published. If you don’t set a specific date, the post will show up in the “Unscheduled” section.","user","nelio-content"),active:function(){return!!document.querySelector(".nelio-content-post-quick-editor__date")},element:function(){return document.querySelector(".nelio-content-post-quick-editor__date")}},{title:(0,c._x)("Time","text","nelio-content"),intro:(0,c._x)("You can also set the publication time.","user","nelio-content"),active:function(){return!!document.querySelector(".nelio-content-post-quick-editor__time")},element:function(){return document.querySelector(".nelio-content-post-quick-editor__time")}},{title:(0,c._x)("More Options","text","nelio-content"),intro:(0,c._x)("Finally, you can click on this link to show some additional settings. For example, if you’re creating or editing a blog post, this will reveal a couple of settings to tweak its categories and tags.","user","nelio-content"),active:function(){return!!document.querySelector(".nelio-content-post-quick-editor__extra-action")},element:function(){return document.querySelector(".nelio-content-post-quick-editor__extra-action")}}],Oe=function(){var e=Pe(),t=e.authorId,n=e.dateValue,r=e.reference,o=e.timeValue,i=e.title,s=Ne(),u=s.setError,l=s.clearErrors;return(0,a.useEffect)(Re((function(){return(0,ae.isEmpty)((0,p.trim)(i))?u((0,c._x)("Please set post’s title","user","nelio-content")):(0,ae.isEmpty)(t)?u((0,c._x)("Please set a post author","user","nelio-content")):(0,ae.isEmpty)(n)&&!(0,ae.isEmpty)(o)?u((0,c._x)("Please specify a valid date","user","nelio-content")):!(0,ae.isEmpty)(n)&&(0,ae.isEmpty)(o)?u((0,c._x)("Please specify a valid time","user","nelio-content")):r&&!(0,ae.isUrl)(r)?u((0,c._x)("Please type in a valid reference URL","user","nelio-content")):l()})),[t,n,r,o,i]),null},Pe=function(){return(0,u.useSelect)((function(e){var t=e(m),n=t.getAuthorId,r=t.getDateValue,o=t.getReferenceInput,i=t.getTimeValue,a=t.getTitle;return{authorId:n(),dateValue:r(),reference:o(),timeValue:i(),title:a()}}))},Ne=function(){var e=(0,u.useDispatch)(m).setValidationError;return{setError:e,clearErrors:function(){return e("")}}},Re=function(e){return function(){e()}};const Ae=window.wp.coreData;var we,Ie=null!==(we=null===Ae.store||void 0===Ae.store?void 0:Ae.store.name)&&void 0!==we?we:"core",Ve=function(){var e=De(),t=Me();return e||!t},qe=function(){return(0,u.useSelect)((function(e){return e(m).isPublished()}))},De=function(){return(0,u.useSelect)((function(e){return e(m).isSaving()}))},Ce=function(){return(0,u.useSelect)((function(e){return e(m).isNewPost()}))},Me=function(){return(0,u.useSelect)((function(e){var t=e(l.STORE_NAME),n=t.getPost,r=t.canCurrentUserEditPost,o=e(m),i=o.getId,a=o.isNewPost,s=i(),u=!!s&&n(s),c=!!u&&r(u);return a()||c}))},Le=function(){return!!je().length},je=function(){var e=(0,u.useSelect)((function(e){return e(m).getPostType()})),t=Ue();return(0,p.filter)(t,(function(t){return!e||t.types.includes(e)}))},Ue=function(){return(0,p.filter)((0,u.useSelect)((function(e){return e(Ie).getTaxonomies({per_page:-1})})),(function(e){return e.visibility.public}))},Be=function(){var e=Me(),t=Fe();return e?null:a.createElement("div",{className:"nelio-content-post-quick-editor__edit-warning"},a.createElement(s.Dashicon,{icon:"warning"}),t)},Fe=function(){return(0,u.useSelect)((function(e){switch((0,e(m).getPostType)()){case"page":return(0,c._x)("You’re not allowed to edit this page.","user","nelio-content");case"post":return(0,c._x)("You’re not allowed to edit this post.","user","nelio-content");default:return(0,c._x)("You’re not allowed to edit this content.","user","nelio-content")}}))},He=function(){var e=(0,u.useDispatch)(m).setExtraInfoTab,t=Ke(),n=Ve(),r=Le();if(t)return null;var o=(0,c._x)("View Details","command","nelio-content");return a.createElement("div",{className:"nelio-content-post-quick-editor__extra-actions"},a.createElement(s.Button,{className:"nelio-content-post-quick-editor__extra-action",variant:"link",disabled:n,onClick:function(){return e(r?"taxonomies":"tasks")}},o))},Ke=function(){return(0,u.useSelect)((function(e){return"none"!==e(m).getExtraInfoTab()}))},Ye=function(){var e=(0,u.useDispatch)(m),t=e.close,n=e.saveAndClose,r=Ve(),o=Ge(),i=Ce(),l=De();return a.createElement("div",{className:"nelio-content-post-quick-editor__actions"},a.createElement(He,null),a.createElement(s.Button,{variant:"secondary",disabled:r,onClick:t},(0,c._x)("Cancel","command","nelio-content")),a.createElement(d.SaveButton,{variant:"primary",error:o,isSaving:l,isUpdate:!i,onClick:n}))},Ge=function(){return(0,u.useSelect)((function(e){return e(m).getValidationError()}))},Je=function(){var e=(0,u.useDispatch)(m).close,t=ze(),n=t.primary,r=t.secondary;return a.createElement("div",{className:"nelio-content-post-quick-editor__actions"},a.createElement(He,null),a.createElement(s.Button,{variant:"secondary",onClick:e},(0,c._x)("Cancel","command","nelio-content")),!!r&&a.createElement(s.ExternalLink,{className:"components-button is-secondary",href:r.url,onClick:e},r.label),!!n&&a.createElement(s.ExternalLink,{className:"components-button is-primary",href:n.url,onClick:e},n.label))},ze=function(){var e=Qe(),t=Me();if(!e)return{};var n=e.status,r=e.editLink,o="publish"===n,i={url:e.viewLink,label:o?(0,c._x)("View","command","nelio-content"):(0,c._x)("Preview","command","nelio-content")},a={url:r,label:(0,c._x)("Edit","command","nelio-content")};return t?{primary:o?i:a,secondary:o?a:i}:{secondary:i}},Qe=function(){return(0,u.useSelect)((function(e){return(0,e(l.STORE_NAME).getPost)((0,e(m).getId)())}))},Xe=function(){return Xe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Xe.apply(this,arguments)},We=function(){var e=Me(),t=Ze();return e&&t?a.createElement(Ye,null):a.createElement(Je,null)},Ze=function(){return(0,u.useSelect)((function(e){var t,n,r,o;if((0,e(m).isNewPost)())return!0;var i=e(m).getId(),a=e(l.STORE_NAME).getPost(i);if(!a)return!0;var s=e(l.STORE_NAME).getTasksRelatedToPost(i);if(e(m).areTasksDirty(s))return!0;var u=e(l.STORE_NAME).getSuggestedReferences(i);if(e(m).areReferencesDirty(u))return!0;var c=e(m),d=c.getTitle,f=c.getAuthorId,E=c.getDateValue,v=c.getTimeValue,_=c.getPostStatus,h=c.getPostTermsByTaxonomy,T=function(e){return JSON.stringify((0,p.mapValues)(e,(function(e){return(0,p.orderBy)(e,"id")})))},g={title:d(),status:_(),author:f(),dateValue:null!==(t=E())&&void 0!==t?t:"",timeValue:null!==(n=v())&&void 0!==n?n:"",taxonomies:T(h())},y=(0,ae.extractDateTimeValues)(a.date),S=Xe(Xe({},(0,p.pick)(a,(0,p.keys)(g))),{taxonomies:T(a.taxonomies),dateValue:null!==(r=null==y?void 0:y.dateValue)&&void 0!==r?r:"",timeValue:null!==(o=null==y?void 0:y.timeValue)&&void 0!==o?o:""});return!(0,p.isEqual)(g,S)}))},$e=function(){var e=et(),t=e[0],n=e[1],r=tt(),o=Ve();return r?a.createElement("div",{className:"nelio-content-post-quick-editor__author"},a.createElement(d.AuthorSearcher,{value:t,onChange:function(e){e&&n(e)},placeholder:(0,c._x)("Author…","text","nelio-content"),disabled:o})):null},et=function(){return[(0,u.useSelect)((function(e){return e(m).getAuthorId()})),(0,u.useDispatch)(m).setAuthorId]},tt=function(){return(0,u.useSelect)((function(e){return e(l.STORE_NAME).isMultiAuthor()}))},nt=function(){var e=rt(),t=e[0],n=e[1],r=ot(),o=Ve(),i=qe();return a.createElement("div",{className:"nelio-content-post-quick-editor__date"},a.createElement(d.DateInput,{disabled:o||i,value:t,onChange:function(e){return n(null!=e?e:"")},min:r}))},rt=function(){return[(0,u.useSelect)((function(e){return e(m).getDateValue()})),(0,u.useDispatch)(m).setDateValue]},ot=function(){return(0,u.useSelect)((function(e){var t=e(l.STORE_NAME),n=t.getToday,r=t.getPost,o=e(m),i=o.getId,a=o.isNewPost,s=n(),u=r(i()),c=(0,ae.extractDateTimeValues)(null==u?void 0:u.date);return a()?s:it(s,null==c?void 0:c.dateValue)}))},it=function(e,t){return!t||e<t?e:t},at=n(4184),st=n.n(at),ut=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},ct=function(){var e=(0,u.useSelect)((function(e){return{referenceInput:e(m).getReferenceInput(),references:e(m).getReferences()}})),t=e.references,n=e.referenceInput,r=(0,u.useDispatch)(m),o=r.setReferenceInput,i=r.setReferences,l=(0,p.trim)(n),d=(0,ae.isUrl)(l)&&!t.some((function(e){return e.url===l}));return a.createElement("div",{className:"nelio-content-pqe-extra__references"},a.createElement("ul",{className:"nelio-content-pqe-extra__reference-list"},t.map((function(e,t){return a.createElement("li",{key:"nelio-content-reference-".concat(t)},a.createElement(s.ExternalLink,{href:e.url},e.title||e.url))}))),a.createElement("div",{className:"nelio-content-pqe-extra__new-reference"},a.createElement(s.TextControl,{autoComplete:"off",placeholder:(0,c._x)("Suggest reference…","user","nelio-content"),value:n,onChange:o}),a.createElement(s.Button,{variant:"secondary",onClick:function(){(0,ae.isUrl)(l)&&(i(ut(ut([],t,!0),[{url:l,title:""}],!1)),o(""))},disabled:!d},(0,c._x)("Add","command","nelio-content"))))};const lt=window.NelioContent.taskEditor;var dt,pt=function(){return pt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},pt.apply(this,arguments)},ft=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},mt=function(){var e=_t(),t=(0,u.useSelect)((function(e){return!!e(m).getTasks().length})),n=(0,u.useDispatch)(m),r=n.openTaskPresetLoader,o=n.setTasks,i=(0,u.useSelect)((function(e){return e(m).getTasks()})),s=vt(i),c=Et(),l=c[0],p=c[1];return a.createElement(d.TaskPresetLoader,{state:e,actions:t?"replace-or-merge":"add",selection:l,onUpdate:p,onCancel:function(){return r(!1)},onMerge:function(e){o(ft(ft([],i,!0),e.map(s("merge")).filter(ae.isDefined),!0)),r(!1)},onReplace:function(e){o(e.map(s("replace")).filter(ae.isDefined)),r(!1)}})},Et=function(){return[(0,u.useSelect)((function(e){return e(m).getTaskPresetSelection()})),(0,u.useDispatch)(m).selectTaskPresets]},vt=function(e){var t=(0,u.useSelect)((function(e){return{postAuthor:e(m).getAuthorId(),postId:e(m).getId(),postType:e(m).getPostType(),postDate:e(m).getDateValue()}})),n=t.postAuthor,r=t.postId,o=t.postType,i=t.postDate;return function(t){return function(a){var s,u,c=pt(pt({},(0,ae.createTask)()),{assigneeId:null!==(u=null!==(s=a.assigneeId)&&void 0!==s?s:n)&&void 0!==u?u:0,task:a.task,color:a.color,dateType:a.dateType,dateValue:a.dateValue,postId:r,postType:o,dateDue:(0,ae.getTaskDateDue)({baseDatetime:i||"now",dateType:a.dateType,dateValue:a.dateValue}),postAuthor:n}),l=(0,p.pick)(c,["assigneeId","task","dateType","dateValue"]);return"merge"===t&&(0,p.some)(e,(function(e){return(0,p.isEqual)(l,(0,p.pick)(e,(0,p.keys)(l)))}))?void 0:c}}},_t=function(){return(0,u.useSelect)((function(e){return e(m).isTaskPresetLoaderOpen()?"selection":void 0}))},ht=function(){return ht=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},ht.apply(this,arguments)},Tt=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},gt=function(){return a.createElement(yt,null)},yt=(0,l.withSubscriptionCheck)((function(){return a.createElement("div",{className:"nelio-content-pqe-extra__tasks"},a.createElement(St,null),a.createElement(kt,null),a.createElement(mt,null),a.createElement(lt.TaskEditor,null))})),St=function(){var e=(0,u.useSelect)((function(e){return e(m).getTasks()}));return a.createElement("ul",{className:"nelio-content-pqe-extra__task-list"},e.map((function(e){return a.createElement(bt,{key:"nelio-content-task-".concat(e.id),task:e})})))},kt=function(){var e=xt(),t=(0,u.useDispatch)(m).openTaskPresetLoader,n=(0,u.useDispatch)(lt.STORE_NAME).openNewTaskEditor,r=Ot().addTask,o=(0,u.useSelect)((function(e){return{canEditSettings:e(l.STORE_NAME).canCurrentUserManagePlugin(),hasTaskPresets:!!e(l.STORE_NAME).getTaskPresets().length,settingsUrl:e(l.STORE_NAME).getAdminUrl("/admin.php?page=nelio-content-settings&tab=task-presets")}})),i=o.canEditSettings,d=o.hasTaskPresets,p=o.settingsUrl;return a.createElement(a.Fragment,null,a.createElement("div",{className:"nelio-content-pqe-extra__task-list-actions"},d&&a.createElement(s.Button,{isSmall:!0,variant:"secondary",onClick:function(){return t(!0)}},(0,c._x)("Load Tasks","command","nelio-content")),a.createElement(s.Button,{isSmall:!0,variant:"secondary",onClick:function(){return n(ht(ht({},(0,ae.createTask)()),{dateType:"predefined-offset",dateValue:"0"}),{context:"post",post:e,onSave:r})}},(0,c._x)("Add Task","command","nelio-content"))),!d&&i&&a.createElement("div",{className:"nelio-content-pqe-extra__configure-task-presets"},a.createElement(s.ExternalLink,{href:p},(0,c._x)("Create reusable task presets now","user","nelio-content"))))},bt=function(e){var t,n=e.task,r=(0,l.useAuthorName)(n.assigneeId,(0,c._x)("Unknown Assignee","text","nelio-content")),o=(0,ae.getHumanDateDue)(void 0,n.dateType,n.dateValue),i=xt(),p=Ot(),f=p.editTask,m=p.deleteTask,E=(0,u.useDispatch)(lt.STORE_NAME).openExistingTaskEditor;return a.createElement("li",{className:st()("nelio-content-pqe-extra__task",(t={"nelio-content-pqe-extra__task--completed":!!n.completed},t["nelio-content-pqe-extra__task--is-".concat(n.color)]=!!n.color,t))},a.createElement("div",{className:st()("nelio-content-pqe-extra__task-desc",{"nelio-content-pqe-extra__task-desc--completed":!!n.completed})},n.task),a.createElement("div",{className:"nelio-content-pqe-extra__task-details"},"".concat(r," • ").concat(o)),a.createElement("div",{className:"nelio-content-pqe-extra__task-actions"},a.createElement(s.Button,{isSmall:!0,variant:"link",onClick:function(){return E(n,{post:i,context:"post",onSave:f})}},(0,c._x)("Edit","command","nelio-content")),a.createElement(d.DeleteButton,{isSmall:!0,onClick:function(){return m(n)}})))},xt=function(){return(0,u.useSelect)((function(e){return{id:0,title:e(m).getTitle(),type:e(m).getPostType()||"post",author:e(m).getAuthorId()||0,date:e(m).getDateValue(),status:e(m).getPostStatus()||e(m).getPostStatus()||"draft",viewLink:""}}))},Ot=function(){var e=(0,u.useSelect)((function(e){return e(m).getTasks()})),t=(0,u.useDispatch)(m).setTasks;return{addTask:function(n){return t(Tt(Tt([],e,!0),[n],!1))},editTask:function(n){return t((0,p.values)((0,p.keyBy)(Tt(Tt([],e,!0),[n],!1),"id")))},deleteTask:function(n){return t((0,p.without)(e,n))}}},Pt=null!==(dt=null===Ae.store||void 0===Ae.store?void 0:Ae.store.name)&&void 0!==dt?dt:"core",Nt=function(e){var t=e.showLabels,n=je(),r=Rt(),o=r[0],i=r[1];return a.createElement(a.Fragment,null,n.map((function(e){var n=e.slug,r=e.labels;return a.createElement(d.ItemSelectControl,{key:n,label:t?r.name:void 0,placeholder:r.search_items,kind:"taxonomy",name:n,value:(0,p.map)(o[n],"id"),onChange:i(n)})})))},Rt=function(){var e=je().map((function(e){return e.slug})),t=(0,u.useSelect)((function(t){var n=t(m).getPostTerms;return(0,p.zipObject)(e,e.map(n))})),n=(0,u.useDispatch)(m).setPostTerms,r=(0,u.select)(Pt).getEntityRecord;return[t,function(e){return function(t){return n(e,(0,p.map)(t,(o=e,function(e){var t,n,i;return{id:e,name:null!==(n=null===(t=r("taxonomy",o,e))||void 0===t?void 0:t.name)&&void 0!==n?n:"Term ".concat(e),slug:(null===(i=r("taxonomy",o,e))||void 0===i?void 0:i.slug)||"term-".concat(e)}})));var o}}]},At=function(){var e=Vt();return"none"===e?null:a.createElement(wt,{tab:e})},wt=function(e){var t=e.tab,n=It(t),r=qt(),o=(0,u.useDispatch)(m).setExtraInfoTab;return a.createElement("div",{className:"nelio-content-pqe-extra"},a.createElement("div",{className:"nelio-content-pqe-extra__tabs"},r.map((function(e){var n=e.name,r=e.title;return a.createElement("button",{key:n,title:r,className:st()("nelio-content-pqe-extra__tab",{"nelio-content-pqe-extra__tab--active":t===n}),onClick:function(){return o(n)}},r)}))),a.createElement("div",{className:"nelio-content-pqe-extra__content"},a.createElement(n,null)))},It=function(e){switch(e){case"tasks":return gt;case"references":return ct;case"taxonomies":return function(){return a.createElement(Nt,{showLabels:!0})}}},Vt=function(){return(0,u.useSelect)((function(e){return e(m).getExtraInfoTab()}))},qt=function(){var e=Le(),t={name:"taxonomies",title:(0,c._x)("Taxonomies","text","nelio-content")},n={name:"tasks",title:(0,c._x)("Tasks","text","nelio-content")},r={name:"references",title:(0,c._x)("References","text","nelio-content")};return e?[t,n,r]:[n,r]},Dt=function(){var e=Ct(),t=e[0],n=e[1],r=Ve();return a.createElement("div",{className:"nelio-content-post-quick-editor__title"},a.createElement(s.TextControl,{disabled:r,value:t,onChange:function(e){return n(e)},placeholder:(0,c._x)("Title…","text","nelio-content")}))},Ct=function(){return[(0,u.useSelect)((function(e){return e(m).getTitle()})),(0,u.useDispatch)(m).setTitle]},Mt=function(){var e=Lt(),t=e[0],n=e[1],r=Ve(),o=qe();return a.createElement("div",{className:"nelio-content-post-quick-editor__time"},a.createElement(d.TimeInput,{disabled:r||o,value:t,onChange:function(e){return n(null!=e?e:"")}}))},Lt=function(){return[(0,u.useSelect)((function(e){return e(m).getTimeValue()})),(0,u.useDispatch)(m).setTimeValue]},jt=function(){var e=Ut(),t=e[0],n=e[1],r=Bt(),o=Ve();return!Ce()||r.length<2?null:a.createElement("div",{className:"nelio-content-post-quick-editor__type"},a.createElement(s.SelectControl,{disabled:o,value:t,onChange:n,options:r}))},Ut=function(){return[(0,u.useSelect)((function(e){return e(m).getPostType()})),(0,u.useDispatch)(m).setPostType]},Bt=function(){return(0,u.useSelect)((function(e){return e(l.STORE_NAME).getPostTypes("create").map((function(e){var t=e.name;return{label:e.labels.singular,value:t}}))}))},Ft=function(){var e=Ht(),t=e[0],n=e[1],r=Kt(),o=Ve(),i=Yt();return a.createElement("div",{className:"nelio-content-post-quick-editor__status"},a.createElement(s.SelectControl,{disabled:o||i,value:t,onChange:n,options:r}))},Ht=function(){var e=(0,p.map)(Kt(),"value"),t=(0,u.useSelect)((function(e){return e(m).getPostStatus()})),n=(0,u.useDispatch)(m).setPostStatus;return(0,a.useEffect)((function(){(0,ae.hasHead)(e)&&(t&&e.includes(t)||n(e[0]))}),[e.join(","),t]),[t,n]},Kt=function(){var e,t=Yt(),n=(0,u.useSelect)((function(e){var t=e(l.STORE_NAME).getPostStatuses,n=(0,e(m).getPostType)();return(0,p.map)(n?t(n):[],(function(e){return{value:e.slug,label:e.name,disabled:!e.available}}))}));return t?[null!==(e=(0,p.find)(n,{value:ae.PUBLISHED}))&&void 0!==e?e:{value:ae.PUBLISHED,label:(0,c._x)("Published","text","nelio-content")}]:(0,p.filter)(n,(function(e){return"publish"!==e.value}))},Yt=function(){return(0,u.useSelect)((function(e){var t=(0,e(l.STORE_NAME).getPost)((0,e(m).getId)());return"publish"===(null==t?void 0:t.status)}))},Gt=function(e){var t=e.className,n=void 0===t?"":t,r=zt(),o=Wt(),i=Xt(),l=(0,u.useDispatch)(m).close,d=a.createElement(Jt,null);return r?o?a.createElement(s.Modal,{className:"nelio-content-post-quick-editor ".concat(n),title:(0,c._x)("Loading…","text","nelio-content"),isDismissible:!1,shouldCloseOnEsc:!1,shouldCloseOnClickOutside:!1,onRequestClose:l},a.createElement("div",{style:{display:"flex",justifyContent:"center"}},a.createElement(s.Spinner,null))):a.createElement(s.Modal,{className:"nelio-content-post-quick-editor ".concat(n),title:d,isDismissible:!1,shouldCloseOnEsc:!i,shouldCloseOnClickOutside:!1,onRequestClose:l},a.createElement("div",{className:"nelio-content-post-quick-editor__title-type-and-status"},a.createElement(Dt,null),a.createElement(jt,null),a.createElement(Ft,null)),a.createElement("div",{className:"nelio-content-post-quick-editor__author-and-datetime"},a.createElement($e,null),a.createElement(nt,null),a.createElement(Mt,null)),a.createElement(At,null),a.createElement(Oe,null),a.createElement(Be,null),a.createElement(We,null)):null},Jt=function(){var e=Qt();return a.createElement("div",{className:"nelio-content-post-quick-editor__header"},a.createElement("div",{className:"nelio-content-post-quick-editor__header-text"},e),a.createElement("div",{className:"nelio-content-post-quick-editor__header-help"},a.createElement(d.ContextualHelp,{context:"post-quick-editor",walkthrough:xe,autostart:!0})))},zt=function(){return(0,u.useSelect)((function(e){return e(m).isVisible()}))},Qt=function(){return(0,u.useSelect)((function(e){e(l.STORE_NAME),e(m);var t=e(m).isNewPost(),n=e(m).getPostType(),r=n&&e(l.STORE_NAME).getPostType(n);return r?t?r.labels.new:r.labels.edit:t?(0,c._x)("New post","text","nelio-content"):(0,c._x)("Edit post","text","nelio-content")}))},Xt=function(){return(0,u.useSelect)((function(e){return e(m).isSaving()}))},Wt=function(){var e=(0,u.useSelect)((function(e){return e(m).isNewPost()})),t=$t(),n=Zt();return!e&&(t||n)},Zt=function(){var e=(0,u.useDispatch)(m).setReferences,t=(0,u.useSelect)((function(e){var t=e(m).getId();return{references:e(l.STORE_NAME).getSuggestedReferences(t),isLoading:!e(l.STORE_NAME).hasFinishedResolution("getSuggestedReferences",[t])&&!e(l.STORE_NAME).hasResolutionFailed("getSuggestedReferences",[t]),isVisible:e(m).isVisible()}})),n=t.references,r=t.isLoading,o=t.isVisible;return(0,a.useEffect)((function(){o&&!r&&e(n)}),[o,e,JSON.stringify(n),r]),r},$t=function(){var e=(0,u.useDispatch)(m).setTasks,t=(0,u.useSelect)((function(e){var t=e(m).getId();return{tasks:e(l.STORE_NAME).getTasksRelatedToPost(t),isLoading:!e(l.STORE_NAME).hasFinishedResolution("getTasksRelatedToPost",[t])&&!e(l.STORE_NAME).hasResolutionFailed("getTasksRelatedToPost",[t]),isVisible:e(m).isVisible()}})),n=t.tasks,r=t.isLoading,o=t.isVisible;return(0,a.useEffect)((function(){o&&!r&&e(n)}),[o,e,JSON.stringify(n),r]),r}})();var o=NelioContent="undefined"==typeof NelioContent?{}:NelioContent;for(var i in r)o[i]=r[i];r.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();