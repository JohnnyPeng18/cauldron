(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["project"],{"109f":function(t,e,n){},1514:function(t,e,n){"use strict";var i=n("beb5"),s=n.n(i);s.a},"202f":function(t,e,n){"use strict";var i=n("f71d"),s=n.n(i);s.a},"2e08":function(t,e,n){var i=n("9def"),s=n("9744"),o=n("be13");t.exports=function(t,e,n,a){var r=String(o(t)),l=r.length,c=void 0===n?" ":String(n),u=i(e);if(u<=l||""==c)return r;var d=u-l,p=s.call(c,Math.ceil(d/c.length));return p.length>d&&(p=p.slice(0,d)),a?p+r:r+p}},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"39ad":function(t,e,n){"use strict";var i=n("8dec"),s=n.n(i);s.a},"44e7":function(t,e,n){},"4e87":function(t,e,n){"use strict";var i=n("ef5a"),s=n.n(i);s.a},"5fc9":function(t,e,n){"use strict";var i=n("9960"),s=n.n(i);s.a},"6a70":function(t,e,n){"use strict";var i=n("cbfe"),s=n.n(i);s.a},"6b54":function(t,e,n){"use strict";n("3846");var i=n("cb7c"),s=n("0bfb"),o=n("9e1e"),a="toString",r=/./[a],l=function(t){n("2aba")(RegExp.prototype,a,t,!0)};n("79e5")((function(){return"/a/b"!=r.call({source:"a",flags:"b"})}))?l((function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?s.call(t):void 0)})):r.name!=a&&l((function(){return r.call(this)}))},"839f":function(t,e,n){},"8b9e":function(t,e,n){"use strict";var i=n("b768"),s=n.n(i);s.a},"8dec":function(t,e,n){},9156:function(t,e,n){},"972c":function(t,e,n){"use strict";var i=n("d022"),s=n.n(i);s.a},9744:function(t,e,n){"use strict";var i=n("4588"),s=n("be13");t.exports=function(t){var e=String(s(this)),n="",o=i(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(n+=e);return n}},9960:function(t,e,n){},"9eab":function(t,e,n){"use strict";var i=n("44e7"),s=n.n(i);s.a},aab8:function(t,e,n){},b768:function(t,e,n){},b7bc:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Project"},[n("menu-strip",{staticClass:"Project__menuStrip",on:{"close-project":t.closeProject}}),n("div",{staticClass:"Project__verticalSeparator"}),n("run-strip",{staticClass:"Project__runStrip",on:{aborting:t.onAbortingRun,aborted:t.onAbortedRun,settings:t.onEditStepSettings}}),n("div",{staticClass:"Project__verticalSeparator"}),t.$store.getters.project?n("notebook",{on:{loaded:t.onNotebookLoaded}}):t._e(),t.stepToEdit?n("step-settings-modal",{attrs:{step:t.stepToEdit},on:{close:t.onStepSettingsChange}}):t._e(),t.$store.getters.savingFile?n("saver"):t._e(),t.loadingDisplayMessage?n("loader",{attrs:{message:t.loadingDisplayMessage}}):t._e()],1)},s=[],o=(n("7f7f"),n("ba6a")),a=n("ea2f"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"RunStrip"},[n("div",{staticClass:"RunStripStep__topBox"},[n("div",{staticClass:"RunStrip__scroller",class:t.getScrollerClasses("up"),on:{click:function(e){return t.scroll("up")}}},[n("i",{staticClass:"RunStrip__scrollerIcon material-icons md-24"},[t._v("arrow_drop_up")])])]),t._l(t.steps,(function(e,i){return i>=t.visibleIndex?n("run-strip-step",{attrs:{step:e,index:i},on:{aborting:t.onAborting,aborted:t.onAborted,settings:t.onEditSettings}}):t._e()})),n("div",{staticClass:"RunStrip__bottomBox"},[n("follow-toggle"),n("div",{staticClass:"RunStrip__scroller",class:t.getScrollerClasses("down"),on:{click:function(e){return t.scroll("down")}}},[n("i",{staticClass:"RunStrip__scrollerIcon material-icons md-24"},[t._v("arrow_drop_down")])])],1)],2)},l=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"RunStripStep",class:t.getStateClassesFor(""),on:{mouseover:function(e){return t.onToggleShow(!0,e)},mouseleave:function(e){return t.onToggleShow(!1,e)}}},[n("div",{staticClass:"RunStripStep__box",on:{click:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])?null:"button"in e&&0!==e.button?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.focusOnStep(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])?null:"button"in e&&0!==e.button?null:e.shiftKey?e.ctrlKey||e.altKey||e.metaKey?null:t.queueStepToRun(e):null}],dblclick:t.queueStepToRun}},[n("i",{staticClass:"material-icons md-14 RunStripStep__icon",class:{"RunStripStep__icon--swirl":t.isRunning}},[t._v(t._s(t.stepIcon))]),n("div",{staticClass:"RunStripStep__label"},[t._v(t._s(t.stepId))])]),t.show?n("div",{staticClass:"RunStripStep__overlay",class:t.getStateClassesFor("overlay")},[n("div",{staticClass:"RunStripStep__infoRow"},[n("div",{staticClass:"RunStripStep__name"},[t._v(t._s(t.step.name))])]),n("div",{staticClass:"RunStripStep__actionsRow"},[t.isRunning?n("div",{staticClass:"RunStripStep__button",on:{click:t.abortStep}},[n("i",{staticClass:"material-icons"},[t._v("cancel")])]):t._e()]),n("div",{staticClass:"RunStripStep__actionsRow"},[t.isQueued||t.isRunning?t._e():n("div",{staticClass:"RunStripStep__button",on:{click:t.queueStepToRun}},[n("i",{staticClass:"material-icons"},[t._v("play_arrow")])]),t.isAnyRunning&&t.isQueued&&!t.isRunning?n("div",{staticClass:"RunStripStep__button",on:{click:t.abortStep}},[n("i",{staticClass:"material-icons"},[t._v("highlight_off")])]):t._e(),t.isAnyRunning?t._e():n("div",{staticClass:"RunStripStep__button",on:{click:t.runStepsFromStart}},[n("i",{staticClass:"material-icons"},[t._v("keyboard_capslock")])]),t.isAnyRunning?t._e():n("div",{staticClass:"RunStripStep__button",on:{click:t.runStepsFromHere}},[n("i",{staticClass:"material-icons",staticStyle:{transform:"rotate(180deg)"}},[t._v("keyboard_capslock")])]),n("div",{staticClass:"RunStripStep__spacer"}),t.isAnyRunning?t._e():n("div",{staticClass:"RunStripStep__button",on:{click:t.editStepSettings}},[n("i",{staticClass:"material-icons"},[t._v("settings")])])])]):t._e()])},u=[],d=(n("c5f6"),n("6b54"),n("f576"),n("5843")),p=n("3fa3"),f=n("025e");function m(t){var e=this;clearTimeout(this.delayTimeout),this.delayTimeout=setTimeout((function(){e.show=t}),t?0:50)}function v(){var t=(this.index+1).toString().padStart(2,"0");return"S".concat(t)}function _(){var t=this;this.$emit("focus",{step:this.step,index:this.index}),this.show=!this.show,p["a"].scrollToStep(this.step.name);var e=d["a"].getSelectedStep();return e&&e.name===this.step.name?Promise.resolve():(this.warmingSelected=!0,o["a"].execute('steps select "'.concat(this.step.name)).then((function(){return o["a"].markStatusDirty()})).then((function(){return f["a"].thenWait(1e3)})).then((function(){t.warmingSelected=!1})))}function h(){var t=this;return this.isRunning?(d["a"].clearQueue(),this.$emit("aborting",{step:this.step,index:this.index}),o["a"].abortExecution().then((function(e){return t.$emit("aborted",{response:e,step:t.step,index:t.index})}))):(d["a"].removeStepFromQueue(this.step.name),Promise.resolve())}function g(){return d["a"].isStepQueued(this.step.name)}function S(){return this.show=!1,d["a"].queueStepToRun(this.step.name),o["a"].markStatusDirty(),Promise.resolve()}function b(){this.show=!1;var t=(this.$store.getters.project||{}).steps||[],e=o["a"].runStep(t[0].name);return d["a"].addToQueue(t.slice(1,this.index+1).map((function(t){return t.name}))),e}function C(){this.show=!1;var t=(this.$store.getters.project||{}).steps||[],e=o["a"].runStep(this.step.name);return d["a"].addToQueue(t.slice(this.index+1).map((function(t){return t.name}))),e}function y(){var t=this.step,e=[{id:"unknown",value:!t},{id:"queued",value:this.isQueued},{id:"running",value:this.isRunning},{id:"muted",value:t.status.muted},{id:"error",value:t.status.error},{id:"dirty",value:t.status.run&&t.status.dirty},{id:"clean",value:t.status.run},{id:"untouched",value:!0}];return e.filter((function(t){return t.value}))[0]}function x(){for(var t=this,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return n.reduce((function(e,n){return e||t.state.id===n}),!1)}function w(){return this.$store.getters.runningStepName===this.step.name||this.step.status.running}function M(){return this.isRunning||this.$store.getters.running}function k(){this.$emit("settings",{step:this.step})}function R(){var t={unknown:"help",running:"sync",muted:"sync_disabled",queued:"query_builder",error:"error",untouched:"radio_button_unchecked",dirty:"sentiment_very_dissatisfied",clean:"sentiment_very_satisfied"};return t[this.state.id]}function j(t){var e=this.step,n=t&&t.length>0?"__".concat(t):"",i="RunStripStep".concat(n,"--").concat(this.state.id),s="".concat(i,"Selected"),o=this.warmingSelected||e.status.selected;return o?[s]:[i]}function D(){return{show:!1,warmingSelected:!1,delayTimeout:null}}var $={name:"RunStripStep",props:{step:{type:Object,default:function(){}},index:{type:Number,default:0}},data:D,computed:{stepId:v,stepIcon:R,isAnyRunning:M,isRunning:w,isQueued:g,state:y},methods:{abortStep:h,editStepSettings:k,focusOnStep:_,getStateClassesFor:j,isState:x,onToggleShow:m,queueStepToRun:S,runStepsFromHere:C,runStepsFromStart:b}},T=$,O=(n("b883"),n("2877")),P=Object(O["a"])(T,c,u,!1,null,"42529048",null),F=P.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right",delay:[200,0]},expression:"{ placement: 'right', delay: [200, 0] }"}],staticClass:"FollowToggle",attrs:{content:"Follow Step Changes"},on:{click:t.onClick}},[n("i",{staticClass:"material-icons md-18"},[t._v(t._s(t.icon))])])},E=[];function B(){return this.$store.getters.followSteps}function N(){return this.following?"visibility":"visibility_off"}function I(){this.$store.commit("followSteps",!this.following)}function L(){return{}}var q={name:"FollowToggle",data:L,computed:{following:B,icon:N},methods:{onClick:I}},K=q,Q=(n("9eab"),Object(O["a"])(K,A,E,!1,null,"37f99642",null)),V=Q.exports;function J(t){var e=(this.steps||[]).length,n=Math.min(5,Math.ceil(e/5)),i="down"===t?n:-1*n;this.visibleIndex=Math.max(0,Math.min(e-5,this.visibleIndex+i))}function H(t){var e=this.visibleIndex,n=["RunStrip","__scroller","--"];if("up"===t)n.push(e>0?"enabled":"disabled");else{var i=Math.max(0,(this.steps||[]).length-5);n.push(e<i?"enabled":"disabled")}return n.join("")}function Y(){return(this.$store.getters.project||{}).steps||[]}function z(t){this.$emit("aborting",t)}function U(t){this.$emit("aborted",t)}function W(t){this.$emit("settings",t)}function G(){return{visibleIndex:0}}var X={name:"RunStrip",components:{FollowToggle:V,RunStripStep:F},data:G,computed:{steps:Y},methods:{onAborted:U,onAborting:z,onEditSettings:W,scroll:J,getScrollerClasses:H}},Z=X,tt=(n("1514"),Object(O["a"])(Z,r,l,!1,null,"42d4d6ed",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MenuStrip",class:{"MenuStrip--locked":t.running}},[n("menu-strip-item",{attrs:{icon:"folder_open",title:"Project"}},[n("project-menu-overlay",{on:{action:t.onAction}})],1),n("menu-strip-item",{attrs:{icon:"dns",title:"Steps"}},[n("step-menu-overlay",{on:{action:t.onAction}})],1)],1)},it=[],st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ProjectMenuOverlay"},[n("menu-button",{attrs:{icon:"refresh",label:"Refresh Notebook Display"},on:{click:t.refreshDisplay}}),n("menu-button",{attrs:{icon:"folder",label:"Explore Directory"},on:{click:t.openDirectory}}),n("menu-button",{attrs:{icon:"save_alt",label:"Save As Reader File"},on:{click:t.saveReaderFile}}),n("div",{staticClass:"ProjectMenuOverlay__separator"}),n("menu-button",{attrs:{icon:"close",label:"Close Project"},on:{click:t.closeProject}})],1)},ot=[],at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MenuButton",on:{click:t.onClick}},[n("i",{staticClass:"material-icons md-18 MenuButton__icon",class:{"MenuButton__icon--flipped":t.flipped}},[t._v(t._s(t.icon))]),n("div",{staticClass:"MenuButton__label"},[t._v(t._s(t.label))])])},rt=[];function lt(t){this.$emit("click",t)}function ct(){return{}}var ut={name:"MenuButton",props:{icon:{type:String,default:"question"},label:{type:String,default:"Menu Button"},flipped:{type:Boolean,default:!1}},data:ct,methods:{onClick:lt}},dt=ut,pt=(n("cb23"),Object(O["a"])(dt,at,rt,!1,null,"6995103d",null)),ft=pt.exports,mt=n("a620");function vt(){this.show=!1,mt["a"].$emit("refresh-notebook")}function _t(){this.show=!1,this.$store.commit("savingFile",!0)}function ht(){return this.show=!1,o["a"].execute("show files")}function gt(){return{show:!1}}function St(){this.$emit("action",{action:"close-project"})}var bt={name:"ProjectMenuOverlay",components:{MenuButton:ft},data:gt,methods:{closeProject:St,openDirectory:ht,refreshDisplay:vt,saveReaderFile:_t}},Ct=bt,yt=(n("39ad"),Object(O["a"])(Ct,st,ot,!1,null,"8e06e850",null)),xt=yt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"StepMenuOverlay"},[n("menu-button",{attrs:{icon:"playlist_add",flipped:!0,label:"Insert Before"},on:{click:function(e){return t.insertStep("before")}}}),n("menu-button",{attrs:{icon:"playlist_add",label:"Insert After"},on:{click:function(e){return t.insertStep("after")}}}),n("div",{staticClass:"StepMenuOverlay__separator"}),n("menu-button",{attrs:{icon:"sentiment_satisfied",label:"Clear Unhappy Faces"},on:{click:t.cleanStepStatuses}})],1)},Mt=[],kt=n("c0d6");function Rt(t,e){var n=kt["a"].getters.loading||[];kt["a"].commit("loading",n.concat([{message:e}]))}function jt(t){var e=kt["a"].getters.loading||[],n=e.filter((function(e){return null!==t&&t!==e.id}));kt["a"].commit("loading",n)}var Dt={show:Rt,hide:jt};function $t(){return{}}function Tt(){var t=this;return this.$parent.show=!1,o["a"].execute("steps clean").then((function(e){return e.data.success?(t.$store.commit("project",e.data.data.project),e):e}))}function Ot(t){Dt.show("INSERT_STEP","Adding new step"),this.$parent.show=!1;var e=this.$store.getters.project.steps,n=e.reduce((function(t,e,n){var i=e.status.selected;return i?n:t}),0),i="before"===t?-1:0,s=n+i,a=s>=0?e[s].name:"0";return o["a"].execute('steps add --position="'.concat(a,'"')).then((function(t){var e=t.data;return p["a"].applyStepModifications(e.data.step_renames,e.data.step_changes)})).then((function(){o["a"].markStatusDirty(),Dt.hide("INSERT_STEP")}))}var Pt={name:"StepMenuOverlay",components:{MenuButton:ft},data:$t,methods:{insertStep:Ot,cleanStepStatuses:Tt}},Ft=Pt,At=(n("efe9"),Object(O["a"])(Ft,wt,Mt,!1,null,"09b4d820",null)),Et=At.exports,Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MenuStripItem",on:{click:function(e){return t.onToggleShow(null,0)},mouseover:t.onMouseOver,mouseleave:function(e){return t.onToggleShow(!1,300)}}},[n("div",{staticClass:"MenuStripItem__box",class:t.boxClasses},[n("i",{staticClass:"material-icons md-18"},[t._v(t._s(t.icon))])]),t.show?n("div",{staticClass:"MenuStripItem__overlay"},[n("div",{staticClass:"MenuStripItem__titleBox"},[n("div",{staticClass:"MenuStripItem__title"},[t._v(t._s(t.title))])]),n("div",{staticClass:"MenuStripItem__customBox"},[t._t("default")],2)]):t._e()])},Nt=[];function It(){return{show:!1,delayTimeout:null}}function Lt(){var t="MenuStripItem__box",e=this.show?"opened":"closed";return"".concat(t,"--").concat(e)}function qt(){this.show&&clearTimeout(this.delayTimeout)}function Kt(t,e){var n=this,i=null===t?!this.show:t;clearTimeout(this.delayTimeout),this.delayTimeout=setTimeout((function(){n.show=i}),e)}var Qt={name:"MenuStripItem",props:{icon:{type:String,default:"home"},title:{type:String,default:"Menu"}},data:It,computed:{boxClasses:Lt},methods:{onToggleShow:Kt,onMouseOver:qt}},Vt=Qt,Jt=(n("5fc9"),Object(O["a"])(Vt,Bt,Nt,!1,null,"1bef36a4",null)),Ht=Jt.exports;function Yt(t){this.$emit(t.action,t)}function zt(){var t=this.$store.getters.queuedStepsToRun||[];return this.$store.getters.running||t.length>0}var Ut={name:"MenuStrip",components:{MenuStripItem:Ht,StepMenuOverlay:Et,ProjectMenuOverlay:xt},computed:{running:zt},methods:{onAction:Yt}},Wt=Ut,Gt=(n("f7ff"),Object(O["a"])(Wt,nt,it,!1,null,"100326dc",null)),Xt=Gt.exports,Zt=n("8ce8"),te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"StepSettingsModal"},[n("modal-scrim",{attrs:{message:t.loadingMessage},on:{click:t.onCancel}}),t.confirmingDelete||t.loadingMessage?t._e():n("div",{staticClass:"StepSettingsModal__modal"},[n("div",{staticClass:"StepSettingsModal__title"},[t._v('Modify Step "'+t._s(t.step.name)+'"')]),n("div",{staticClass:"StepSettingsModal__inputBox"},[n("div",{staticClass:"StepSettingsModal__header"},[t._v("Step Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.stepSuffix,expression:"stepSuffix"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"Step Name..."},domProps:{value:t.stepSuffix},on:{input:function(e){e.target.composing||(t.stepSuffix=e.target.value)}}})]),n("div",{staticClass:"StepSettingsModal__inputBox"},[n("div",{staticClass:"StepSettingsModal__header"},[t._v("File Type")]),n("div",{staticClass:"select is-small"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.extension,expression:"extension"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.extension=e.target.multiple?n:n[0]}}},t._l(t.fileTypes,(function(e){return n("option",{domProps:{value:e.extension}},[t._v(t._s(e.label))])})),0)])]),n("div",{staticClass:"StepSettingsModal__inputBox"},[n("div",{staticClass:"StepSettingsModal__header"},[t._v("Located After")]),n("div",{staticClass:"select is-small"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.location=e.target.multiple?n:n[0]}}},t._l(t.locations,(function(e){return n("option",{domProps:{value:e.id}},[t._v(t._s(e.label))])})),0)])]),n("div",{staticClass:"StepSettingsModal__buttonBox"},[t.allowDelete?n("div",{staticClass:"StepSettingsModal__button button is-small is-danger",on:{click:t.onDelete}},[t._v("Remove")]):t._e(),n("div",{staticClass:"StepSettingsModal__spacer"}),n("div",{staticClass:"StepSettingsModal__button button is-small",on:{click:t.onCancel}},[t._v("Cancel")]),n("div",{staticClass:"StepSettingsModal__button button is-small is-success",on:{click:t.onApply}},[t._v("Apply")])])]),t.confirmingDelete&&!t.loadingMessage?n("delete-confirmation",{attrs:{step:t.step},on:{confirmed:t.onDeleteConfirmed}}):t._e()],1)},ee=[],ne=(n("a481"),n("ac6a"),n("456d"),n("bd86")),ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ModalScrim",on:{click:t.onClick}},[t.message?n("div",{staticClass:"ModalScrim__loadingBox"},[n("spinner",{attrs:{theme:"dark"}}),n("div",{staticClass:"ModalScrim__loadingMessage"},[t._v(t._s(t.message))])],1):t._e()])},se=[],oe=n("8382");function ae(t){this.$emit("click",t)}function re(){return{}}var le={name:"ModalScrim",components:{Spinner:oe["a"]},props:{message:{type:String,default:null}},data:re,methods:{onClick:ae}},ce=le,ue=(n("4e87"),Object(O["a"])(ce,ie,se,!1,null,"063cf418",null)),de=ue.exports,pe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DeleteConfirmation"},[n("div",{staticClass:"DeleteConfirmation__title"},[t._v("Confirm Step Removal")]),n("div",{staticClass:"DeleteConfirmation__messageBox"},[t._v('Are you sure you want to remove the "'+t._s(t.step.name)+'" step from this project?\nThis action cannot be undone.')]),n("div",{staticClass:"DeleteConfirmation__inputBox"},[n("label",{staticClass:"checkbox is-small"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.removeDeletedFile,expression:"removeDeletedFile"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.removeDeletedFile)?t._i(t.removeDeletedFile,null)>-1:t.removeDeletedFile},on:{change:function(e){var n=t.removeDeletedFile,i=e.target,s=!!i.checked;if(Array.isArray(n)){var o=null,a=t._i(n,o);i.checked?a<0&&(t.removeDeletedFile=n.concat([o])):a>-1&&(t.removeDeletedFile=n.slice(0,a).concat(n.slice(a+1)))}else t.removeDeletedFile=s}}}),n("span",[t._v("Delete source file as well")])])]),n("div",{staticClass:"DeleteConfirmation__buttonBox"},[n("div",{staticClass:"DeleteConfirmation__spacer"}),n("div",{staticClass:"DeleteConfirmation__button button is-small",on:{click:function(e){return t.onConfirm(!1,e)}}},[t._v("Cancel")]),n("div",{staticClass:"DeleteConfirmation__button button is-small is-danger",on:{click:function(e){return t.onConfirm(!0,e)}}},[t._v("Delete")])])])},fe=[];function me(){return{removeDeletedFile:!0}}function ve(t,e){this.$emit("confirmed",{confirmed:t,event:e,removeDeletedFile:this.removeDeletedFile})}var _e={name:"DeleteConfirmation",props:{step:{type:Object,default:function(){}}},data:me,methods:{onConfirm:ve}},he=_e,ge=(n("6a70"),Object(O["a"])(he,pe,fe,!1,null,"384098dd",null)),Se=ge.exports;function be(){return((this.$store.getters.project||{}).steps||[]).length>1}function Ce(){this.confirmingDelete=!0}function ye(t){var e=this;if(this.confirmingDelete=!1,!t.confirmed)return Promise.resolve();this.loadingMessage='Removing "'.concat(this.step.name,'" step');var n=["steps remove",'"'.concat(this.step.name,'"'),t.removeDeletedFile?"":" --keep"];return o["a"].execute(n.filter((function(t){return t.length>0})).join(" ")).then((function(t){if(!t.data.success)return Promise.resolve();var e=t.data;return p["a"].applyStepModifications(e.data.step_renames,e.data.step_changes)})).finally((function(){e.$emit("close",{action:"deleted"})}))}function xe(){this.$emit("close",{})}function we(){var t=this.initialValues.prefix,e=this.stepSuffix.length>0?"-":"";return"".concat(t).concat(e).concat(this.stepSuffix,".").concat(this.extension)}function Me(){var t=this,e=[{key:"newName",after:this.stepName,before:this.step.name},{key:"newTitle",after:this.title,before:this.initialValues.title},{key:"newLocation",after:this.location,before:this.initialValues.location}].filter((function(t){return t.after!==t.before})).reduce((function(t,e){return Object.assign(t,Object(ne["a"])({},e.key,e.after))}),{}),n=Object.keys(e).length>0;if(!n)return this.$emit("close",{}),Promise.resolve();this.loadingMessage='Updating step "'.concat(e.newName||this.step.name,'"');var i=["steps modify",'"'.concat(this.step.name,'"'),e.newName?'--name="'.concat(e.newName,'"'):"",e.newTitle?'--title="'.concat(e.newTitle,'"'):"",e.newLocation?'--position="'.concat(e.newLocation,'"'):""];return o["a"].execute(i.filter((function(t){return t.length>0})).join(" ")).then((function(t){if(!t.data.success)return Promise.resolve();var e=t.data;return p["a"].applyStepModifications(e.data.step_renames,e.data.step_changes)})).finally((function(){t.loadingMessage=null,t.$emit("close",{})}))}function ke(){return{initialValues:{},stepSuffix:null,title:null,extension:null,location:"0",fileTypes:[{label:"Python (*.py)",extension:"py"},{label:"Markdown (*.md)",extension:"md"},{label:"HTML (*.html)",extension:"html"},{label:"JavaScript (*.js)",extension:"js"},{label:"JSON (*.json)",extension:"json"}],locations:[],confirmingDelete:!1,loadingMessage:null}}function Re(){var t=this.step,e=(this.$store.getters.project||{}).steps||[],n=(t||{}).exploded_name||{},i=0===t.index?"0":e[t.index-1].name,s=t.name.replace("".concat(n.name,".").concat(n.extension),"").replace(/-$/,""),o={location:i,prefix:s,suffix:n.name,title:t.title,extension:n.extension};this.initialValues=o,this.title=o.title,this.stepSuffix=o.suffix,this.extension=o.extension,this.location=o.location;var a=((this.$store.getters.project||{}).steps||[]).map((function(t){return{label:t.name,id:t.name}})).filter((function(e){return e.label!==t.name}));a.unshift({label:"Beginning (First step)",id:"0"}),this.locations=a}var je={name:"StepSettingsModal",components:{DeleteConfirmation:Se,ModalScrim:de},props:{step:{type:Object,default:function(){}}},data:ke,computed:{allowDelete:be,stepName:we},mounted:Re,methods:{onCancel:xe,onApply:Me,onDelete:Ce,onDeleteConfirmed:ye}},De=je,$e=(n("202f"),Object(O["a"])(De,te,ee,!1,null,"049a8864",null)),Te=$e.exports,Oe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Saver"},[n("modal-scrim",{staticClass:"Saver__scrim",attrs:{message:t.loadingMessage},on:{click:t.onDone}}),!t.location||t.loadingMessage||t.saveComplete||t.confirmingOverwrite?t._e():n("div",{staticClass:"Saver__modal"},[n("div",{staticClass:"Saver__title"},[t._v("Save Cauldron Notebook As...")]),n("browser",{staticClass:"Saver__browser",attrs:{location:t.location,"extra-locations":t.extraLocations,extensions:[".cauldron"]},on:{select:t.onBrowseSelected}}),n("div",{staticClass:"Saver__inputBox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.filename,expression:"filename"}],staticClass:"Saver__input input is-small",attrs:{type:"text",placeholder:"File Name"},domProps:{value:t.filename},on:{input:function(e){e.target.composing||(t.filename=e.target.value)}}}),n("button",{staticClass:"Saver__button button is-small",on:{click:t.onDone}},[t._v("Cancel")]),n("button",{staticClass:"Saver__button button is-small is-primary",on:{click:function(e){return t.onSave(!1)}}},[t._v("Save")])])],1),t.saveComplete?n("alert-dialog",{attrs:{title:"Save Complete",message:"You're notebook has been successfully saved to"},on:{ok:t.onDone}},[n("div",{staticClass:"Saver__path"},[t._v(t._s(t.getOutputPath(!0)))])]):t._e(),t.confirmingOverwrite?n("confirm-dialog",{attrs:{title:"Confirm Overwrite",message:"Are you sure you want to overwrite the existing file?"},on:{yes:function(e){return t.onSave(!0)},no:function(e){t.confirmingOverwrite=!1}}}):t._e()],1)},Pe=[],Fe=(n("6762"),n("2fdb"),n("aef6"),n("25a8")),Ae=n("5989"),Ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ConfirmDialog"},[n("div",{staticClass:"ConfirmDialog__title"},[t._v(t._s(t.title))]),t.message&&t.message.length>0?n("div",{staticClass:"ConfirmDialog__message"},[t._v(t._s(t.message))]):t._e(),n("div",{staticClass:"ConfirmDialog__slot"},[t._t("default")],2),n("div",{staticClass:"ConfirmDialog__buttonBox"},[n("div",{staticClass:"ConfirmDialog__spacer"}),n("button",{staticClass:"ConfirmDialog__button button is-small",on:{click:t.onNo}},[t._v(t._s(t.noLabel))]),n("button",{staticClass:"ConfirmDialog__button button is-small",on:{click:t.onYes}},[t._v(t._s(t.yesLabel))])])])},Be=[];function Ne(){return{}}function Ie(){this.$emit("yes")}function Le(){this.$emit("no")}var qe={name:"ConfirmDialog",props:{title:{type:String,default:"Confirm"},message:{type:String,default:null},yesLabel:{type:String,default:"OK"},noLabel:{type:String,default:"Cancel"}},data:Ne,methods:{onYes:Ie,onNo:Le}},Ke=qe,Qe=(n("ff58"),Object(O["a"])(Ke,Ee,Be,!1,null,"5484a16e",null)),Ve=Qe.exports;function Je(){this.$store.commit("savingFile",!1)}function He(t){var e=this;this.confirmingOverwrite=!1;var n=this.outputFilename,i=this.location.current_files.filter((function(t){return t.name===n})).length>0;return console.log(i,n,this.location.current_files),!t&&i?(this.confirmingOverwrite=!0,Promise.resolve()):(this.loadingMessage='Saving notebook "'.concat(n,'"'),o["a"].execute('save "'.concat(this.getOutputPath(!1),'"')).then((function(){e.loadingMessage=null,e.saveComplete=!0})))}function Ye(t){var e=this,n=t.type;return"file"===n?(this.filename=t.value.name,Promise.resolve()):o["a"].execute('cd "'.concat(t.value.directory,'"')).then((function(t){t.data.success&&(e.location=t.data.data)}))}function ze(){return{extraLocations:[],location:null,filename:null,loadingMessage:null,saveComplete:!1,confirmingOverwrite:!1}}function Ue(){return this.filename.endsWith(".cauldron")?this.filename:"".concat(this.filename,".cauldron")}function We(t){var e=this.location||{},n=t?e.shortened_directory:e.current_directory,i=(n||"").includes("\\")?"\\":"/";return"".concat(n||"").concat(i).concat(this.outputFilename)}function Ge(){var t=this,e=this.$store.getters.project||{};this.filename="".concat(e.title||"unknown-project",".cauldron");var n=e.remote_source_directory||e.source_directory;return this.extraLocations=[{directory:n,label:"Project Directory"}],o["a"].execute('ls "'.concat(n,'"')).then((function(e){t.location=e.data.data}))}var Xe={name:"Saver",components:{ConfirmDialog:Ve,AlertDialog:Ae["a"],ModalScrim:de,Browser:Fe["a"],Spinner:oe["a"]},data:ze,computed:{outputFilename:Ue},mounted:Ge,methods:{onDone:Je,onSave:He,onBrowseSelected:Ye,getOutputPath:We}},Ze=Xe,tn=(n("972c"),Object(O["a"])(Ze,Oe,Pe,!1,null,"0e35dd74",null)),en=tn.exports;function nn(){if(this.loadingMessage)return this.loadingMessage;var t=(((this.$store.getters.status||{}).data||{}).remote||{}).sync||{};return t.active?"Synchronizing local files to remote kernel":null}function sn(){var t=this;return document.title="Cauldron",this.loadingMessage="Closing Project",o["a"].execute("close").then((function(){t.$store.commit("project",null),t.$store.commit("previousStepChanges",{}),o["a"].markStatusDirty()}))}function on(t){this.loadingMessage='Aborting "'.concat(t.step.name,'" Execution')}function an(){this.loadingMessage=null}function rn(t){this.loadingMessage=t.value?null:"Refreshing notebook"}function ln(){this.stepToEdit=null}function cn(t){this.stepToEdit=t.step}function un(){return{loadingMessage:null,stepToEdit:null}}function dn(){var t=this,e=this.$store.getters.project;return e?(document.title=e.title,Promise.resolve()):(this.loadingMessage="Establishing project state.",o["a"].updateStatus().then((function(){var e=t.$store.getters.project;document.title=e.title,t.loadingMessage="Initializing project display"})))}var pn={name:"Project",components:{StepSettingsModal:Te,Notebook:Zt["a"],Loader:a["a"],MenuStrip:Xt,RunStrip:et,Saver:en},data:un,computed:{loadingDisplayMessage:nn},mounted:dn,methods:{closeProject:sn,onNotebookLoaded:rn,onAbortingRun:on,onAbortedRun:an,onStepSettingsChange:ln,onEditStepSettings:cn}},fn=pn,mn=(n("8b9e"),Object(O["a"])(fn,i,s,!1,null,"a8d4e950",null));e["default"]=mn.exports},b883:function(t,e,n){"use strict";var i=n("fe82"),s=n.n(i);s.a},beb5:function(t,e,n){},cb23:function(t,e,n){"use strict";var i=n("9156"),s=n.n(i);s.a},cbfe:function(t,e,n){},d022:function(t,e,n){},ef5a:function(t,e,n){},efe9:function(t,e,n){"use strict";var i=n("839f"),s=n.n(i);s.a},f576:function(t,e,n){"use strict";var i=n("5ca1"),s=n("2e08"),o=n("a25f"),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);i(i.P+i.F*a,"String",{padStart:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},f71d:function(t,e,n){},f7ff:function(t,e,n){"use strict";var i=n("aab8"),s=n.n(i);s.a},fe82:function(t,e,n){},ff58:function(t,e,n){"use strict";var i=n("109f"),s=n.n(i);s.a}}]);
//# sourceMappingURL=project.fac5d5de.js.map