(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["create~project"],{"07b9":function(t,e,n){},1676:function(t,e,n){"use strict";var o=n("fd3f"),i=n.n(o);i.a},"1d85":function(t,e,n){"use strict";var o=n("78a5"),i=n.n(o);i.a},"25a8":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Browser"},[n("div",{staticClass:"Browser__toolbar"},[t._l(t.location.standard_locations,(function(e){return n("standard-path-button",{attrs:{value:e},on:{select:t.onSelect}})})),t._l(t.extraLocations,(function(e){return n("standard-path-button",{attrs:{value:e},on:{select:t.onSelect}})}))],2),n("div",{staticClass:"Browser__path"},[t._v(t._s(t.location.current_directory))]),n("div",{ref:"scroller",staticClass:"Browser__box"},[t.showFolders?n("div",{staticClass:"Browser__folders"},[t.location.parent_directory?n("folder",{attrs:{value:t.parentFolder},on:{select:t.onSelect}}):t._e(),t._l(t.foldersToShow,(function(e){return n("folder",{attrs:{value:e},on:{select:t.onSelect}})})),t.projectSelection&&t.location.spec?n("project-folder",{attrs:{location:t.location},on:{select:t.onSelect}}):t._e()],2):t._e(),t.showFiles?n("div",{staticClass:"Browser__files"},t._l(t.filesToShow,(function(e){return n("file",{attrs:{value:e},on:{select:t.onSelect}})})),1):t._e(),n("div",{staticClass:"Browser__padding"})])])},i=[],r=(n("7f7f"),n("aef6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Folder",on:{click:t.onClick}},[n("i",{staticClass:"Folder__icon material-icons md-14"},[t._v(t._s(t.icon))]),n("div",{staticClass:"Folder__label"},[t._v(t._s(t.value.folder))])])}),a=[];function s(){return{}}function l(){return this.value.spec?"folder_open":"folder"}function c(t){this.$emit("select",{event:t,value:this.value,type:"folder"})}var u={name:"Folder",props:{value:{type:Object,default:function(){}},highlightProject:{type:Boolean,default:!1}},data:s,computed:{icon:l},methods:{onClick:c}},d=u,f=(n("1676"),n("2877")),v=Object(f["a"])(d,r,a,!1,null,"84006e5e",null),h=v.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ProjectFolder",on:{click:t.onClick}},[n("i",{staticClass:"ProjectFolder__icon material-icons md-14"},[t._v("open_in_browser")]),n("div",{staticClass:"ProjectFolder__label"},[t._v(t._s(t.location.spec.name||t.location.spec.id))])])},_=[];function m(){return{}}function b(t){this.$emit("select",{event:t,value:this.location,type:"project"})}var g={name:"ProjectFolder",props:{location:{type:Object,default:function(){}}},data:m,methods:{onClick:b}},C=g,w=(n("34c8"),Object(f["a"])(C,p,_,!1,null,"70fb8706",null)),y=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"File",on:{click:t.onClick}},[n("i",{staticClass:"File__icon material-icons md-14"},[t._v(t._s(t.icon))]),n("div",{staticClass:"File__label"},[t._v(t._s(t.value.name))])])},S=[];n("28a5");function $(){return{}}function j(){var t=((this.file||{}).name||"").split(".").slice(-1)[0].toLocaleLowerCase();return"cauldron"===t?"chrome_reader_mode":"insert_drive_file"}function x(t){var e=((this.file||{}).name||"").split(".").slice(-1)[0].toLocaleLowerCase();this.$emit("select",{event:t,value:this.value,type:"file",isReaderFile:"cauldron"===e})}var F={name:"File",props:{value:{type:Object,default:function(){}}},data:$,computed:{icon:j},methods:{onClick:x}},L=F,B=(n("1d85"),Object(f["a"])(L,k,S,!1,null,"c353654a",null)),O=B.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"top"},expression:"{ placement: 'top' }"}],staticClass:"StandardPathButton",attrs:{content:t.value.label},on:{click:t.onClick}},[t.icon?n("i",{staticClass:"StandardPathButton__icon material-icons md-14"},[t._v(t._s(t.icon))]):t._e(),t.icon?t._e():n("div",{staticClass:"StandardPathButton__label"},[t._v(t._s(t.firstCharacter))])])},A=[];n("6762"),n("2fdb");function N(){var t=(this.value.label||"").toLocaleLowerCase();return t.includes("home")?"home":t.includes("parent")?"arrow_upward":t.includes("project")?"folder_open":null}function E(){return(this.value.label||"?").substr(0,1)}function D(t){this.$emit("select",{event:t,value:this.value})}function I(){return{}}var R={name:"StandardPathButton",props:{value:{type:Object,default:function(){}}},data:I,computed:{icon:N,firstCharacter:E},methods:{onClick:D}},T=R,U=(n("9539"),Object(f["a"])(T,P,A,!1,null,"aae35e30",null)),W=U.exports;function J(){return this.showFolders&&(this.location||{}).children||[]}function M(){var t=this;if(!this.showFiles)return[];var e=(this.location||{}).current_files||[];return this.extensions&&0!==this.extensions.length?e.filter((function(e){return t.extensions.filter((function(t){return e.name.endsWith(t)})).length>0})):e}function z(t){this.$emit("select",t)}function G(){return{folder:"..",directory:this.location.parent_directory,spec:null,parent:null}}function K(){this.$refs.scroller.scrollTop=0}var V={name:"Browser",components:{StandardPathButton:W,Folder:h,ProjectFolder:y,File:O},props:{location:{type:Object,default:function(){}},showFiles:{type:Boolean,default:!0},showFolders:{type:Boolean,default:!0},extraLocations:{type:Array,default:function(){return[]}},extensions:{type:Array,default:function(){return[]}},projectSelection:{type:Boolean,default:!1}},computed:{parentFolder:G,foldersToShow:J,filesToShow:M},watch:{location:K},methods:{onSelect:z}},q=V,H=(n("766f"),Object(f["a"])(q,o,i,!1,null,"30d102f5",null));e["a"]=H.exports},"28a5":function(t,e,n){"use strict";var o=n("aae3"),i=n("cb7c"),r=n("ebd6"),a=n("0390"),s=n("9def"),l=n("5f1b"),c=n("520a"),u=n("79e5"),d=Math.min,f=[].push,v="split",h="length",p="lastIndex",_=4294967295,m=!u((function(){RegExp(_,"y")}));n("214f")("split",2,(function(t,e,n,u){var b;return b="c"=="abbc"[v](/(b)*/)[1]||4!="test"[v](/(?:)/,-1)[h]||2!="ab"[v](/(?:ab)*/)[h]||4!="."[v](/(.?)(.?)/)[h]||"."[v](/()()/)[h]>1||""[v](/.?/)[h]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!o(t))return n.call(i,t,e);var r,a,s,l=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,v=void 0===e?_:e>>>0,m=new RegExp(t.source,u+"g");while(r=c.call(m,i)){if(a=m[p],a>d&&(l.push(i.slice(d,r.index)),r[h]>1&&r.index<i[h]&&f.apply(l,r.slice(1)),s=r[0][h],d=a,l[h]>=v))break;m[p]===r.index&&m[p]++}return d===i[h]?!s&&m.test("")||l.push(""):l.push(i.slice(d)),l[h]>v?l.slice(0,v):l}:"0"[v](void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,o){var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i,o):b.call(String(i),n,o)},function(t,e){var o=u(b,t,this,e,b!==n);if(o.done)return o.value;var c=i(t),f=String(this),v=r(c,RegExp),h=c.unicode,p=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(m?"y":"g"),g=new v(m?c:"^(?:"+c.source+")",p),C=void 0===e?_:e>>>0;if(0===C)return[];if(0===f.length)return null===l(g,f)?[f]:[];var w=0,y=0,k=[];while(y<f.length){g.lastIndex=m?y:0;var S,$=l(g,m?f:f.slice(y));if(null===$||(S=d(s(g.lastIndex+(m?0:y)),f.length))===w)y=a(f,y,h);else{if(k.push(f.slice(w,y)),k.length===C)return k;for(var j=1;j<=$.length-1;j++)if(k.push($[j]),k.length===C)return k;y=w=S}}return k.push(f.slice(w)),k}]}))},"2fdb":function(t,e,n){"use strict";var o=n("5ca1"),i=n("d2c8"),r="includes";o(o.P+o.F*n("5147")(r),"String",{includes:function(t){return!!~i(this,t,r).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"34c8":function(t,e,n){"use strict";var o=n("4c22"),i=n.n(o);i.a},"4c22":function(t,e,n){},5989:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"AlertDialog"},[n("div",{staticClass:"AlertDialog__title"},[t._v(t._s(t.title))]),t.message&&t.message.length>0?n("div",{staticClass:"AlertDialog__message"},[t._v(t._s(t.message))]):t._e(),n("div",{staticClass:"AlertDialog__slot"},[t._t("default")],2),n("div",{staticClass:"AlertDialog__buttonBox"},[n("div",{staticClass:"AlertDialog__spacer"}),n("button",{staticClass:"AlertDialog__button button is-small is-success",on:{click:t.onClick}},[t._v(t._s(t.okLabel))])])])},i=[];function r(){return{}}function a(){this.$emit("ok")}var s={name:"AlertDialog",props:{title:{type:String,default:"Alert!"},message:{type:String,default:null},okLabel:{type:String,default:"OK"}},data:r,methods:{onClick:a}},l=s,c=(n("bc71"),n("2877")),u=Object(c["a"])(l,o,i,!1,null,"5ad52046",null);e["a"]=u.exports},"611c":function(t,e,n){"use strict";var o=n("07b9"),i=n.n(o);i.a},6762:function(t,e,n){"use strict";var o=n("5ca1"),i=n("c366")(!0);o(o.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"766f":function(t,e,n){"use strict";var o=n("dd66"),i=n.n(o);i.a},"78a5":function(t,e,n){},8371:function(t,e,n){},"8ce8":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Notebook"},[t.showIframe?n("iframe",{staticClass:"Notebook__frame",attrs:{src:t.notebookUrl}}):t._e()])},i=[],r=(n("7f7f"),n("3fa3")),a=n("a620"),s=n("ba6a");function l(){var t=this.$store.getters,e=t.project,n=t.view;return null!==(this.viewer?n:e)}function c(){return this.viewer?r["a"].getViewUrl():r["a"].getUrl()}function u(){var t=this.$store.getters.project||{},e=t.steps;return(e||[]).reduce((function(t,e){var n=e.status.selected?e.name:null;return t||n}),null)}function d(t,e){null!==t&&t!==e&&r["a"].scrollToStep(t)}function f(){return{isLoading:!0}}function v(){return this.isLoading=!0,this.$store.commit("isNotebookLoading",!0),this.$emit("loaded",{value:!1,source:"Notebook.refresh"}),r["a"].refresh(),this.onLoaded()}function h(){var t=r["a"].getCauldronObject();return t&&t.on&&t.on.ready&&!0}function p(){var t=r["a"].getCauldronObject()||{};return t.RUNNING||!1}function _(){var t=this;return r["a"].onLoaded().then((function(){t.isLoading=!1,t.$store.commit("isNotebookLoading",!1),t.$emit("loaded",{value:!0,source:"Notebook.onLoaded"}),s["a"].markStatusDirty()})).catch((function(){return null}))}function m(){var t=this;this.isLoading=!0,this.$store.commit("isNotebookLoading",!0),this.$emit("loaded",{value:!1,source:"Notebook.mounted"}),this.onLoaded().then((function(){a["a"].$on("refresh-notebook",t.refresh)})).catch((function(){return null}))}var b={name:"Notebook",props:{viewer:{type:Boolean,default:!1}},data:f,computed:{notebookUrl:c,selectedStep:u,isInitialized:h,isRunning:p,showIframe:l},watch:{selectedStep:d},mounted:m,methods:{onLoaded:_,refresh:v}},g=b,C=(n("611c"),n("2877")),w=Object(C["a"])(g,o,i,!1,null,"69378d50",null);e["a"]=w.exports},9539:function(t,e,n){"use strict";var o=n("ad59"),i=n.n(o);i.a},a620:function(t,e,n){"use strict";var o=n("2b0e"),i=new o["a"];function r(t,e){return i.$on(t,e)}function a(t,e){return i.$off(t,e)}function s(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return i.$emit.apply(i,[t].concat(n))}e["a"]={$on:r,$off:a,$emit:s}},ad59:function(t,e,n){},aef6:function(t,e,n){"use strict";var o=n("5ca1"),i=n("9def"),r=n("d2c8"),a="endsWith",s=""[a];o(o.P+o.F*n("5147")(a),"String",{endsWith:function(t){var e=r(this,t,a),n=arguments.length>1?arguments[1]:void 0,o=i(e.length),l=void 0===n?o:Math.min(i(n),o),c=String(t);return s?s.call(e,c,l):e.slice(l-c.length,l)===c}})},bc71:function(t,e,n){"use strict";var o=n("8371"),i=n.n(o);i.a},dd66:function(t,e,n){},fd3f:function(t,e,n){}}]);
//# sourceMappingURL=create~project.3c27727e.js.map