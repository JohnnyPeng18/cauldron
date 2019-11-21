(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["create"],{"02d4":function(e,t,a){"use strict";var s=a("f21e"),i=a.n(s);i.a},"03e7":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Viewer"},[a("view-menu-strip",{on:{close:e.closeViewer}}),e.isClosing?e._e():a("notebook",{attrs:{viewer:!0},on:{loaded:e.onNotebookLoaded}}),e.loadingMessage?a("loader",{attrs:{message:e.loadingMessage}}):e._e()],1)},i=[],o=a("ba6a"),r=a("ea2f"),n=a("8ce8"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ViewMenuStrip"},[a("div",{staticClass:"ViewMenuStrip__button",on:{click:e.onCloseView}},[a("i",{staticClass:"material-icons md-18"},[e._v("close")])])])},l=[];function d(e){this.$emit("close",{event:e})}var u={name:"ViewMenuStrip",methods:{onCloseView:d}},m=u,_=(a("02d4"),a("2877")),v=Object(_["a"])(m,c,l,!1,null,"65f2767b",null),f=v.exports;function h(){return this.isClosing=!0,document.title="Cauldron",this.loadingMessage="Closing Viewer",o["a"].execute("view close").then((function(){return o["a"].markStatusDirty()}))}function p(e){this.loadingMessage=e.value?null:"Refreshing notebook"}function g(){return{loadingMessage:null,isClosing:!1}}function C(){var e=this;return this.loadingMessage="Establishing Viewer state.",o["a"].updateStatus().then((function(){var t=e.$store.getters.view;document.title=t.configs.title,e.loadingMessage="Initializing Viewer display"}))}var b={name:"Viewer",components:{ViewMenuStrip:f,Notebook:n["a"],Loader:r["a"]},data:g,mounted:C,methods:{closeViewer:h,onNotebookLoaded:p}},y=b,k=(a("5632"),Object(_["a"])(y,s,i,!1,null,"3a13b812",null));t["default"]=k.exports},"156b":function(e,t,a){},"1d19":function(e,t,a){},"1d2d":function(e,t,a){},2429:function(e,t,a){"use strict";var s=a("1d19"),i=a.n(s);i.a},4293:function(e,t,a){"use strict";var s=a("156b"),i=a.n(s);i.a},5353:function(e,t,a){"use strict";var s=a("95fd"),i=a.n(s);i.a},5632:function(e,t,a){"use strict";var s=a("1d2d"),i=a.n(s);i.a},"5df3":function(e,t,a){"use strict";var s=a("02f4")(!0);a("01f9")(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,a=this._i;return a>=t.length?{value:void 0,done:!0}:(e=s(t,a),this._i+=e.length,{value:e,done:!1})}))},"8d29":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Open"},[a("div",{staticClass:"Open__browser"},[e._m(0),a("browser",{staticClass:"Open__browserBox",attrs:{location:e.location,extensions:[".cauldron"],"project-selection":!0},on:{select:e.onSelectFolder}})],1),e.availableProjects?a("div",{staticClass:"Open__known"},e._l(e.availableProjects,(function(t,s){return a("div",{staticClass:"Open__goup"},[a("project-item-group",{attrs:{root:s,items:t},on:{open:e.onProjectClick}})],1)})),0):e._e(),e.loadingMessage?a("loader",{attrs:{message:e.loadingMessage}}):e._e()],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Open__titleBox"},[a("div",{staticClass:"Open__title"},[e._v("Open Existing Notebook")])])}],o=(a("ac6a"),a("5df3"),a("7f7f"),a("ea2f")),r=a("ba6a"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ProjectItemGroup"},[a("div",{staticClass:"ProjectItemGroup__header",on:{click:e.onClick}},[a("i",{staticClass:"ProjectItemGroup__icon material-icons md-14"},[e._v(e._s(e.groupIcon))]),a("div",{staticClass:"ProjectItemGroup__label"},[e._v(e._s(e.root))])]),e.collapsed?e._e():a("div",{staticClass:"ProjectItemGroup__children"},e._l(e.items,(function(t){return a("project-item",{attrs:{item:t,root:e.root},on:{click:e.onProjectClick}})})),1)])},c=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ProjectItem",on:{click:e.openProject}},[e._m(0),a("div",{staticClass:"ProjectItem__box"},[a("div",{staticClass:"ProjectItem__title"},[e._v(e._s(e.item.name))]),a("div",{staticClass:"ProjectItem__path"},[e._v(e._s(e.path))]),a("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"top"},expression:"{ placement: 'top' }"}],staticClass:"ProjectItem__date",attrs:{content:e.item.modified.display}},[e._v(e._s(e.item.modified.elapsed))])])])},d=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ProjectItem__leftBox"},[a("i",{staticClass:"ProjectItem__icon material-icons md-18"},[e._v("folder_open")])])}];function u(e){return this.$emit("click",{event:e,item:this.item})}function m(){var e=this.item.directory.absolute;return e.slice(this.root.length)}var _={name:"ProjectItem",props:{item:{type:Object,default:function(){}},root:{type:String,default:""}},computed:{path:m},methods:{openProject:u}},v=_,f=(a("4293"),a("2877")),h=Object(f["a"])(v,l,d,!1,null,"596ad3a2",null),p=h.exports;function g(){var e=this.collapsed;this.collapsed=!e,this.$emit("collapse",{root:this.root,collapsed:this.collapsed})}function C(e){this.$emit("open",e)}function b(){return this.collapsed?"keyboard_arrow_up":"keyboard_arrow_down"}function y(){return{collapsed:!1}}var k={name:"ProjectItemGroup",components:{ProjectItem:p},props:{root:{type:String,default:""},items:{type:Array,default:function(){return[]}}},data:y,computed:{groupIcon:b},methods:{onClick:g,onProjectClick:C}},w=k,x=(a("2429"),Object(f["a"])(w,n,c,!1,null,"457e028e",null)),j=x.exports,P=a("25a8");function A(e){var t=this,a=e.item.name,s=e.item.directory.absolute;return this.loadingMessage='Loading "'.concat(a,'" Project'),r["a"].execute('open "'.concat(s,'"')).then((function(e){r["a"].markStatusDirty(),e.data.success||(t.loadingMessage=null)}))}function M(e){var t=this;return"project"===e.type?this.onProjectClick({item:e.value.spec}):"file"===e.type?(this.loadingMessage="Loading view file",r["a"].execute('view open "'.concat(e.value.path,'"')).then((function(){t.$store.commit("isStatusDirty",!0)}))):(this.loadingMessage="Opening selected directory",r["a"].execute('cd "'.concat(e.value.directory,'"')).then((function(e){t.loadingMessage=null,e.data.success&&(t.location=e.data.data)})))}function D(){return{loadingMessage:"Fetching available projects",availableProjects:{},location:{}}}function N(){var e=this,t=r["a"].execute("list all").then((function(t){e.availableProjects=t.data.data.spec_groups})),a=r["a"].execute("ls").then((function(t){e.location=t.data.data}));return Promise.all([t,a]).then((function(){e.loadingMessage=null}))}var L={name:"Open",components:{Browser:P["a"],ProjectItemGroup:j,Loader:o["a"]},data:D,mounted:N,methods:{onProjectClick:A,onSelectFolder:M}},S=L,I=(a("5353"),Object(f["a"])(S,s,i,!1,null,"1c3f88b5",null));t["default"]=I.exports},"95fd":function(e,t,a){},"9ce5":function(e,t,a){"use strict";var s=a("f3d1"),i=a.n(s);i.a},f21e:function(e,t,a){},f28d:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Create"},[a("div",{staticClass:"Create__form"},[e._m(0),a("div",{staticClass:"Create__textInput"},[a("input",{directives:[{name:"model",rawName:"v-model:value",value:e.name,expression:"name",arg:"value"}],staticClass:"Create__name input is-small",attrs:{placeholder:"Notebook Name",type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),a("div",{staticClass:"Create__info"},[e._v("This will also be the name of the folder created for the notebook.")])]),a("div",{staticClass:"Create__checkbox"},[a("label",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model:value",value:e.autoName,expression:"autoName",arg:"value"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.autoName)?e._i(e.autoName,null)>-1:e.autoName},on:{change:function(t){var a=e.autoName,s=t.target,i=!!s.checked;if(Array.isArray(a)){var o=null,r=e._i(a,o);s.checked?r<0&&(e.autoName=a.concat([o])):r>-1&&(e.autoName=a.slice(0,r).concat(a.slice(r+1)))}else e.autoName=i}}}),a("span",{staticClass:"Create__checkboxLabel"},[e._v("Automatic Step Prefixes")])]),a("div",{staticClass:"Create__info"},[e._v('Adds a prefix of "S##-" to steps to reflect their order within the project.\nAutomatically updates prefixes when step ordering changes to reflect the changed\nordering.')])]),a("div",{staticClass:"Create__checkbox"},[a("label",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model:value",value:e.addLibraryDirectory,expression:"addLibraryDirectory",arg:"value"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.addLibraryDirectory)?e._i(e.addLibraryDirectory,null)>-1:e.addLibraryDirectory},on:{change:function(t){var a=e.addLibraryDirectory,s=t.target,i=!!s.checked;if(Array.isArray(a)){var o=null,r=e._i(a,o);s.checked?r<0&&(e.addLibraryDirectory=a.concat([o])):r>-1&&(e.addLibraryDirectory=a.slice(0,r).concat(a.slice(r+1)))}else e.addLibraryDirectory=i}}}),a("span",{staticClass:"Create__checkboxLabel"},[e._v('Create Library "libs" Folder')])]),a("div",{staticClass:"Create__info"},[e._v('Adds a "libs" folder for local library development within your notebook.')])]),a("div",{staticClass:"Create__checkbox"},[a("label",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model:value",value:e.addAssetsDirectory,expression:"addAssetsDirectory",arg:"value"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.addAssetsDirectory)?e._i(e.addAssetsDirectory,null)>-1:e.addAssetsDirectory},on:{change:function(t){var a=e.addAssetsDirectory,s=t.target,i=!!s.checked;if(Array.isArray(a)){var o=null,r=e._i(a,o);s.checked?r<0&&(e.addAssetsDirectory=a.concat([o])):r>-1&&(e.addAssetsDirectory=a.slice(0,r).concat(a.slice(r+1)))}else e.addAssetsDirectory=i}}}),a("span",{staticClass:"Create__checkboxLabel"},[e._v("Create Assets Folder")])]),a("div",{staticClass:"Create__info"},[e._v('Create an "assets" folder to store images and other media that need to be included\nin the displayed results.')])]),a("div",{staticClass:"Create__buttonBox"},[a("button",{staticClass:"button is-small is-success",attrs:{disabled:!e.allowCreate},on:{click:e.onCreate}},[e._v("Create Project")])])]),a("div",{staticClass:"Create__locationBox"},[e._m(1),a("browser",{attrs:{location:e.location,"show-files":!1},on:{select:e.onSelectFolder}})],1),e.alterMessage?a("alert-dialog",{attrs:{message:e.alertMessage.message,title:e.alertMessage.title,"ok-label":e.alertMessage.buttonLabel},on:{ok:e.onDismissAlert}}):e._e()],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Create__titleBox"},[a("div",{staticClass:"Create__title"},[e._v("Create New Notebook")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Create__locationHeaderBox"},[a("div",{staticClass:"Create__locationTitle"},[e._v("Parent Directory")]),a("div",{staticClass:"Create__locationSubtitle"},[e._v("The parent directory in which your notebook folder will be created.")])])}],o=(a("7f7f"),a("25a8")),r=a("5989"),n=a("ba6a");function c(){this.alertMessage=null}function l(e){var t=this,a=e.value.spec;return a?(this.alertMessage={title:"Not Allowed",message:"Cannot create notebooks within other notebook folders."},Promise.resolve()):(this.loadingMessage="Opening selected directory",n["a"].execute('cd "'.concat(e.value.directory,'"')).then((function(e){t.loadingMessage=null,e.data.success&&(t.location=e.data.data)})))}function d(){var e=["create",'"'.concat(this.name,'"'),'"'.concat(this.location.current_directory,'"'),'--title="'.concat(this.name,'"'),this.autoName?null:"--no-naming-scheme",this.addLibraryDirectory?"--libs=libs":null,this.addAssetsDirectory?"--assets=assets":null],t=e.filter((function(e){return e})).join(" ");return console.log("Creating project",t),this.loadingMessage='Creating your "'.concat(this.name,'" project'),n["a"].execute(t).then((function(){return n["a"].markStatusDirty()}))}function u(){return{loadingMessage:"Synchronizing with kernel",location:{},name:null,autoName:!0,addLibraryDirectory:!1,addAssetsDirectory:!1,alertMessage:null}}function m(){var e=this;return n["a"].execute("ls").then((function(t){e.location=t.data.data,e.loadingMessage=null}))}function _(){return this.name&&this.name.length>0}var v={name:"Create",components:{AlertDialog:r["a"],Browser:o["a"]},data:u,computed:{allowCreate:_},mounted:m,methods:{onSelectFolder:l,onCreate:d,onDismissAlert:c}},f=v,h=(a("9ce5"),a("2877")),p=Object(h["a"])(f,s,i,!1,null,"750328cf",null);t["default"]=p.exports},f3d1:function(e,t,a){}}]);
//# sourceMappingURL=create.1a08fe47.js.map